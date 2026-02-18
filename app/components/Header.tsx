'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
                    Portfolio.
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <Link href="#about" className="hover:text-gray-900 transition-colors">À propos</Link>
                    <Link href="#projects" className="hover:text-gray-900 transition-colors">Projets</Link>
                    <Link href="#contact" className="hover:text-gray-900 transition-colors">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
