
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Translation, Doctor } from '../types';
import { 
  GraduationCap, Clock, Stethoscope, Calendar, Users, Activity, 
  ArrowRight, Languages, BookOpen, Trophy, FileText,
  ChevronDown, ChevronUp, Medal
} from 'lucide-react';

interface PageProps {
  t: Translation;
  lang: 'en' | 'ne';
  doctors: Doctor[];
}

export const Team: React.FC<PageProps> = ({ t, lang, doctors }) => {
  const [expandedDocs, setExpandedDocs] = useState<Record<string, boolean>>({});

  const toggleDoc = (id: string) => {
    setExpandedDocs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden rounded-b-[3rem] shadow-sm">
        <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in-up">
           <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wide">
              <Users size={16} />
              {lang === 'en' ? 'Our Experts' : 'हाम्रा विशेषज्ञहरू'}
           </div>
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">{t.team.title}</h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
             {t.team.subtitle}
           </p>
        </div>
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-60"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        </div>
      </section>

      {/* Executive Director Spotlight - Redesigned */}
      {doctors.filter(d => d.isExecutive).map((doc) => {
        const isExpanded = expandedDocs[doc.id];
        
        return (
        <section key={doc.id} className="py-16 container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-brand-100 mb-12 transition-all duration-300">
            {/* Top Split View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <div className="lg:col-span-4 h-[400px] lg:h-auto relative group bg-slate-100">
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top lg:absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/90 to-transparent flex items-end p-6 lg:p-8">
                  <div className="text-white">
                     <h3 className="text-2xl font-bold leading-tight mb-1">{doc.name}</h3>
                     <p className="text-brand-200 font-medium text-sm">{doc.role}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-8 p-8 md:p-12 flex flex-col">
                 <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">{doc.name}</h2>
                    <p className="text-xl text-brand-600 font-bold mb-4">{doc.role}</p>
                    <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-brand-200 pl-4 italic">
                      "{doc.professionalSummary}"
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                       <div className="flex items-start gap-3">
                          <div className="bg-brand-50 p-2 rounded-lg text-brand-600 mt-1"><GraduationCap size={18} /></div>
                          <div>
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Qualifications</h4>
                             <p className="text-slate-800 font-medium text-sm leading-snug">{doc.qualification}</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <div className="bg-blue-50 p-2 rounded-lg text-blue-600 mt-1"><Languages size={18} /></div>
                          <div>
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Languages Spoken</h4>
                             <p className="text-slate-800 font-medium text-sm">{doc.languages?.join(', ')}</p>
                          </div>
                       </div>
                    </div>

                    <div className="space-y-4">
                       <div className="flex items-start gap-3">
                          <div className="bg-green-50 p-2 rounded-lg text-green-600 mt-1"><Stethoscope size={18} /></div>
                          <div>
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Specialization</h4>
                             <p className="text-slate-800 font-medium text-sm leading-snug">{doc.specialization}</p>
                          </div>
                       </div>
                       <div className="flex items-start gap-3">
                          <div className="bg-purple-50 p-2 rounded-lg text-purple-600 mt-1"><Activity size={18} /></div>
                          <div>
                             <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Experience</h4>
                             <p className="text-slate-800 font-medium text-sm">{doc.experience}</p>
                          </div>
                       </div>
                    </div>
                 </div>

                 <div className="mt-auto pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div className="flex flex-wrap gap-4 items-center">
                        <Link to="/contact" className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-brand-200 transition-all hover:-translate-y-0.5 text-sm">
                          {t.team.bookWith} <ArrowRight size={16} />
                        </Link>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-50 rounded-full text-slate-600 text-sm font-bold border border-slate-100">
                          <Calendar size={16} /> {doc.availability}
                        </div>
                    </div>

                    <button 
                        onClick={() => toggleDoc(doc.id)}
                        className="group flex items-center gap-2 text-brand-600 font-bold text-sm px-4 py-2 hover:bg-brand-50 rounded-full transition-all"
                    >
                        {isExpanded ? (
                            <>View Less <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" /></>
                        ) : (
                            <>View Full Career Profile <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" /></>
                        )}
                    </button>
                 </div>
              </div>
            </div>

            {/* Collapsible Detailed Sections */}
            <div 
               className={`grid transition-[grid-template-rows] duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
               <div className="overflow-hidden">
                  <div className={`border-t border-slate-100 bg-slate-50/50 p-8 md:p-12 transition-all duration-700 ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                     
                     {/* Awards Section - Full Width */}
                     {doc.awards && (
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 mb-12 shadow-sm">
                          <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
                            <Medal className="text-amber-600 fill-amber-100" size={24} /> Awards & Recognition
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {doc.awards.map((award, i) => (
                               <div key={i} className="flex items-center gap-4 bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-amber-100 shadow-sm hover:bg-white transition-colors">
                                  <div className="bg-gradient-to-br from-amber-400 to-yellow-500 p-2.5 rounded-full text-white shadow-md shadow-amber-200">
                                    <Trophy size={20} />
                                  </div>
                                  <span className="font-bold text-slate-800 text-lg">{award}</span>
                               </div>
                             ))}
                          </div>
                        </div>
                     )}

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Milestones & Achievements */}
                        <div className="space-y-10">
                           {/* Milestones */}
                           {doc.milestones && (
                             <div>
                               <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                 <Clock className="text-brand-500" /> Career Milestones
                               </h3>
                               <div className="border-l-2 border-brand-200 ml-3 space-y-8 pl-6 py-2">
                                 {doc.milestones.map((m, i) => (
                                   <div key={i} className="relative">
                                     <div className="absolute -left-[31px] top-1.5 w-4 h-4 bg-brand-500 rounded-full border-2 border-white shadow-sm"></div>
                                     <span className="block text-brand-600 font-bold text-sm mb-1">{m.year}</span>
                                     <p className="text-slate-700 text-sm leading-relaxed">{m.milestone}</p>
                                   </div>
                                 ))}
                               </div>
                             </div>
                           )}
                           
                           {/* Achievements */}
                           {doc.achievements && (
                             <div>
                               <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                  <Activity className="text-brand-500" /> Professional Contributions
                               </h3>
                               <ul className="space-y-3">
                                 {doc.achievements.map((ach, i) => (
                                   <li key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                      <div className="min-w-[6px] h-[6px] rounded-full bg-brand-500 mt-2"></div>
                                      <span className="text-slate-700 text-sm leading-relaxed">{ach}</span>
                                   </li>
                                 ))}
                               </ul>
                             </div>
                           )}
                        </div>

                        {/* Right Column: Publications & Books */}
                        <div className="space-y-10">
                           {/* Books */}
                           {doc.books && (
                              <div>
                                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <BookOpen className="text-blue-500" /> Books & Monographs
                                 </h3>
                                 <div className="space-y-4">
                                    {doc.books.map((book, i) => (
                                       <div key={i} className="bg-blue-50/50 p-5 rounded-xl border border-blue-100 hover:bg-blue-50 transition-colors">
                                          <h4 className="font-bold text-slate-900 mb-1">{book.title}</h4>
                                          {book.publisher && <p className="text-blue-600 text-xs font-semibold uppercase tracking-wide">{book.publisher}</p>}
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}

                           {/* Publications */}
                           {doc.publications && (
                              <div>
                                 <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                    <FileText className="text-slate-500" /> Selected Publications
                                 </h3>
                                 <div className="space-y-4">
                                    {doc.publications.map((pub, i) => (
                                       <div key={i} className="group p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                                          <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-brand-600 transition-colors">"{pub.title}"</h4>
                                          <p className="text-slate-500 text-xs italic">{pub.journal}</p>
                                       </div>
                                    ))}
                                 </div>
                              </div>
                           )}
                           
                           {/* Advanced Training */}
                           {doc.advancedTraining && (
                              <div className="bg-slate-900 text-white p-6 rounded-2xl relative overflow-hidden shadow-lg">
                                 <div className="relative z-10">
                                    <h3 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                                        <GraduationCap size={20} /> Advanced Training
                                    </h3>
                                    <ul className="space-y-3">
                                       {doc.advancedTraining.map((training, i) => (
                                          <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                                             <span className="mt-1.5 w-1.5 h-1.5 bg-brand-500 rounded-full shrink-0"></span>
                                             {training}
                                          </li>
                                       ))}
                                    </ul>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      )})}

      {/* Other Specialists */}
      <section className="py-20 container mx-auto px-4">
         <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{lang === 'en' ? 'Senior Consultants' : 'वरिष्ठ विशेषज्ञहरू'}</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {doctors.filter(d => !d.isExecutive).map((doc) => (
               <div key={doc.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                     <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                     <div className="absolute bottom-0 left-0 p-6 text-white">
                        <h3 className="text-xl font-bold">{doc.name}</h3>
                        <p className="text-brand-200 text-sm font-medium">{doc.role}</p>
                     </div>
                  </div>
                  
                  <div className="p-6 flex-grow space-y-4">
                     <div>
                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">Qualification</div>
                        <p className="text-sm text-slate-700 font-medium">{doc.qualification}</p>
                     </div>
                     <div>
                        <div className="text-xs font-bold text-slate-400 uppercase mb-1">Specialization</div>
                        <p className="text-sm text-slate-700 font-medium">{doc.specialization}</p>
                     </div>
                     <div className="flex items-center justify-between pt-4 border-t border-slate-50 mt-auto">
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                           <Clock size={14} /> {doc.experience}
                        </div>
                        <Link to="/contact" className="text-brand-600 font-bold text-sm flex items-center gap-1 hover:underline">
                           {t.team.bookWith} <ArrowRight size={14} />
                        </Link>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Allied Health (Nutritionist) */}
      <section className="py-16 bg-brand-50/50 mt-12">
         <div className="container mx-auto px-4">
             <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">{lang === 'en' ? 'Allied Health Specialists' : 'सम्बद्ध स्वास्थ्य विशेषज्ञहरू'}</h2>
             <div className="bg-white rounded-3xl shadow-lg max-w-4xl mx-auto p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center border border-brand-100">
                <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-8 border-brand-50 shadow-inner">
                   <img src={t.services.nutritionist.image} alt={t.services.nutritionist.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-center md:text-left">
                   <h3 className="text-2xl font-bold text-slate-900 mb-1">{t.services.nutritionist.name}</h3>
                   <p className="text-brand-600 font-medium mb-4">{t.services.nutritionist.role}</p>
                   <p className="text-slate-600 italic mb-6">"{t.services.nutritionist.bio}"</p>
                   <div className="flex flex-wrap justify-center md:justify-start gap-3">
                      <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">{t.services.nutritionist.qualification}</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold border border-blue-100">{t.services.nutritionist.experience}</span>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* Support Staff */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 mx-auto mb-8">
               <Activity size={32} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">{t.team.supportTitle}</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
               {t.team.supportText}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               {['Embryologists', 'Lab Technicians', 'Fertility Nurses', 'Counsellors', 'Patient Care Coordinators'].map((role, i) => (
                  <span key={i} className="px-6 py-3 bg-slate-50 text-slate-700 rounded-xl font-bold border border-slate-100 shadow-sm">
                     {role}
                  </span>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
         <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Book a Consultation with Our Experts</h2>
            <p className="text-slate-400 mb-10 max-w-2xl mx-auto">Take the next step in your journey with the most experienced fertility team in Nepal.</p>
            <Link to="/contact" className="inline-block bg-brand-600 hover:bg-brand-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl transition-transform hover:scale-105">
               {t.nav.bookAppointment}
            </Link>
         </div>
      </section>

    </div>
  );
};
