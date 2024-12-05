import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Slides from './pages/Slides';
import PreviewPage from './pages/PreviewPage';
import Footer from './homecomonents/Footer';
import Header from './homecomonents/Header'; // Import the Header component

const App = () => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-black flex flex-col min-h-screen overflow-x-hidden max-w-[100vw]">
      {/* Header */}
      <header className="bg-gradient-to-br from-gray-900 text-green-200">
        <Header />
      </header>

      {/* Router for page content */}
      <Router>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/slides" element={<Slides />} />
            <Route path="/preview" element={<PreviewPage />} />
          </Routes>
        </div>
      </Router>

      {/* Footer */}
      <footer className="p-1 md:p-2 bg-gradient-to-br from-gray-900 to-black text-green-200">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
