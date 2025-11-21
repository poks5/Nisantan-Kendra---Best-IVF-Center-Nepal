
import React, { useState, ChangeEvent, DragEvent, useRef } from 'react';
import { Translation } from '../types';
import { MapPin, Phone, Mail, Upload, Check, Loader2, FileText, X, Clock, ChevronDown, Lock, HelpCircle } from 'lucide-react';

interface PageProps {
  t: Translation;
}

export const Contact: React.FC<PageProps> = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    file: null as File | null
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [dragActive, setDragActive] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFormData({ ...formData, file: e.dataTransfer.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', phone: '', email: '', message: '', file: null });
    setStatus('idle');
  };

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{t.contact.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {/* Contact Info Card */}
          <div className="lg:col-span-1 space-y-8 h-fit lg:sticky lg:top-28">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
               <h3 className="text-xl font-bold mb-8 text-slate-900">Nisantan Kendra</h3>
               
               <div className="space-y-8">
                 <div className="flex items-start gap-5">
                   <div className="bg-brand-50 p-3.5 rounded-2xl text-brand-600 shrink-0">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.visit}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">
                       Bijulibazar, New Baneshwor<br/>
                       Kathmandu, Nepal
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-5">
                   <div className="bg-brand-50 p-3.5 rounded-2xl text-brand-600 shrink-0">
                     <Phone size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.call}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed space-y-1">
                       <span className="block">01-4795087</span>
                       <span className="block font-semibold">9851074477</span>
                       <span className="block">9868730519</span>
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-start gap-5">
                   <div className="bg-brand-50 p-3.5 rounded-2xl text-brand-600 shrink-0">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.email}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">
                       infertilitynepal@gmail.com
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start gap-5 pt-4 border-t border-slate-100">
                   <div className="bg-slate-50 p-3.5 rounded-2xl text-slate-600 shrink-0">
                     <Clock size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-slate-900 mb-1">{t.contact.info.hours}</h4>
                     <p className="text-slate-600 text-sm leading-relaxed">
                       Sun - Fri: 9:00 AM - 5:00 PM<br/>
                       <span className="text-red-500">Saturday: Closed</span>
                     </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100 relative overflow-hidden">
              {/* Decorative top border */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-500 via-purple-500 to-blue-500"></div>

              {status === 'success' ? (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-center space-y-6 animate-fade-in-up">
                  <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-4 ring-8 ring-green-50/50">
                    <Check size={48} />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">{t.contact.form.successTitle}</h3>
                  <p className="text-slate-600 max-w-md text-lg">{t.contact.form.successMessage}</p>
                  <button 
                    onClick={handleReset} 
                    className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full font-bold transition"
                  >
                    {t.contact.form.reset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700 ml-1">{t.contact.form.name} <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g. Sunita Sharma"
                        className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        disabled={status === 'submitting'}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-slate-700 ml-1">{t.contact.form.phone} <span className="text-red-500">*</span></label>
                      <input 
                        required
                        type="tel" 
                        placeholder="9800000000"
                        className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        disabled={status === 'submitting'}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      placeholder="yourname@example.com"
                      className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-slate-700 ml-1">{t.contact.form.message}</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about your requirements..."
                      className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>

                  {/* Robust File Upload */}
                  <div className="space-y-2">
                     <label className="block text-sm font-bold text-slate-700 ml-1">{t.contact.form.upload}</label>
                     
                     {!formData.file ? (
                       <div 
                          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all duration-200 cursor-pointer group relative overflow-hidden
                            ${dragActive ? 'border-brand-500 bg-brand-50' : 'border-slate-300 hover:border-brand-400 hover:bg-slate-50'}
                          `}
                          onDragEnter={handleDrag}
                          onDragLeave={handleDrag}
                          onDragOver={handleDrag}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                       >
                         <input 
                            ref={fileInputRef}
                            type="file" 
                            accept=".pdf,.jpg,.png,.jpeg"
                            className="hidden"
                            onChange={handleFileChange}
                            disabled={status === 'submitting'}
                         />
                         <div className="flex flex-col items-center gap-3 relative z-10">
                           <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${dragActive ? 'bg-brand-200 text-brand-700' : 'bg-slate-100 text-slate-400 group-hover:bg-brand-100 group-hover:text-brand-600'}`}>
                             <Upload size={24} />
                           </div>
                           <div>
                              <p className="text-sm font-bold text-slate-700 group-hover:text-brand-700 transition-colors">
                                {t.contact.form.uploadHint}
                              </p>
                              <p className="text-xs text-slate-400 mt-1">Secure & Private</p>
                           </div>
                         </div>
                       </div>
                     ) : (
                       <div className="border border-slate-200 rounded-xl p-4 flex items-center justify-between bg-brand-50/50">
                         <div className="flex items-center gap-3">
                            <div className="bg-white p-2 rounded-lg text-brand-600 shadow-sm border border-brand-100">
                              <FileText size={20} />
                            </div>
                            <div className="text-left">
                              <p className="text-sm font-bold text-slate-800 truncate max-w-[200px] sm:max-w-xs">{formData.file.name}</p>
                              <p className="text-xs text-slate-500">{(formData.file.size / 1024).toFixed(0)} KB</p>
                            </div>
                         </div>
                         <button 
                           type="button"
                           onClick={() => setFormData({...formData, file: null})}
                           className="p-2 hover:bg-white rounded-full text-slate-400 hover:text-red-500 transition"
                           disabled={status === 'submitting'}
                         >
                           <X size={18} />
                         </button>
                       </div>
                     )}
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`w-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-700 hover:to-brand-600 text-white font-bold text-lg py-4 rounded-xl shadow-xl shadow-brand-200 transition-all transform active:scale-95 flex items-center justify-center gap-2
                      ${status === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}
                    `}
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        {t.contact.form.submitting}
                      </>
                    ) : t.contact.form.submit}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-bold tracking-wider uppercase text-sm mb-2 block">Common Questions</span>
            <h2 className="text-3xl font-bold text-slate-900">{t.patientCare.faqTitle}</h2>
          </div>
          
          <div className="space-y-4">
            {t.patientCare.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span className="font-bold text-slate-800 text-lg pr-8">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center transition-transform duration-300 ${activeFaq === idx ? 'rotate-180 bg-brand-50 text-brand-600' : 'text-slate-400'}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === idx ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="max-w-4xl mx-auto bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-700 rounded-full blur-3xl opacity-20 translate-x-1/3 -translate-y-1/3"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
             <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/10">
               <Lock size={32} className="text-brand-300" />
             </div>
             <div>
               <h3 className="text-2xl font-bold mb-4">{t.patientCare.privacyTitle}</h3>
               <p className="text-slate-300 leading-relaxed opacity-90 text-lg">
                 {t.patientCare.privacyText}
               </p>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
};
