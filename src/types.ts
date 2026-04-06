export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'yogurt' | 'topping' | 'smoothie';
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface Promo {
  id: string;
  title: string;
  description: string;
  code?: string;
  expiry: string;
}
