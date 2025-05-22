import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Clinic Components
import ClinicLayout from './components/clinic/ClinicLayout';
import ClinicHome from './pages/clinic/Home';
import Services from './pages/clinic/Services';
import Facilities from './pages/clinic/Facilities';
import Booking from './pages/clinic/Booking';
import Contact from './pages/clinic/Contact';

// Import Store Components
import StoreLayout from './components/store/StoreLayout';
import StoreHome from './pages/store/Home';
import Products from './pages/store/Products';
import ProductDetail from './pages/store/ProductDetail';
import Cart from './pages/store/Cart';
import Profile from './pages/store/Profile';

// Import Landing Page for choosing website
import LandingPage from './pages/LandingPage';

// Import Cart Context Provider
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Clinic Routes */}
        <Route path="/clinic" element={<ClinicLayout />}>
          <Route index element={<ClinicHome />} />
          <Route path="services" element={<Services />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="booking" element={<Booking />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        
        {/* Store Routes */}
        <Route path="/store" element={<StoreLayout />}>
          <Route index element={<StoreHome />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:category" element={<Products />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;