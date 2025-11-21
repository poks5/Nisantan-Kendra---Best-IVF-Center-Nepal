
import React from 'react';
import { TRANSLATIONS, DOCTORS } from '../constants';
import { Printer, AlertTriangle, Search, Shield, Server, CheckCircle } from 'lucide-react';

export const Audit: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans print:bg-white">
      {/* No-Print Header */}
      <div className="bg-slate-900 text-white py-6 px-4 print:hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Website Content & Audit Report</h1>
            <p className="text-slate-400 text-sm">Generated for Nisantan Kendra</p>
          </div>
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white px-6 py-3 rounded-full font-bold transition shadow-lg"
          >
            <Printer size={18} /> Download / Print PDF
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl print:py-0 print:max-w-full">
        
        {/* Report Header (Print Only) */}
        <div className="hidden print:block mb-8 border-b-2 border-slate-900 pb-4">
          <h1 className="text-4xl font-bold">Nisantan Kendra - Website Audit Report</h1>
          <p className="text-lg text-slate-600 mt-2">Proofreading Content, Security Analysis & SEO Status</p>
          <p className="text-sm text-slate-400 mt-1">Date: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Section 1: Technical Audit */}
        <section className="mb-16 break-inside-avoid">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 border-b border-slate-200 pb-2">
            <Server className="text-brand-600" /> Technical Audit & Recommendations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 print:border-slate-900">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600">
                 <Shield size={20} /> Security Weaknesses
               </h3>
               <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                 <li><strong>Client-Side API Key:</strong> The Gemini API key is currently exposed in the frontend code. This is a major security risk. 
                   <span className="block text-xs bg-red-100 text-red-800 p-1 rounded mt-1">Fix: Move AI calls to a backend server (Node.js/Python) so the key is never sent to the browser.</span>
                 </li>
                 <li><strong>Form Submission:</strong> The contact form currently simulates submission. No actual email is sent and no data is stored.
                   <span className="block text-xs bg-yellow-100 text-yellow-800 p-1 rounded mt-1">Fix: Integrate with EmailJS or a backend API endpoint to handle form data securely.</span>
                 </li>
                 <li><strong>No Rate Limiting:</strong> The chatbot and forms do not have rate limiting, making them vulnerable to spam/abuse.</li>
               </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 print:border-slate-900">
               <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-600">
                 <Search size={20} /> SEO Optimization Status
               </h3>
               <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
                 <li><strong>Meta Tags:</strong> <span className="font-bold text-green-600">Optimized</span>. The application now includes targeted keywords ("IVF Nepal", "Dr. Uma Shrivastava"), Open Graph tags for social sharing, and a descriptive title tag.</li>
                 <li><strong>SPA Limitations:</strong> As a React Single Page Application, some older crawlers may still miss dynamic content.
                   <span className="block text-xs bg-blue-100 text-blue-800 p-1 rounded mt-1">Recommendation: Consider Server-Side Rendering (Next.js) for maximum visibility, or ensure 'robots.txt' allows full crawling.</span>
                 </li>
                 <li><strong>Sitemap:</strong> A <code>sitemap.xml</code> needs to be generated.
                   <span className="block text-xs bg-slate-200 p-1 rounded mt-1">Action: Generate XML sitemap listing all routes (/services, /ivf-unit, etc.) and submit to Google Search Console.</span>
                 </li>
                 <li><strong>Performance:</strong> Images should use <code>loading="lazy"</code> and WebP formats to improve Core Web Vitals scores (LCP/CLS).</li>
               </ul>
            </div>
          </div>

          <div className="mt-8 bg-slate-50 p-6 rounded-xl border border-slate-200 print:border-slate-900">
             <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-600">
               <CheckCircle size={20} /> Recommended Upgrades
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
               <ul className="list-disc pl-5 space-y-2">
                 <li><strong>Backend Integration:</strong> Build a secure backend to store patient appointments and handle AI requests.</li>
                 <li><strong>CMS Integration:</strong> <span className="font-bold text-green-600">Ready</span>. The architecture now supports fetching dynamic content (Doctors, Testimonials) from Strapi/Contentful via `services/cms.ts`.</li>
               </ul>
               <ul className="list-disc pl-5 space-y-2">
                 <li><strong>Analytics:</strong> Integrate Google Analytics 4 to track user behavior and conversion rates.</li>
                 <li><strong>Accessibility (a11y):</strong> Ensure full WCAG 2.1 compliance (screen readers, keyboard navigation).</li>
               </ul>
             </div>
          </div>
        </section>

        {/* Section 2: Google Listing Procedure */}
        <section className="mb-16 break-inside-avoid">
           <h2 className="text-3xl font-bold mb-6 border-b border-slate-200 pb-2">Google Listing Procedure</h2>
           <div className="prose max-w-none text-slate-700 text-sm">
             <p className="mb-4">To ensure Nisantan Kendra appears on Google Maps and Search ("Local Pack"), follow these steps:</p>
             <ol className="list-decimal pl-5 space-y-3">
               <li><strong>Create Account:</strong> Go to <a href="https://www.google.com/business/" className="text-blue-600 underline">Google Business Profile</a> and sign in with the clinic's official Gmail.</li>
               <li><strong>Add Business:</strong> Enter "Nisantan Kendra". If it appears, claim it. If not, "Add your business to Google".</li>
               <li><strong>Category:</strong> Select "Fertility Physician" or "Fertility Clinic".</li>
               <li><strong>Location:</strong> Enter the exact address: <em>Bijulibazar, New Baneshwor, Kathmandu</em>. Pin the location precisely on the map.</li>
               <li><strong>Contact Info:</strong> Add the phone numbers (01-4795087) and website URL.</li>
               <li><strong>Verification:</strong> Google will likely mail a postcard with a code to the clinic address (takes 14+ days in Nepal) or offer phone verification.</li>
               <li><strong>Optimization (Crucial):</strong>
                 <ul className="list-disc pl-5 mt-2">
                   <li>Upload high-quality photos of the exterior, reception, and team.</li>
                   <li>Add the business hours (Sun-Fri 9-5).</li>
                   <li>Ask satisfied patients to leave 5-star reviews immediately.</li>
                   <li>Post updates/offers regularly on the profile.</li>
                 </ul>
               </li>
             </ol>
           </div>
        </section>

        {/* Section 3: Content Proofreading */}
        <section>
          <h2 className="text-3xl font-bold mb-8 border-b border-slate-200 pb-2">Website Content (Proofreading)</h2>
          
          {/* English Content */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-700 mb-4 bg-brand-50 p-2">English Content</h3>
            
            <div className="space-y-8">
               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Hero Section</h4>
                 <p className="text-sm text-slate-600"><strong>Title:</strong> {TRANSLATIONS.en.hero.title}</p>
                 <p className="text-sm text-slate-600"><strong>Subtitle:</strong> {TRANSLATIONS.en.hero.subtitle}</p>
                 <p className="text-sm text-slate-600"><strong>Badge:</strong> {TRANSLATIONS.en.hero.badge}</p>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">About Us</h4>
                 <p className="text-sm text-slate-600"><strong>Description:</strong> {TRANSLATIONS.en.about.description}</p>
                 <p className="text-sm text-slate-600 mt-2"><strong>Mission:</strong> {TRANSLATIONS.en.about.mission}</p>
                 <p className="text-sm text-slate-600 mt-2"><strong>Vision:</strong> {TRANSLATIONS.en.about.vision}</p>
                 <div className="mt-2">
                   <strong>History Timeline:</strong>
                   <ul className="list-disc pl-5 text-xs mt-1">
                     {TRANSLATIONS.en.about.timeline.map((t, i) => (
                       <li key={i}>{t.year}: {t.title} - {t.description}</li>
                     ))}
                   </ul>
                 </div>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Services</h4>
                 <p className="text-sm text-slate-600"><strong>Subtitle:</strong> {TRANSLATIONS.en.services.subtitle}</p>
                 <div className="mt-2 grid grid-cols-2 gap-4">
                    {TRANSLATIONS.en.services.items.map((s, i) => (
                      <div key={i} className="text-xs border p-2 rounded">
                        <strong>{s.title}</strong>: {s.description}
                      </div>
                    ))}
                 </div>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Doctors</h4>
                 {DOCTORS.en.map((doc, i) => (
                    <div key={i} className="mb-4 text-sm text-slate-700">
                      <p><strong>{doc.name}</strong> ({doc.role})</p>
                      <p className="text-xs italic">{doc.professionalSummary}</p>
                      <p className="text-xs">Spec: {doc.specialization}</p>
                    </div>
                 ))}
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Nutritionist</h4>
                 <div className="text-sm text-slate-700">
                    <p><strong>{TRANSLATIONS.en.services.nutritionist.name}</strong></p>
                    <p><strong>Bio:</strong> {TRANSLATIONS.en.services.nutritionist.bio}</p>
                    <p><strong>Focus:</strong> {TRANSLATIONS.en.services.nutritionist.professionalFocus}</p>
                 </div>
               </div>

               <div>
                  <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Patient Care & FAQ</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {TRANSLATIONS.en.patientCare.faqs.map((f, i) => (
                      <li key={i}>Q: {f.question} | A: {f.answer}</li>
                    ))}
                  </ul>
                  <p className="text-xs mt-2"><strong>Privacy:</strong> {TRANSLATIONS.en.patientCare.privacyText}</p>
               </div>
            </div>
          </div>

          <hr className="my-8 border-slate-300 print:break-after-page" />

          {/* Nepali Content */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-brand-700 mb-4 bg-brand-50 p-2">Nepali Content</h3>
            
            <div className="space-y-8 font-mukta">
               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Hero Section</h4>
                 <p className="text-sm text-slate-600"><strong>Title:</strong> {TRANSLATIONS.ne.hero.title}</p>
                 <p className="text-sm text-slate-600"><strong>Subtitle:</strong> {TRANSLATIONS.ne.hero.subtitle}</p>
                 <p className="text-sm text-slate-600"><strong>Badge:</strong> {TRANSLATIONS.ne.hero.badge}</p>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">About Us</h4>
                 <p className="text-sm text-slate-600"><strong>Description:</strong> {TRANSLATIONS.ne.about.description}</p>
                 <p className="text-sm text-slate-600 mt-2"><strong>Mission:</strong> {TRANSLATIONS.ne.about.mission}</p>
                 <p className="text-sm text-slate-600 mt-2"><strong>Vision:</strong> {TRANSLATIONS.ne.about.vision}</p>
                 <div className="mt-2">
                   <strong>History Timeline:</strong>
                   <ul className="list-disc pl-5 text-xs mt-1">
                     {TRANSLATIONS.ne.about.timeline.map((t, i) => (
                       <li key={i}>{t.year}: {t.title} - {t.description}</li>
                     ))}
                   </ul>
                 </div>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Services</h4>
                 <p className="text-sm text-slate-600"><strong>Subtitle:</strong> {TRANSLATIONS.ne.services.subtitle}</p>
                 <div className="mt-2 grid grid-cols-2 gap-4">
                    {TRANSLATIONS.ne.services.items.map((s, i) => (
                      <div key={i} className="text-xs border p-2 rounded">
                        <strong>{s.title}</strong>: {s.description}
                      </div>
                    ))}
                 </div>
               </div>

               <div>
                 <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Doctors</h4>
                 {DOCTORS.ne.map((doc, i) => (
                    <div key={i} className="mb-4 text-sm text-slate-700">
                      <p><strong>{doc.name}</strong> ({doc.role})</p>
                      <p className="text-xs italic">{doc.professionalSummary}</p>
                      <p className="text-xs">Spec: {doc.specialization}</p>
                    </div>
                 ))}
               </div>

               <div>
                  <h4 className="font-bold text-lg border-b border-slate-100 mb-2">Patient Care & FAQ</h4>
                  <ul className="list-disc pl-5 text-xs space-y-1">
                    {TRANSLATIONS.ne.patientCare.faqs.map((f, i) => (
                      <li key={i}>Q: {f.question} | A: {f.answer}</li>
                    ))}
                  </ul>
                  <p className="text-xs mt-2"><strong>Privacy:</strong> {TRANSLATIONS.ne.patientCare.privacyText}</p>
               </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};
