    // /src/pages/Home.jsx
    import React from 'react';
    import '../../css/app.css';
    import Header from '@/components/Header';
    import About from '@/components/About';
    import Hero from '@/components/Hero';
    import Splide from '@/components/Splide';
    import Footer from '@/components/Footer';
    import Read from '@/components/Read';
    
    const Home = () => {

        const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement de la page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2s

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="preloader">
          <div className="spinner" />
          <p>Chargement...</p>
        </div>
      ) :  (<div>
        <div className="relative min-h-screen font-sans">
            <Header />
            <Hero />
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
)}
    </div>
  );     };
    
    export default Home;