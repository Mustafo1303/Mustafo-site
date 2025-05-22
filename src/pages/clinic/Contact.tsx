import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  User,
  MessageSquare,
  CheckCircle2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        email: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-r from-clinic-primary to-clinic-dark text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/268941/pexels-photo-268941.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Bog'lanish</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Savollaringiz bo'lsa yoki qo'shimcha ma'lumot olishni istasangiz, biz bilan bog'laning
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="h-10 w-10 text-clinic-primary" />,
                title: "Telefon",
                info: ["+998 90 123 45 67", "+998 71 123 45 67"]
              },
              {
                icon: <Mail className="h-10 w-10 text-clinic-primary" />,
                title: "Email",
                info: ["info@togshifo.uz", "qabulxona@togshifo.uz"]
              },
              {
                icon: <MapPin className="h-10 w-10 text-clinic-primary" />,
                title: "Manzil",
                info: ["Tog' ko'chasi, 123-uy", "Toshkent viloyati, O'zbekiston"]
              },
              {
                icon: <Clock className="h-10 w-10 text-clinic-primary" />,
                title: "Ish vaqti",
                info: ["Du-Ju: 8:00 - 18:00", "Sh: 9:00 - 15:00", "Ya: Dam olish kuni"]
              }
            ].map((item, idx) => (
              <div key={idx} className="card p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="inline-flex items-center justify-center p-3 bg-clinic-light rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-clinic-dark">{item.title}</h3>
                {item.info.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Contact Form */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="card overflow-hidden h-[450px]">
              {/* This is a placeholder for an actual map. In a real application, you would use Google Maps or another map service */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-clinic-primary mx-auto mb-2" />
                  <p className="text-gray-600">
                    Bu yerda interaktiv xarita bo'ladi. <br />
                    (Amaliy loyihada Google Maps yoki boshqa xarita xizmati qo'llaniladi)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold mb-6 text-clinic-dark">Bizga xabar yuboring</h2>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Xabaringiz yuborildi!</h3>
                  <p className="text-gray-600 mb-6">
                    Sizning xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bog'lanamiz.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
                        Ismingiz <span className="text-red-500">*</span>
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
                          placeholder="Ismingiz"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
                        Email <span className="text-red-500">*</span>
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
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block mb-1 font-medium text-gray-700">
                      Mavzu <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input input-clinic"
                      required
                    >
                      <option value="">Mavzuni tanlang</option>
                      <option value="Umumiy savol">Umumiy savol</option>
                      <option value="Xizmatlar haqida">Xizmatlar haqida</option>
                      <option value="Narxlar haqida">Narxlar haqida</option>
                      <option value="Band qilish">Band qilish</option>
                      <option value="Boshqa">Boshqa</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
                      Xabar <span className="text-red-500">*</span>
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
                        rows={5}
                        className="input input-clinic pl-10"
                        placeholder="Xabaringizni yozing..."
                        required
                      ></textarea>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary-clinic flex items-center justify-center w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Yuborish
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-clinic-dark">
              Ko'p beriladigan savollar
            </h2>
            <p className="text-gray-600">
              Mijozlar tomonidan eng ko'p beriladigan savollarga javoblar
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "Tog' Shifo klinikasiga qanday tashrif buyurish mumkin?",
                  a: "Tog' Shifo klinikasiga tashrif buyurish uchun oldindan qabulga yozilish kerak. Buning uchun bizning veb-saytimizda band qilish formasini to'ldiring yoki telefon orqali bog'laning."
                },
                {
                  q: "Dam olish maskanida qancha vaqt qolish mumkin?",
                  a: "Dam olish maskanida qolish muddati 1 kundan 30 kungacha bo'lishi mumkin. Aniq muddat tanlangan davolanish kursiga va sizning ehtiyojlaringizga qarab belgilanadi."
                },
                {
                  q: "Davolanish kurslarining narxlari qanday?",
                  a: "Davolanish kurslari narxlari tanlangan xizmat turiga, muddatiga va qo'shimcha xizmatlarga qarab farq qiladi. Aniq narxlarni bilish uchun biz bilan bog'laning."
                },
                {
                  q: "Dam olish maskani xonalariga hayvonlar bilan kirish mumkinmi?",
                  a: "Afsuski, dam olish maskani xonalariga hayvonlar bilan kirish mumkin emas. Bu boshqa mehmonlarning qulayligi va xavfsizligi uchun qabul qilingan qoida."
                }
              ].map((faq, idx) => (
                <div key={idx} className="card p-6 group hover:shadow-md transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2 text-clinic-dark group-hover:text-clinic-primary transition-colors duration-300">
                    {faq.q}
                  </h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;