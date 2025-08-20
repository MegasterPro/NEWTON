import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import App from "./App";   // ✅ Corrigé

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
