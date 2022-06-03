import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar2";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";
import ReactGA from "react-ga";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";

ReactGA.initialize("G-0F5RBD5QG0");
ReactGA.pageview(window.location.pathname + window.location.search);
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
