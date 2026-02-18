import React from 'react';
import { portfolioData } from '../data/portfolio';

export default function About() {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos</h2>
                    <div className="prose prose-lg text-gray-600">
                        <p className="mb-4">
                            {portfolioData.bio}
                        </p>
                        <p>
                            Je crée des solutions numériques qui combinent esthétique et performance.
                            Mon approche est centrée sur l&apos;utilisateur, en m&apos;assurant que chaque pixel a sa place.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
