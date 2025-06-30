import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import Mission from "./components/Homepage/Mission";
import TechShowcase from "./components/Homepage/TechShowcase";
import Product from "./components/Homepage/Product";
// import EngineOverview from "./components/Homepage/EngineOverview";
// import ExtremeEvents from "./components/Homepage/ExtremeEvents";
// import PredictionDemo from "./components/Homepage/PredictionDemo";
import Team from "./components/Homepage/Team";
import PredictionDemo from "./components/Homepage/PredictionDemo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero/>
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
