import Header from "./assets/Header";
import Herosection from "./assets/Herosection";
import About from "./assets/About";
import Services from "./assets/Services";
import Skills from "./assets/Skills";
import Projects from "./assets/Projects";
import Testimonials from "./assets/Testimonials";
import Contacts from "./assets/Contacts";
import Footer from "./assets/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Header />
      <Herosection />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;

