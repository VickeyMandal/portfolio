import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="h-screen flex flex-col justify-center">
        <Navbar/>
        <Hero />
      </div>
    </div>
  );
}

export default App;
