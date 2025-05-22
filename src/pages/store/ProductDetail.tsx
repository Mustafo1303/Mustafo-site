import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  ChevronLeft,
  Plus,
  Minus,
  ShoppingCart,
  Check
} from 'lucide-react';
import { getProductById, formatPrice, getProductsByCategory, Product } from '../../data/products';
import { useCart } from '../../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, cartItems } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  // Load product details
  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      
      if (foundProduct) {
        setProduct(foundProduct);
        document.title = `${foundProduct.name} - OnlineMarket`;
        
        // Get related products
        const related = getProductsByCategory(foundProduct.category)
          .filter(p => p.id !== productId)
          .slice(0, 4);
        setRelatedProducts(related);
      } else {
        // Product not found, redirect to products page
        navigate('/store/products');
      }
    }
  }, [id, navigate]);
  
  // Check if product is in cart
  useEffect(() => {
    if (product) {
      const inCart = cartItems.some(item => item.product.id === product.id);
      setIsAddedToCart(inCart);
    }
  }, [product, cartItems]);
  
  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      setIsAddedToCart(true);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setIsAddedToCart(false);
      }, 3000);
    }
  };
  
  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  
  const increaseQuantity = () => {
    setQuantity(prev => (prev < (product?.stock || 10) ? prev + 1 : prev));
  };
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-store-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link to="/store/products" className="text-gray-600 hover:text-store-primary flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Mahsulotlarga qaytish
          </Link>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div>
              <div className="bg-gray-100 rounded-lg overflow-hidden h-[400px] flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                    />
                  ))}
                </div>
                <span className="text-gray-600">{product.rating} reyting</span>
              </div>
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-store-primary mb-2">
                  {formatPrice(product.price)}
                </h2>
                <p className="text-gray-600">
                  Mavjud: <span className={product.stock > 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                    {product.stock > 0 ? `${product.stock} dona` : 'Tugagan'}
                  </span>
                </p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Tavsif</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                
                {product.features && product.features.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Xususiyatlari</h3>
                    <ul className="list-disc pl-5 text-gray-700 space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-32 mr-4">Miqdor:</div>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <button 
                      onClick={decreaseQuantity}
                      className="px-3 py-1 text-gray-600 hover:text-store-primary"
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-1 border-l border-r border-gray-300 min-w-[40px] text-center">
                      {quantity}
                    </span>
                    <button 
                      onClick={increaseQuantity}
                      className="px-3 py-1 text-gray-600 hover:text-store-primary"
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={handleAddToCart}
                    disabled={product.stock === 0 || isAddedToCart}
                    className={`btn ${
                      isAddedToCart 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : product.stock === 0 
                          ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
                          : 'btn-primary-store'
                    } flex items-center`}
                  >
                    {isAddedToCart ? (
                      <>
                        <Check className="h-5 w-5 mr-2" />
                        Savatchaga qo'shildi
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        {product.stock === 0 ? 'Tugagan' : 'Savatchaga qo\'shish'}
                      </>
                    )}
                  </button>
                  
                  <Link 
                    to="/store/cart" 
                    className="btn border-2 border-store-primary text-store-primary hover:bg-store-primary hover:text-white"
                  >
                    Savatchaga o'tish
                  </Link>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-store-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Bepul yetkazib berish</p>
                    <p className="text-sm text-gray-600">100 000 so'mdan ortiq xaridlar uchun</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-store-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Sifat kafolati</p>
                    <p className="text-sm text-gray-600">100% original mahsulotlar</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <RotateCcw className="h-5 w-5 text-store-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">30 kun ichida qaytarish</p>
                    <p className="text-sm text-gray-600">Agar mahsulot sifati qoniqarsiz bo'lsa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Products */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">O'xshash mahsulotlar</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(related => (
              <div key={related.id} className="card group overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Link to={`/store/product/${related.id}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {related.discount && (
                      <div className="absolute top-2 left-2 bg-store-accent text-white text-sm font-bold px-2 py-1 rounded">
                        -{related.discount}%
                      </div>
                    )}
                    {related.isNew && (
                      <div className="absolute top-2 right-2 bg-store-success text-white text-sm font-bold px-2 py-1 rounded">
                        Yangi
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-center text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(related.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                      />
                    ))}
                    <span className="text-gray-600 text-sm ml-1">{related.rating}</span>
                  </div>
                  <Link to={`/store/product/${related.id}`}>
                    <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-store-primary transition-colors line-clamp-1">
                      {related.name}
                    </h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{related.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-store-dark">
                      {formatPrice(related.price)}
                    </span>
                    <button 
                      onClick={() => addToCart(related)}
                      className="p-2 text-store-primary hover:text-white hover:bg-store-primary rounded-full transition-colors"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;