import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import HomeInspection from './pages/services/HomeInspection';
import FourPoint from './pages/services/FourPoint';
import WindMitigation from './pages/services/WindMitigation';
import MoldAssessment from './pages/services/MoldAssessment';
import SewerScope from './pages/services/SewerScope';
import Infrared from './pages/services/Infrared';
import WhyUs from './pages/WhyUs';
import Testimonials from './pages/Testimonials';
import Pricing from './pages/Pricing';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/home-inspection" element={<HomeInspection />} />
          <Route path="/services/four-point" element={<FourPoint />} />
          <Route path="/services/wind-mitigation" element={<WindMitigation />} />
          <Route path="/services/mold-assessment" element={<MoldAssessment />} />
          <Route path="/services/sewer-scope" element={<SewerScope />} />
          <Route path="/services/infrared" element={<Infrared />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
