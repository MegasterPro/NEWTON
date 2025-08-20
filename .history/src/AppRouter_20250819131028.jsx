import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<App />} />
          <Route path="/" element={<App />} />
        </Routes>
    </Router>
  );
}
