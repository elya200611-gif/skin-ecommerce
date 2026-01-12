import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ShoppingBag, Search, X, Star, Eye, Zap, ArrowRight, Play, Camera, Filter } from 'lucide-react';
import { PRODUCTS, EXHIBITIONS, REVIEWS } from './constants';
import { Product, ExhibitionType } from './types';
import { getMoodAnalysis, getCrossSellSuggestion } from './services/geminiService';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

// --- Helper Components ---

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'acid' | 'filter' | 'filterActive';
  className?: string;
}

const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const baseStyle = "uppercase font-mono text-sm tracking-widest px-6 py-3 transition-all duration-300 relative overflow-hidden group";
  const variants = {
    primary: "bg-skin-black text-white hover:bg-skin-acid hover:text-skin-black border border-skin-black",
    outline: "bg-transparent text-skin-black border border-skin-black hover:bg-skin-black hover:text-white",
    acid: "bg-skin-acid text-skin-black hover:bg-black hover:text-skin-acid border border-skin-acid",
    filter: "bg-white text-gray-500 border border-gray-300 hover:border-skin-black hover:text-skin-black text-xs px-3 py-2",
    filterActive: "bg-skin-black text-white border border-skin-black text-xs px-3 py-2"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">{children}</span>
    </button>
  );
};

interface GlitchTextProps {
  text: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const GlitchText = ({ text, as = 'span', className = '' }: GlitchTextProps) => {
  const Component = as;
  return (
    <Component className={`relative inline-block hover:animate-glitch ${className}`} data-text={text}>
      {text}
      <span className="absolute top-0 left-0 -ml-0.5 text-skin-acid opacity-0 hover:opacity-100 animate-pulse">{text}</span>
      <span className="absolute top-0 left-0 ml-0.5 text-red-500 opacity-0 hover:opacity-100 animate-pulse delay-75">{text}</span>
    </Component>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeExhibition, setActiveExhibition] = useState<ExhibitionType | 'ALL'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [aiAdvice, setAiAdvice] = useState<{ text: string, vibe: string } | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<string[]>([]);
  const [showAR, setShowAR] = useState(false);
  const [stylistNote, setStylistNote] = useState('');

  // Review Filters
  const [heightFilter, setHeightFilter] = useState<'ALL' | '155-165 см' | '170-175 см' | '180+ см'>('ALL');

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsAiLoading(true);
    const result = await getMoodAnalysis(searchQuery);
    setIsAiLoading(false);

    const [advice, vibeRaw] = result.split('|');
    const vibe = vibeRaw?.trim() || 'Soft';

    setAiAdvice({ text: advice, vibe });
  };

  const openProduct = (p: Product) => {
    setSelectedProduct(p);
    setShowAR(false);
    setStylistNote('');
    // Trigger lazy load of AI stylist
    getCrossSellSuggestion(p.title).then(setStylistNote);
  };

  const addToManifest = (id: string) => {
    setCart([...cart, id]);
    alert("АРТЕФАКТ ДОБАВЛЕН В МАНИФЕСТ");
  };

  const filteredProducts = activeExhibition === 'ALL'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.exhibition === activeExhibition);

  const filteredReviews = heightFilter === 'ALL'
    ? REVIEWS
    : REVIEWS.filter(r => r.height === heightFilter);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-skin-base font-sans selection:bg-skin-acid selection:text-black">

        {/* Header Component */}
        <Header
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          cart={cart}
          handleSearchSubmit={handleSearchSubmit}
          aiAdvice={aiAdvice}
          isAiLoading={isAiLoading}
          setActiveExhibition={setActiveExhibition}
        />

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                featuredProducts={PRODUCTS}
                openProduct={openProduct}
                filteredReviews={filteredReviews}
                heightFilter={heightFilter}
                setHeightFilter={setHeightFilter}
                Button={Button}
              />
            }
          />
          <Route
            path="/catalog"
            element={
              <CatalogPage
                activeExhibition={activeExhibition}
                setActiveExhibition={setActiveExhibition}
                filteredProducts={filteredProducts}
                openProduct={openProduct}
                exhibitions={EXHIBITIONS}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* --- Product Modal (Artifact Manifest) --- */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4">
            <div className="absolute inset-0 bg-skin-black/90 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>

            <div className="relative bg-skin-base w-full max-w-6xl h-full md:h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl animate-in zoom-in-95 duration-300 border border-skin-acid">
              <button className="absolute top-4 right-4 z-50 text-black hover:text-skin-acid bg-white/50 p-2 rounded-full" onClick={() => setSelectedProduct(null)}>
                <X size={24} />
              </button>

              {/* Left: Media */}
              <div className="w-full md:w-1/2 bg-gray-200 relative group">
                {!showAR ? (
                  <>
                    <img src={selectedProduct.imageStatic} className="w-full h-full object-cover" alt="Artifact" />
                    <button
                      onClick={() => setShowAR(true)}
                      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white text-white px-6 py-3 font-mono text-sm uppercase flex items-center gap-2 hover:bg-skin-acid hover:text-black hover:border-skin-acid transition-all"
                    >
                      <Camera size={16} />
                      See Your New Self
                    </button>
                  </>
                ) : (
                  <div className="w-full h-full bg-black relative overflow-hidden flex items-center justify-center">
                    {/* Mock AR View */}
                    <img src={selectedProduct.imageStatic} className="w-full h-full object-cover opacity-50 absolute" alt="AR Base" />
                    <div className="absolute inset-0 bg-green-500/10 mix-blend-color-dodge animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 border-2 border-skin-acid rounded-full animate-spin-slow mx-auto mb-4 border-t-transparent"></div>
                        <p className="text-skin-acid font-mono text-xs blinking-cursor">SCANNING AURA...</p>
                        <p className="text-white font-serif italic text-lg mt-2">Примерка Альтер-Эго</p>
                      </div>
                    </div>
                    <button onClick={() => setShowAR(false)} className="absolute bottom-8 text-white underline font-mono text-xs">Вернуться к реальности</button>
                  </div>
                )}
              </div>

              {/* Right: Details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col relative bg-skin-base">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-xs text-gray-500 uppercase tracking-widest">{selectedProduct.exhibition} / {selectedProduct.id.padStart(3, '0')}</span>
                  <span className="font-mono text-xl">{selectedProduct.price.toLocaleString()} ₽</span>
                </div>

                <h2 className="text-5xl md:text-6xl font-serif font-bold italic mb-6 leading-none">
                  <GlitchText text={selectedProduct.title} />
                </h2>

                <div className="space-y-8 mb-auto">
                  <div>
                    <h4 className="font-bold text-xs uppercase mb-2 border-b border-black inline-block">Manifesto</h4>
                    <p className="font-serif text-lg leading-relaxed text-gray-800">
                      {selectedProduct.manifest}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <span className="block text-gray-500">Fabric Soul</span>
                      <span className="uppercase">{selectedProduct.fabric}</span>
                    </div>
                    <div>
                      <span className="block text-gray-500">Mood</span>
                      <span className="uppercase">{selectedProduct.mood}</span>
                    </div>
                  </div>

                  {/* AI Stylist Block */}
                  <div className="bg-skin-black/5 p-6 border border-dashed border-gray-400 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-1">
                      <Zap size={12} className="text-skin-acid" />
                    </div>
                    <h4 className="font-mono text-[10px] uppercase text-gray-500 mb-2">AI STYLIST SUGGESTION</h4>
                    {stylistNote ? (
                      <p className="font-serif italic text-sm">{stylistNote}</p>
                    ) : (
                      <div className="h-4 w-2/3 bg-gray-300 animate-pulse rounded"></div>
                    )}
                  </div>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="flex gap-2 mb-4">
                    {['S', 'M', 'L', 'XL'].map(size => (
                      <button key={size} className="w-12 h-12 border border-black flex items-center justify-center font-mono hover:bg-black hover:text-white transition-colors focus:bg-skin-acid focus:text-black">
                        {size}
                      </button>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full text-lg" onClick={() => addToManifest(selectedProduct.id)}>
                    MANIFEST NOW
                  </Button>

                  <div className="text-center">
                    <span className="text-[10px] font-mono uppercase text-gray-500">
                      Free shipping to your local gallery • 14 days for reflection
                    </span>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-300 flex justify-between items-center">
                    <span className="font-mono text-xs">Split / Pay in 4</span>
                    <span className="font-serif italic text-sm text-gray-600">"Manifest now, pay later"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </BrowserRouter>
  );
}