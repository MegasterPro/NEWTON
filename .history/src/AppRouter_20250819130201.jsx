import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import App from "./App";   // ✅ Corrigé
import Apropos from "./pages/Apropos";
import Header from './components/Header';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
