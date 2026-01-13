import { Product, ExhibitionType } from './types';

// Products data
export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Vintage Oversized Hoodie',
    title: 'Vintage Oversized Hoodie',
    price: 4500,
    category: 'soft',
    image: '/clothes/catalog pic 1 default.webp',
    imageStatic: '/clothes/catalog pic 1 default.webp',
    imageHover: '/clothes/catalog pic 1 hover.webp',
    description: 'Мягкая эстетика с винтажным принтом',
    mood: 'Cozy & Dreamy',
    exhibition: 'SOFT',
    manifest: 'Этот худи создан для тех, кто ищет комфорт в каждом моменте. Мягкая ткань обнимает, словно облако, а винтажный принт напоминает о прошлых эпохах.',
    fabric: 'Cotton Blend 80%'
  },
  {
    id: '2',
    name: 'Dark Metal Jacket',
    title: 'Dark Metal Jacket',
    price: 8500,
    category: 'alt',
    image: '/clothes/catalog pic 2 default.webp',
    imageStatic: '/clothes/catalog pic 2 default.webp',
    imageHover: '/clothes/catalog pic 2 hover.webp',
    description: 'Альтернативная куртка с металлическими деталями',
    mood: 'Dark & Edgy',
    exhibition: 'ALT',
    manifest: 'Для тех, кто не боится выделяться. Металлические детали и темная палитра создают образ бунтаря, готового бросить вызов обществу.',
    fabric: 'Synthetic Leather'
  },
  {
    id: '3',
    name: 'Street Cargo Pants',
    title: 'Street Cargo Pants',
    price: 5800,
    category: 'street',
    image: '/clothes/catalog pic 3 default.webp',
    imageStatic: '/clothes/catalog pic 3 default.webp',
    imageHover: '/clothes/catalog pic 3 hover.webp',
    description: 'Уличные карго брюки с множеством карманов',
    mood: 'Urban & Bold',
    exhibition: 'STREET',
    manifest: 'Свобода движения и стиль в каждом шаге. Карманы для всего, что важно, и силуэт, который говорит: "Я здесь главный".',
    fabric: 'Durable Cotton'
  },
  {
    id: '4',
    name: 'Goblin Core Vest',
    title: 'Goblin Core Vest',
    price: 3200,
    category: 'goblin',
    image: '/clothes/catalog pic 4 default.webp',
    imageStatic: '/clothes/catalog pic 4 default.webp',
    imageHover: '/clothes/catalog pic 4 hover.webp',
    description: 'Природная эстетика с элементами гоблинкора',
    mood: 'Earthy & Wild',
    exhibition: 'GOBLIN',
    manifest: 'Возвращение к природе через моду. Этот жилет воплощает дух лесных существ и свободу от социальных норм.',
    fabric: 'Organic Cotton'
  }
];

// Exhibitions data
export const EXHIBITIONS: ExhibitionType[] = ['SOFT', 'ALT', 'STREET', 'GOBLIN', 'GYARU'];

// Reviews data
export const REVIEWS = [
  {
    id: 1,
    user: 'Аня К.',
    image: '/1 review.webp',
    comment: 'Идеально село! Очень мягкая ткань',
    height: '155-165 см'
  },
  {
    id: 2,
    user: 'Миша Р.',
    image: '/2 review.webp',
    comment: 'Крутой вайб, носил на концерт',
    height: '170-175 см'
  },
  {
    id: 3,
    user: 'Лиза П.',
    image: '/3 review.webp',
    comment: 'Это то, что я искала! 🖤',
    height: '155-165 см'
  },
  {
    id: 4,
    user: 'Влад С.',
    image: '/4 review.webp',
    comment: 'Качество на высоте, спасибо!',
    height: '180+ см'
  }
];
