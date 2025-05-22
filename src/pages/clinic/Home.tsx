import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  HeartPulse, 
  Hotel, 
  Microscope, 
  Utensils, 
  CalendarClock, 
  ChevronRight 
} from 'lucide-react';

const Home = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-clinic-dark to-clinic-primary text-white flex items-center">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        <div className="container-custom relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tog'lik hudud shifobaxsh maskani
            </h1>
            <p className="text-xl mb-8">
              Zamonaviy tibbiyot, shifobaxsh tog' havosi va professional xizmat — sog'lom hayot uchun
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/clinic/services" className="btn btn-secondary-clinic">
                Xizmatlarimiz
              </Link>
              <Link to="/clinic/booking" className="btn bg-white text-clinic-primary hover:bg-clinic-light">
                Band qilish
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-clinic-dark">
              Bizning xizmatlarimiz
            </h2>
            <p className="text-gray-600">
              Tog' Shifo klinikasi har qanday yoshdagi bemorlar uchun yuqori sifatli tibbiy yordam ko'rsatadi
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <HeartPulse className="h-10 w-10 text-clinic-primary" />,
                title: "Davolash bo'limi",
                desc: "Zamonaviy uskunalar va tajribali shifokorlar yordamida yuqori sifatli davolash xizmatlari"
              },
              {
                icon: <Microscope className="h-10 w-10 text-clinic-primary" />,
                title: "Laboratoriya",
                desc: "Aniq va tezkor tahlil natijalari, zamonaviy diagnostika uskunalari bilan jihozlangan"
              },
              {
                icon: <Activity className="h-10 w-10 text-clinic-primary" />,
                title: "Sanatoriya",
                desc: "Tog' iqlimi sharoitida davolanish va sog'lomlashtirish dasturlari"
              },
            ].map((service, idx) => (
              <div key={idx} className="card p-6 group hover:border-l-4 hover:border-l-clinic-primary">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-clinic-dark">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/clinic/services" className="text-clinic-primary font-medium inline-flex items-center group-hover:underline">
                  Batafsil <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-clinic-dark">
              Majmuadagi muassasalar
            </h2>
            <p className="text-gray-600">
              Klinikamiz hududida bemorlar va mehmonlar uchun barcha qulayliklar mavjud
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Hotel className="h-8 w-8 text-white" />,
                title: "Dam olish maskani",
                desc: "Qulay xonalar, tog' manzarasi va toza havo",
                image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                icon: <Utensils className="h-8 w-8 text-white" />,
                title: "Milliy oshxona",
                desc: "Sog'lom va mazali taomlar, mahalliy oshpazlar tomonidan tayyorlangan",
                image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                icon: <Activity className="h-8 w-8 text-white" />,
                title: "Shifobaxsh bog'",
                desc: "Toza havoda sayr qilish va dam olish uchun maxsus hududlar",
                image: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
            ].map((facility, idx) => (
              <div key={idx} className="card overflow-hidden group">
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 bg-clinic-primary p-3 rounded-tr-lg">
                    {facility.icon}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2 text-clinic-dark">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.desc}</p>
                  <Link to="/clinic/facilities" className="text-clinic-primary font-medium inline-flex items-center group-hover:underline">
                    Batafsil <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-clinic-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Hoziroq band qiling</h2>
              <p className="text-lg text-clinic-light">
                Shifokorlarimiz ko'rigidan o'tish va sog'ligingizni yaxshilash uchun navbat olishni kechiktirmang
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/clinic/booking" className="btn bg-white text-clinic-primary hover:bg-clinic-light">
                <CalendarClock className="h-5 w-5 mr-2" />
                Band qilish
              </Link>
              <Link to="/clinic/contact" className="btn border-2 border-white text-white hover:bg-clinic-dark">
                Bog'lanish
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;