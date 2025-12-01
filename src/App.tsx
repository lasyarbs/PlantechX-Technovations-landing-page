import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import VisionMission from './components/VisionMission';
import ProblemSolution from './components/ProblemSolution';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { DemoModalProvider } from './context/DemoModalContext';

function App() {
  return (
    <DemoModalProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
        <About />
        <Features />
        <VisionMission />
        <ProblemSolution />
        <FAQ />
        <CTA />
        <Footer />
        <DemoModal />
      </div>
    </DemoModalProvider>
  );
}

export default App;
