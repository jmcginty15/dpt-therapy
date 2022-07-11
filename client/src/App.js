import { Route, Routes, Navigate } from 'react-router-dom';
import { useScrollToTop } from './utils';
import NavBar from './components/nav/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Staff from './components/about/Staff';
import GetStarted from './components/getStarted/GetStarted';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import Location from './components/location/Location';
import Disclosure from './components/disclosure/Disclosure';
import BackToTop from './components/BackToTop';
import Resources from './components/footer/Resources';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  useScrollToTop();

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        {/* <Route exact path="/about/:staffId" element={<Staff />} /> */}
        <Route exact path="/get-started" element={<GetStarted />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/patient-experiences" element={<Testimonials />} />
        <Route exact path="/location" element={<Location />} />
        <Route exact path="/nondiscrimination-disclosure-statement" element={<Disclosure />} />
        <Route path={'*'} element={<Navigate to="/" />} />
      </Routes>
      <BackToTop />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
