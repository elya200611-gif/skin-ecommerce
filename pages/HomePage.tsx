import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface HomePageProps {
    featuredProducts: Product[];
    openProduct: (product: Product) => void;
    filteredReviews: Array<{
        id: number;
        user: string;
        image: string;
        comment: string;
        height: string;
    }>;
    heightFilter: 'ALL' | '155-165 см' | '170-175 см' | '180+ см';
    setHeightFilter: (filter: 'ALL' | '155-165 см' | '170-175 см' | '180+ см') => void;
    Button: React.ComponentType<any>;
}

export default function HomePage({
    featuredProducts,
    openProduct,
    filteredReviews,
    heightFilter,
    setHeightFilter,
    Button
}: HomePageProps) {
    return (
        <div>
            {/* --- Hero Section --- */}
            <section className="pt-20 min-h-[85vh] flex flex-col relative overflow-hidden border-b border-skin-black">
                {/* Background "Video" Loop (Simulated) */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://picsum.photos/id/403/1920/1080"
                        className="w-full h-full object-cover opacity-80 mix-blend-multiply grayscale hover:grayscale-0 transition-all duration-[2s]"
                        alt="Hero Texture"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-skin-base via-transparent to-transparent" />
                </div>

                <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center p-6">
                    <div className="max-w-5xl mix-blend-difference text-white">
                        <h2 className="text-[10vw] md:text-[8vw] leading-[0.9] font-bold tracking-tighter">
                            <span className="font-serif italic font-light block">Твоя вторая</span>
                            <span className="font-sans block text-skin-acid">КОЖА.</span>
                            <span className="font-mono block text-[5vw] md:text-[4vw] mt-4 leading-tight">СОБЕРИ ОБРАЗ, КОТОРЫЙ<br />ГОВОРИТ ЗА ТЕБЯ</span>
                        </h2>
                    </div>

                    <div className="mt-12 flex flex-col items-center gap-8">
                        <Link to="/catalog">
                            <Button variant="acid" className="text-lg px-8 py-4 animate-float">
                                Найти свой стиль
                            </Button>
                        </Link>

                        <div className="flex items-center gap-4">
                            <div className="h-px w-12 bg-white/50"></div>
                            <p className="font-mono text-xs text-white/80 uppercase tracking-widest">
                                Soft • Alt • Goblincore • Streetwear
                            </p>
                            <div className="h-px w-12 bg-white/50"></div>
                        </div>
                    </div>
                </div>

                {/* Marquee */}
                <div className="absolute bottom-0 w-full bg-skin-acid border-t border-skin-black py-2 overflow-hidden whitespace-nowrap">
                    <div className="animate-marquee inline-block font-mono text-sm font-bold tracking-widest">
                        DIGITAL GALLERY OF SELF /// FIND YOUR VIBE /// SOFT AESTHETIC /// DARK METAL /// STREETWEAR &amp; SWAG /// GOBLINCORE ///
                        DIGITAL GALLERY OF SELF /// FIND YOUR VIBE /// SOFT AESTHETIC /// DARK METAL /// STREETWEAR &amp; SWAG /// GOBLINCORE ///
                    </div>
                </div>
            </section>

            {/* --- Featured Products Preview --- */}
            <section className="py-16 bg-white border-b border-skin-black">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-6xl font-serif italic mb-4">
                            Новая <span className="text-skin-acid bg-black px-2 not-italic font-sans uppercase">Коллекция</span>
                        </h3>
                        <p className="font-mono text-sm text-gray-500">
                            Первый взгляд на твою новую идентичность
                        </p>
                    </div>

                    {/* Featured Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 border-l border-skin-black">
                        {featuredProducts.slice(0, 8).map((product) => (
                            <div
                                key={product.id}
                                className="group relative border-r border-b border-skin-black min-h-[500px] flex flex-col justify-between cursor-pointer overflow-hidden bg-white hover:bg-black hover:text-white transition-colors duration-500"
                                onClick={() => openProduct(product)}
                            >
                                {/* Image Container */}
                                <div className="h-[400px] w-full relative overflow-hidden">
                                    <img
                                        src={product.imageStatic}
                                        alt={product.title}
                                        className="w-full h-full object-cover transition-opacity duration-300 absolute inset-0 group-hover:opacity-0"
                                    />
                                    <img
                                        src={product.imageHover}
                                        alt={product.title}
                                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                                    />

                                    {/* Mood Tag */}
                                    <div className="absolute top-4 left-4 border border-black group-hover:border-white px-2 py-1 text-[10px] font-mono uppercase bg-white/50 backdrop-blur-md group-hover:bg-black/50 group-hover:text-white">
                                        {product.mood}
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-4 flex flex-col gap-2 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <h3 className="font-serif text-xl italic group-hover:text-skin-acid">{product.title}</h3>
                                        <span className="font-mono text-sm">{product.price.toLocaleString()} ₽</span>
                                    </div>
                                    <p className="text-xs font-mono text-gray-500 group-hover:text-gray-400 line-clamp-1">
                                        {product.description}
                                    </p>
                                    <div className="w-full h-px bg-black group-hover:bg-skin-acid my-2 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                        <span className="text-[10px] uppercase tracking-widest">View Artifact</span>
                                        <ArrowRight className="w-4 h-4 text-skin-acid" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* "ПЕРЕЙТИ В КАТАЛОГ" Button */}
                    <div className="flex justify-center mt-16">
                        <Link
                            to="/catalog"
                            className="font-mono uppercase tracking-widest px-8 py-3 border-2 border-skin-black bg-transparent hover:bg-skin-acid hover:text-skin-black transition-all duration-300 inline-block"
                        >
                            ПЕРЕЙТИ В КАТАЛОГ
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- REVIEWS / SOCIAL PROOF SECTION --- */}
            <section className="py-24 bg-skin-base border-t border-skin-black relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-300 pb-6 gap-6">
                        <div>
                            <h3 className="text-3xl md:text-5xl font-serif italic mb-2">
                                Как это сидит на <span className="text-skin-acid bg-black px-2 not-italic font-sans uppercase">реальных</span> людях
                            </h3>
                            <p className="font-mono text-sm text-gray-500 mt-2">
                                Никакого фотошопа. Только честные фиты.
                            </p>
                        </div>

                        {/* Height Filters */}
                        <div className="flex flex-wrap gap-2 items-center">
                            <span className="font-mono text-xs uppercase mr-2 text-gray-400">Показать на мой рост:</span>
                            {(['ALL', '155-165 см', '170-175 см', '180+ см'] as const).map((filter) => (
                                <Button
                                    key={filter}
                                    variant={heightFilter === filter ? 'filterActive' : 'filter'}
                                    onClick={() => setHeightFilter(filter)}
                                >
                                    {filter === 'ALL' ? 'Все' : filter}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Review Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredReviews.length > 0 ? (
                            filteredReviews.map((review) => (
                                <div key={review.id} className="group relative aspect-[3/4] overflow-hidden bg-gray-200 border border-gray-300">
                                    <img
                                        src={review.image}
                                        alt={review.user}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                                        <p className="text-skin-acid font-bold text-xs mb-1">{review.user}</p>
                                        <p className="text-white text-[10px] font-mono leading-tight mb-2">"{review.comment}"</p>
                                        <div className="inline-block bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                                            <span className="text-white text-[9px] font-mono">{review.height}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-12 text-center text-gray-400 font-mono text-sm">
                                В этой категории пока нет фото. Будьте первым!
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* --- Personalization Feed (Mirror) --- */}
            <section className="py-24 px-6 bg-skin-black text-skin-base border-t border-skin-acid overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-skin-acid rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>

                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
                        <h3 className="text-4xl md:text-6xl font-serif italic">
                            Зеркало <span className="text-skin-acid not-italic font-sans">Тебя</span>
                        </h3>
                        <p className="font-mono text-xs md:text-sm text-gray-400 mt-4 md:mt-0 max-w-md text-right">
                            Лента, собранная алгоритмами на основе твоих вибраций. Мы знаем, что ты скрываешь.
                        </p>
                    </div>

                    <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar snap-x">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="min-w-[300px] h-[400px] bg-gray-900 border border-gray-800 relative flex items-center justify-center snap-center group">
                                <span className="text-gray-700 font-mono text-xs rotate-90 absolute right-0">GENERATING IDENTITY...</span>
                                <div className="w-full h-full absolute inset-0 bg-[url('https://picsum.photos/300/400?grayscale')] opacity-30 bg-cover mix-blend-overlay"></div>
                                <Button variant="outline" className="border-gray-600 text-gray-400 group-hover:border-skin-acid group-hover:text-skin-acid">
                                    UNLOCK
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Footer --- */}
            <footer className="bg-skin-base border-t border-skin-black pt-16 pb-8">
                <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-6xl font-serif font-bold tracking-tighter mb-6">skin</h2>
                        <p className="font-mono text-xs uppercase max-w-sm">
                            Мы не продаем одежду. Мы продаем возможность быть другим.
                            <br /><br />
                            © 2024 SKIN ARCHIVE.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold border-b border-black pb-2 mb-4 uppercase text-sm">Навигация</h4>
                        <ul className="space-y-2 font-mono text-sm">
                            <li><a href="#" className="hover:text-skin-acid hover:bg-black px-1 transition-colors">Manifesto</a></li>
                            <li><Link to="/catalog" className="hover:text-skin-acid hover:bg-black px-1 transition-colors">Catalog</Link></li>
                            <li><a href="#" className="hover:text-skin-acid hover:bg-black px-1 transition-colors">Archive</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold border-b border-black pb-2 mb-4 uppercase text-sm">Социальные Лаборатории</h4>
                        <ul className="space-y-2 font-mono text-sm">
                            <li><a href="#" className="hover:line-through">Instagram</a></li>
                            <li><a href="#" className="hover:line-through">Telegram</a></li>
                            <li><a href="#" className="hover:line-through">TikTok</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
