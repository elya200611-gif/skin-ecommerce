import { Product } from "./types";

// 1. Export Categories so other components can import them without crashing
export const CATEGORIES = [
  { id: 'soft', label: 'Soft' },
  { id: 'alt', label: 'Alt / Metal' },
  { id: 'street', label: 'Streetwear' },
  { id: 'goblin', label: 'Goblincore' },
  { id: 'gyaru', label: 'Gyaru' },
];

// 2. Export Products
export const products: Product[] = [
  {
    id: 1,
    name: "The Memory Hoodie",
    price: 18000,
    category: "soft",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    description: "Кокон для дней, когда мир слишком громок.",
    mood: "Soft Aesthetic"
  },
  {
    id: 2,
    name: "Chaos Skirt",
    price: 12500,
    category: "alt",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop",
    description: "Структурированный беспорядок.",
    mood: "Acid"
  },
  {
    id: 3,
    name: "Silence Top",
    price: 8900,
    category: "soft",
    image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=2744&auto=format&fit=crop",
    description: "Тишина, которую можно надеть.",
    mood: "Soft"
  },
  {
    id: 4,
    name: "Glitch Trousers",
    price: 21000,
    category: "street",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=2787&auto=format&fit=crop",
    description: "Ошибка в коде реальности.",
    mood: "Brutal"
  }
];