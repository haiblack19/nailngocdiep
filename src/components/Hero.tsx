import { motion } from "motion/react";
import { Sparkles, Calendar, Image as ImageIcon, ArrowDown } from "lucide-react";
import heroImage from "../assets/images/hero_nail_art_luxury_1780848329826.png";

interface HeroProps {
  onBookClick: () => void;
}

export default function Hero({ onBookClick }: HeroProps) {

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen w-full flex items-center justify-center overflow-hidden bg-brand-bg-primary pt-24 pb-12 px-6 md:px-12"
    >
      {/* Background Image Container with parallax & subtle zoom */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.95 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          {/* Subtle blurred overlay for soft lighting */}
          <div className="absolute inset-0 bg-radial-[circle_at_center,_transparent_40%,_#FFFDFB_100%] z-1" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-primary via-brand-bg-primary/50 to-transparent z-1" />
          <div className="absolute inset-0 bg-brand-bg-secondary/40 mix-blend-color-burn z-1" />
          
          <img
            src={heroImage}
            alt="Ngọc Diệp Luxury Nails"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[0.98]"
          />
        </motion.div>
      </div>

      {/* Decorative Brand Floating Circles for luxury editorial atmosphere */}
      <div className="absolute top-24 left-10 md:left-24 w-72 h-72 rounded-full bg-brand-rose filter blur-[90px] opacity-40 mix-blend-multiply animate-float-slow pointer-events-none" />
      <div className="absolute bottom-20 right-10 md:right-24 w-96 h-96 rounded-full bg-brand-accent filter blur-[100px] opacity-15 mix-blend-screen animate-float-reverse pointer-events-none" />

      {/* Hero Content Centerpiece */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-bg-secondary/80 backdrop-blur-md border border-brand-accent/20 mb-6 md:mb-8"
        >
          <Sparkles className="h-3 w-3 text-brand-gold animate-pulse" />
          <span className="text-[10px] md:text-xs uppercase font-medium tracking-[0.2em] text-brand-gold">
            PREMIUM NAIL STUDIO
          </span>
        </motion.div>

        {/* Headline Centerpiece */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-display font-light text-brand-text-primary tracking-[-0.04em] leading-[1.1] text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-4xl"
        >
          Nâng tầm vẻ đẹp <br />
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent/80 italic">
            trong từng chi tiết.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="text-brand-text-secondary font-sans font-light text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mt-6 leading-relaxed px-4 md:px-0"
        >
          Chăm sóc móng chuyên nghiệp, thiết kế nail nghệ thuật và không gian thư giãn chuẩn spa dành riêng cho bạn.
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto px-6 sm:px-0"
        >
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] hover:text-brand-text-primary text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-500 shadow-md flex items-center justify-center gap-2.5 hover:shadow-lg group cursor-pointer"
          >
            <Calendar className="h-4 w-4 transition-transform group-hover:rotate-12" />
            Book Appointment
          </button>
          
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 bg-[#FFFDFB]/75 hover:bg-[#FFFDFB] backdrop-blur-md border border-brand-accent/30 text-brand-text-primary hover:border-brand-gold text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-500 flex items-center justify-center gap-2.5 shadow-sm"
          >
            <ImageIcon className="h-4 w-4 text-brand-accent" />
            View Gallery
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ delay: 1, duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-brand-text-secondary/70 font-light">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 text-brand-accent animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
