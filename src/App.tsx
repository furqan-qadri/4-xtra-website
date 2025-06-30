import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import Mission from "./components/Homepage/Mission";
import TechShowcase from "./components/Homepage/TechShowcase";
import Product from "./components/Homepage/Product";
import CompanyTicker from "./components/Homepage/CompanyTicker";
// import EngineOverview from "./components/Homepage/EngineOverview";
// import ExtremeEvents from "./components/Homepage/ExtremeEvents";
// import PredictionDemo from "./components/Homepage/PredictionDemo";
import Team from "./components/Homepage/Team";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CompanyTicker />
      <Mission />
      <TechShowcase />
      <Product />
      <Team />
      {/* <EngineOverview /> */}
      {/* <ExtremeEvents/> */}
      <Footer />
    </div>
  );
}

export default App;
