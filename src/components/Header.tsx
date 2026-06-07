import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

interface HeaderProps {
  onBookClick: () => void;
}

export default function Header({ onBookClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trang chủ", href: "#hero" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Bộ sưu tập", href: "#gallery" },
  ];

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-brand-bg-primary/90 backdrop-blur-xl border-b border-brand-rose/45 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            id="brand-logo-link"
            className="group flex items-center gap-2"
          >
            <span className="font-display text-xl md:text-2xl font-light tracking-[0.15em] text-brand-text-primary">
              NGỌC DIỆP
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-brand-accent transition-all duration-300 group-hover:scale-150 group-hover:bg-brand-gold" />
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-light tracking-[0.06em] text-brand-text-secondary hover:text-brand-text-primary transition-colors duration-300 relative py-1 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Booking CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onBookClick}
              id="header-booking-btn"
              className="px-6 py-2.5 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] text-xs font-medium tracking-[0.1em] uppercase transition-all duration-500 rounded-full flex items-center gap-2 group shadow-sm cursor-pointer"
            >
              Đặt Lịch Ngay
              <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburguer button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            id="mobile-menu-toggle"
            className="md:hidden p-2 text-brand-text-primary focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6 stroke-[1.5]" /> : <Menu className="h-6 w-6 stroke-[1.5]" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-fullscreen-menu"
            initial={{ opacity: 0, y: "-10%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-10%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-brand-bg-primary flex flex-col justify-between p-8 pt-28 md:hidden"
          >
            {/* Background design elements */}
            <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-brand-rose filter blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 rounded-full bg-brand-accent filter blur-3xl opacity-10 pointer-events-none" />

            <div className="flex flex-col gap-6 px-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-display font-light tracking-[0.04em] text-brand-text-primary hover:text-brand-accent transition-colors duration-300 flex items-center gap-4"
                  >
                    <span className="text-xs font-mono text-brand-accent/60">0{index + 1}</span>
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="flex flex-col gap-6 p-4 border-t border-brand-rose/60"
            >
              <button
                onClick={() => {
                  setIsOpen(false);
                  onBookClick();
                }}
                className="w-full py-4 bg-brand-text-primary text-[#FFFDFB] hover:bg-brand-accent transition-colors duration-300 font-display font-medium text-sm tracking-[0.1em] uppercase rounded-full flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                Đặt Lịch Hẹn Ngay
              </button>
              
              <div className="text-center text-xs text-brand-text-secondary/80 font-light tracking-[0.05em]">
                Hotline: 090 Ngọc Diệp • 08:30 - 20:30
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
