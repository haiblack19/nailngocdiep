import { motion } from "motion/react";
import { Check, Heart, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function About() {
  const salonImage = "/src/assets/images/about_salon_interior_1780848352242.png";

  const features = [
    {
      title: "Nail Art cao cấp",
      desc: "Vẽ tay tinh tế, cá nhân hoá cho từng dáng bàn tay.",
      icon: Sparkles
    },
    {
      title: "Sơn Gel bền đẹp",
      desc: "Sản phẩm organic tự nhiên, bền màu và giữ móng cứng cáp.",
      icon: ShieldCheck
    },
    {
      title: "Chăm sóc móng chuyên sâu",
      desc: "Kỹ thuật cắt tỉa chuẩn y khoa vệ sinh, nuôi dưỡng dưỡng chất.",
      icon: Heart
    },
    {
      title: "Không gian thư giãn sang trọng",
      desc: "Âm nhạc dịu nhẹ, mùi thơm thảo mộc trị liệu thư thái.",
      icon: Award
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-brand-bg-secondary w-full overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Image with beautiful luxury framing & parallax */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Soft backdrop accent card */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 rounded-tl-[40px] border-t-2 border-l-2 border-brand-accent/30 pointer-events-none z-0" />
            <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 rounded-br-[40px] border-b-2 border-r-2 border-brand-accent/30 pointer-events-none z-0" />
            
            {/* Elegant Background Golden Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-brand-rose/60 filter blur-[80px] pointer-events-none -z-10" />

            {/* Main Picture Container */}
            <div className="relative rounded-[32px] overflow-hidden bg-brand-bg-primary shadow-xl z-10 select-none group aspect-[3/4]">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-text-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-1" />
              <img
                src={salonImage}
                alt="Ngọc Diệp Luxury Nails Salon Space"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Small Floating Luxury Badge on Desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -bottom-4 left-6 z-20 bg-brand-bg-primary py-4 px-6 rounded-2xl shadow-lg border border-brand-rose flex items-center gap-3 hidden sm:flex"
            >
              <div className="h-10 w-10 rounded-full bg-brand-rose flex items-center justify-center text-brand-accent">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-text-primary">Chuẩn Spa 5★</div>
                <div className="text-[10px] text-brand-text-secondary">Trải nghiệm xa xỉ dịu êm</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Prefix */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-4"
            >
              <span className="h-px w-8 bg-brand-accent" />
              <span className="text-[10px] md:text-xs tracking-[0.25em] font-medium uppercase text-brand-accent">
                GIỚI THIỆU KHÔNG GIAN
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-brand-text-primary tracking-[-0.03em] leading-normal"
            >
              Vẻ đẹp bắt đầu từ <br />
              <span className="font-semibold text-brand-gold italic">sự chăm chút.</span>
            </motion.h2>

            {/* Main Narrative Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-brand-text-secondary font-light text-base leading-relaxed mt-6 mb-8 max-w-xl"
            >
              Ngọc Diệp Nail Studio mang đến trải nghiệm chăm sóc móng cao cấp với đội ngũ kỹ thuật viên giàu kinh nghiệm, không gian thư giãn tĩnh tại và các xu hướng nail nghệ thuật mới nhất từ Seoul và Tokyo. Chúng tôi coi mỗi bộ móng là một tác phẩm trang sức bespoke dành riêng cho phong cách của bạn.
            </motion.p>

            {/* Feature List on scroll */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feat) => {
                const IconComponent = feat.icon;
                return (
                  <motion.div
                    key={feat.title}
                    variants={itemVariants}
                    className="flex gap-4 p-4 rounded-2xl bg-brand-bg-primary/50 border border-brand-rose/20 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="flex-shrink-0 h-9 w-9 rounded-xl bg-brand-rose/70 flex items-center justify-center text-brand-accent">
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-text-primary flex items-center gap-2">
                        <Check className="h-3.5 w-3.5 text-brand-accent stroke-[3]" />
                        {feat.title}
                      </h4>
                      <p className="text-xs text-brand-text-secondary font-light mt-1.5 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
