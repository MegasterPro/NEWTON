import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Apropos from "./pages/Apropos";
import parent from "./pages/Apropos";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/parent" element={<parent />} />
        </Routes>
    </Router>
  );
}
