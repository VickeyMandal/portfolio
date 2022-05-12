import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="h-screen">
      <Navbar />
      <div className=" grig grid-cols-12 lg:mx-10 mx-5">
        <Hero />
      </div>
      </div>
    </div>
  );
}

export default App;
