import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import Mission from "./components/Homepage/Mission";
import EngineOverview from "./components/Homepage/EngineOverview";
import ExtremeEvents from "./components/Homepage/ExtremeEvents";
// import PredictionDemo from "./components/Homepage/PredictionDemo";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Mission />
      {/* <EngineOverview /> */}
      {/* <ExtremeEvents/> */}
      <div className="container mx-auto px-6 lg:px-8 pb-20">
          {/* <PredictionDemo isVisible={true} /> */}
        </div>
    </>
  );
}


export default App;
