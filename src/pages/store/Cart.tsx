import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ChevronLeft
} from 'lucide-react';
import { formatPrice } from '../../data/products';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    address: '',
    city: '',
    zipCode: ''
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would send the order to a server
    alert('Buyurtmangiz muvaffaqiyatli qabul qilindi!');
    
    // Clear the cart and reset form
    clearCart();
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      address: '',
      city: '',
      zipCode: ''
    });
    setIsCheckingOut(false);
  };

  // Calculate delivery fee and total
  const deliveryFee = totalPrice >= 100000 ? 0 : 15000;
  const grandTotal = totalPrice + deliveryFee;
  
  return (
    <div className="animate-fade-in">
      <div className="bg-gray-50 py-4">
        <div className="container-custom">
          <Link to="/store/products" className="text-gray-600 hover:text-store-primary flex items-center">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Xarid qilishni davom ettirish
          </Link>
        </div>
      </div>
      
      <section className="section bg-white">
        <div className="container-custom">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Savatcha</h1>
          
          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-medium mb-2 text-gray-700">Savatchangiz bo'sh</h2>
              <p className="text-gray-600 mb-6">
                Xarid qilish uchun mahsulotlarni savatchaga qo'shing.
              </p>
              <Link to="/store/products" className="btn btn-primary-store">
                Xarid qilishni boshlash
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 text-gray-700 font-medium">
                    <div className="col-span-6">Mahsulot</div>
                    <div className="col-span-2 text-center">Narx</div>
                    <div className="col-span-2 text-center">Miqdor</div>
                    <div className="col-span-2 text-center">Jami</div>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {cartItems.map(item => (
                      <div key={item.product.id} className="p-4 md:grid md:grid-cols-12 md:gap-4 md:items-center flex flex-wrap">
                        {/* Product info */}
                        <div className="col-span-6 flex items-center mb-4 md:mb-0">
                          <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-4">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <Link 
                              to={`/store/product/${item.product.id}`}
                              className="font-medium text-gray-800 hover:text-store-primary line-clamp-1"
                            >
                              {item.product.name}
                            </Link>
                            <button 
                              onClick={() => removeFromCart(item.product.id)}
                              className="text-red-500 hover:text-red-700 text-sm flex items-center mt-1"
                            >
                              <Trash2 className="h-3.5 w-3.5 mr-1" />
                              O'chirish
                            </button>
                          </div>
                        </div>
                        
                        {/* Price */}
                        <div className="col-span-2 text-center">
                          <div className="md:hidden text-sm text-gray-500 mb-1">Narx:</div>
                          <div>{formatPrice(item.product.price)}</div>
                        </div>
                        
                        {/* Quantity */}
                        <div className="col-span-2 flex justify-center items-center mt-3 md:mt-0">
                          <div className="md:hidden text-sm text-gray-500 mr-3">Miqdor:</div>
                          <div className="flex items-center border border-gray-300 rounded-md">
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                              className="px-2 py-1 text-gray-600 hover:text-store-primary"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="px-3 py-1 border-l border-r border-gray-300 min-w-[32px] text-center">
                              {item.quantity}
                            </span>
                            <button 
                              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                              className="px-2 py-1 text-gray-600 hover:text-store-primary"
                              disabled={item.quantity >= item.product.stock}
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                        
                        {/* Total */}
                        <div className="col-span-2 text-center font-medium text-store-dark mt-3 md:mt-0">
                          <div className="md:hidden text-sm text-gray-500 mb-1">Jami:</div>
                          <div>{formatPrice(item.product.price * item.quantity)}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 bg-gray-50 flex justify-between items-center">
                    <button 
                      onClick={clearCart}
                      className="text-gray-600 hover:text-red-500 text-sm flex items-center"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Savatchani tozalash
                    </button>
                    <Link to="/store/products" className="text-store-primary hover:underline text-sm flex items-center">
                      Xarid qilishni davom ettirish
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-bold mb-4 text-gray-800">Buyurtma ma'lumotlari</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Mahsulotlar ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</span>
                      <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Yetkazib berish</span>
                      <span>{deliveryFee === 0 ? 'Bepul' : formatPrice(deliveryFee)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3">
                      <div className="flex justify-between font-bold text-gray-800">
                        <span>Jami</span>
                        <span>{formatPrice(grandTotal)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {!isCheckingOut ? (
                    <button 
                      onClick={() => setIsCheckingOut(true)}
                      className="btn btn-primary-store w-full"
                    >
                      Buyurtma berish
                    </button>
                  ) : (
                    <form onSubmit={handleCheckout}>
                      <h3 className="text-lg font-medium mb-4 text-gray-800">Ma'lumotlaringizni kiriting</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                            To'liq ism <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                            Telefon raqam <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            required
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                            Manzil <span className="text-red-500">*</span>
                          </label>
                          <textarea
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows={2}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            required
                          ></textarea>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                              Shahar <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                              required
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                              Pochta indeksi
                            </label>
                            <input
                              type="text"
                              id="zipCode"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-col space-y-2">
                        <button type="submit" className="btn btn-primary-store w-full flex items-center justify-center">
                          Buyurtmani yakunlash
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setIsCheckingOut(false)}
                          className="btn bg-gray-200 text-gray-700 hover:bg-gray-300 w-full"
                        >
                          Orqaga
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Cart;