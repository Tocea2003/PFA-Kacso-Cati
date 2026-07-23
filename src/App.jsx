import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Statistici from './components/Statistici.jsx'
import Servicii from './components/Servicii.jsx'
import Experienta from './components/Experienta.jsx'
import Despre from './components/Despre.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollTop from './components/ScrollTop.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistici />
        <Servicii />
        <Experienta />
        <Despre />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  )
}
