export interface Product {
  id: number;
  name: string;
  price: number;
  category: string; // Allow any string to prevent build errors
  image: string;
  description: string;
  mood: string;
  exhibition?: string; // Optional, in case legacy code uses it
}

export type Category = 'all' | 'soft' | 'alt' | 'street' | 'goblin' | 'gyaru';