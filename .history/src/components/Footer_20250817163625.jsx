import React from "react";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 px-10 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* A propos */}
        <div>
          <h2 className="text-xl font-bold mb-4">À propos</h2>
          <p className="text-sm leading-relaxed">
            Le Lycée Malick Sy est un établissement d’excellence qui favorise
            l’éducation, la discipline, l’engagement et la productivité. 
            Nous formons les leaders de demain.
          </p>
        </div>

        {/* Clubs */}
        <div>
          <h2 className="text-xl font-bold mb-4">Clubs & Activités</h2>
          <ul className="space-y-2 text-sm">
            <li>Club de Science</li>
            <li>Club de Littérature</li>
            <li>Club d'Arts</li>
            <li>Club de Sport</li>
            <li>Club Informatique</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>Email : contact@lyceemalicksy.sn</li>
            <li>Tél : +221 77 123 45 67</li>
            <li>Adresse : Thiès, Sénégal</li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h2 className="text-xl font-bold mb-4">Suivez-nous</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400"><Facebook /></a>
            <a href="#" className="hover:text-sky-400"><Twitter /></a>
            <a href="#" className="hover:text-pink-400"><Instagram /></a>
            <a href="#" className="hover:text-red-500"><Youtube /></a>
          </div>
        </div>

      </div>

      {/* Ligne de copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Lycée Malick Sy – Tous droits réservés
      </div>
    </footer>
  );
}
