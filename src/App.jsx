import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar />
      <Header />
      <About />
      <Experience />
      <Portfolio />
      <Contact /> */}

      <Router>
        <Navbar />
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        {/* <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <About />
                <Experience />
                <Portfolio />
                <Contact />
              </>
            }
          /> */}
        {/* <Route path="#about" element={<About />} />
          <Route path="#experience" element={<Experience />} />
          <Route path="#portfolio" element={<Portfolio />} />
          <Route path="#contact" element={<Contact />} /> */}
        {/* </Routes> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;
