import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";
import ReactGA from "react-ga"

ReactGA.initialize("G-0F5RBD5QG0");
ReactGA.pageview(window.location.pathname + window.location.search);
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
