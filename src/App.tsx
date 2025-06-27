import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import Mission from "./components/Homepage/Mission";
import TechShowcase from "./components/Homepage/TechShowcase";
import Product from "./components/Homepage/Product";
// import EngineOverview from "./components/Homepage/EngineOverview";
// import ExtremeEvents from "./components/Homepage/ExtremeEvents";
// import PredictionDemo from "./components/Homepage/PredictionDemo";
import Team from "./components/Homepage/Team";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Mission />
      <TechShowcase />
      <Product />
      <Team />
      {/* <EngineOverview /> */}
      {/* <ExtremeEvents/> */}
      <div className="container mx-auto px-6 lg:px-8 pb-20">
          {/* <PredictionDemo isVisible={true} /> */}
        </div>
    </>
  );
}

export default App;
