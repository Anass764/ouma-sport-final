import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Cart from './components/Cart';
import LoginModal from './components/LoginModal';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { products } from './data/products';
import { Product, CartItem } from './types/product';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery]);

  const handleAddToCart = (product: Product, quantity = 1, size?: string, color?: string) => {
    const newItem: CartItem = {
      ...product,
      quantity,
      selectedSize: size || product.sizes[0],
      selectedColor: color || product.colors[0]
    };

    setCartItems(prev => {
      const existingItem = prev.find(
        item => item.id === product.id &&
        item.selectedSize === newItem.selectedSize &&
        item.selectedColor === newItem.selectedColor
      );

      if (existingItem) {
        return prev.map(item =>
          item.id === product.id &&
          item.selectedSize === newItem.selectedSize &&
          item.selectedColor === newItem.selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, newItem];
    });
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoginOpen(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const productsSection = document.getElementById('produits');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItems={cartItems}
        onCartClick={() => setIsCartOpen(true)}
        onLoginClick={() => setIsLoginOpen(true)}
        onSearch={handleSearch}
      />

      <Hero />

      <section id="produits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Nos Produits</h2>
            <p className="text-xl text-gray-600">Découvrez notre collection de vêtements de sport</p>
            {searchQuery && (
              <p className="text-lg text-red-600 mt-4">
                {filteredProducts.length} résultat(s) pour "{searchQuery}"
              </p>
            )}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">Aucun produit trouvé pour "{searchQuery}"</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-slideUp"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onViewDetails={setSelectedProduct}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Team />
      <Contact />
      <Footer />

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onLogin={handleLogin}
      />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product, quantity, size, color) => {
            handleAddToCart(product, quantity, size, color);
          }}
        />
      )}

      {userEmail && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-slideUp">
          Connecté en tant que {userEmail}
        </div>
      )}
    </div>
  );
}

export default App;
