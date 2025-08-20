import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import App from "./App";   // ✅ Corrigé
import Apropos from "./pages/Apropos";
import Contact from "./pages/Contact";
import Inscriptions from "./pages/Inscriptions";
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
          <Route path="/etudiants" element={<Etudiants />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
