import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from "./composants/Hero/Hero";
import Services from './composants/Services/Services';
import Cosmetic from './composants/Cosmetic/Cosmetic';
import Offres from './composants/Offres/Offres';
import Navbar from './composants/NavBar/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="nos-services">
          <Services />
        </section>
        <section id="cosmetics">
          <Cosmetic />
        </section>
        <section id="nos-offres">
          <Offres />
        </section>
        {/* <section id="contact">
          <Contact />
        </section> */}
      </main>
    </Router>
  );
};

export default App;
