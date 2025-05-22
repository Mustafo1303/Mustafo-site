import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Hotel, 
  Utensils, 
  Activity, 
  TreePine, 
  Waves, 
  Footprints,
  CalendarClock
} from 'lucide-react';

const Facilities = () => {
  const facilitiesList = [
    {
      icon: <Hotel className="h-12 w-12 text-clinic-primary" />,
      title: "Dam olish maskani",
      desc: "Tog' manzarasiga ega shinam xonalar, Wi-Fi, konditsioner va barcha zamonaviy qulayliklar bilan jihozlangan.",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      icon: <Utensils className="h-12 w-12 text-clinic-primary" />,
      title: "Milliy oshxona",
      desc: "Sog'lom va mazali taomlar, mahalliy oshpazlar tomonidan tayyorlangan. Maxsus parhez taomlar ham mavjud.",
      image: "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      icon: <TreePine className="h-12 w-12 text-clinic-primary" />,
      title: "Shifobaxsh bog'",
      desc: "Toza havoda sayr qilish va dam olish uchun mahsus loyihalashtirilgan ko'kalamzor hudud.",
      image: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      icon: <Waves className="h-12 w-12 text-clinic-primary" />,
      title: "Basseyn kompleksi",
      desc: "Mineral suv bilan to'ldirilgan ochiq va yopiq basseynlar, jakuzi va sauna bilan jihozlangan.",
      image: "https://images.pexels.com/photos/261041/pexels-photo-261041.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      icon: <Activity className="h-12 w-12 text-clinic-primary" />,
      title: "Sport majmuasi",
      desc: "Zamonaviy trenajyorlar bilan jihozlangan fitnes zali, yoga va pilates mashg'ulotlari uchun xonalar.",
      image: "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      icon: <Footprints className="h-12 w-12 text-clinic-primary" />,
      title: "Sayyohlik yo'laklari",
      desc: "Turli qiyinlik darajasidagi maxsus belgilangan sayyohlik yo'laklari, gid xizmati mavjud.",
      image: "https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-clinic-primary to-clinic-secondary text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Muassasalar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tog' Shifo majmuasida davolanish bilan birga to'liq dam olishingiz uchun barcha shart-sharoitlar yaratilgan
          </p>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesList.map((facility, idx) => (
              <div key={idx} className="card overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 text-clinic-primary">{facility.icon}</div>
                    <h3 className="text-xl font-bold text-clinic-dark">{facility.title}</h3>
                  </div>
                  <p className="text-gray-600">{facility.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-clinic-dark">Dam olish maskani</h2>
              <p className="text-gray-600 mb-6">
                Tog' Shifo majmuasidagi dam olish maskani mehmonlarga yuqori darajada qulaylik va osoyishtalikni ta'minlaydi. Har bir xona tog' manzarasiga ega bo'lib, zamonaviy jihozlar bilan ta'minlangan.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <Hotel className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Xona turlari</h4>
                    <p className="text-gray-600">Standart, lyuks va oilaviy xonalar mavjud</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <Utensils className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Ovqatlanish</h4>
                    <p className="text-gray-600">Barcha xonalar nonushta bilan ta'minlanadi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <Waves className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Qo'shimcha xizmatlar</h4>
                    <p className="text-gray-600">Basseyn, sauna va fitnes markaziga kirish imkoniyati</p>
                  </div>
                </div>
              </div>
              
              <Link to="/clinic/booking" className="btn btn-primary-clinic">
                Xona band qilish
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Mehmonxona xonasi" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Mehmonxona xonasi" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Hammom" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Xona ko'rinishi" 
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Restoran" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Milliy taomlar" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
                <img 
                  src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Milliy taomlar" 
                  className="w-full h-64 object-cover rounded-lg shadow-md col-span-2"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6 text-clinic-dark">Milliy oshxona</h2>
              <p className="text-gray-600 mb-6">
                Tog' Shifo majmuasidagi milliy oshxona o'zbek va jahon oshxonasining eng mazali taomlarini taqdim etadi. Barcha taomlar sifatli va yangi mahsulotlardan tayyorlanadi.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <Utensils className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Taomlar</h4>
                    <p className="text-gray-600">O'zbek milliy taomlari va jahon oshxonasi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <Activity className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Sog'lom ovqatlanish</h4>
                    <p className="text-gray-600">Dietologlar tomonidan ishlab chiqilgan maxsus menyular</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-clinic-light p-2 rounded-full mr-4 mt-1">
                    <CalendarClock className="h-5 w-5 text-clinic-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1 text-clinic-dark">Ish vaqti</h4>
                    <p className="text-gray-600">Har kuni 7:00 dan 22:00 gacha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-clinic-accent">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-clinic-dark">Tog' Shifoda dam oling va sog'lomlashtiring</h2>
            <p className="text-lg mb-8 text-gray-700">
              Bizning muassasalarimiz sizga dam olish va sog'lomlashtirish uchun eng yaxshi sharoitlarni taqdim etadi. Hoziroq xona band qiling va ajoyib tajribadan bahramand bo'ling.
            </p>
            <Link to="/clinic/booking" className="btn btn-primary-clinic inline-flex items-center">
              <CalendarClock className="h-5 w-5 mr-2" />
              Hoziroq band qiling
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;