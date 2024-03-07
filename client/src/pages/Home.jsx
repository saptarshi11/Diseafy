import React from "react";
import Contact from "../components/Contact";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeCircles from "../components/HomeCircles";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <HomeCircles />
      <Contact />
      <Footer />
    </>
  );
};
function App() {
  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        {/* Topbar content */}
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
        {/* Navbar content */}
      </nav>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        {/* Header content */}
      </div>
      {/* Header End */}
    </div>
  );
}


export default Home;
