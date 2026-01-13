export interface Product {
  id: string;
  name: string;
  title: string;
  price: number;
  category: string;
  image: string;
  imageStatic: string;
  imageHover: string;
  description: string;
  mood: string;
  exhibition: string;
  manifest: string;
  fabric: string;
}

export type Category = 'all' | 'soft' | 'alt' | 'street' | 'goblin' | 'gyaru';

export type ExhibitionType = 'SOFT' | 'ALT' | 'STREET' | 'GOBLIN' | 'GYARU';