import './App.css';
import { HashRouter, BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import * as React from "react";

// Pages
import WebPage from './pages/mainpage';
import CareerPage from './pages/careers';

function App() {
  return (
    <React.StrictMode>
        <HashRouter basename = "/">
          <Routes>
            <Route exact path="/" element={<WebPage />} />
            <Route path="/career/" element={<CareerPage />} />
          </Routes>
        </HashRouter>
    </React.StrictMode>
    // <BrowserRouter basename="/">
    //   <Routes>
    //     <Route path="/" element={<WebPage />} />
    //     <Route path="/career/" element={<CareerPage />} />
    //     <Route path="*" element={<CareerPage />} />
    //   </Routes>
    // </BrowserRouter>
  );

}

export default App;
