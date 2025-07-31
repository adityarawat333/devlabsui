import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ClientLogos from './components/ClientLogos';
import Services from './components/Services';
// import HotTopics from './components/HotTopics';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LiveChat from './components/LiveChat';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <ClientLogos />
      <Services />
      {/* <HotTopics /> */}
      <CaseStudies />
      <About />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Contact />
      <Footer />
      <LiveChat />
    </div>
  );
}

export default App;