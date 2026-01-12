import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Search, Menu, X } from 'lucide-react';

// Define navigation items locally to avoid import dependency loops
const NAV_ITEMS = [
    { label: 'Soft', id: 'soft' },
    { label: 'Alt / Metal', id: 'alt' },
    { label: 'Streetwear', id: 'street' },
    { label: 'Goblincore', id: 'goblin' },
    { label: 'Gyaru', id: 'gyaru' },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-skin-base/90 backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/" className="text-3xl font-serif italic font-bold tracking-tighter text-skin-dark">
                            skin
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {NAV_ITEMS.map((item) => (
                            <a
                                key={item.id}
                                href="#" // You can replace this with proper routing later
                                className="text-skin-dark font-mono text-sm uppercase hover:text-skin-acid transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <a href="#" className="text-red-500 font-mono text-sm uppercase font-bold">SALE</a>
                    </nav>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="relative group">
                            <input
                                type="text"
                                placeholder="Найти свой вайб"
                                className="bg-transparent border-b border-skin-dark font-mono text-xs focus:outline-none w-32 focus:w-48 transition-all"
                            />
                            <Search className="w-4 h-4 absolute right-0 top-0 text-skin-dark" />
                        </div>
                        <button className="text-skin-dark hover:text-skin-acid transition-colors">
                            <ShoppingBag className="w-6 h-6" />
                        </button>
                        <button className="text-skin-dark hover:text-skin-acid transition-colors">
                            <User className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Burger Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-skin-dark p-2 hover:bg-gray-100 rounded-none transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-skin-base overflow-y-auto pb-20 border-t border-gray-200">
                    <div className="px-4 pt-8 pb-4 space-y-6">

                        {/* Mobile Search */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Поиск..."
                                className="w-full bg-white p-3 font-mono text-sm border border-black focus:outline-none focus:border-skin-acid"
                            />
                            <Search className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
                        </div>

                        {/* Mobile Nav Links */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="font-serif italic text-2xl mb-2 text-gray-400">Стили</h3>
                            {NAV_ITEMS.map((item) => (
                                <a
                                    key={item.id}
                                    href="#"
                                    className="text-xl font-mono uppercase text-skin-dark py-2 border-b border-gray-200 hover:text-skin-acid hover:pl-2 transition-all"
                                    onClick={() => setIsOpen(false)} // Close menu on click
                                >
                                    {item.label}
                                </a>
                            ))}
                            <a href="#" className="text-xl font-mono uppercase text-red-500 font-bold py-2 mt-4">SALE</a>
                        </div>

                        {/* Mobile Account Links */}
                        <div className="pt-8 border-t border-black">
                            <button className="flex items-center space-x-4 w-full py-3 text-skin-dark hover:text-skin-acid">
                                <User className="w-6 h-6" />
                                <span className="font-mono uppercase">Профиль</span>
                            </button>
                            <button className="flex items-center space-x-4 w-full py-3 text-skin-dark hover:text-skin-acid">
                                <ShoppingBag className="w-6 h-6" />
                                <span className="font-mono uppercase">Корзина (0)</span>
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
};
