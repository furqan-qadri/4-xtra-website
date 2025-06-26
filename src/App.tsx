import Navbar from "./components/Navbar";
import Hero from "./components/Homepage/Hero";
// import PredictionDemo from "./components/Homepage/PredictionDemo";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <div className="container mx-auto px-6 lg:px-8 pb-20">
          {/* <PredictionDemo isVisible={true} /> */}
        </div>
    </>
  );
}


export default App;
