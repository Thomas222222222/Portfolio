"use client";

import React from "react";
import portfolioData from "@/app/data/home.json";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-6 animate-fade-in-up">
          {portfolioData.name}
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
          {portfolioData.role}
        </p>
        <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto animate-fade-in-up delay-200">
          {portfolioData.bio}
        </p>
        <div className="flex gap-4 justify-center animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-transform active:scale-95"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-100 text-gray-900 rounded-full font-medium hover:bg-gray-200 transition-transform active:scale-95"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
