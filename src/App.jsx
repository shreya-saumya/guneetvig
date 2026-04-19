import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlitterEffect from './components/ui/GlitterEffect';
import BookingForm from './components/BookingForm';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const openBooking = (service = '') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedService('');
  };

  return (
    <div className="relative">
      <GlitterEffect />
      <Navbar onBookClick={() => openBooking()} />
      <main>
        <Hero onBookClick={() => openBooking()} />
        <About />
        <Services onBookClick={(service) => openBooking(service)} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <BookAppointment onBookClick={() => openBooking()} />
        <Contact />
      </main>
      <Footer />

      <AnimatePresence>
        {isBookingOpen && (
          <BookingForm 
            isOpen={isBookingOpen} 
            onClose={closeBooking} 
            initialService={selectedService}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
