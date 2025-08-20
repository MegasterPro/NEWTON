import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import App from "./";   // ✅ Corrigé
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Inscriptions from "./pages/Inscriptions";
import Galerie from "./pages/Galerie";
import Actualites from "./pages/Actualites";
import Enseignants from "./pages/Enseignants";
import Etudiants from "./pages/Etudiants";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inscriptions" element={<Inscriptions />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/enseignants" element={<Enseignants />} />
          <Route path="/etudiants" element={<Etudiants />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
