import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Games } from "../components/Games";
import { About } from "../components/About";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary-dark">
      <Navbar />
      <Hero />
      <Games />
      <About />
      <Contact />
    </div>
  );
};

export default Index;