import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ShoppingBag } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold mb-8 text-gray-800">
          Xush kelibsiz!
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl">
          Quyidagi ikki saytdan birini tanlang
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Clinic Card */}
          <Link to="/clinic" className="group">
            <div className="card p-8 h-full flex flex-col items-center text-center group-hover:scale-105">
              <div className="bg-clinic-light w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <Building2 className="w-10 h-10 text-clinic-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-clinic-dark">Tog' Klinikasi</h2>
              <p className="text-gray-600 mb-6">
                Tog'lik hududdagi zamonaviy davolash maskani va dam olish majmuasi
              </p>
              <button className="btn btn-primary-clinic mt-auto">
                Tashrif buyurish
              </button>
            </div>
          </Link>
          
          {/* Store Card */}
          <Link to="/store" className="group">
            <div className="card p-8 h-full flex flex-col items-center text-center group-hover:scale-105">
              <div className="bg-store-light w-20 h-20 rounded-full flex items-center justify-center mb-6">
                <ShoppingBag className="w-10 h-10 text-store-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-store-dark">Internet Do'kon</h2>
              <p className="text-gray-600 mb-6">
                Kiyimlar, oziq-ovqat mahsulotlari, texnika va uy jihozlari do'koni
              </p>
              <button className="btn btn-primary-store mt-auto">
                Harid qilish
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;