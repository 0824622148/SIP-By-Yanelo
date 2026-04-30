import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import WhatsAppFAB from './components/ui/WhatsAppFAB'
import Home from './pages/Home'
import HowItWorks from './pages/HowItWorks'
import Pricing from './pages/Pricing'
import Impact from './pages/Impact'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function PageTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    const titles = {
      '/': 'SIP by Yanelo — Clean Water Delivered',
      '/how-it-works': 'How It Works — SIP by Yanelo',
      '/plans': 'Plans & Pricing — SIP by Yanelo',
      '/impact': 'Our Impact — SIP by Yanelo',
      '/contact': 'Order Water — SIP by Yanelo',
    }
    document.title = titles[pathname] || 'SIP by Yanelo'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/SIP-By-Yanelo">
      <ScrollToTop />
      <PageTitle />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/plans" element={<Pricing />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFAB />
    </BrowserRouter>
  )
}
