export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  category: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  aspectRatio: "aspect-[4/3]" | "aspect-[3/4]" | "aspect-square" | "aspect-[9/16]";
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
}
