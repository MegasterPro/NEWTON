import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";

// Pages
import App from "./App";   // ✅ Corrigé
import Apropos from "./pages/Apropos";

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
