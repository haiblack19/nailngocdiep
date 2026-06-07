import React from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import {
  Sparkles,
  Paintbrush,
  Layers,
  Scissors,
  Waves,
  Heart,
  Clock,
  ArrowUpRight
} from "lucide-react";

// Helper map to render Lucide icon dynamically based on data config
const iconMap: Record<string, React.ComponentType<any>> = {
  Sparkles: Sparkles,
  Paintbrush: Paintbrush,
  Layers: Layers,
  Scissors: Scissors,
  Waves: Waves,
  FlameKindling: Heart, // Fallback for basic care
};

interface ServicesProps {
  onServiceSelect: (service: ServiceItem) => void;
}

export default function Services({ onServiceSelect }: ServicesProps) {
  
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 bg-brand-bg-primary w-full transition-all"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/60 border border-brand-accent/15 mb-4"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-brand-gold">
              DỊCH VỤ LUXURY
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-brand-text-primary tracking-[-0.03em] leading-tight"
          >
            Menu Chăm Sóc & <br />
            <span className="font-semibold text-brand-gold italic">Thiết Kế Nghệ Thuật</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-text-secondary font-sans font-light text-sm md:text-base mt-4 leading-relaxed"
          >
            Mỗi liệu trình được thiết kế chuẩn spa, sử dụng nguyên liệu cao cấp nhập khẩu nhằm nâng niu móng và làn da của bạn.
          </motion.p>
        </div>

        {/* Dynamic Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Sparkles;
            
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative bg-brand-bg-secondary/45 hover:bg-[#FFFDFB] backdrop-blur-md rounded-[24px] p-8 border border-brand-rose/25 hover:border-brand-accent/40 shadow-[0_4px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(194,143,90,0.08)] flex flex-col justify-between transition-all duration-500 cursor-pointer"
                onClick={() => onServiceSelect(service)}
              >
                {/* Background soft light accent */}
                <span className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-brand-rose/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0 pointer-events-none" />

                <div className="relative z-10">
                  {/* Category and Icon row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-medium text-brand-accent px-2.5 py-1 bg-brand-rose/65 rounded-md">
                      {service.category}
                    </span>
                    <div className="h-12 w-12 rounded-2xl bg-[#FFFDFB] shadow-inner flex items-center justify-center text-brand-accent group-hover:text-brand-gold transition-colors duration-300">
                      <Icon className="h-5 w-5 stroke-[1.5]" />
                    </div>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-lg font-semibold text-brand-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-xs text-brand-text-secondary font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer of the card containing duration, price, and CTA */}
                <div className="relative z-10 flex items-center justify-between pt-6 border-t border-brand-rose/30 mt-4">
                  <div className="flex items-center gap-1.5 text-brand-text-secondary/70">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-mono">{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[9px] text-brand-text-secondary font-light uppercase tracking-wider">Chỉ từ</div>
                      <div className="text-sm font-bold text-brand-gold font-sans">{service.price}</div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onServiceSelect(service);
                      }}
                      className="h-8 w-8 rounded-full bg-brand-text-primary hover:bg-brand-accent text-brand-bg-primary hover:text-brand-text-primary flex items-center justify-center transition-all duration-300 shadow-sm"
                      aria-label="Chọn dịch vụ"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note block at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center max-w-lg mx-auto p-4 rounded-xl border border-dashed border-brand-accent/20 bg-brand-bg-secondary/30"
        >
          <p className="text-[11px] text-brand-text-secondary font-light leading-relaxed">
            * Giá trên đã bao gồm chăm sóc da cơ bản trước vẽ móng. Quý khách có móng cũ cần phá gel vui lòng ghi chú khi đặt lịch để chúng tôi sắp xếp nhân viên đón chu đáo nhất.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
