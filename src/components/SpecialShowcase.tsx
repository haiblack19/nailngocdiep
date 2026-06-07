import { motion } from "motion/react";
import { Sparkles, Heart, Award, ShieldCheck, ArrowRight } from "lucide-react";

interface SpecialShowcaseProps {
  onBookClick: () => void;
}

export default function SpecialShowcase({ onBookClick }: SpecialShowcaseProps) {
  const specialImage = "/src/assets/images/special_diep_nail.jpg";

  return (
    <section
      id="special-showcase"
      className="py-24 md:py-32 bg-brand-bg-primary border-t border-brand-rose/25 relative overflow-hidden w-full"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-rose/40 filter blur-[120px] pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute bottom-12 right-12 w-72 h-72 rounded-full bg-brand-accent/10 filter blur-[100px] pointer-events-none -z-10 animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Elegant Text Section */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <Sparkles className="h-4 w-4 text-brand-gold animate-spin" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] font-medium uppercase text-brand-gold">
                BẢN SẮC ĐỘC QUYỀN
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-brand-text-primary tracking-[-0.03em] leading-[1.2]"
            >
              Sản phẩm của <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-brand-gold to-brand-accent/80 italic">
                Ngọc Diệp xinh gái ✨
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-brand-text-secondary font-light text-base leading-relaxed max-w-xl"
            >
              Đây là tác phẩm nghệ thuật móng tay độc quyền được thiết kế trực tiếp bởi nghệ nhân chủ nhiệm Ngọc Diệp. Sự kết hợp hoàn hảo giữa phom móng tự nhiên trong trẻo cùng các họa tiết ngôi sao lung linh đa sắc sắc nét, mang lại sự trẻ trung, cá tính nhưng không kém phần kiêu sa.
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-xl bg-brand-rose flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Heart className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-text-primary">
                    Vẽ tay tỉ mỉ 100%
                  </h4>
                  <p className="text-xs text-brand-text-secondary font-light mt-1">
                    Được phác thảo họa tiết thủ công tinh xảo, sắc nét trên từng ngón tay.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-xl bg-brand-rose flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-text-primary">
                    Phong cách trẻ trung
                  </h4>
                  <p className="text-xs text-brand-text-secondary font-light mt-1">
                    Phối màu tinh tế mang đậm hơi thở thời trang Hàn Quốc trẻ trung.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Action booking button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="pt-6"
            >
              <button
                onClick={onBookClick}
                className="px-8 py-3.5 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] hover:text-brand-text-primary text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-500 shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                Đặt thiết kế độc bản này
                <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          </div>

          {/* Right Side: Showcase Photo in Luxury Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex justify-center"
          >
            {/* Elegant Background Golden Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-accent/20 filter blur-[80px] pointer-events-none -z-10" />

            {/* Decorative frame borders */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent/50 rounded-tl-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent/50 rounded-br-3xl pointer-events-none" />

            {/* Photo Container */}
            <div className="relative rounded-[28px] overflow-hidden bg-brand-bg-primary shadow-2xl border border-brand-rose max-w-sm w-full aspect-[4/3] sm:aspect-square md:aspect-[3/4] group select-none">
              <img
                src={specialImage}
                alt="Sản phẩm của Ngọc Diệp xinh gái"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Floating watermark badge */}
              <div className="absolute bottom-4 left-4 bg-brand-bg-primary/90 backdrop-blur-md border border-brand-rose px-4 py-2 rounded-xl text-[10px] font-medium tracking-wider text-brand-text-primary flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-gold" />
                <span>Designed by Ngọc Diệp</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
