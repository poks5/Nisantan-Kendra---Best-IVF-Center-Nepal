
import React from 'react';
import { Translation, Doctor } from '../types';
import { Calendar, Star, Users, Heart, CheckCircle, Building2, Trophy, Baby, TrendingUp, ShieldCheck } from 'lucide-react';

interface PageProps {
  t: Translation;
  lang: 'en' | 'ne';
  doctors: Doctor[];
}

export const About: React.FC<PageProps> = ({ t, lang, doctors }) => {
  const getAchievementIcon = (name: string) => {
    switch(name) {
      case 'trophy': return <Trophy size={32} />;
      case 'baby': return <Baby size={32} />;
      case 'trending': return <TrendingUp size={32} />;
      case 'shield': return <ShieldCheck size={32} />;
      default: return <Star size={32} />;
    }
  };

  return (
    <div className="flex flex-col bg-slate-50">
      
      {/* Header */}
      <section className="bg-white pt-16 pb-24 rounded-b-[3rem] shadow-sm mb-16">
        <div className="container mx-auto px-4 text-center">
          <span className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3 block">Since 1992</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8">{t.about.title}</h1>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {t.about.description}
          </p>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
             <div className="bg-brand-50 p-6 rounded-2xl flex flex-col items-center">
                <span className="text-4xl font-bold text-brand-600 mb-1">25,000+</span>
                <span className="text-slate-600 font-medium">{t.about.stats.couples}</span>
             </div>
             <div className="bg-blue-50 p-6 rounded-2xl flex flex-col items-center">
                <span className="text-4xl font-bold text-blue-600 mb-1">32+</span>
                <span className="text-slate-600 font-medium">{t.about.stats.years}</span>
             </div>
             <div className="bg-green-50 p-6 rounded-2xl flex flex-col items-center">
                <span className="text-4xl font-bold text-green-600 mb-1">8,000+</span>
                <span className="text-slate-600 font-medium">{t.about.stats.parents}</span>
             </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <div className="bg-brand-900 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/3"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-brand-700 rounded-xl flex items-center justify-center mb-6">
                        <Star className="text-brand-300" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{t.about.missionTitle}</h3>
                     <p className="text-brand-100 leading-relaxed text-lg opacity-90">
                        {t.about.mission}
                     </p>
                  </div>
               </div>

               <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-700 rounded-full blur-3xl opacity-50 -translate-x-1/3 translate-y-1/3"></div>
                  <div className="relative z-10">
                     <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                        <Heart className="text-slate-300" />
                     </div>
                     <h3 className="text-2xl font-bold mb-4">{t.about.visionTitle}</h3>
                     <p className="text-slate-300 leading-relaxed text-lg opacity-90">
                        {t.about.vision}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-600 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
         </div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
               <div className="inline-flex items-center justify-center p-2 bg-white/10 rounded-full mb-4">
                 <Trophy className="text-yellow-400 w-6 h-6" />
               </div>
               <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.achievementsTitle}</h2>
               <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {t.about.achievements.map((item, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group">
                     <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-brand-900/50">
                        <div className="text-white">
                           {getAchievementIcon(item.icon)}
                        </div>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                     <p className="text-slate-300 text-sm leading-relaxed">
                        {item.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Timeline */}
      <section className="py-20 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.about.historyTitle}</h2>
               <p className="text-slate-600">{t.about.historyDescription}</p>
            </div>

            <div className="relative max-w-4xl mx-auto">
               {/* Vertical Line */}
               <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-200 -translate-x-1/2 md:translate-x-0"></div>
               
               <div className="space-y-12">
                  {t.about.timeline.map((item, idx) => (
                     <div key={idx} className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        
                        {/* Content */}
                        <div className="ml-12 md:ml-0 flex-1 md:text-right">
                           <div className={`bg-white p-6 rounded-2xl shadow-md border border-slate-100 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                              <span className="inline-block bg-brand-100 text-brand-700 px-3 py-1 rounded-full text-sm font-bold mb-2">{item.year}</span>
                              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600 text-sm">{item.description}</p>
                           </div>
                        </div>

                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-brand-500 rounded-full border-4 border-white shadow-md -translate-x-1/2 md:translate-x-1/2 mt-6 z-10 flex items-center justify-center">
                           <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>

                        {/* Empty space for alignment */}
                        <div className="flex-1 hidden md:block"></div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t.about.whyChooseTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {t.about.whyChoose.map((item, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                     <div className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-600 mb-4">
                        <CheckCircle size={20} />
                     </div>
                     <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                     <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Affiliations */}
      <section className="py-16 bg-white border-t border-slate-100">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-10">{t.about.affiliationsTitle}</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
               {t.about.affiliations.map((aff, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-slate-50 px-8 py-4 rounded-xl border border-slate-100">
                     <Building2 className="text-slate-400" size={32} />
                     <div className="text-left">
                        <h4 className="font-bold text-slate-800">{aff.name}</h4>
                        <p className="text-xs text-slate-500">{aff.role}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
      
      {/* Doctors */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-16 text-slate-900">Our Specialists</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {doctors.map((doc, i) => (
               <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden group border border-slate-100">
                 <div className="h-72 overflow-hidden bg-slate-200">
                   <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                   />
                 </div>
                 <div className="p-6 text-center">
                   <h3 className="text-xl font-bold text-slate-900 mb-1">{doc.name}</h3>
                   <p className="text-brand-600 font-medium text-sm mb-4">{doc.role}</p>
                   <p className="text-slate-500 text-sm line-clamp-2">{doc.specialization}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
};
