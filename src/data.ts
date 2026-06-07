import { ServiceItem, GalleryItem, ReviewItem } from "./types";

import gallery1 from "./assets/images/gallery_1_minimalist.jpg";
import gallery2 from "./assets/images/gallery_2_korean.png";
import gallery3 from "./assets/images/gallery_3_luxury.jpg";
import gallery4 from "./assets/images/gallery_4_feminine.jpg";
import gallery5 from "./assets/images/gallery_5_nail_art.jpg";
import gallery6 from "./assets/images/gallery_6_ethereal.png";
import gallery7 from "./assets/images/gallery_7_minimalist.png";
import gallery8 from "./assets/images/gallery_8_spa.jpg";

export const SERVICES: ServiceItem[] = [
  {
    id: "son-gel",
    title: "Sơn Gel Premium",
    description: "Sử dụng sơn gel organic từ Hàn & Nhật, bảo vệ cấu trúc móng thiên nhiên, bền lâu đến 4 tuần.",
    price: "190.000 đ",
    duration: "45 phút",
    category: "Chăm sóc",
    iconName: "Sparkles",
  },
  {
    id: "nail-art",
    title: "Nail Art Thiết Kế",
    description: "Vẽ cọ mảnh nghệ thuật ẩn xà cừ, nhũ khổng tước, vẽ nổi 3D tinh tế theo phong cách Dior & Chanel.",
    price: "350.000 đ",
    duration: "90 phút",
    category: "Nghệ thuật",
    iconName: "Paintbrush",
  },
  {
    id: "dap-gel",
    title: "Đắp Gel Phom Móng",
    description: "Đắp gel ẩn tạo dáng form dài thanh mảnh, mỏng nhẹ, độ bền vượt trội tựa móng thật.",
    price: "450.000 đ",
    duration: "120 phút",
    category: "Tạo dáng",
    iconName: "Layers",
  },
  {
    id: "noi-mong",
    title: "Nối Móng Úp Premium",
    description: "Nối dài bằng kỹ thuật móng úp cao cấp dẻo mỏng, ôm khít phom móng tự nhiên không gây nặng mỏi.",
    price: "390.000 đ",
    duration: "75 phút",
    category: "Tạo dáng",
    iconName: "Scissors",
  },
  {
    id: "spa-tay-chan",
    title: "Spa Trị Liệu Thảo Mộc",
    description: "Ngâm chân muối khoáng hồng Himalaya, tẩy tế bào chết hạt quả hạnh, massage phục hồi chuyên sâu.",
    price: "290.000 đ",
    duration: "60 phút",
    category: "Thư giãn",
    iconName: "Waves",
  },
  {
    id: "cham-soc-co-ban",
    title: "Chăm Sóc Móng Chuyên Sâu",
    description: "Làm sạch tế bào chết da rìa, cắt da bằng kềm chuyên dụng vô trùng, dưỡng ẩm keratin sâu.",
    price: "150.000 đ",
    duration: "30 phút",
    category: "Chăm sóc",
    iconName: "FlameKindling",
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "g1",
    url: gallery1,
    title: "Creamy Neutral Nails",
    category: "Minimalist",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g2",
    url: gallery2,
    title: "Abstract Line Art Nails",
    category: "Korean Art",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "g3",
    url: gallery3,
    title: "French Ombre With Gold Leaf",
    category: "Luxury",
    aspectRatio: "aspect-square"
  },
  {
    id: "g4",
    url: gallery4,
    title: "Soft Peach Aesthetic",
    category: "Feminine",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g5",
    url: gallery5,
    title: "Japanese Pearl Accents",
    category: "Nail Art",
    aspectRatio: "aspect-[3/4]"
  },
  {
    id: "g6",
    url: gallery6,
    title: "Celestial Astrology Design",
    category: "Ethereal",
    aspectRatio: "aspect-square"
  },
  {
    id: "g7",
    url: gallery7,
    title: "Milky White Elegance",
    category: "Minimalist",
    aspectRatio: "aspect-[4/3]"
  },
  {
    id: "g8",
    url: gallery8,
    title: "Luxury Rose Pedicure Massage",
    category: "Spa Care",
    aspectRatio: "aspect-[3/4]"
  }
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: "t1",
    author: "Khánh Linh Nguyễn",
    rating: 5,
    content: "Không gian ở Ngọc Diệp thực sự đẳng cấp, tĩnh lặng và có mùi thơm cực kì thư thái của dầu thông. Tay nghề thiết kế vẽ đá của các bạn ở đây tinh tế từng đường cọ luôn.",
    date: "14/05/2026"
  },
  {
    id: "t2",
    author: "Mỹ Duyên Võ",
    rating: 5,
    content: "Là khách quen hơn 1 năm nay, mình vô cùng hài lòng về chất lượng gel bền dã man. Móng mình mỏng nhưng làm ở đây xong cảm giác phục hồi và chắc khoẻ hơn nhiều.",
    date: "28/04/2026"
  },
  {
    id: "t3",
    author: "Phương Trinh Đặng",
    rating: 5,
    content: "Dịch vụ Spa Chân chuẩn chỉ từ khâu ngâm thảo mộc rồi sấy dầu oliu ấm. Thái độ nhân viên dịu dàng, nhã nhặn chuẩn Aesop style. Rất đề xuất nha mọi người!",
    date: "03/06/2026"
  }
];
