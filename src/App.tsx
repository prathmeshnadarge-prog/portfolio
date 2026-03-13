import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Publications from './components/Publications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Publications />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
