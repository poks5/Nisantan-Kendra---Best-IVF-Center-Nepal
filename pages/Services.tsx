
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Translation, ServiceCategory } from '../types';
import { ArrowRight, ChevronRight } from 'lucide-react';

interface PageProps {
  t: Translation;
}

export const Services: React.FC<PageProps> = ({ t }) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');

  const filteredServices = activeCategory === 'all' 
    ? t.services.items 
    : t.services.items.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 text-center animate-fade-in-up">
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">{t.services.title}</h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
             <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Infrastructure</span>
             <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.services.facilitiesTitle}</h2>
             <p className="text-slate-600 max-w-2xl mx-auto">{t.services.facilitiesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
             {t.services.facilities.map((facility, idx) => (
               <div 
                key={idx} 
                className="group relative rounded-2xl overflow-hidden shadow-lg h-64 animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${idx * 100}ms` }}
               >
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                     <h3 className="text-white font-bold text-lg leading-tight">{facility.title}</h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Detailed Services with Filter */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           
           {/* Category Filter */}
           <div className="flex flex-wrap justify-center gap-3 mb-16">
              {t.services.categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 border ${
                    activeCategory === cat.id 
                    ? 'bg-brand-600 text-white border-brand-600 shadow-lg shadow-brand-200 transform scale-105' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-brand-300 hover:text-brand-600'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
           </div>

           {/* Services Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => {
                const isIVF = service.id === 'ivf';
                const linkTo = isIVF ? '/ivf-unit' : `/services/${service.id}`;
                
                return (
                  <Link 
                    key={service.id} 
                    to={linkTo}
                    style={{ animationDelay: `${index * 75}ms` }}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand-100/50 transition-all duration-500 border border-slate-100 group flex flex-col h-full relative overflow-hidden animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                  >
                     {/* Subtle Shimmer Overlay - One-time animation */}
                     <div className="absolute top-0 left-0 w-full h-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shimmer_1.5s_ease-out_1s_1] pointer-events-none z-0"></div>

                     <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand-100 transition-all duration-500 ease-out shadow-sm group-hover:shadow-md relative z-10">
                       {service.icon}
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors relative z-10">{service.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                       {service.description}
                     </p>
                     <div className="pt-6 border-t border-slate-50 flex items-center justify-between relative z-10">
                       <span className="text-sm font-bold text-brand-600 group-hover:translate-x-2 transition-transform flex items-center">
                         Read Details <ArrowRight size={14} className="ml-1" />
                       </span>
                       <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300">
                          <ChevronRight size={14} />
                       </div>
                     </div>
                  </Link>
                );
              })}
           </div>
           
           <div className="mt-16 text-center md:hidden">
              <p className="text-slate-400 text-sm">Scroll to view more services</p>
           </div>
        </div>
      </section>
    </div>
  );
};
