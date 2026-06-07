import { useState } from "react";
import { motion } from "motion/react";
import { ServiceItem } from "./types";
import { TESTIMONIALS } from "./data";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import SpecialShowcase from "./components/SpecialShowcase";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";
import { Star, Quote, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<ServiceItem | null>(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  // Function to handle choosing a service and opening modal automatically
  const handleServiceSelect = (service: ServiceItem) => {
    setPreSelectedService(service);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="bg-brand-bg-primary text-brand-text-primary min-h-screen font-sans selection:bg-brand-rose selection:text-brand-text-primary antialiased overflow-x-hidden">
      
      {/* 1. Header component */}
      <Header onBookClick={() => setIsBookingModalOpen(true)} />

      {/* Main pages wrapper */}
      <main id="spa-layout-container">
        
        {/* 2. Hero Section */}
        <Hero onBookClick={() => setIsBookingModalOpen(true)} />

        {/* 3. About Section */}
        <About />

        {/* 4. Services Section */}
        <Services onServiceSelect={handleServiceSelect} />

        {/* 5. Gallery Section */}
        <Gallery />

        {/* Special Showcase Section */}
        <SpecialShowcase onBookClick={() => setIsBookingModalOpen(true)} />

        {/* 6. Luxury Testimonials Carousel section */}
        <section
          id="testimonials-section"
          className="py-24 bg-brand-bg-primary border-t border-brand-rose/20 relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-brand-rose filter blur-[70px] opacity-40 pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-rose/70 border border-brand-accent/20 mb-6">
              <Sparkles className="h-3.5 w-3.5 text-brand-gold animate-spin" />
              <span className="text-[9px] tracking-[0.2em] font-medium uppercase text-brand-gold">
                KHÁCH HÀNG THÂN THIẾT
              </span>
            </div>

            <h2 className="font-display font-light text-3xl sm:text-4xl text-brand-text-primary tracking-tight">
              Lời Khen Từ <span className="font-semibold text-brand-gold italic">Những Quý Cô</span>
            </h2>

            {/* Testimonial Active Block */}
            <div className="mt-12 max-w-2xl mx-auto min-h-[220px] flex flex-col justify-center">
              <Quote className="h-10 w-10 text-brand-accent/30 mx-auto mb-6" />
              
              <p className="text-sm sm:text-base md:text-lg font-light text-brand-text-secondary leading-relaxed px-4">
                "{TESTIMONIALS[activeReviewIndex].content}"
              </p>
              
              <div className="mt-6 flex items-center justify-center gap-1.5 text-brand-gold">
                {[...Array(TESTIMONIALS[activeReviewIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand-gold stroke-none" />
                ))}
              </div>

              <div className="mt-3">
                <span className="text-sm font-semibold text-brand-text-primary block">
                  {TESTIMONIALS[activeReviewIndex].author}
                </span>
                <span className="text-[10px] text-brand-text-secondary/70 uppercase tracking-widest block mt-0.5 font-mono">
                  Quý khách ghé thăm ngày • {TESTIMONIALS[activeReviewIndex].date}
                </span>
              </div>
            </div>

            {/* Slider Dots indicators */}
            <div className="flex items-center justify-center gap-3 mt-8">
              {TESTIMONIALS.map((review, idx) => (
                <button
                  key={review.id}
                  onClick={() => setActiveReviewIndex(idx)}
                  className={`h-2 transition-all duration-500 rounded-full cursor-pointer ${
                    activeReviewIndex === idx ? "w-8 bg-brand-accent" : "w-2 bg-brand-rose"
                  }`}
                  aria-label={`Đi tới đánh giá ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 7. Booking & Inquiry CTA section with reservation modal */}
        <BookingCTA
          isModalOpen={isBookingModalOpen}
          setIsModalOpen={setIsBookingModalOpen}
          preSelectedService={preSelectedService}
          setPreSelectedService={setPreSelectedService}
        />

      </main>

      {/* 8. Luxury Brand Footer */}
      <Footer />
      
    </div>
  );
}
