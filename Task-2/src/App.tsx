import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { Hero } from './components/Hero';
import { Impact } from './components/Impact';
import { Features } from './components/Features';
import { About } from './components/About';
import { PlatformCTA } from './components/PlatformCTA';
import { Products } from './components/Products';
import { Supporters } from './components/Supporters';
import { Footer } from './components/Footer';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
  // Initialize the intersection observer for animations
  useIntersectionObserver();

  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <TopBar />
        <Navbar />
      </header>

      <main>
        <Hero />
        <Impact />
        <Features />
        <About />
        <PlatformCTA />
        <Products />
        <Supporters />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
