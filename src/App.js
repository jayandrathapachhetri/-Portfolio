// import react from "router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
// import Header from "./components/Header";
// import "bootstrap/dist/css/bootstrap.min.css";
// import {Navbar, Nav} from 'react-router-dom'
// import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
