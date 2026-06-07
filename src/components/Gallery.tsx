import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY } from "../data";
import { GalleryItem } from "../types";
import { Sparkles, Camera, Heart, Eye } from "lucide-react";

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activePreview, setActivePreview] = useState<GalleryItem | null>(null);

  // Get unique categories for filters
  const categories = ["All", "Minimalist", "Luxury", "Korean Art", "Ethereal", "Spa Care"];

  const filteredItems = selectedFilter === "All"
    ? GALLERY
    : GALLERY.filter(item => item.category === selectedFilter);

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-brand-bg-secondary w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-rose/60 border border-brand-accent/15 mb-4">
              <Camera className="h-3.5 w-3.5 text-brand-gold animate-bounce" />
              <span className="text-[10px] tracking-[0.25em] font-medium uppercase text-brand-gold">
                NÀIL TRENDS 2026
              </span>
            </div>
            
            <h2 className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-brand-text-primary tracking-[-0.03em] leading-tight">
              Kiệt Tác Nghệ Thuật <br />
              <span className="font-semibold text-brand-gold italic">Được Lưu Hương</span>
            </h2>
            
            <p className="text-brand-text-secondary font-sans font-light text-sm mt-4 leading-relaxed">
              Khám phá bộ sưu tập móng được thiết kế riêng biệt tại Ngọc Diệp. Nguồn cảm hứng hội tụ từ xu hướng sang trọng quyến rũ trên toàn cầu.
            </p>
          </div>

          {/* Luxury Categories Filter on Scroll */}
          <div className="flex flex-wrap gap-2.5 max-w-full overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-5 py-2.5 text-xs font-medium tracking-[0.05em] uppercase rounded-full transition-all duration-500 whitespace-nowrap cursor-pointer ${
                  selectedFilter === cat
                    ? "bg-brand-text-primary text-[#FFFDFB] shadow-md"
                    : "bg-[#FFFDFB] hover:bg-brand-rose/40 text-brand-text-secondary border border-brand-rose/40"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pinterest Masonry Columns Grid Layout */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="break-inside-avoid relative rounded-[32px] overflow-hidden bg-brand-bg-primary shadow-sm hover:shadow-xl transition-all duration-500 group select-none cursor-zoom-in"
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActivePreview(item)}
              >
                {/* Lazy Load standard with correct attributes */}
                <div className={`w-full overflow-hidden ${item.aspectRatio}`}>
                  <img
                    src={item.url}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay with detail information */}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-text-primary/95 via-brand-text-primary/40 to-transparent pt-16 p-8 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex flex-col justify-end z-10 text-[#FFFDFB] pointer-events-none" />

                <div className="absolute inset-0 flex flex-col justify-between p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {/* Floating category badge on top-right */}
                  <div className="flex justify-end">
                    <span className="px-3 py-1 bg-[#FFFDFB]/20 backdrop-blur-md rounded-full text-[9px] uppercase tracking-wider text-[#FFFDFB]">
                      {item.category}
                    </span>
                  </div>

                  {/* Title and Action elements */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-brand-rose font-mono uppercase tracking-wider">Ngọc Diệp Studio</p>
                      <h4 className="text-sm font-semibold tracking-wide text-white mt-1">
                        {item.title}
                      </h4>
                    </div>

                    <div className="h-8 w-8 rounded-full bg-brand-accent/90 text-white flex items-center justify-center pointer-events-auto">
                      <Eye className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty placeholder state if nothing found */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 bg-brand-bg-primary rounded-3xl border border-dashed border-brand-rose text-brand-text-secondary">
            Không tìm thấy hình ảnh nào của thư mục này.
          </div>
        )}

      </div>

      {/* Lightbox Modal Overlay */}
      <AnimatePresence>
        {activePreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1D1D1F]/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12 cursor-zoom-out"
            onClick={() => setActivePreview(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-[24px] bg-brand-bg-primary border border-brand-rose/20 flex flex-col md:flex-row shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image part */}
              <div className="md:w-3/5 overflow-hidden bg-[#1D1D1F] flex items-center justify-center">
                <img
                  src={activePreview.url}
                  alt={activePreview.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto max-h-[60vh] md:max-h-[85vh] object-contain"
                />
              </div>

              {/* Data part */}
              <div className="md:w-2/5 p-8 flex flex-col justify-between bg-brand-bg-primary">
                <div>
                  <div className="flex items-center gap-2 text-brand-accent mb-4">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Bespoke Design</span>
                  </div>

                  <h3 className="font-display font-light text-2xl text-brand-text-primary tracking-tight">
                    {activePreview.title}
                  </h3>

                  <p className="text-xs text-brand-text-secondary mt-1.5 font-mono uppercase tracking-wider">
                    Phân loại: {activePreview.category}
                  </p>

                  <div className="mt-8 space-y-4">
                    <p className="text-xs text-brand-text-secondary font-light leading-relaxed">
                      Sản phẩm được thực hiện tỉ mỉ trong 60-90 phút bởi các nghệ nhân chuyên nghiệp hàng đầu tại Ngọc Diệp Nail Studio. Toàn bộ sơn gel chuẩn y khoa, lành tính với thành phần thảo dược bảo vệ tối đa biểu bì.
                    </p>
                    <div className="flex items-center gap-2 p-3 bg-brand-bg-secondary rounded-xl text-[11px] text-brand-text-primary">
                      <Heart className="h-3.5 w-3.5 text-brand-accent animate-pulse" />
                      Mẫu vẽ thiết kế cá nhân được yêu cầu thích hợp nhất trong năm 2026.
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href="#booking-section"
                    onClick={() => {
                      setActivePreview(null);
                    }}
                    className="w-full py-3.5 text-center bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] text-xs font-semibold uppercase tracking-widest rounded-full transition-colors duration-300"
                  >
                    Yêu Cầu Thiết Kế Này
                  </a>
                  <button
                    onClick={() => setActivePreview(null)}
                    className="w-full py-3 bg-brand-bg-secondary hover:bg-brand-rose/45 text-brand-text-primary text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                  >
                    Đóng Xem Thử
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
