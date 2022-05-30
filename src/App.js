import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";

function App() {
  return (
    <div className="App">
      <div className="h-screen flex flex-col justify-center">
        <Navbar />
        <Hero />
      </div>
      <div className="h-screen">
        {/* <Timeline /> */}
        <Timeline2/>
      </div>
    </div>
  );
}

export default App;
