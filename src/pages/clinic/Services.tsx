import React from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Microscope, Activity, Stethoscope, Pill as Pills, Brain, CalendarClock } from 'lucide-react';

const Services = () => {
  const medicalServices = [
    {
      icon: <HeartPulse className="h-12 w-12 text-clinic-primary" />,
      title: "Kardiologiya",
      desc: "Yurak-qon tomir kasalliklari diagnostikasi va davolanishi, zamonaviy EKG va exokardiografiya."
    },
    {
      icon: <Brain className="h-12 w-12 text-clinic-primary" />,
      title: "Nevrologiya",
      desc: "Asab tizimi kasalliklari va migren kabi bosh og'riqlarni diagnostika va davolash."
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-clinic-primary" />,
      title: "Terapiya",
      desc: "Umumiy tibbiy ko'rik va keng qamrovli sog'liqni saqlash xizmatlari."
    },
    {
      icon: <Pills className="h-12 w-12 text-clinic-primary" />,
      title: "Fizioterapiya",
      desc: "Jismoniy mashqlar, issiq va sovuq terapiya, elektroterapiya va boshqa turli xil davolashlar."
    },
    {
      icon: <Microscope className="h-12 w-12 text-clinic-primary" />,
      title: "Laboratoriya",
      desc: "Qon tahlili, siydik tahlili, bioximik va gormonal tekshiruvlar, allergik testlar."
    },
    {
      icon: <Activity className="h-12 w-12 text-clinic-primary" />,
      title: "Sanatoriya davolash",
      desc: "Tog' iqlimi, mineral suvlar va balneoterapiya yordamida sog'lomlashtirish dasturlari."
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="relative py-24 bg-gradient-to-r from-clinic-dark to-clinic-primary text-white">
        <div 
          className="absolute inset-0 opacity-20 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg?auto=compress&cs=tinysrgb&w=1600')" 
          }}
        ></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tibbiy xizmatlar</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Tog' Shifo klinikasi bemorlarimizga yuqori sifatli tibbiy xizmatlarning to'liq spektrini taqdim etadi
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalServices.map((service, idx) => (
              <div key={idx} className="card p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-clinic-dark">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4 text-clinic-dark">Maxsus dasturlar</h2>
            <p className="text-gray-600">
              Klinikamiz turli yoshdagi bemorlar va mehmonlar uchun maxsus dasturlar taklif etadi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Stress boshqaruvi",
                desc: "Kunlik hayotdagi stress va taranglikni kamaytirish uchun mo'ljallangan dastur. Meditatsia, nafas olish mashqlari va fiziologik monitoringi o'z ichiga oladi.",
                image: "https://images.pexels.com/photos/775417/pexels-photo-775417.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                title: "Sog'lom yurak dasturi",
                desc: "Yurak-qon tomir tizimi salomatligini yaxshilash uchun mo'ljallangan dastur. Tibbiy tekshiruvlar, parhez maslahatlari va jismoniy mashqlar majmuasini o'z ichiga oladi.",
                image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                title: "Detoks dasturi",
                desc: "Organizmni tozalash va metabolizmni yaxshilash uchun mo'ljallangan dastur. Maxsus parhez, mineral suvlar va balneoterapiya protseduralarini o'z ichiga oladi.",
                image: "https://images.pexels.com/photos/3621168/pexels-photo-3621168.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                title: "Ortopedik reabilitatsiya",
                desc: "Bo'g'imlar va umurtqa pog'onasi kasalliklari uchun kompleks reabilitatsiya dasturi. Fizioterapiya, maxsus mashqlar va balneoterapiyani o'z ichiga oladi.",
                image: "https://images.pexels.com/photos/8942991/pexels-photo-8942991.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            ].map((program, idx) => (
              <div key={idx} className="card overflow-hidden group">
                <div className="md:flex">
                  <div className="md:w-2/5 h-48 md:h-auto relative">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover md:absolute inset-0"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <h3 className="text-xl font-bold mb-3 text-clinic-dark">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.desc}</p>
                    <Link to="/clinic/booking" className="text-clinic-primary font-medium inline-flex items-center hover:underline">
                      Batafsil ma'lumot
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-clinic-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Xizmatlarimizdan foydalanish uchun band qiling</h2>
            <p className="text-lg mb-8">
              Mutaxassislarimiz bilan uchrashish uchun navbat olishingiz mumkin. Bizning professional shifokorlarimiz sizga yordam berishga tayyor.
            </p>
            <Link to="/clinic/booking" className="btn bg-white text-clinic-primary hover:bg-clinic-light inline-flex items-center">
              <CalendarClock className="h-5 w-5 mr-2" />
              Qabulga yozilish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;