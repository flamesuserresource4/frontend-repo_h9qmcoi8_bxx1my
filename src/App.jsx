import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deals from './components/Deals';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Deals />
      <Footer />
    </div>
  );
}

export default App;
