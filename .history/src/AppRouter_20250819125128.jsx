import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import App from "./";   // ✅ Corrigé

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
          <Route path="/etudiants" element={<Etudiants />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
