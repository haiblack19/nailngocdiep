import { SERVICES } from "../data";
import { Instagram, Facebook, Phone, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import founderImage from "../assets/images/about_founder_diep_graduation.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-brand-bg-secondary pt-20 pb-10 w-full border-t border-brand-rose/40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16">
          
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src={founderImage}
                alt="Chủ shop Ngọc Diệp"
                className="h-16 w-16 rounded-full object-cover border border-brand-accent shadow-sm"
              />
              <div>
                <span className="font-display text-lg font-light tracking-[0.12em] text-brand-text-primary block leading-none">
                  NGỌC DIỆP
                </span>
                <span className="text-[10px] text-brand-gold uppercase tracking-widest font-semibold block mt-1">
                  Owner & Master
                </span>
              </div>
            </div>
            <p className="text-xs text-brand-text-secondary/95 font-light leading-relaxed max-w-sm">
              Trải nghiệm nghệ thuật móng cao cấp kết hợp trị liệu thư giãn chuẩn Thụy Sĩ & Hàn Quốc tại trung tâm Sài Gòn. Nâng tầm cá tính của bạn qua từng sắc màu sang trọng.
            </p>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-brand-bg-primary hover:bg-brand-accent/30 text-brand-text-secondary hover:text-brand-text-primary flex items-center justify-center transition-all duration-300"
                aria-label="Instagram của Ngọc Diệp Nail Studio"
              >
                <Instagram className="h-4.5 w-4.5 stroke-[1.5]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-brand-bg-primary hover:bg-brand-accent/30 text-brand-text-secondary hover:text-brand-text-primary flex items-center justify-center transition-all duration-300"
                aria-label="Facebook của Ngọc Diệp Nail Studio"
              >
                <Facebook className="h-4.5 w-4.5 stroke-[1.5]" />
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-full bg-brand-bg-primary hover:bg-brand-accent/30 text-brand-text-secondary hover:text-brand-text-primary flex items-center justify-center transition-all duration-300"
                aria-label="Zalo tư vấn"
              >
                <MessageSquare className="h-4.5 w-4.5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links to services */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-text-primary">
              Dịch vụ hàng đầu
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-xs text-brand-text-secondary hover:text-brand-accent transition-colors duration-300 font-light"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contacts */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-text-primary">
              Thông tin liên hệ
            </h4>
            <div className="space-y-3.5 text-xs text-brand-text-secondary font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-brand-accent flex-shrink-0 mt-0.5" />
                <span>Lầu 2, 79/3 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh.</span>
              </div>
              
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <span>090 123 4567 • 098 765 4321</span>
              </div>

              <div className="flex items-center gap-2.5 pt-1.5 border-t border-brand-rose/40">
                <Clock className="h-4 w-4 text-brand-accent flex-shrink-0" />
                <span>Giờ làm việc: 08:30 - 20:30 (Cả tuần)</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter / Brand Values */}
          <div className="space-y-5">
            <h4 className="text-xs uppercase tracking-[0.15em] font-semibold text-brand-text-primary">
              Cam kết chất lượng
            </h4>
            <p className="text-xs text-brand-text-secondary/90 font-light leading-relaxed">
              Ngọc Diệp Nail Studio sử dụng 100% dòng sơn quý tộc chính hãng, an toàn sức khoẻ biểu bì và không gây thâm móng.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-brand-gold">
              <ShieldCheck className="h-4.5 w-4.5" />
              <span>Chứng nhận y khoa an toàn móng</span>
            </div>
          </div>

        </div>

        {/* Bottom copyright barrier footer */}
        <div className="pt-8 border-t border-brand-rose/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-text-secondary font-light">
          <div>
            &copy; {currentYear} Ngọc Diệp Nail Studio. Tất cả các quyền được bảo lưu.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#hero" className="hover:text-brand-accent transition-colors duration-300">Điều khoản dịch vụ</a>
            <a href="#hero" className="hover:text-brand-accent transition-colors duration-300">Chính sách bảo mật</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
