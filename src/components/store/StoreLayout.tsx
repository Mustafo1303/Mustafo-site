import React, { useState } from 'react';
import { Outlet, NavLink, Link, useNavigate } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Search, 
  ShoppingCart, 
  User 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';

const StoreLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/store/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navItems = [
    { name: 'Bosh sahifa', path: '/store' },
    { name: 'Kiyimlar', path: '/store/products/clothing' },
    { name: 'Oziq-ovqat', path: '/store/products/food' },
    { name: 'Texnika', path: '/store/products/electronics' },
    { name: 'Uy jihozlari', path: '/store/products/home' },
  ];

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/store" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-store-primary" />
              <span className="text-xl font-bold text-store-dark">OnlineMarket</span>
            </NavLink>

            {/* Search Bar - Desktop */}
            <div className="hidden md:block flex-grow max-w-md mx-4">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Qidirish..."
                  className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:ring-opacity-50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <Search className="h-5 w-5 text-gray-400" />
                </button>
              </form>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-4">
              <Link to="/store/cart" className="relative p-2 text-gray-700 hover:text-store-primary">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-store-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
              <Link to="/store/profile" className="p-2 text-gray-700 hover:text-store-primary">
                <User className="h-6 w-6" />
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-store-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Categories Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-6 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-store-primary transition-colors ${
                    isActive ? 'text-store-primary border-b-2 border-store-primary' : 'text-gray-700'
                  }`
                }
                end={item.path === '/store'}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-6 border-t border-gray-100 animate-slide-down">
            {/* Search Bar - Mobile */}
            <form onSubmit={handleSearch} className="relative mb-4">
              <input
                type="text"
                placeholder="Qidirish..."
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:ring-opacity-50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute inset-y-0 left-0 flex items-center pl-3"
              >
                <Search className="h-5 w-5 text-gray-400" />
              </button>
            </form>

            {/* Nav Links - Mobile */}
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 text-base font-medium hover:text-store-primary transition-colors ${
                        isActive ? 'text-store-primary' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                    end={item.path === '/store'}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex space-x-4">
                  <Link
                    to="/store/cart"
                    className="flex items-center py-2 text-base font-medium text-gray-700 hover:text-store-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Savatcha
                    {cartItemCount > 0 && (
                      <span className="ml-2 bg-store-accent text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                  <Link
                    to="/store/profile"
                    className="flex items-center py-2 text-base font-medium text-gray-700 hover:text-store-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-5 w-5 mr-2" />
                    Profil
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-store-dark text-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <ShoppingBag className="h-6 w-6 mr-2" />
                OnlineMarket
              </h3>
              <p className="mb-4 text-gray-300">
                Sifatli mahsulotlar va qulay narxlar bilan o'z faoliyatini olib borayotgan internet do'kon
              </p>
              <p className="text-gray-300">
                © 2025 OnlineMarket. Barcha huquqlar himoyalangan.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Kategoriyalar</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/store/products/clothing" className="text-gray-300 hover:text-white transition-colors">
                    Kiyimlar
                  </Link>
                </li>
                <li>
                  <Link to="/store/products/food" className="text-gray-300 hover:text-white transition-colors">
                    Oziq-ovqat
                  </Link>
                </li>
                <li>
                  <Link to="/store/products/electronics" className="text-gray-300 hover:text-white transition-colors">
                    Texnika
                  </Link>
                </li>
                <li>
                  <Link to="/store/products/home" className="text-gray-300 hover:text-white transition-colors">
                    Uy jihozlari
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Mijozlarga</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/store/profile" className="text-gray-300 hover:text-white transition-colors">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/store/cart" className="text-gray-300 hover:text-white transition-colors">
                    Savatcha
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    Yetkazib berish
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    To'lov usullari
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Bog'lanish</h4>
              <address className="not-italic text-gray-300 space-y-2">
                <p>Toshkent shahri, Mustaqillik ko'chasi, 15-uy</p>
                <p>+998 90 123 45 67</p>
                <p>info@onlinemarket.uz</p>
                <div className="flex space-x-4 mt-4">
                  <a href="#" className="text-white hover:text-store-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-store-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="text-white hover:text-store-accent transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </address>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StoreLayout;