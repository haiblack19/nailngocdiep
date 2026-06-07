import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { ServiceItem } from "../types";
import {
  Calendar,
  Clock,
  Sparkles,
  CheckCircle,
  X,
  Phone,
  User,
  MessageSquare,
  ChevronRight,
  Info
} from "lucide-react";

interface BookingCTAProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
  preSelectedService: ServiceItem | null;
  setPreSelectedService: (service: ServiceItem | null) => void;
}

export default function BookingCTA({
  isModalOpen,
  setIsModalOpen,
  preSelectedService,
  setPreSelectedService,
}: BookingCTAProps) {
  // Booking Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    serviceId: SERVICES[0].id,
    date: "",
    time: "",
    specialist: "random",
    note: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptCode, setReceiptCode] = useState("");

  // Sync pre-selected service from parent component
  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceId: preSelectedService.id }));
    }
  }, [preSelectedService]);

  const artists = [
    { id: "random", name: "Kỹ thuật viên bất kỳ (Yêu thích nhất)" },
    { id: "diep", name: "Ngọc Diệp (Nghệ nhân chủ nhiệm)" },
    { id: "ha", name: "Thanh Hà (Nail Art Chuyên Gia)" },
    { id: "linh", name: "Chị Linh (Spa & Phục hồi)" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      return;
    }

    setIsSubmitting(true);
    // Simulate real database sync/network storage
    setTimeout(() => {
      const code = "ND-" + Math.floor(100000 + Math.random() * 900000);
      setReceiptCode(code);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Persist locally for user session retrieval
      const localBookings = JSON.parse(localStorage.getItem("ngoc_diep_bookings") || "[]");
      localBookings.push({
        ...formData,
        code,
        createdAt: new Date().toISOString()
      });
      localStorage.setItem("ngoc_diep_bookings", JSON.stringify(localBookings));
    }, 1200);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Reset state after closure
    setTimeout(() => {
      setIsSuccess(false);
      setPreSelectedService(null);
      setFormData({
        name: "",
        phone: "",
        serviceId: SERVICES[0].id,
        date: "",
        time: "",
        specialist: "random",
        note: ""
      });
    }, 400);
  };

  return (
    <>
      {/* SECTION 5: BOOKING CTA CONTAINER */}
      <section
        id="booking-section"
        className="relative py-28 md:py-36 bg-brand-bg-primary overflow-hidden flex items-center justify-center text-center px-6"
      >
        {/* Floating background gradient shapes with subtle kinetic motion */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#D4A373]/15 via-[#E7C6A7]/20 to-[#F7E7E2]/15 filter blur-[120px] pointer-events-none z-0 animate-float-slow" />
        <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-brand-rose filter blur-[90px] opacity-35 pointer-events-none z-0 animate-float-reverse" />

        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-4.5 py-1.5 bg-brand-rose/60 border border-brand-accent/20 rounded-full mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-brand-gold" />
            <span className="text-[10px] tracking-[0.2em] font-medium uppercase text-brand-gold">
              SPA APPOINTMENT
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-brand-text-primary tracking-[-0.04em] leading-tight max-w-2xl"
          >
            Sẵn sàng cho <br />
            <span className="font-semibold text-brand-gold italic">bộ móng tiếp theo?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-brand-text-secondary font-sans font-light text-sm sm:text-base md:text-lg max-w-lg mt-6 leading-relaxed"
          >
            Đặt lịch ngay hôm nay để trải nghiệm dịch vụ chăm sóc móng nghệ thuật cao cấp tại Ngọc Diệp Nail Studio.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto"
          >
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-4.5 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] hover:text-brand-text-primary text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-500 shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              Đặt lịch trải nghiệm
            </button>

            <a
              href="https://zalo.me"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-10 py-4.5 bg-[#FFFDFB] hover:bg-brand-bg-secondary border border-brand-accent/25 text-brand-text-primary text-xs font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-500 shadow-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-brand-accent" />
              Liên hệ tư vấn
            </a>
          </motion.div>
        </div>
      </section>

      {/* FULLSCREEN ROYAL OVERLAY APPOINTMENT MODAL */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1D1D1F]/50 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto cursor-zoom-out"
            onClick={handleClose}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-xl bg-brand-bg-primary rounded-[32px] border border-brand-rose shadow-2xl p-8 sm:p-10 text-left cursor-default overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top luxury gold bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent via-brand-gold to-brand-rose" />

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-brand-bg-secondary text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 cursor-pointer"
                aria-label="Đóng Đặt Lịch"
              >
                <X className="h-5 w-5 stroke-[1.5]" />
              </button>

              {!isSuccess ? (
                <>
                  {/* Modal Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-1.5 text-brand-accent text-xs font-mono uppercase tracking-widest">
                      <Sparkles className="h-3.5 w-3.5" />
                      Ngọc Diệp Service Reservation
                    </div>
                    
                    <h3 className="font-display font-light text-2xl text-brand-text-primary mt-2">
                      Đặt Lịch Trải Nghiệm <span className="font-semibold text-brand-gold italic">Chuẩn Spa</span>
                    </h3>
                  </div>

                  {/* Booking Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Customer Info Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                          Họ và tên *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-accent/65" />
                          <input
                            type="text"
                            required
                            placeholder="Nhập tên của bạn"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                          Số điện thoại *
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-accent/65" />
                          <input
                            type="tel"
                            required
                            placeholder="Nhập SĐT nhận mã"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service selection dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                        Chọn dịch vụ chăm sóc móng
                      </label>
                      <select
                        value={formData.serviceId}
                        onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                        className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300 cursor-pointer"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title} — {s.price} ({s.duration})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Date/Time Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                          Ngày tháng hẹn *
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-accent/65" />
                          <input
                            type="date"
                            required
                            min={new Date().toISOString().split("T")[0]}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300 cursor-pointer"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                          Khung giờ mong muốn *
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-3.5 top-3.5 h-4 w-4 text-brand-accent/65" />
                          <input
                            type="time"
                            required
                            min="08:30"
                            max="20:00"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Technician Preference Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                        Kỹ thuật viên yêu thích
                      </label>
                      <select
                        value={formData.specialist}
                        onChange={(e) => setFormData({ ...formData, specialist: e.target.value })}
                        className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300 cursor-pointer"
                      >
                        {artists.map((item) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Note input */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-medium tracking-[0.05em] uppercase text-brand-text-secondary">
                        Lời nhắn hoặc Gợi ý thêm
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mẫu vẽ móng yêu thích, dị ứng nước da, v.v..."
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        className="w-full bg-brand-bg-secondary/65 border border-brand-rose/65 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-accent focus:bg-brand-bg-primary transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Safety disclosure notice */}
                    <div className="flex items-start gap-2 p-3 bg-brand-rose/30 rounded-xl text-[10px] text-brand-text-secondary font-light">
                      <Info className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <p>
                        Ngọc Diệp Nail Studio cam kết khử trùng 100% dụng cụ trước mỗi ca làm bằng lò hấp sấy chuẩn y tế. Mọi yêu cầu xin dời lịch hẹn vui lòng liên hệ trước ít nhất 2 giờ.
                      </p>
                    </div>

                    {/* Submit booking button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4.5 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] hover:text-brand-text-primary font-display font-semibold text-xs tracking-[0.15em] uppercase rounded-xl transition-all duration-500 shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Đang Khởi Tạo Lịch...
                        </>
                      ) : (
                        <>
                          Xác nhận lịch hẹn
                          <ChevronRight className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                /* SUCCESS SCREEN */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6 flex flex-col items-center"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center animate-bounce">
                    <CheckCircle className="h-8 w-8 text-brand-gold" />
                  </div>

                  <div>
                    <h3 className="font-display font-light text-3xl text-brand-text-primary">
                      Đặt Lịch <span className="font-semibold text-brand-gold italic">Thành Công!</span>
                    </h3>
                    <p className="text-xs text-brand-text-secondary mt-2 max-w-sm">
                      Lịch hẹn của quý khách đã được ghi nhận trên hệ thống luxury của chúng tôi. Ngọc Diệp Nail Studio chân thành cám ơn!
                    </p>
                  </div>

                  {/* Luxury Ticket Info */}
                  <div className="w-full bg-brand-bg-secondary border border-brand-rose/40 rounded-2xl p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-brand-rose/40 text-xs">
                      <span className="text-brand-text-secondary font-light">Mã Đặt Lịch (Receipt Code)</span>
                      <span className="font-mono font-bold text-brand-gold tracking-widest">{receiptCode}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs text-left">
                      <div>
                        <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider block">Khách Hàng</span>
                        <span className="font-semibold text-brand-text-primary">{formData.name}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider block">Số điện thoại</span>
                        <span className="font-semibold text-brand-text-primary">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider block">Ngày Hẹn</span>
                        <span className="font-semibold text-brand-text-primary font-mono">{formData.date}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-brand-text-secondary uppercase tracking-wider block">Thời Gian</span>
                        <span className="font-semibold text-brand-gold font-mono">{formData.time}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-brand-rose/40 text-[11px] text-brand-text-secondary text-left flex gap-1.5 items-center">
                      <Clock className="h-4 w-4 text-brand-accent" />
                      <span>Chi nhánh sảnh: Lầu 2, 79/3 Lê Thánh Tôn, Bến Nghé, Quận 1, TPHCM.</span>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="w-full py-4 bg-brand-text-primary hover:bg-brand-accent text-[#FFFDFB] text-xs font-semibold uppercase tracking-widest rounded-full transition-all duration-300 cursor-pointer"
                  >
                    Trở về Trang chủ
                  </button>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
