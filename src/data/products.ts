import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Maillot de Football Pro',
    price: 299,
    image: '/team/p1.jpg',
    category: 'Football',
    rating: 4.8,
    reviews: 124,
    description: 'Maillot de football professionnel en tissu respirant avec technologie anti-transpiration. Parfait pour l\'entraînement et les matchs.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Rouge', 'Blanc', 'Noir'],
    stock: 45
  },
  {
    id: 2,
    name: 'Short de Sport Performance',
    price: 149,
    image: '/team/p2.jpg',
    category: 'Vêtements',
    rating: 4.5,
    reviews: 89,
    description: 'Short de sport léger et confortable avec poches latérales. Idéal pour tous types d\'activités sportives.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris', 'Bleu'],
    stock: 62
  },
  {
    id: 3,
    name: 'Chaussures de Running',
    price: 599,
    image: '/team/p3.jpg',
    category: 'Chaussures',
    rating: 4.9,
    reviews: 203,
    description: 'Chaussures de running haute performance avec semelle amortissante. Confort maximal pour vos courses.',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    colors: ['Rouge', 'Blanc', 'Noir'],
    stock: 38
  },
  {
    id: 4,
    name: 'Survêtement Complet',
    price: 449,
    image: '/team/p4.jpg',
    category: 'Ensembles',
    rating: 4.7,
    reviews: 156,
    description: 'Survêtement complet haut de gamme. Veste zippée et pantalon avec poches. Parfait pour l\'échauffement.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Rouge/Blanc', 'Noir/Rouge', 'Gris/Blanc'],
    stock: 29
  },
  {
    id: 5,
    name: 'Legging de Sport Femme',
    price: 199,
    image: '/team/p5.jpg',
    category: 'Femme',
    rating: 4.6,
    reviews: 178,
    description: 'Legging de sport extensible et confortable. Tissu respirant avec contrôle de l\'humidité.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Noir', 'Rouge', 'Gris'],
    stock: 54
  },
  {
    id: 6,
    name: 'Gants de Boxing',
    price: 349,
    image: '/team/p6.jpg',
    category: 'Boxing',
    rating: 4.8,
    reviews: 92,
    description: 'Gants de boxe professionnels en cuir synthétique. Protection optimale et confort durant l\'entraînement.',
    sizes: ['10oz', '12oz', '14oz', '16oz'],
    colors: ['Rouge', 'Noir', 'Blanc'],
    stock: 41
  },
  {
    id: 7,
    name: 'Brassière de Sport',
    price: 179,
    image: '/team/p7.jpg',
    category: 'Femme',
    rating: 4.7,
    reviews: 145,
    description: 'Brassière de sport avec support renforcé. Confort et maintien pour tous types d\'activités.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Rouge', 'Noir', 'Blanc', 'Gris'],
    stock: 67
  },
  {
    id: 8,
    name: 'Maillot Basketball Pro',
    price: 279,
    image: '/team/p8.jpg',
    category: 'Basketball',
    rating: 4.6,
    reviews: 118,
    description: 'Maillot de basketball professionnel. Tissu respirant et léger pour performance optimale.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Rouge', 'Blanc', 'Noir', 'Bleu'],
    stock: 33
  },
  
];
