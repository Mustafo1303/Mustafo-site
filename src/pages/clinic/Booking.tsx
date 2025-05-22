import React, { useState } from 'react';
import { 
  CalendarDays, 
  User, 
  Phone, 
  Mail, 
  MessageSquare, 
  Clock, 
  CheckCircle2,
  Building2
} from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        service: '',
        message: '',
      });
    }, 3000);
  };
  
  const services = [
    "Kardiologiya ko'rigi",
    "Nevrologiya ko'rigi",
    "Terapevt ko'rigi",
    "Fizioterapiya",
    "Laboratoriya tekshiruvi",
    "Sanatoriya davolash kursi",
    "Dam olish maskani",
    "Stress boshqaruvi dasturi",
    "Sog'lom yurak dasturi",
    "Detoks dasturi",
    "Ortopedik reabilitatsiya"
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-clinic-dark to-clinic-primary text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/7108344/pexels-photo-7108344.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Qabulga yozilish</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Xizmatlarimizdan foydalanish uchun quyidagi forma orqali navbatga yoziling
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                {/* Left side - Info */}
                <div className="md:w-1/3 bg-clinic-primary text-white p-8">
                  <div className="flex items-center mb-8">
                    <Building2 className="h-8 w-8 mr-2" />
                    <h2 className="text-2xl font-bold">Tog' Shifo</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Bog'lanish</h3>
                      <p className="flex items-center mb-2">
                        <Phone className="h-5 w-5 mr-2" />
                        +998 90 123 45 67
                      </p>
                      <p className="flex items-center">
                        <Mail className="h-5 w-5 mr-2" />
                        info@togshifo.uz
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Manzil</h3>
                      <p className="mb-2">Tog' ko'chasi, 123-uy</p>
                      <p>Toshkent viloyati, O'zbekiston</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Ish vaqti</h3>
                      <p className="flex items-center mb-2">
                        <Clock className="h-5 w-5 mr-2" />
                        Du-Ju: 8:00 - 18:00
                      </p>
                      <p className="flex items-center mb-2">
                        <Clock className="h-5 w-5 mr-2" />
                        Sh: 9:00 - 15:00
                      </p>
                      <p className="flex items-center">
                        <Clock className="h-5 w-5 mr-2" />
                        Ya: Dam olish kuni
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Form */}
                <div className="md:w-2/3 p-8">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center h-full text-center py-12">
                      <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">Muvaffaqiyatli yuborildi!</h3>
                      <p className="text-gray-600 mb-6">
                        Sizning so'rovingiz qabul qilindi. Tez orada siz bilan bog'lanamiz.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold mb-6 text-clinic-dark">Qabulga yozilish shakli</h3>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                              F.I.Sh <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="input input-clinic pl-10"
                                placeholder="To'liq ismingiz"
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">
                              Telefon <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Phone className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="input input-clinic pl-10"
                                placeholder="+998 XX XXX XX XX"
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                              Email
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-clinic pl-10"
                                placeholder="sizning@email.uz"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="service" className="block mb-1 font-medium text-gray-700">
                              Xizmat turi <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="input input-clinic"
                              required
                            >
                              <option value="">Xizmat turini tanlang</option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>
                                  {service}
                                </option>
                              ))}
                            </select>
                          </div>
                          
                          <div>
                            <label htmlFor="date" className="block mb-1 font-medium text-gray-700">
                              Sana <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <CalendarDays className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="input input-clinic pl-10"
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="time" className="block mb-1 font-medium text-gray-700">
                              Vaqt <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <Clock className="h-5 w-5 text-gray-400" />
                              </div>
                              <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="input input-clinic pl-10"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                            Qo'shimcha ma'lumot
                          </label>
                          <div className="relative">
                            <div className="absolute top-3 left-3 pointer-events-none">
                              <MessageSquare className="h-5 w-5 text-gray-400" />
                            </div>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              rows={4}
                              className="input input-clinic pl-10"
                              placeholder="Qo'shimcha ma'lumot yoki savollaringiz"
                            ></textarea>
                          </div>
                        </div>
                        
                        <button type="submit" className="btn btn-primary-clinic w-full">
                          Yuborish
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instruction Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-clinic-dark">
              Qabulga yozilish bo'yicha yo'riqnoma
            </h2>
            <p className="text-gray-600">
              Tog' Shifo majmuasida xizmatlardan foydalanish uchun quyidagi bosqichlarni bajarishingiz mumkin
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Band qilish",
                desc: "Yuqoridagi shaklni to'ldiring yoki telefon orqali bog'laning"
              },
              {
                number: "02",
                title: "Tasdiqlash",
                desc: "Biz sizning so'rovingizni tasdiqlab, qo'shimcha ma'lumot beramiz"
              },
              {
                number: "03",
                title: "Tashrif buyurish",
                desc: "Belgilangan vaqtda klinikaga tashrif buyuring"
              }
            ].map((step, idx) => (
              <div key={idx} className="card p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <span className="absolute -right-4 -top-4 text-8xl font-bold text-gray-100 group-hover:text-clinic-light transition-colors duration-300">
                  {step.number}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 text-clinic-dark">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;