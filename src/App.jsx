import Header from "./components/Header";
import About from "./sections/About";
import EmbraceChange from "./sections/EmbraceChange";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import HowCanIHelp from "./sections/HowCanIHelp";
import HowItWorks from "./sections/HowItWorks";
import SoundFamiliar from "./sections/SoundFamiliar";
import YouAreHereBecause from "./sections/YouAreHereBecause";

function App() {
  return (
    <div className="">
      <Header />

      <Hero />
      <YouAreHereBecause />
      <SoundFamiliar />
      <About />
      <HowCanIHelp />
      <HowItWorks />
      <EmbraceChange />
      <Footer />
    </div>
  );
}

export default App;
