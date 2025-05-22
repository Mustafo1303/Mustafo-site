import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Lock, CheckSquare, Edit, Save } from 'lucide-react';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    fullName: 'Anvar Karimov',
    email: 'anvar@example.com',
    phone: '+998 90 123 45 67',
    address: 'Toshkent shahri, Yunusobod tumani, 12-mavze',
  });
  
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: '',
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPassword(prev => ({ ...prev, [name]: value }));
  };
  
  const saveProfile = () => {
    // In a real application, you would send this data to a server
    setEditMode(false);
    showNotification('Profil ma\'lumotlari muvaffaqiyatli saqlandi!', 'success');
  };
  
  const changePassword = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password.new !== password.confirm) {
      showNotification('Yangi parollar mos kelmadi!', 'error');
      return;
    }
    
    // In a real application, you would send this data to a server
    setPassword({
      current: '',
      new: '',
      confirm: '',
    });
    showNotification('Parol muvaffaqiyatli o\'zgartirildi!', 'success');
  };
  
  const showNotification = (message: string, type: string) => {
    setNotification({
      show: true,
      message,
      type,
    });
    
    setTimeout(() => {
      setNotification(prev => ({ ...prev, show: false }));
    }, 3000);
  };

  const orderHistory = [
    {
      id: '1234',
      date: '15.06.2025',
      total: '1,250,000 so\'m',
      status: 'Yetkazib berilgan',
      items: [
        { name: 'Smartfon', quantity: 1, price: '3,500,000 so\'m' },
        { name: 'Simsiz quloqchinlar', quantity: 1, price: '850,000 so\'m' },
      ]
    },
    {
      id: '1235',
      date: '03.06.2025',
      total: '480,000 so\'m',
      status: 'Yetkazib berilmoqda',
      items: [
        { name: 'Erkaklar uchun futbolka', quantity: 2, price: '240,000 so\'m' },
        { name: 'Ayollar uchun sharf', quantity: 2, price: '240,000 so\'m' },
      ]
    }
  ];

  return (
    <div className="animate-fade-in">
      <section className="bg-gray-100 py-12">
        <div className="container-custom">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Mening profilim</h1>
          <p className="text-gray-600">Profil ma'lumotlaringizni boshqaring va buyurtmalar tarixini ko'ring</p>
        </div>
      </section>
      
      {notification.show && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-md max-w-md ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          <p>{notification.message}</p>
        </div>
      )}
      
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-store-light w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    <User className="h-8 w-8 text-store-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{userData.fullName}</h2>
                    <p className="text-gray-600">{userData.email}</p>
                  </div>
                </div>
                
                <nav>
                  <ul className="space-y-1">
                    <li>
                      <a href="#profile" className="flex items-center py-2 px-3 rounded-md bg-store-light text-store-primary">
                        <User className="h-5 w-5 mr-3" />
                        Profil ma'lumotlari
                      </a>
                    </li>
                    <li>
                      <a href="#orders" className="flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100">
                        <CheckSquare className="h-5 w-5 mr-3" />
                        Buyurtmalar tarixi
                      </a>
                    </li>
                    <li>
                      <a href="#password" className="flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100">
                        <Lock className="h-5 w-5 mr-3" />
                        Parolni o'zgartirish
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Profile Information */}
              <div id="profile" className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-800">Profil ma'lumotlari</h2>
                  <button 
                    onClick={() => editMode ? saveProfile() : setEditMode(true)}
                    className="flex items-center text-store-primary hover:text-store-secondary"
                  >
                    {editMode ? (
                      <>
                        <Save className="h-5 w-5 mr-1" />
                        Saqlash
                      </>
                    ) : (
                      <>
                        <Edit className="h-5 w-5 mr-1" />
                        Tahrirlash
                      </>
                    )}
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        To'liq ism
                      </label>
                      {editMode ? (
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="fullName"
                            value={userData.fullName}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{userData.fullName}</span>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      {editMode ? (
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{userData.email}</span>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      {editMode ? (
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{userData.phone}</span>
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Manzil
                      </label>
                      {editMode ? (
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{userData.address}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Order History */}
              <div id="orders" className="bg-white rounded-lg shadow-sm p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Buyurtmalar tarixi</h2>
                
                {orderHistory.length === 0 ? (
                  <div className="text-center py-8 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">
                      Siz hali hech qanday buyurtma bermadingiz.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {orderHistory.map((order, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-3 flex flex-wrap justify-between items-center">
                          <div>
                            <span className="text-sm text-gray-500">Buyurtma #</span>
                            <span className="font-medium ml-1">{order.id}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Sana:</span>
                            <span className="font-medium ml-1">{order.date}</span>
                          </div>
                          <div>
                            <span className="text-sm text-gray-500">Jami:</span>
                            <span className="font-medium ml-1">{order.total}</span>
                          </div>
                          <div>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              order.status === 'Yetkazib berilgan' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {order.status}
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <table className="w-full text-sm">
                            <thead className="text-gray-500 text-left">
                              <tr className="border-b">
                                <th className="pb-2">Mahsulot</th>
                                <th className="pb-2 text-center">Miqdor</th>
                                <th className="pb-2 text-right">Narx</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y">
                              {order.items.map((item, itemIdx) => (
                                <tr key={itemIdx} className="py-2">
                                  <td className="py-3">{item.name}</td>
                                  <td className="py-3 text-center">{item.quantity}</td>
                                  <td className="py-3 text-right">{item.price}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Change Password */}
              <div id="password" className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Parolni o'zgartirish</h2>
                
                <form onSubmit={changePassword}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="current" className="block text-sm font-medium text-gray-700 mb-1">
                        Joriy parol
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="password"
                          id="current"
                          name="current"
                          value={password.current}
                          onChange={handlePasswordChange}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="new" className="block text-sm font-medium text-gray-700 mb-1">
                          Yangi parol
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="password"
                            id="new"
                            name="new"
                            value={password.new}
                            onChange={handlePasswordChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="confirm" className="block text-sm font-medium text-gray-700 mb-1">
                          Yangi parolni tasdiqlang
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <Lock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            value={password.confirm}
                            onChange={handlePasswordChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-store-primary focus:border-store-primary"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <button type="submit" className="btn btn-primary-store">
                        Parolni o'zgartirish
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;