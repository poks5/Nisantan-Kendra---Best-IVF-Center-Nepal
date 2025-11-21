
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Translation } from '../types';
import { ArrowRight, ArrowLeft, CheckCircle, Calendar, ChevronRight } from 'lucide-react';

interface PageProps {
  t: Translation;
}

export const ServiceDetail: React.FC<PageProps> = ({ t }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = t.services.items.find(item => item.id === id);

  useEffect(() => {
    if (!service) {
      // Fallback to services list if ID not found
      navigate('/services');
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-brand-900 text-white py-20 lg:py-32 overflow-hidden rounded-b-[3rem]">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900"></div>
        {/* Abstract Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center text-brand-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Services
          </Link>
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 rounded-full bg-white/10 text-brand-100 text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                {service.category}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">{service.title}</h1>
              <p className="text-xl text-brand-50 leading-relaxed max-w-2xl">{service.description}</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/10 hidden lg:block">
              <div className="text-5xl mb-4">{service.icon}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            
            {/* Detailed Description */}
            {service.details?.fullDescription && (
              <section className="animate-fade-in-up">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 border-l-4 border-brand-600 pl-4">Overview</h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {service.details.fullDescription}
                </p>
              </section>
            )}

            {/* Benefits / Why Choose */}
            {service.details?.benefits && (
              <section className="animate-fade-in-up [animation-delay:100ms]">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Benefits & Advantages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.details.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3 bg-brand-50/50 p-4 rounded-xl border border-brand-100">
                      <CheckCircle size={20} className="text-brand-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Procedure Steps */}
            {service.details?.procedureSteps && (
              <section className="animate-fade-in-up [animation-delay:200ms]">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{service.details.procedureTitle || "How It Works"}</h2>
                <div className="space-y-6 relative pl-4">
                  {/* Timeline Line */}
                  <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-slate-200"></div>
                  
                  {service.details.procedureSteps.map((step, i) => (
                    <div key={i} className="relative flex gap-6">
                      <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-bold shadow-md z-10 shrink-0 mt-1">
                        {i + 1}
                      </div>
                      <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 flex-grow hover:shadow-md transition-shadow">
                        <p className="text-slate-700 font-medium">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Candidates */}
            {service.details?.candidates && (
              <section className="bg-slate-900 text-white p-8 rounded-3xl relative overflow-hidden animate-fade-in-up [animation-delay:300ms]">
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-6">{service.details.candidatesTitle || "Who Is This For?"}</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                    {service.details.candidates.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0"></div>
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Decorative background */}
                <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
              </section>
            )}
            
            {!service.details && (
               <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-200">
                  <p className="text-slate-500">Detailed information for this service is currently being updated. Please contact our clinic for more specifics.</p>
               </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <div className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Interested in this treatment?</h3>
              <p className="text-slate-600 mb-6 text-sm">
                Schedule a consultation with our experts to discuss if {service.title} is right for you.
              </p>
              <Link to="/contact" className="block w-full bg-brand-600 hover:bg-brand-700 text-white text-center font-bold py-3.5 rounded-xl transition-colors mb-4 shadow-lg shadow-brand-200">
                {t.contact.bookAppointment}
              </Link>
              <div className="flex items-center justify-center gap-2 text-slate-500 text-sm font-medium">
                <Calendar size={16} />
                <span>Available Sun - Fri</span>
              </div>
            </div>

            {/* Related Services */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Other {service.category.charAt(0).toUpperCase() + service.category.slice(1)} Services</h3>
              <div className="space-y-2">
                {t.services.items
                  .filter(s => s.category === service.category && s.id !== service.id)
                  .slice(0, 5)
                  .map(s => (
                    <Link 
                      key={s.id} 
                      to={s.id === 'ivf' ? '/ivf-unit' : `/services/${s.id}`}
                      className="block p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all text-slate-600 hover:text-brand-600 text-sm font-medium group"
                    >
                      <div className="flex items-center justify-between">
                        <span>{s.title}</span>
                        <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
