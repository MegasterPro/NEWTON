import { useState, useEffect } from 'react'
import Another from './components/Another'
import Club from './components/Club'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Trophee from './components/Trophee'
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simule un temps de chargement (2.5 sec)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <Header />
      <Hero />
      <Trophee />
      <Another />
      <Club />
      <Footer />
    </>
  )
}

export default App
