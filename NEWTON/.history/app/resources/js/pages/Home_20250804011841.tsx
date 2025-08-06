    // /src/pages/Home.jsx
import React from 'react';
import { useEffect, useState } from "react";
import '../../css/app.css';
import Header from '@/components/Header';
import About from '@/components/about';
import Hero from '@/components/Hero';
import Customizer from '@/components/Customizer';
import Splide from '@/components/Splide';
import Footer from '@/components/Footer';
import Read from '@/components/read';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement de la page
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2s

    return () => clearTimeout(timer);
  }, []);
  return "cc"
};

export default Home;