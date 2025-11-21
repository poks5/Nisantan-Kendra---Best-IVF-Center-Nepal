
import { Doctor, Testimonial } from '../types';
import { DOCTORS, TRANSLATIONS } from '../constants';

// Configuration
// In production, you would set these via environment variables
const CMS_API_URL = 'http://localhost:1337/api'; // Example Strapi URL
const USE_CMS = false; // TOGGLE THIS TO TRUE when you have your Strapi/Contentful backend ready

/**
 * Fetches the list of doctors from the CMS or falls back to local data.
 */
export const fetchDoctors = async (lang: 'en' | 'ne'): Promise<Doctor[]> => {
  if (!USE_CMS) {
    // Simulate network delay for realism in dev
    // await new Promise(resolve => setTimeout(resolve, 500)); 
    return DOCTORS[lang];
  }

  try {
    // Example: Fetching from Strapi V4
    // Endpoint: /api/doctors?locale={lang}&populate=*
    const response = await fetch(`${CMS_API_URL}/doctors?locale=${lang}&populate=*`);
    
    if (!response.ok) {
      throw new Error(`CMS Error: ${response.statusText}`);
    }

    const json = await response.json();

    // Mapper: Transform Strapi JSON format to our internal Doctor interface
    // This assumes Strapi returns { data: [{ id: 1, attributes: { ... } }] }
    return json.data.map((item: any) => ({
      id: item.id.toString(),
      name: item.attributes.name,
      role: item.attributes.role,
      qualification: item.attributes.qualification,
      experience: item.attributes.experience,
      specialization: item.attributes.specialization,
      availability: item.attributes.availability,
      image: item.attributes.image?.data?.attributes?.url || 'https://picsum.photos/500/500', // Handle image relation
      isExecutive: item.attributes.isExecutive,
      isFeatured: item.attributes.isFeatured,
      languages: item.attributes.languages, // Assumes JSON component or array
      professionalSummary: item.attributes.professionalSummary,
      advancedTraining: item.attributes.advancedTraining,
      milestones: item.attributes.milestones,
      publications: item.attributes.publications,
      books: item.attributes.books,
      achievements: item.attributes.achievements,
      awards: item.attributes.awards
    }));

  } catch (error) {
    console.warn("Failed to fetch doctors from CMS. Falling back to local data.", error);
    // Fallback ensures the site never breaks even if CMS is down
    return DOCTORS[lang];
  }
};

/**
 * Fetches testimonials from the CMS or falls back to local data.
 */
export const fetchTestimonials = async (lang: 'en' | 'ne'): Promise<Testimonial[]> => {
  if (!USE_CMS) {
    return TRANSLATIONS[lang].testimonials.items;
  }

  try {
    const response = await fetch(`${CMS_API_URL}/testimonials?locale=${lang}`);
    if (!response.ok) throw new Error('Failed to fetch');
    const json = await response.json();

    return json.data.map((item: any) => ({
      id: item.id.toString(),
      name: item.attributes.name,
      text: item.attributes.text,
      location: item.attributes.location
    }));
  } catch (error) {
    console.warn("Failed to fetch testimonials. Falling back.", error);
    return TRANSLATIONS[lang].testimonials.items;
  }
};
