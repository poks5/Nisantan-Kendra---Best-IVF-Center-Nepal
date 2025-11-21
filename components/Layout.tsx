
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Translation } from '../types';
import { Menu, X, Globe, Phone, Facebook, MapPin, Clock, Mail, MessageCircle, Zap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  lang: 'en' | 'ne';
  setLang: (l: 'en' | 'ne') => void;
  t: Translation;
}

export const Layout: React.FC<LayoutProps> = ({ children, lang, setLang, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/about', label: t.nav.about },
    { path: '/team', label: t.nav.team },
    { path: '/services', label: t.nav.services },
    { path: '/contact', label: t.nav.contact },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 pb-16 lg:pb-0">
      {/* Top Bar */}
      <div className="bg-brand-900 text-white py-2 px-4 text-sm hidden md:flex justify-between items-center transition-colors print:hidden">
        <div className="flex items-center space-x-6">
          <span className="flex items-center gap-1.5 hover:text-brand-200 transition-colors"><Phone size={14} /> 01-4795087 / 9851074477</span>
          <span className="flex items-center gap-1.5 hover:text-brand-200 transition-colors"><MapPin size={14} /> Bijulibazar, New Baneshwor</span>
        </div>
        <div className="flex items-center space-x-4">
           <span className="flex items-center gap-1.5 text-xs text-brand-200"><Clock size={14} /> Sun-Fri: 9AM - 5PM</span>
           <div className="h-4 w-px bg-brand-700"></div>
           <a href="#" className="hover:text-brand-200 transition-transform hover:scale-110"><Facebook size={16} /></a>
        </div>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 print:hidden ${scrolled ? 'bg-white shadow-lg shadow-slate-100/50 py-3' : 'bg-white/90 backdrop-blur-md py-5'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl flex items-center justify-center text-white shadow-brand-200 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-xl">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-slate-900 leading-none tracking-tight group-hover:text-brand-700 transition-colors">
                NisantanKendra
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Est. 1992</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-all hover:text-brand-600 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full ${location.pathname === link.path ? 'text-brand-600 after:w-full' : 'text-slate-600'}`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={() => setLang(lang === 'en' ? 'ne' : 'en')}
              className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-slate-100 hover:bg-brand-50 text-slate-600 hover:text-brand-600 transition-colors border border-slate-200"
            >
              <Globe size={14} />
              {lang === 'en' ? 'NE' : 'EN'}
            </button>

            <Link to="/contact" className="bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-brand-200 hover:shadow-brand-300 hover:-translate-y-0.5">
              {t.nav.bookAppointment}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-700 p-2 hover:bg-slate-50 rounded-lg transition-colors relative z-50" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh)] bg-white/95 backdrop-blur-lg shadow-xl border-t border-slate-100 flex flex-col z-40 overflow-y-auto pb-32">
             <div className="p-6 flex flex-col space-y-6 pt-8">
                {navLinks.map((link, idx) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{ animationDelay: `${idx * 100}ms` }}
                    className={`text-2xl font-bold animate-fade-in-up opacity-0 [animation-fill-mode:forwards] ${location.pathname === link.path ? 'text-brand-600' : 'text-slate-700'}`}
                  >
                    {link.label}
                  </Link>
                ))}
             </div>
             
             <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/50 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:500ms]">
               <div className="flex items-center justify-between mb-8">
                  <span className="font-semibold text-slate-600">Language</span>
                   <button
                    onClick={() => setLang(lang === 'en' ? 'ne' : 'en')}
                    className="flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-lg bg-white shadow-sm text-brand-600 border border-slate-200"
                  >
                    <Globe size={16} />
                    {lang === 'en' ? 'Nepali' : 'English'}
                  </button>
               </div>
              <Link to="/contact" className="block w-full text-center bg-brand-600 text-white px-6 py-4 rounded-xl text-lg font-bold shadow-lg mb-4">
                {t.nav.bookAppointment}
              </Link>
              <div className="text-center text-slate-400 text-xs">
                Est. 1992 • Bijulibazar, New Baneshwor
              </div>
             </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow print:w-full">
        {children}
      </main>

      {/* Mobile Sticky Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-[100] flex justify-around items-center pb-safe pt-2 px-2 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] print:hidden">
        <a href="https://wa.me/9779851074477" target="_blank" rel="noreferrer" className="flex flex-col items-center gap-1 p-2 text-slate-600 hover:text-green-600 active:scale-95 transition">
           <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
             <MessageCircle size={20} fill="currentColor" className="fill-green-600 text-green-600" />
           </div>
           <span className="text-[10px] font-bold">{t.contact.actions.whatsapp}</span>
        </a>
        <a href="tel:014795087" className="flex flex-col items-center gap-1 p-2 text-slate-600 hover:text-brand-600 active:scale-95 transition -mt-6">
           <div className="w-14 h-14 rounded-full bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-200 border-4 border-white">
             <Phone size={24} fill="currentColor" />
           </div>
           <span className="text-[10px] font-bold text-brand-700">{t.contact.actions.callNow}</span>
        </a>
        <a href="viber://contact?number=%2B9779851074477" className="flex flex-col items-center gap-1 p-2 text-slate-600 hover:text-purple-600 active:scale-95 transition">
           <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
             <Zap size={20} fill="currentColor" className="fill-purple-600 text-purple-600" />
           </div>
           <span className="text-[10px] font-bold">{t.contact.actions.viber}</span>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 lg:pb-8 border-t border-slate-800 print:hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
                <span className="font-bold text-xl text-white">NisantanKendra</span>
              </Link>
              <p className="text-sm leading-relaxed mb-6 text-slate-400">
                {lang === 'en' 
                  ? "Established in 1992, we are Nepal's leading fertility center helping over 25,000 couples."
                  : "१९९२ मा स्थापित, हामी नेपालको अग्रणी निसन्तान केन्द्र हौं जसले २५,००० भन्दा बढी दम्पतीहरूलाई मद्दत गरिरहेका छौं।"}
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.nav.services}</h3>
              <ul className="space-y-3 text-sm">
                <li><Link to="/ivf-unit" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span>IVF Treatment</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span>IUI</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span>Male Infertility</Link></li>
                <li><Link to="/services" className="hover:text-brand-400 transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-brand-500 rounded-full"></span>Counseling</Link></li>
              </ul>
            </div>

            <div>
               <h3 className="text-white font-bold text-lg mb-6">{t.nav.contact}</h3>
               <ul className="space-y-4 text-sm">
                 <li className="flex items-start gap-3">
                   <MapPin size={18} className="text-brand-500 mt-0.5 shrink-0" />
                   <span>Bijulibazar, New Baneshwor<br/>Kathmandu, Nepal</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Phone size={18} className="text-brand-500 shrink-0" />
                   <span className="hover:text-white cursor-pointer transition">01-4795087, 9851074477</span>
                 </li>
                 <li className="flex items-center gap-3">
                   <Mail size={18} className="text-brand-500 shrink-0" />
                   <span className="hover:text-white cursor-pointer transition">infertilitynepal@gmail.com</span>
                 </li>
               </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">Hours</h3>
               <ul className="space-y-3 text-sm text-slate-400">
                 <li className="flex justify-between"><span>Sun - Fri:</span> <span>9:00 AM - 5:00 PM</span></li>
                 <li className="flex justify-between text-brand-500"><span>Saturday:</span> <span>Closed</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <div className="flex gap-4">
              <p>© {new Date().getFullYear()} Nisantan Kendra. Est. 1992.</p>
              <Link to="/audit" className="hover:text-slate-300">Site Audit</Link>
            </div>
            <p>Helping families for 32+ Years.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
