import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Watermark from './components/Watermark/Watermark';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Location from './pages/Location/Location';
import Plantation from './pages/Plantation/Plantation';
import Gallery from './pages/Gallery/Gallery';
import WhyInvest from './pages/WhyInvest/WhyInvest';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Watermark />
        <Header />
        <main>
          <Home />
          <Features />
          <Location />
          <Plantation />
          <Gallery />
          <WhyInvest />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;

