import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
import EngineOverview from "./components/Homepage/EngineOverview";
// import PredictionDemo from "./components/Homepage/PredictionDemo";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <EngineOverview />
      <div className="container mx-auto px-6 lg:px-8 pb-20">
          {/* <PredictionDemo isVisible={true} /> */}
        </div>
    </>
  );
}


export default App;
