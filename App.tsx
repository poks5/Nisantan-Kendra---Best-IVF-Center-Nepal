
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { IVFUnit } from './pages/IVFUnit';
import { ServiceDetail } from './pages/ServiceDetail';
import { Team } from './pages/Team';
import { Audit } from './pages/Audit';
import { ChatBot } from './components/ChatBot';
import { TRANSLATIONS } from './constants';
import { Language, Doctor, Testimonial } from './types';
import { fetchDoctors, fetchTestimonials } from './services/cms';
import { Loader2 } from 'lucide-react';

// ScrollToTop utility
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Translation constant for static UI elements (Nav, Headers)
  const t = TRANSLATIONS[lang];

  // Fetch dynamic content (Doctors, Stories) from CMS Service
  useEffect(() => {
    const loadContent = async () => {
      // In a real app, you might want to show a loader only on initial mount
      // For now, we update seamlessly when lang changes, or fast enough locally
      const [docs, tests] = await Promise.all([
        fetchDoctors(lang),
        fetchTestimonials(lang)
      ]);
      
      setDoctors(docs);
      setTestimonials(tests);
      setLoading(false);
    };

    loadContent();
  }, [lang]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-brand-600">
        <div className="flex flex-col items-center gap-4">
          <Loader2 size={48} className="animate-spin" />
          <p className="text-sm font-bold uppercase tracking-wider">Loading Nisantan Kendra...</p>
        </div>
      </div>
    );
  }

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang} t={t}>
        <Routes>
          {/* Pass dynamic data to pages */}
          <Route path="/" element={<Home t={t} lang={lang} doctors={doctors} testimonials={testimonials} />} />
          <Route path="/services" element={<Services t={t} />} />
          <Route path="/services/:id" element={<ServiceDetail t={t} />} />
          <Route path="/about" element={<About t={t} lang={lang} doctors={doctors} />} />
          <Route path="/team" element={<Team t={t} lang={lang} doctors={doctors} />} />
          <Route path="/contact" element={<Contact t={t} />} />
          <Route path="/ivf-unit" element={<IVFUnit t={t} />} />
          <Route path="/audit" element={<Audit />} />
        </Routes>
      </Layout>
      <ChatBot t={t} lang={lang} />
    </HashRouter>
  );
};

export default App;
