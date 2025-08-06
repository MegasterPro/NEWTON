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
      ) : (
        <div className="main-content">
          <h1>Bienvenue sur mon site !</h1>
          <p>Contenu visible après le chargement</p>
        </div>
      )}
    </div>
  );     };
    
    export default Home;