import { useState } from 'react';
import { ShoppingCart, Menu, X, User, Search } from 'lucide-react';
import { CartItem } from '../types/product';

interface HeaderProps {
  cartItems: CartItem[];
  onCartClick: () => void;
  onLoginClick: () => void;
  onSearch: (query: string) => void;
}

export default function Header({ cartItems, onCartClick, onLoginClick, onSearch }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 animate-slideDown">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-8">
            <img
              src="/oma sport.png"
              alt="Oma Sport"
              className="h-12 w-auto object-contain hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg"
            />

            <nav className="hidden lg:flex space-x-6">
              <a href="#accueil" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Accueil</a>
              <a href="#produits" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Produits</a>
              <a href="#equipe" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Équipe</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium transition-colors">Contact</a>
            </nav>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher des produits..."
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300 group-hover:border-red-400"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 group-hover:text-red-600 transition-colors">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="font-medium">Connexion</span>
            </button>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-red-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t animate-slideDown">
            <nav className="flex flex-col space-y-3">
              <a href="#accueil" className="text-gray-700 hover:text-red-600 font-medium py-2">Accueil</a>
              <a href="#produits" className="text-gray-700 hover:text-red-600 font-medium py-2">Produits</a>
              <a href="#equipe" className="text-gray-700 hover:text-red-600 font-medium py-2">Équipe</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 font-medium py-2">Contact</a>
              <button
                onClick={onLoginClick}
                className="flex items-center space-x-2 text-gray-700 hover:text-red-600 py-2"
              >
                <User className="w-5 h-5" />
                <span className="font-medium">Connexion</span>
              </button>
            </nav>
            <form onSubmit={handleSearch} className="mt-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="w-5 h-5 text-gray-500" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
