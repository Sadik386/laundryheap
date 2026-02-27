import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import MapSection from './components/MapSection'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Booking from './pages/Booking'
import Success from './pages/Success'
import Fail from './pages/Fail'
import { HowItWorksPage, PricesPage, AboutUsPage, BusinessPage, CitiesPage, ServicePage } from './pages/Pages'

const LandingPage = () => (
  <>
    <Navbar />
    <Hero />
    <HowItWorks />
    <Pricing />
    <MapSection />
    <Testimonials />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/pricing" element={<PricesPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment/success" element={<Success />} />
        <Route path="/payment/fail" element={<Fail />} />
        <Route path="/cities" element={<CitiesPage />} />
        <Route path="/services/dry-cleaning" element={<ServicePage serviceName="Dry Cleaning" description="Professional cleaning for your delicate garments." />} />
        <Route path="/services/laundry" element={<ServicePage serviceName="Wash & Fold" description="Clean, fresh laundry delivered to your door." />} />
        <Route path="/services/ironing" element={<ServicePage serviceName="Ironing Only" description="Perfectly pressed clothes without the hassle." />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
