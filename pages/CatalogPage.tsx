import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { Category, Product, ExhibitionType } from '../types';

interface CatalogPageProps {
    activeExhibition: ExhibitionType | 'ALL';
    setActiveExhibition: (exhibition: ExhibitionType | 'ALL') => void;
    filteredProducts: Product[];
    openProduct: (product: Product) => void;
    exhibitions: ExhibitionType[];
}

export const CatalogPage = ({
    activeExhibition,
    setActiveExhibition,
    filteredProducts,
    openProduct,
    exhibitions
}: CatalogPageProps) => {
    // 1. Define categories locally to avoid import errors
    const categories: { id: Category; label: string }[] = [
        { id: 'all', label: 'Все' },
        { id: 'soft', label: 'Soft' },
        { id: 'alt', label: 'Alt / Metal' },
        { id: 'street', label: 'Streetwear' },
        { id: 'goblin', label: 'Goblincore' },
        { id: 'gyaru', label: 'Gyaru' },
    ];

    // 2. State for active filter
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    // 3. Filter logic (Case-insensitive safety check)
    const displayProducts = filteredProducts.filter((product) => {
        if (activeCategory === 'all') return true;
        return product.category.toLowerCase() === activeCategory.toLowerCase();
    });

    return (
        <div className="min-h-screen bg-skin-base text-skin-dark pt-24 px-4 pb-12">

            {/* Header / Title */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl md:text-6xl font-serif mb-4">КАТАЛОГ</h1>
                <p className="font-mono text-skin-muted uppercase tracking-widest text-sm">
                    Выбери свою новую оболочку
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`
              px-6 py-2 border font-mono text-sm uppercase transition-all duration-300
              ${activeCategory === cat.id
                                ? 'bg-skin-acid text-skin-dark border-skin-acid'
                                : 'bg-transparent text-skin-muted border-skin-muted hover:border-skin-dark hover:text-skin-dark'}
            `}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {displayProducts.length > 0 ? (
                    displayProducts.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-200">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Category Tag */}
                                <div className="absolute top-2 left-2 bg-skin-acid text-black text-xs font-bold px-2 py-1 uppercase">
                                    {product.mood || product.category}
                                </div>
                            </div>

                            <div className="flex justify-between items-start font-mono">
                                <div>
                                    <h3 className="text-lg font-bold uppercase">{product.name}</h3>
                                    <p className="text-sm text-skin-muted mt-1">{product.description}</p>
                                </div>
                                <span className="text-lg">{product.price.toLocaleString()} ₽</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 font-mono text-skin-muted">
                        <p>В этой категории пока пусто... или это скрытый уровень?</p>
                        <button
                            onClick={() => setActiveCategory('all')}
                            className="mt-4 underline hover:text-skin-acid"
                        >
                            Показать всё
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CatalogPage;
