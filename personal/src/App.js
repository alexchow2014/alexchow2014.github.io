import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import * as React from "react";

// Pages
import WebPage from './pages/mainpage';
import CareerPage from './pages/careers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebPage />} />
        <Route path="/career/" element={<CareerPage />} />
        <Route path="*" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
