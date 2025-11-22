import { useEffect, useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { injectStyles } from './styles/injectStyles';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Features from './pages/Features/Features';
import Location from './pages/Location/Location';
import Plantation from './pages/Plantation/Plantation';
import Gallery from './pages/Gallery/Gallery';
import WhyInvest from './pages/WhyInvest/WhyInvest';
import Contact from './pages/Contact/Contact';

// App-specific minimal reset styles
const appStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Rubik', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    overflow-x: hidden;
  }

  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  main {
    flex: 1;
  }

  .app-loading {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .app-loading-spinner {
    width: 50px;
    height: 50px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #6ab978;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Inject app-specific reset styles
    injectStyles(appStyles, 'app-styles');

    // Small delay to ensure styles are applied
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="app-loading">
        <div className="app-loading-spinner"></div>
      </div>
    );
  }

  return (
    <LanguageProvider>
      <div className="app">
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

