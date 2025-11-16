import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Process from "./components/Process";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Process />
      <ContactCTA />
      <Footer />
    </main>
  );
}