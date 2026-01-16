import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-brand-dark text-white selection:bg-brand-orange selection:text-white">
            <Navbar />
            <Hero />
            <InfoSection />
            <Gallery />
            <Registration />
            <Footer />
        </div>
    );
}

export default App;
