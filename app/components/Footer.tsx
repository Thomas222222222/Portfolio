import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function Footer() {
    return (
        <footer className="py-8 bg-gray-900 border-t border-gray-800 text-center">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href={portfolioData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    GitHub
                </a>
                <a
                    href={portfolioData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    LinkedIn
                </a>
                <a
                    href={portfolioData.socials.email}
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    Email
                </a>
            </div>
            <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} {portfolioData.name}. Tous droits réservés.
            </p>
        </footer>
    );
}
