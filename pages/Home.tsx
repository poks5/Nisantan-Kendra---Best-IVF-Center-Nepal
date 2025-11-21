
import React from 'react';
import { Link } from 'react-router-dom';
import { Translation, Doctor, Testimonial } from '../types';
import { ArrowRight, CheckCircle, Star, Heart, Users, Activity, FileText, Stethoscope, Phone, Calendar } from 'lucide-react';

interface PageProps {
  t: Translation;
  lang: 'en' | 'ne';
  doctors: Doctor[];
  testimonials: Testimonial[];
}

export const Home: React.FC<PageProps> = ({ t, lang, doctors, testimonials }) => {
  const drUma = doctors.find(d => d.id === 'dr-uma');
  const drDalucky = doctors.find(d => d.id === 'dr-dalucky');

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* Hero Section - Mobile First Optimized */}
      <section className="relative min-h-[calc(100vh-80px)] lg:min-h-[700px] flex flex-col justify-center bg-gradient-to-b from-rose-50/80 via-white to-white pt-6 pb-12 lg:py-0">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center relative z-10 h-full">
          
          {/* Text Content */}
          <div className="order-1 space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md shadow-rose-100 border border-rose-50 text-brand-600 text-xs font-bold tracking-wide uppercase mx-auto lg:mx-0">
              <Star size={14} className="fill-brand-600" />
              {t.hero.badge}
            </div>
            
            <div className="space-y-3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                  {lang === 'en' ? "Nisantan" : "निसन्तान"}<span className="text-brand-600">{lang === 'en' ? "Kendra" : "केन्द्र"}</span>
                </h1>
                <p className="text-lg md:text-2xl font-medium text-slate-700 leading-snug max-w-xl mx-auto lg:mx-0">
                    {t.hero.subtitle}
                </p>
            </div>

            {/* Mobile-First Expert Highlight Card - Visible on first screen */}
            <div className="bg-white p-4 rounded-2xl shadow-lg border border-brand-100 max-w-md mx-auto lg:mx-0 lg:hidden">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 text-center">Trusted Fertility Experts</div>
               <div className="flex items-center justify-center gap-4">
                 {drUma && (
                   <div className="flex flex-col items-center text-center w-1/2">
                      <img src={drUma.image} alt={drUma.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-200 mb-2" />
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{drUma.name}</h3>
                      <p className="text-[10px] text-brand-600 font-medium">Executive Director</p>
                   </div>
                 )}
                 <div className="w-px h-12 bg-slate-100"></div>
                 {drDalucky && (
                   <div className="flex flex-col items-center text-center w-1/2">
                      <img src={drDalucky.image} alt={drDalucky.name} className="w-16 h-16 rounded-full object-cover border-2 border-brand-200 mb-2" />
                      <h3 className="font-bold text-slate-900 text-sm leading-tight">{drDalucky.name}</h3>
                      <p className="text-[10px] text-brand-600 font-medium">Consultant Gyn.</p>
                   </div>
                 )}
               </div>
            </div>
            
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex gap-4 pt-4">
              <Link to="/contact" className="flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-brand-200 transition transform hover:-translate-y-1">
                {t.hero.cta} <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg transition hover:shadow-lg">
                {t.hero.secondaryCta}
              </Link>
            </div>
            
            <div className="pt-4 lg:pt-8 flex justify-center lg:justify-start items-center gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-black text-brand-600">25k+</p>
                <p className="text-[10px] md:text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.about.stats.couples}</p>
              </div>
              <div className="w-px h-10 md:h-12 bg-slate-200"></div>
              <div>
                <p className="text-3xl md:text-4xl font-black text-brand-600">32+</p>
                <p className="text-[10px] md:text-sm font-semibold text-slate-500 uppercase tracking-wide">{t.about.stats.years}</p>
              </div>
            </div>
          </div>

          {/* Hero Image / Expert Section (Desktop) */}
          <div className="order-2 hidden lg:block relative">
             <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-brand-100 border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-700 ease-in-out">
                <img 
                  src="https://picsum.photos/800/800?random=5" 
                  alt="Happy Family" 
                  className="w-full h-full object-cover scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
             </div>
             
             {/* Floating Badge 1 */}
             <div className="absolute bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow">
               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                 <CheckCircle size={24} />
               </div>
               <div>
                 <p className="text-sm font-bold text-slate-900">Est. 1992</p>
                 <p className="text-xs text-slate-500">Trusted by Nepal</p>
               </div>
             </div>

             {/* Floating Expert Badge */}
             <div className="absolute top-10 -right-8 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow [animation-delay:1s]">
               <div className="flex -space-x-3">
                 <img src={drUma?.image} className="w-10 h-10 rounded-full border-2 border-white" alt="Dr Uma" />
                 <img src={drDalucky?.image} className="w-10 h-10 rounded-full border-2 border-white" alt="Dr Dalucky" />
               </div>
               <div>
                 <p className="text-xs font-bold text-slate-900">Top Specialists</p>
                 <p className="text-[10px] text-slate-500">Leading the team</p>
               </div>
             </div>
          </div>
        </div>
        
        {/* Decorative Blob */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-50/50 to-blue-50/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 -z-10"></div>
      </section>

      {/* Mobile Actions Strip */}
      <div className="grid grid-cols-2 gap-2 px-4 -mt-6 mb-12 lg:hidden relative z-20">
          <Link to="/contact" className="bg-brand-600 text-white p-4 rounded-2xl shadow-lg shadow-brand-200 flex flex-col items-center justify-center text-center">
             <Calendar size={24} className="mb-2" />
             <span className="font-bold text-sm">Book Appointment</span>
          </Link>
          <a href="tel:014795087" className="bg-white text-slate-800 p-4 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center border border-slate-100">
             <Phone size={24} className="mb-2 text-brand-600" />
             <span className="font-bold text-sm">Call Clinic</span>
          </a>
      </div>

      {/* Stats/Trust Section */}
      <section className="py-24 bg-white relative z-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">{lang === 'en' ? 'Why Us' : 'हामी नै किन'}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.about.title}</h2>
            <p className="text-lg text-slate-600 leading-relaxed">{t.about.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { label: t.about.stats.couples, val: "25,000+", icon: <Heart className="w-8 h-8 text-rose-500"/>, color: "bg-rose-50", desc: lang === 'en' ? "Couples Helped" : "दम्पतीहरूलाई मद्दत" },
              { label: t.about.stats.parents, val: "8,000+", icon: <Star className="w-8 h-8 text-yellow-500"/>, color: "bg-yellow-50", desc: lang === 'en' ? "Happy Parents" : "खुसी अभिभावक" },
              { label: t.about.stats.years, val: "32+", icon: <Calendar className="w-8 h-8 text-blue-500"/>, color: "bg-blue-50", desc: lang === 'en' ? "Years of Excellence" : "उत्कृष्टताका वर्षहरू" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
                <div className={`w-20 h-20 rounded-2xl ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6`}>
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-extrabold text-slate-900 mb-3">{stat.val}</h3>
                <p className="text-lg font-bold text-slate-800 mb-2">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Journey Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.patientCare.journeyTitle}</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.patientCare.subtitle}</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-blue-200 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {t.patientCare.journeySteps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-24 h-24 bg-white rounded-full border-4 border-blue-100 flex items-center justify-center text-2xl font-bold text-brand-600 shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300 relative">
                    {idx === 0 && <Users size={32} />}
                    {idx === 1 && <Activity size={32} />}
                    {idx === 2 && <FileText size={32} />}
                    {idx === 3 && <Stethoscope size={32} />}
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-500 text-white rounded-full flex items-center justify-center text-sm font-bold border-2 border-white">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
             <div>
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.services.title}</h2>
               <p className="text-lg text-slate-600 max-w-2xl">{t.services.subtitle}</p>
             </div>
             <Link to="/services" className="hidden md:flex items-center gap-2 bg-white text-brand-600 px-6 py-3 rounded-full font-bold shadow-sm border border-slate-200 hover:bg-brand-50 hover:border-brand-200 transition">
               {t.services.viewAll} <ArrowRight size={16} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.slice(0, 4).map((service) => (
              <Link to="/services" key={service.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-300 border border-slate-100 group flex flex-col h-full">
                 <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                 <h3 className="font-bold text-xl text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                 <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6 flex-grow">
                   {service.description}
                 </p>
                 <div className="flex items-center text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform">
                   Read More <ArrowRight size={14} className="ml-1" />
                 </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link to="/services" className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-full font-bold shadow-lg">
               {t.services.viewAll} <ArrowRight size={16} />
             </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - DYNAMIC */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t.testimonials.title}</h2>
             <p className="text-lg text-slate-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((item) => (
               <div key={item.id} className="bg-slate-50 p-8 rounded-3xl relative">
                 <div className="text-brand-200 absolute top-6 right-8">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                 </div>
                 <p className="text-slate-700 italic mb-6 relative z-10 leading-relaxed">"{item.text}"</p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 font-bold">
                     {item.name[0]}
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900">{item.name}</h4>
                     <p className="text-xs text-slate-500">{item.location}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-900 to-brand-800 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         {/* Abstract shapes */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-brand-600 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-500 rounded-full blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

         <div className="container mx-auto px-4 text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
             {lang === 'en' ? "Ready to start your parenthood journey?" : "के तपाईं अभिभावक बन्ने यात्रा सुरु गर्न तयार हुनुहुन्छ?"}
           </h2>
           <p className="text-brand-100 mb-10 max-w-xl mx-auto text-lg md:text-xl font-light">
             {lang === 'en' ? "Schedule a consultation with our experts today and take the first step towards your dream." : "आजै हाम्रा विशेषज्ञहरूसँग परामर्शको समय लिनुहोस् र आफ्नो सपना पूरा गर्ने दिशामा पहिलो कदम चाल्नुहोस्।"}
           </p>
           <Link to="/contact" className="inline-block bg-white text-brand-900 font-bold text-lg px-12 py-5 rounded-full shadow-2xl hover:bg-brand-50 transition transform hover:scale-105">
             {t.nav.bookAppointment}
           </Link>
         </div>
      </section>

    </div>
  );
};
