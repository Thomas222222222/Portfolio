import React from "react";
import portfolioData from "@/app/data/home.json";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos</h2>
          <div className="prose prose-lg text-gray-600">
            {portfolioData.about.map((description, index) => (
              <p key={index} className="mb-4">
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
