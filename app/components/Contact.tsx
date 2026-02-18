import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Contact() {
    return (
        <section id="contact" className="py-8 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">{portfolioData.contact.title}</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    {portfolioData.contact.description}
                </p>
                <a
                    href={portfolioData.socials.email}
                    className="inline-block px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 mb-12"
                >
                    Me contacter
                </a>
            </div>
        </section>
    );
}
