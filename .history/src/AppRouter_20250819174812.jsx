import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Apropos from "./pages/Apropos";
import Parent from "./pages/parent";
import Program from "./pages/program";

export default function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          
        </Routes>
    </Router>
  );
}
