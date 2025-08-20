import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import App from "./";   // ✅ Corrigé

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
