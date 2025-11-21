
import React, { useState, useEffect } from 'react';
import { Translation } from '../types';
import { Link } from 'react-router-dom';
import { 
  Microscope, 
  Thermometer, 
  Activity, 
  Wind, 
  Database, 
  Snowflake, 
  Syringe, 
  Building, 
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Info,
  Settings,
  Award,
  ChevronRight
} from 'lucide-react';

interface PageProps {
  t: Translation;
}

export const IVFUnit: React.FC<PageProps> = ({ t }) => {
  const { ivfUnit } = t;
  const [activeSection, setActiveSection] = useState('about');

  // Scroll Spy Logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'hospital': return <Building size={24} />;
      case 'microscope': return <Microscope size={24} />;
      case 'syringe': return <Syringe size={24} />;
      case 'snowflake': return <Snowflake size={24} />;
      case 'activity': return <Activity size={24} />;
      default: return <CheckCircle2 size={24} />;
    }
  };

  const navItems = [
    { id: 'about', label: ivfUnit.aboutTitle, icon: <Info size={18} /> },
    { id: 'facilities', label: ivfUnit.facilitiesTitle, icon: <Building size={18} /> },
    { id: 'equipment', label: ivfUnit.equipmentTitle, icon: <Settings size={18} /> },
    { id: 'quality', label: ivfUnit.qualityTitle, icon: <Award size={18} /> },
  ];

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
             <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wide shadow-sm border border-blue-200">
               <Microscope size={16} />
               World Class Facility
             </div>
             <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
               {ivfUnit.title}
             </h1>
             <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
               {ivfUnit.subtitle}
             </p>
          </div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-40 translate-x-1/2 translate-y-1/2"></div>
      </section>

      <div className="relative">
        {/* Sticky Sidebar Container - Overlay */}
        <aside className="hidden lg:block absolute top-0 bottom-0 left-0 z-20 w-full pointer-events-none">
          <div className="sticky top-32 container mx-auto px-4">
            <nav className="w-72 pointer-events-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 p-4 transition-all">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">On This Page</h3>
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                        activeSection === item.id
                          ? 'bg-brand-50 text-brand-700 shadow-sm ring-1 ring-brand-200'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`${activeSection === item.id ? 'text-brand-600' : 'text-slate-400 group-hover:text-slate-600'}`}>
                          {item.icon}
                        </span>
                        <span>{item.label.split(' ').slice(0, 3).join(' ')}...</span>
                      </div>
                      {activeSection === item.id && <ChevronRight size={14} className="text-brand-500" />}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-100 px-2">
                <Link to="/contact" className="block w-full bg-brand-600 hover:bg-brand-700 text-white text-center font-bold py-3 rounded-xl shadow-lg shadow-brand-200 transition-transform hover:-translate-y-0.5 text-sm">
                  {t.nav.bookAppointment}
                </Link>
              </div>
            </nav>
          </div>
        </aside>

        {/* About Section */}
        <section id="about" className="py-16 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 lg:pl-80 transition-all duration-300">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-brand-600 pl-4">
                {ivfUnit.aboutTitle}
              </h2>
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                {ivfUnit.aboutText.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section id="facilities" className="py-20 bg-slate-50 scroll-mt-24">
          <div className="container mx-auto px-4 lg:pl-80 transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">{ivfUnit.facilitiesTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
              {ivfUnit.facilities.map((facility, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:-translate-y-1 transition-transform duration-300 flex flex-col items-start text-left group">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                    {getIcon(facility.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{facility.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{facility.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Equipment Showcase & Tech Specs */}
        <section id="equipment" className="py-20 bg-white scroll-mt-24">
          <div className="container mx-auto px-4 lg:pl-80 transition-all duration-300">
            <div className="mb-16">
              <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Advanced Technology</span>
              <h2 className="text-3xl font-bold text-slate-900">{ivfUnit.equipmentTitle}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {ivfUnit.equipment.map((eq, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-300">
                  <div className="h-56 overflow-hidden relative">
                     <img src={eq.image} alt={eq.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-bold text-brand-600 uppercase tracking-wide mb-2">{eq.subtitle}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{eq.title}</h3>
                    <p className="text-slate-600 text-sm">{eq.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Integrated Tech Specs */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-2xl font-bold mb-8 border-b border-slate-700 pb-4">{ivfUnit.techTitle}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {ivfUnit.tech.map((item, idx) => (
                  <div key={idx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                    <div className="text-brand-400 font-bold text-xs uppercase tracking-wider mb-2 opacity-80">{item.label}</div>
                    <div className="font-bold text-sm md:text-base leading-tight">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quality & Safety */}
        <section id="quality" className="py-20 bg-brand-50/50 scroll-mt-24">
          <div className="container mx-auto px-4 lg:pl-80 transition-all duration-300">
            <h2 className="text-3xl font-bold text-slate-900 mb-16">{ivfUnit.qualityTitle}</h2>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Environmental */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-xl text-green-600">
                    <Wind size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{ivfUnit.quality.envTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {ivfUnit.quality.envItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 group">
                      <CheckCircle2 size={20} className="text-green-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* QA */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
                    <ShieldCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{ivfUnit.quality.qaTitle}</h3>
                </div>
                <ul className="space-y-4">
                  {ivfUnit.quality.qaItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 group">
                      <CheckCircle2 size={20} className="text-blue-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="py-20 bg-white text-center border-t border-slate-100">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-slate-900 mb-6">Interested in our IVF Services?</h2>
           <p className="text-slate-600 max-w-2xl mx-auto mb-10">
             Book a consultation with our experts to discuss your treatment options in our world-class facility.
           </p>
           <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-200 transition-all hover:-translate-y-1 hover:shadow-xl">
             {t.nav.bookAppointment} <ArrowRight size={20} />
           </Link>
         </div>
      </section>
    </div>
  );
};
