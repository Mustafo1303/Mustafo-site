import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, X, Building2, Phone } from 'lucide-react';

const ClinicLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Bosh sahifa', path: '/clinic' },
    { name: 'Xizmatlar', path: '/clinic/services' },
    { name: 'Muassasalar', path: '/clinic/facilities' },
    { name: 'Band qilish', path: '/clinic/booking' },
    { name: 'Aloqa', path: '/clinic/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-clinic-light">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/clinic" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-clinic-primary" />
              <span className="text-xl font-bold text-clinic-dark">Tog' Shifo</span>
            </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium hover:text-clinic-primary transition-colors ${
                      isActive ? 'text-clinic-primary border-b-2 border-clinic-primary' : 'text-gray-700'
                    }`
                  }
                  end={item.path === '/clinic'}
                >
                  {item.name}
                </NavLink>
              ))}
              <a
                href="tel:+998901234567"
                className="btn btn-primary-clinic flex items-center space-x-2"
              >
                <Phone className="h-4 w-4" />
                <span>+998 90 123 45 67</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-clinic-primary"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white py-4 px-6 border-t border-gray-100 animate-slide-down">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `block py-2 text-base font-medium hover:text-clinic-primary transition-colors ${
                        isActive ? 'text-clinic-primary' : 'text-gray-700'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                    end={item.path === '/clinic'}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <li>
                <a
                  href="tel:+998901234567"
                  className="block py-2 text-base font-medium text-clinic-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  +998 90 123 45 67
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-clinic-dark text-white py-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Building2 className="h-6 w-6 mr-2" />
                Tog' Shifo
              </h3>
              <p className="mb-4 text-gray-300">
                Tog'lik rayonda joylashgan zamonaviy klinika va dam olish majmuasi
              </p>
              <p className="text-gray-300">
                © 2025 Tog' Shifo. Barcha huquqlar himoyalangan.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Bog'lanish</h4>
              <address className="not-italic text-gray-300">
                <p className="mb-2">Tog' ko'chasi, 123-uy</p>
                <p className="mb-2">Toshkent viloyati, O'zbekiston</p>
                <p className="mb-2">+998 90 123 45 67</p>
                <p>info@togshifo.uz</p>
              </address>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Ish vaqti</h4>
              <ul className="text-gray-300">
                <li className="mb-2">Dushanba - Juma: 8:00 - 18:00</li>
                <li className="mb-2">Shanba: 9:00 - 15:00</li>
                <li>Yakshanba: Dam olish kuni</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClinicLayout;