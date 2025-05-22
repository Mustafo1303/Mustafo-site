import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  Headphones, 
  ChevronRight, 
  Star,
  ShoppingBag
} from 'lucide-react';
import { 
  getNewProducts, 
  getDiscountedProducts, 
  formatPrice, 
  Product 
} from '../../data/products';

const Home = () => {
  const newProducts = getNewProducts(8);
  const discountedProducts = getDiscountedProducts(4);
  
  const categories = [
    {
      name: "Kiyimlar",
      path: "/store/products/clothing",
      image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Oziq-ovqat",
      path: "/store/products/food",
      image: "https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Texnika",
      path: "/store/products/electronics",
      image: "https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      name: "Uy jihozlari",
      path: "/store/products/home",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];

  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <div className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-56 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {product.discount && (
            <div className="absolute top-2 left-2 bg-store-accent text-white text-sm font-bold px-2 py-1 rounded">
              -{product.discount}%
            </div>
          )}
          {product.isNew && (
            <div className="absolute top-2 right-2 bg-store-success text-white text-sm font-bold px-2 py-1 rounded">
              Yangi
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex items-center text-yellow-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
              />
            ))}
            <span className="text-gray-600 text-sm ml-1">{product.rating}</span>
          </div>
          <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-store-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-store-dark">
              {formatPrice(product.price)}
            </span>
            <Link 
              to={`/store/product/${product.id}`} 
              className="text-store-primary hover:text-store-secondary font-medium"
            >
              Batafsil
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-gray-100 overflow-hidden">
        <div className="container-custom py-16 md:py-24 lg:min-h-[600px] flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-store-dark">
                Sifatli mahsulotlar va qulay narxlar
              </h1>
              <p className="text-xl mb-8 text-gray-600">
                OnlineMarket - kiyimlar, oziq-ovqat, texnika va uy jihozlarini qulay narxlarda sotib olish uchun eng yaxshi joy
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/store/products" className="btn btn-primary-store">
                  Harid qilish
                </Link>
                <Link to="/store/products/electronics" className="btn bg-gray-200 text-gray-800 hover:bg-gray-300">
                  Yangi texnikalar
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img 
                src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Online Shopping" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-bounce hidden md:block">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-store-light rounded-full flex items-center justify-center mr-3">
                    <ShoppingBag className="h-6 w-6 text-store-primary" />
                  </div>
                  <div>
                    <p className="text-store-dark font-bold">Maxsus taklif</p>
                    <p className="text-store-accent">20% chegirma</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-store-dark">Kategoriyalar</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Bizning keng kategoriyalar to'plamidan o'zingizga kerakli mahsulotlarni tanlang
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <Link key={idx} to={category.path} className="group">
                <div className="card overflow-hidden">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                      <h3 className="text-white text-2xl font-bold">{category.name}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Truck className="h-10 w-10 text-store-primary" />,
                title: "Bepul yetkazib berish",
                desc: "100 000 so'mdan ortiq xaridlar uchun"
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-store-primary" />,
                title: "Xavfsiz to'lov",
                desc: "100% xavfsiz to'lov tizimi"
              },
              {
                icon: <CreditCard className="h-10 w-10 text-store-primary" />,
                title: "Qulay to'lov usullari",
                desc: "Naqd pul, karta va boshqa usullar"
              },
              {
                icon: <Headphones className="h-10 w-10 text-store-primary" />,
                title: "24/7 qo'llab-quvvatlash",
                desc: "Har qanday savolga yordam"
              }
            ].map((feature, idx) => (
              <div key={idx} className="card p-6 hover:shadow-lg transition-all">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-store-dark">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-store-dark">Yangi mahsulotlar</h2>
            <Link to="/store/products" className="text-store-primary font-medium flex items-center hover:underline">
              Barchasini ko'rish <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-16 bg-store-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Maxsus takliflar</h2>
              <p className="text-xl mb-6 text-store-light">
                Chegirmadagi mahsulotlarimizdan foydalaning va 50% gacha tejang!
              </p>
              <Link to="/store/products" className="btn bg-white text-store-primary hover:bg-store-light">
                Hoziroq xarid qiling
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {discountedProducts.map(product => (
                <Link key={product.id} to={`/store/product/${product.id}`} className="group">
                  <div className="bg-white rounded-lg p-3 flex flex-col items-center text-center group-hover:shadow-lg transition-all">
                    <div className="relative mb-2">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-24 h-24 object-cover rounded"
                      />
                      <span className="absolute -top-2 -right-2 bg-store-accent text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                        -{product.discount}%
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 line-clamp-1 mb-1">{product.name}</h3>
                    <p className="text-store-primary font-bold text-sm">{formatPrice(product.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-store-dark">Yangiliklarga obuna bo'ling</h2>
            <p className="text-gray-600 mb-8">
              Eng so'nggi yangiliklarni va maxsus takliflarni olish uchun bizning xabar jo'natmalarimizga obuna bo'ling
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-grow py-3 px-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                required
              />
              <button type="submit" className="btn btn-primary-store whitespace-nowrap">
                Obuna bo'lish
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;