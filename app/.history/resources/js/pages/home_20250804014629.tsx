    // /src/pages/Home.jsx
    import React from 'react';
    import '../../css/app.css';
    import Header from '@/components/Header';
    import About from '@/components/About';
    import Hero from '@/components/Hero';
    import Customizer from '@/components/Customizer';
    import Splide from '@/components/S';
    import Footer from '@/components/Footer';
    import Read from '@/components/read';
    
    const Home = () => {
      return (<div>
            <div className="relative min-h-screen font-sans">
                <Header />
                <Hero />
                <Customizer />
            </div>
            <div className="about">
                <About /><Splide />
            </div>
            <div className="venir">
                <Read />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )};
    
    export default Home;