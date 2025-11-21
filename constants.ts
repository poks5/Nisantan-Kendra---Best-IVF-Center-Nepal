
import { Translation, Doctor } from './types';

export const TRANSLATIONS: Record<'en' | 'ne', Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Our Team",
      successStories: "Stories",
      contact: "Contact",
      bookAppointment: "Book Appointment"
    },
    hero: {
      title: "NisantanKendra",
      subtitle: "Leading the way in fertility treatment in Nepal since 1992. We have helped over 25,000 couples realize their dreams of parenthood.",
      cta: "Start Your Journey",
      secondaryCta: "Our History",
      badge: "Est. 1992 - 32 Years of Trust"
    },
    about: {
      title: "About Nisantan Kendra",
      description: "Nisantan Kendra was established in 1992, pioneering fertility treatment in Nepal. Since our foundation, we have been dedicated to providing comprehensive fertility, hormone, and specialized health treatments to all patients. Over the past three decades, we have helped more than 25,000 couples realize their dreams of parenthood.",
      historyTitle: "Our Journey",
      historyDescription: "From Nepal's first infertility center to a world-class facility.",
      timeline: [
        { year: "1992", title: "Foundation", description: "Reproductive Health Care Center established." },
        { year: "1993", title: "Renamed as Infertility Center", description: "Nepal's first infertility center & first hormone laboratory." },
        { year: "1995", title: "First IUI Center", description: "Pioneered IUI treatments in Nepal." },
        { year: "2002", title: "First IVF Center", description: "Started IVF services with state-of-the-art facility." },
        { year: "2003", title: "First IVF Baby", description: "First IVF baby in Nepal by Nepalese specialist." },
        { year: "2024", title: "8000+ Happy Parents", description: "32 years of trusted service with modern lab." }
      ],
      achievementsTitle: "Our Achievements",
      achievements: [
        { title: "Pioneers of IVF", description: "First center to introduce IVF technology in Nepal (2002), setting the standard for fertility care.", icon: "trophy" },
        { title: "First IVF Baby", description: "Successfully delivered Nepal's first IVF baby in 2003, a historic milestone for the country.", icon: "baby" },
        { title: "High Success Rates", description: "Consistently maintaining success rates comparable to top international fertility centers.", icon: "trending" },
        { title: "Community Trust", description: "Trusted by over 25,000 families for three decades of ethical and transparent service.", icon: "shield" }
      ],
      missionTitle: "Our Mission",
      mission: "To provide comprehensive, ethical, advanced infertility care to help every couple achieve parenthood. We are committed to evidence-based treatment, transparent counseling, and making quality care affordable for all socio-economic groups in Nepal.",
      visionTitle: "Our Vision",
      vision: "To be Nepal's leading infertility center, recognized for innovation, excellence, and compassionate care. We envision helping thousands more couples achieve parenthood through honest counseling, modern technology, and experienced specialists.",
      affiliationsTitle: "Affiliations",
      affiliations: [
        { name: "Medicity Hospital", role: "Partner hospital for comprehensive medical support" },
        { name: "Reliable Lab", role: "Advanced laboratory services for accurate diagnosis" }
      ],
      whyChooseTitle: "Why Choose Nisantan Kendra",
      whyChoose: [
        { title: "Experienced Leadership", description: "Most experienced doctors in Nepal with 32+ years of expertise in reproductive medicine." },
        { title: "Affordable Care", description: "Services accessible to all socio-economic groups with transparent pricing." },
        { title: "State-of-the-art Lab", description: "Modern laboratory with advanced technology ensuring accurate diagnosis." },
        { title: "Ethical & Evidence-Based", description: "Honest, transparent counseling. We understand that 15% of Nepali couples face infertility." }
      ],
      stats: {
        couples: "Couples Helped",
        parents: "Happy Parents",
        years: "Years Experience"
      }
    },
    services: {
      title: "Our Comprehensive Services",
      subtitle: "Comprehensive fertility and reproductive health services tailored to your unique needs.",
      viewAll: "View All Services",
      facilitiesTitle: "Our State-of-the-Art Facilities",
      facilitiesSubtitle: "Advanced laboratory equipment and modern facilities for superior fertility care",
      facilities: [
        { title: "ICSI Laboratory", description: "ICSI Laboratory", image: "https://picsum.photos/400/300?random=101" },
        { title: "Laminar Flow System", description: "Laminar Flow System", image: "https://picsum.photos/400/300?random=102" },
        { title: "Microscope Laboratory", description: "Microscope Laboratory", image: "https://picsum.photos/400/300?random=103" },
        { title: "Ovum Pickup Procedure", description: "Ovum Pickup Procedure", image: "https://picsum.photos/400/300?random=104" },
        { title: "Ultrasound Imaging", description: "Ultrasound Imaging", image: "https://picsum.photos/400/300?random=105" }
      ],
      categories: [
        { id: 'all', label: 'All Services' },
        { id: 'primary', label: 'Primary Care' },
        { id: 'diagnostic', label: 'Diagnostic' },
        { id: 'treatment', label: 'Treatment' },
        { id: 'support', label: 'Support' }
      ],
      items: [
        { 
          id: 'basic-investigations', 
          category: 'primary', 
          title: 'Basic Investigations', 
          description: 'Comprehensive initial screening tests to assess fertility health and identify potential issues.', 
          icon: '📋',
          details: {
            fullDescription: "Our basic investigation package is the first step in your fertility journey. It involves a series of non-invasive tests designed to assess the general reproductive health of both partners. These tests help our specialists identify any underlying conditions that might be hindering conception.",
            benefits: ["Early detection of potential issues", "Comprehensive health overview", "Non-invasive procedures", "Quick results turnaround"],
            procedureTitle: "What to Expect",
            procedureSteps: ["Consultation with a specialist", "Blood sample collection", "Physical examination", "Review of medical history"],
            candidatesTitle: "Who Needs This?",
            candidates: ["Couples trying to conceive for over a year", "Individuals planning for future pregnancy", "Those with irregular menstrual cycles"]
          }
        },
        { 
          id: 'semen-analysis', 
          category: 'primary', 
          title: 'Semen Analysis', 
          description: 'Detailed laboratory testing to evaluate sperm count, motility, morphology and overall male fertility potential.', 
          icon: '🔬',
          details: {
            fullDescription: "Semen analysis is the most important test for evaluating male fertility. Our advanced laboratory examines the volume, count, motility (movement), and morphology (shape) of sperm to determine male reproductive potential.",
            benefits: ["Accurate assessment of male factor infertility", "Detailed report on sperm health", "Guidance for lifestyle changes or treatment", "Private and discreet process"],
            procedureTitle: "The Process",
            procedureSteps: ["Sample collection in a private room", "Laboratory analysis using WHO criteria", "Microscopic examination", "Report generation within hours"],
            candidatesTitle: "Recommended For",
            candidates: ["Men in couples facing difficulty conceiving", "Follow-up after vasectomy reversal", "Evaluation of reproductive health"]
          }
        },
        { id: 'hormone-testing', category: 'primary', title: 'Hormone Testing', description: 'Comprehensive hormone level testing including FSH, LH, AMH, thyroid and other reproductive hormones.', icon: '🩸', details: { fullDescription: "Hormonal balance is key to fertility. We perform detailed assays for reproductive hormones.", benefits: ["Pinpoint ovulation issues", "Assess ovarian reserve (AMH)", "Thyroid function check"], procedureSteps: ["Blood draw", "Lab analysis", "Consultation"], candidates: ["Women with irregular periods", "Infertility assessment"] } },
        { id: 'imaging-services', category: 'primary', title: 'Imaging Services (USG/TVS)', description: 'Advanced ultrasound imaging including transvaginal sonography for detailed reproductive organ assessment.', icon: '🖥️', details: { fullDescription: "High-resolution ultrasound to visualize the uterus and ovaries.", benefits: ["Detailed organ structure view", "Monitor follicle growth", "Detect cysts or fibroids"], procedureSteps: ["Preparation", "Scanning", "Immediate report"], candidates: ["Routine fertility checkup", "Pain or bleeding issues"] } },
        { id: 'ovulation-monitoring', category: 'primary', title: 'Ovulation Testing & Monitoring', description: 'Regular monitoring of ovulation cycle through hormone testing and ultrasound tracking.', icon: '📅', details: { fullDescription: "Tracking follicle development to time intercourse or IUI.", benefits: ["Maximize conception chance", "Precise timing", "Non-invasive"], procedureSteps: ["Serial ultrasounds", "Hormone tests if needed"], candidates: ["Trying to conceive naturally", "IUI cycles"] } },
        
        { id: 'blocked-tubes', category: 'diagnostic', title: 'Treatment for Blocked Fallopian Tubes', description: 'Specialized procedures to diagnose and treat fallopian tube blockages including HSG and tubal surgeries.', icon: '🔎', details: { fullDescription: "Diagnosis and management of tubal factors.", benefits: ["Identify blockages", "Potential to open tubes"], procedureSteps: ["HSG X-ray", "Laparoscopy if needed"], candidates: ["History of PID", "Ectopic pregnancy"] } },
        { id: 'laparoscopy', category: 'diagnostic', title: 'Laparoscopy & Hysteroscopy', description: 'Minimally invasive surgical procedures to diagnose and treat reproductive organ abnormalities.', icon: '🏥', details: { fullDescription: "Keyhole surgery to inspect and treat pelvic organs.", benefits: ["Minimally invasive", "Quick recovery", "Diagnose & treat in one go"], procedureSteps: ["Anesthesia", "Small incision", "Camera inspection", "Treatment"], candidates: ["Endometriosis", "Fibroids", "Unexplained infertility"] } },
        { id: 'genetic-testing', category: 'diagnostic', title: 'Genetic Testing', description: 'Advanced genetic screening for chromosomal abnormalities and inherited conditions affecting fertility.', icon: '🧬', details: { fullDescription: "Screening for genetic conditions that cause infertility or miscarriage.", benefits: ["Risk assessment", "Prevent inherited diseases"], procedureSteps: ["Blood sample / Karyotyping"], candidates: ["Recurrent miscarriage", "Family history"] } },

        { id: 'hormone-therapy', category: 'treatment', title: 'Hormone Therapy', description: 'Personalized hormone treatments to regulate reproductive function and support fertility.', icon: '💊', details: { fullDescription: "Medications to induce ovulation or support pregnancy.", benefits: ["Regulate cycle", "Support luteal phase"], procedureSteps: ["Oral or injectable meds", "Monitoring"], candidates: ["PCOS", "Ovulation disorders"] } },
        { id: 'tight-cervix', category: 'treatment', title: 'Treatment for Tight Cervix', description: 'Specialized treatments to address cervical stenosis and improve sperm passage.', icon: '🩺', details: { fullDescription: "Dilation of cervical canal.", benefits: ["Allow sperm passage", "Enable IUI/IVF catheter entry"], procedureSteps: ["Dilation under sedation"], candidates: ["Cervical stenosis"] } },
        { 
          id: 'iui', 
          category: 'treatment', 
          title: 'Intrauterine Insemination (IUI)', 
          description: 'Simple fertility treatment that places washed sperm directly into the uterus during ovulation.', 
          icon: '🌱',
          details: {
            fullDescription: "Intrauterine Insemination (IUI) is a fertility treatment that involves placing sperm inside a woman's uterus to facilitate fertilization. The goal of IUI is to increase the number of sperm that reach the fallopian tubes and subsequently increase the chance of fertilization.",
            benefits: ["Less invasive than IVF", "More affordable fertility option", "Uses natural or mild stimulation cycles", "Short procedure time"],
            procedureTitle: "IUI Procedure Steps",
            procedureSteps: ["Ovulation monitoring via ultrasound", "Sperm collection and washing in lab", "Insertion of sperm directly into uterus via a thin catheter", "Rest period of 15-20 minutes"],
            candidatesTitle: "Ideal Candidates",
            candidates: ["Couples with unexplained infertility", "Mild male factor infertility", "Cervical mucus issues", "Donor sperm recipients"]
          }
        },
        { 
          id: 'ivf', 
          category: 'treatment', 
          title: 'In Vitro Fertilization (IVF)', 
          description: 'Advanced assisted reproductive technology combining eggs and sperm in laboratory for embryo creation.', 
          icon: '🧪',
          details: {
            fullDescription: "In Vitro Fertilization (IVF) is an assisted reproductive technology (ART) where an egg is combined with sperm outside the body, in vitro ('in glass'). The process involves monitoring and stimulating a woman's ovulatory process, removing an ovum or ova (egg or eggs) from the woman's ovaries and letting sperm fertilize them in a liquid in a laboratory.",
            benefits: ["Highest success rates per cycle", "Solutions for blocked tubes", "Can help with severe male infertility", "Allows for genetic testing of embryos"],
            procedureTitle: "IVF Treatment Cycle",
            procedureSteps: ["Ovarian stimulation with medication", "Egg retrieval under sedation", "Sperm preparation", "Fertilization in the lab", "Embryo culture (3-5 days)", "Embryo transfer to uterus"],
            candidatesTitle: "Recommended For",
            candidates: ["Blocked or damaged fallopian tubes", "Male factor infertility", "Women with ovulation disorders", "Unexplained infertility", "Endometriosis"]
          }
        },
        { 
          id: 'icsi', 
          category: 'treatment', 
          title: 'Intracytoplasmic Sperm Injection (ICSI)', 
          description: 'Specialized IVF technique where a single sperm is injected directly into an egg for fertilization.', 
          icon: '💉',
          details: {
            fullDescription: "Intracytoplasmic Sperm Injection (ICSI) is a specialized form of IVF that is used primarily for the treatment of severe male-factor infertility. ICSI involves the injection of a single sperm directly into a mature egg.",
            benefits: ["Effective for low sperm count", "Overcomes motility issues", "Higher fertilization rates in specific cases", "Can be used with retrieved sperm"],
            procedureTitle: "How ICSI Works",
            procedureSteps: ["Standard IVF egg retrieval", "Selection of a single healthy sperm", "Injection of sperm into the egg cytoplasm", "Monitoring for fertilization", "Embryo transfer"],
            candidatesTitle: "Who Needs ICSI?",
            candidates: ["Severe male infertility", "Previous IVF fertilization failure", "Low sperm motility or morphology", "Sperm retrieved surgically"]
          }
        },
        { id: 'embryo-transfer', category: 'treatment', title: 'Embryo Transfer', description: 'Final step of IVF where developed embryos are carefully placed into the uterus.', icon: '🤰', details: { fullDescription: "Placing the embryo into the womb.", benefits: ["Painless procedure", "Critical step of IVF"], procedureSteps: ["Full bladder preparation", "Ultrasound guidance", "Transfer via catheter"], candidates: ["IVF patients"] } },
        { id: 'cryopreservation', category: 'treatment', title: 'Sperm, Egg & Embryo Cryopreservation', description: 'Advanced freezing technology to preserve reproductive cells and embryos for future use.', icon: '❄️', details: { fullDescription: "Freezing biological material for later use.", benefits: ["Fertility preservation", "Use surplus embryos later"], procedureSteps: ["Vitrification (fast freezing)", "Storage in liquid nitrogen"], candidates: ["Cancer patients", "Delaying parenthood", "Surplus IVF embryos"] } },
        { id: 'donor-programs', category: 'treatment', title: 'Donor Programs (Egg/Sperm)', description: 'Comprehensive donor egg and sperm programs with careful screening and matching.', icon: '🤝', details: { fullDescription: "Using donor gametes for conception.", benefits: ["Option for those with no eggs/sperm", "High success rates"], procedureSteps: ["Donor screening", "Matching", "IVF/IUI cycle"], candidates: ["Premature ovarian failure", "Azoospermia"] } },
        { id: 'pcos-management', category: 'treatment', title: 'PCOS/PCOD Management', description: 'Comprehensive treatment approach for polycystic ovary syndrome including lifestyle and medical management.', icon: '⚖️', details: { fullDescription: "Holistic management of Polycystic Ovary Syndrome.", benefits: ["Restore ovulation", "Manage weight and symptoms"], procedureSteps: ["Diet/Lifestyle plan", "Medication (Metformin/Letrozole)"], candidates: ["Women with PCOS"] } },
        { id: 'endometriosis', category: 'treatment', title: 'Endometriosis Treatment', description: 'Specialized medical and surgical treatments for endometriosis to improve fertility and reduce pain.', icon: '🏵️', details: { fullDescription: "Managing endometriosis for pain and fertility.", benefits: ["Pain relief", "Improve fertility"], procedureSteps: ["Medical management", "Surgery if needed"], candidates: ["Endometriosis patients"] } },
        { 
          id: 'male-infertility', 
          category: 'treatment', 
          title: 'Male Infertility & Andrology Services', 
          description: 'Comprehensive male fertility evaluation and treatment including surgical sperm retrieval.', 
          icon: '👨‍⚕️',
          details: {
             fullDescription: "We offer a complete range of diagnostic and treatment services for male infertility. From hormonal evaluation to advanced surgical sperm retrieval techniques (TESA/PESA), our andrology unit is equipped to handle all aspects of male reproductive health.",
             benefits: ["Expert evaluation by specialists", "Advanced diagnostic tools", "Surgical options available", "Confidential and supportive care"],
             procedureTitle: "Available Treatments",
             procedureSteps: ["Hormonal therapy", "Surgical Sperm Retrieval (TESA/PESA/TESE)", "Varicocele repair", "Lifestyle counseling"],
             candidatesTitle: "Conditions Treated",
             candidates: ["Azoospermia (No sperm)", "Oligospermia (Low count)", "Erectile dysfunction", "Ejaculatory disorders"]
          } 
        },

        { 
          id: 'counselling', 
          category: 'support', 
          title: 'Infertility Counselling', 
          description: 'Professional psychological support and counselling to help couples navigate their fertility journey.', 
          icon: '🗣️',
          details: {
            fullDescription: "Infertility can be an emotional rollercoaster. Our professional counseling services provide a safe space for couples to express their feelings, understand their treatment options better, and develop coping strategies. We believe mental well-being is crucial for treatment success.",
            benefits: ["Emotional support and stress reduction", "Better understanding of medical procedures", "Improved couple communication", "Decision-making support"],
            procedureTitle: "Our Approach",
            procedureSteps: ["Individual counseling sessions", "Couple therapy", "Stress management techniques", "Support groups"],
            candidatesTitle: "Recommended For",
            candidates: ["All couples undergoing fertility treatment", "Patients facing anxiety or depression", "Couples considering donor programs"]
          }
        },
        { id: 'antenatal', category: 'support', title: 'Antenatal (Pregnancy) Follow-Up', description: 'Comprehensive pregnancy monitoring and care from conception through delivery.', icon: '👶', details: { fullDescription: "Care during pregnancy.", benefits: ["Monitor baby growth", "Maternal health check"], procedureSteps: ["Regular checkups", "Scans"], candidates: ["Pregnant women"] } },
        { id: 'pregnancy-loss', category: 'support', title: 'Recurrent Pregnancy Loss Clinic', description: 'Specialized clinic for investigating and managing recurrent miscarriages with comprehensive testing.', icon: '🩹', details: { fullDescription: "Investigation of repeated miscarriages.", benefits: ["Find cause", "Plan next pregnancy"], procedureSteps: ["Genetic tests", "Uterine check", "Immunology tests"], candidates: ["2+ miscarriages"] } }
      ],
      nutritionistTitle: "Clinical Nutritionist – Nutrition & Diet Services",
      nutritionist: {
        name: "Sajana Pokharel",
        role: "Dietician & Nutritionist",
        qualification: "M.Sc. in Nutrition and Dietetics",
        experience: "8+ Years",
        specialization: "Fertility Nutrition, Women's Health, PCOS Management",
        availability: "Sunday - Friday",
        bio: "Sajana Pokharel is a skilled dietician and clinical nutritionist with more than eight years of professional experience in fertility nutrition, women’s health, and PCOS management. She has worked extensively with women seeking to improve their reproductive health through structured, evidence-based dietary interventions. Her approach combines medical nutrition therapy with practical, personalized guidance to support lasting lifestyle change.",
        image: "https://picsum.photos/400/400?random=88",
        areasOfExpertise: [
          "Fertility nutrition and preconception dietary planning",
          "PCOS management and hormonal balance",
          "Medical nutrition therapy for reproductive disorders",
          "Weight and metabolic management",
          "Nutrition for menstrual health and endocrine conditions",
          "Therapeutic diet planning for overall well-being"
        ],
        professionalFocus: "Sajana helps women enhance their fertility potential and manage PCOS symptoms through tailored meal planning, nutritional counseling, and continuous progress monitoring. She emphasizes scientific dietary strategies, sustainable habits, and a holistic approach to reproductive and metabolic health.",
        servicesOffered: [
          "Comprehensive nutrition assessment",
          "Personalized fertility-focused diet plans",
          "PCOS and hormonal-health diet counseling",
          "Weight-management plans",
          "Nutritional guidance for metabolic and lifestyle-related concerns",
          "Follow-up consultations and long-term nutrition monitoring"
        ],
        approachToCare: "Her practice is grounded in compassion, clear communication, and patient-centered care. She works closely with clients to understand their goals, medical history, and lifestyle, ensuring that every nutrition plan is realistic, achievable, and clinically effective."
      }
    },
    team: {
      title: "Our Doctors",
      subtitle: "Meet our team of experienced fertility specialists dedicated to helping you achieve your dreams.",
      groupPhotoTitle: "Life at Nisantan Kendra",
      groupPhotoSubtitle: "A family dedicated to creating families. Our diverse team of specialists works in harmony for your happiness.",
      supportTitle: "Supported by a Dedicated Team",
      supportText: "Our doctors are supported by highly trained embryologists, laboratory technicians, nurses, and support staff who work together to provide comprehensive care at every step of your journey.",
      viewProfile: "View Full Profile",
      bookWith: "Book Appointment"
    },
    ivfUnit: {
      title: "IVF Unit",
      subtitle: "World-class IVF facility with cutting-edge technology and experienced team",
      aboutTitle: "About Our IVF Unit",
      aboutText: [
        "Our IVF unit is equipped with state-of-the-art technology and designed to provide the highest standards of care. The facility maintains strict environmental controls including HEPA filtered air, controlled temperature and humidity, and positive pressure to ensure optimal conditions for embryo development.",
        "The laboratory is operated by highly trained embryologists who follow international protocols and quality standards. We maintain complete documentation and traceability for all procedures, ensuring the highest level of safety and success rates."
      ],
      facilitiesTitle: "Our Facilities",
      facilities: [
        { title: "Reception & Consultation", description: "Comfortable waiting area and private consultation rooms for patient privacy.", icon: "hospital" },
        { title: "Embryology Laboratory", description: "State-of-the-art lab with controlled environment for embryo culture and development.", icon: "microscope" },
        { title: "ICSI Laboratory", description: "Specialized equipment for intracytoplasmic sperm injection procedures.", icon: "syringe" },
        { title: "Cryopreservation Unit", description: "Advanced freezing technology with backup systems for safe storage.", icon: "snowflake" },
        { title: "Operation Theatre", description: "Sterile environment equipped for egg retrieval and embryo transfer.", icon: "activity" }
      ],
      equipmentTitle: "Our Facility & Equipment",
      equipment: [
        { title: "ICSI Procedure", subtitle: "Advanced micromanipulation", description: "For intracytoplasmic sperm injection", image: "https://picsum.photos/400/300?random=110" },
        { title: "Laminar Flow System", subtitle: "With Egg Separation", description: "Temperature controlled environment for egg handling", image: "https://picsum.photos/400/300?random=111" },
        { title: "Laboratory Microscope", subtitle: "Advanced Microscopy", description: "High-precision microscopes for embryo examination", image: "https://picsum.photos/400/300?random=112" },
        { title: "Ovum Pickup", subtitle: "Retrieval Procedure", description: "Ultrasound-guided egg retrieval procedure", image: "https://picsum.photos/400/300?random=113" },
        { title: "Transvaginal Ultrasound", subtitle: "Advanced Imaging", description: "For monitoring and procedures", image: "https://picsum.photos/400/300?random=114" }
      ],
      techTitle: "Equipment & Technology",
      tech: [
        { label: "Environment", value: "HEPA Filtered Air System" },
        { label: "Culture", value: "CO₂ Incubators" },
        { label: "ICSI", value: "Micromanipulator System" },
        { label: "Analysis", value: "Inverted Microscope" },
        { label: "Storage", value: "Liquid Nitrogen Tanks" },
        { label: "Imaging", value: "Ultrasound Systems" }
      ],
      qualityTitle: "Quality & Safety Standards",
      quality: {
        envTitle: "Environmental Control",
        envItems: ["HEPA filtered air circulation", "Positive pressure rooms", "24/7 temperature monitoring"],
        qaTitle: "Quality Assurance",
        qaItems: ["International protocols", "Regular equipment calibration", "Complete traceability system"]
      }
    },
    patientCare: {
      title: "Patient Care",
      subtitle: "Compassionate care and comprehensive support throughout your fertility journey.",
      journeyTitle: "Your Journey With Us",
      journeySteps: [
        { step: "1", title: "Initial Consultation", description: "Meet with our fertility specialist to discuss your medical history and treatment options." },
        { step: "2", title: "Diagnostic Testing", description: "Comprehensive fertility assessment including blood tests, ultrasound, and other necessary examinations." },
        { step: "3", title: "Personalized Treatment Plan", description: "Receive a customized treatment plan based on your unique situation and goals." },
        { step: "4", title: "Treatment & Support", description: "Begin treatment with continuous support and monitoring from our expert team." }
      ],
      features: [
        { title: "Counseling Services", description: "Professional counseling to help you understand your fertility options.", icon: "counseling" },
        { title: "Privacy & Confidentiality", description: "Strict confidentiality protocols to protect your personal information.", icon: "privacy" },
        { title: "Flexible Scheduling", description: "Convenient appointment times to accommodate your schedule.", icon: "schedule" }
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        { question: "How do I book an appointment?", answer: "You can book an appointment by calling our reception at 01-4795087, 9851074477, or via the contact form on this website." },
        { question: "What should I bring to my first visit?", answer: "Please bring any previous medical records, test reports, and a valid ID card." },
        { question: "How long does IVF treatment take?", answer: "A typical IVF cycle takes about 4 to 6 weeks from the start of medication to the pregnancy test." },
        { question: "What is the success rate of IVF?", answer: "Success rates vary by age and medical condition, but our center consistently matches international standards." },
        { question: "Do you accept insurance?", answer: "Currently, fertility treatments are often not covered by standard insurance in Nepal, but please check with our reception for specific policy tie-ups." }
      ],
      privacyTitle: "Privacy & Confidentiality",
      privacyText: "We are committed to protecting your privacy and maintaining the confidentiality of your medical information. All patient records are kept secure and are only accessible to authorized medical personnel involved in your care. Your personal and medical information will never be shared with third parties without your explicit consent, except as required by law."
    },
    testimonials: {
      title: "Success Stories",
      subtitle: "Real stories from families who found joy at NisantanKendra.",
      items: [
        { id: '1', name: "Sita & Ram", location: "Kathmandu", text: "After 5 years of trying, NisantanKendra gave us our beautiful twins. The doctors were like family." },
        { id: '2', name: "Anita G.", location: "Pokhara", text: "The counseling support made all the difference. I felt understood and cared for every step of the way." },
        { id: '3', name: "The Shrestha Family", location: "Lalitpur", text: "Highly professional and hygienic facility. We are forever grateful for our miracle baby." }
      ]
    },
    contact: {
      title: "Contact Us",
      subtitle: "We are here to listen and help. Reach out for a consultation.",
      info: {
        visit: "Visit Our Center",
        call: "Call Us",
        email: "Email Us",
        hours: "Working Hours"
      },
      actions: {
        whatsapp: "WhatsApp",
        viber: "Viber",
        callNow: "Call Now"
      },
      form: {
        name: "Full Name",
        phone: "Mobile Number",
        email: "Email Address",
        message: "How can we help you?",
        upload: "Upload Medical Reports",
        uploadHint: "Drag & drop or click to upload (PDF, JPG - Max 10MB)",
        submit: "Request Appointment",
        submitting: "Sending...",
        successTitle: "Request Sent Successfully!",
        successMessage: "Our team will review your details and contact you within 24 hours to confirm your appointment.",
        reset: "Send Another Request"
      }
    },
    ai: {
      welcome: "Namaste! I am the NisantanKendra AI Assistant. How can I help you with your fertility journey today?",
      placeholder: "Ask about our history, success rates, or location...",
      disclaimer: "AI provides info only. Please consult our doctors for medical advice.",
      online: "Online"
    }
  },
  ne: {
    nav: {
      home: "गृहपृष्ठ",
      about: "हाम्रो बारेमा",
      services: "सेवाहरू",
      team: "हाम्रो टिम",
      successStories: "सफलताका कथाहरू",
      contact: "सम्पर्क",
      bookAppointment: "अपोइन्टमेन्ट लिनुहोस्"
    },
    hero: {
      title: "निसन्तान केन्द्र",
      subtitle: "१९९२ देखि नेपालमा प्रजनन उपचारमा अग्रणी। हामीले २५,००० भन्दा बढी दम्पतीहरूलाई अभिभावक बन्ने सपना पूरा गर्न मद्दत गरेका छौं।",
      cta: "यात्रा सुरु गर्नुहोस्",
      secondaryCta: "हाम्रो इतिहास",
      badge: "स्थापना १९९२ - ३२ वर्षको विश्वास"
    },
    about: {
      title: "निसन्तान केन्द्रको बारेमा",
      description: "निसन्तान केन्द्र १९९२ मा स्थापना भएको हो, जसले नेपालमा प्रजनन उपचारको सुरुवात गर्यो। स्थापनाकालदेखि नै हामी सबै बिरामीहरूलाई विस्तृत प्रजनन, हर्मोन र विशिष्ट स्वास्थ्य उपचार प्रदान गर्न समर्पित छौं। विगत तीन दशकमा, हामीले २५,००० भन्दा बढी दम्पतीहरूलाई मद्दत गरेका छौं।",
      historyTitle: "हाम्रो यात्रा",
      historyDescription: "नेपालको पहिलो निसन्तान केन्द्र देखि विश्वस्तरीय सुविधासम्म।",
      timeline: [
        { year: "१९९२", title: "स्थापना", description: "प्रजनन स्वास्थ्य हेरचाह केन्द्रको स्थापना।" },
        { year: "१९९३", title: "निसन्तान केन्द्र नामाकरण", description: "नेपालको पहिलो निसन्तान केन्द्र र पहिलो हर्मोन प्रयोगशाला।" },
        { year: "१९९५", title: "पहिलो IUI केन्द्र", description: "नेपालमा IUI उपचारको सुरुवात।" },
        { year: "२००२", title: "पहिलो IVF केन्द्र", description: "अत्याधुनिक सुविधा सहित IVF सेवा सुरु।" },
        { year: "२००३", title: "पहिलो IVF शिशु", description: "नेपाली विशेषज्ञद्वारा नेपालमा पहिलो IVF शिशु।" },
        { year: "२०२४", title: "८०००+ खुसी अभिभावक", description: "आधुनिक प्रयोगशालाको साथ ३२ वर्षको विश्वसनीय सेवा।" }
      ],
      achievementsTitle: "हाम्रा उपलब्धिहरू",
      achievements: [
        { title: "IVF का अग्रदूत", description: "नेपालमा IVF प्रविधि भित्र्याउने पहिलो केन्द्र (२००२), जसले प्रजनन उपचारमा नयाँ आयाम थप्यो।", icon: "trophy" },
        { title: "पहिलो IVF शिशु", description: "२००३ मा नेपालको पहिलो टेस्ट ट्युब बेबीको सफल जन्म गराउन सफल।", icon: "baby" },
        { title: "उच्च सफलता दर", description: "अन्तर्राष्ट्रिय मापदण्ड अनुसारको सफलता दर कायम गर्न सफल।", icon: "trending" },
        { title: "सामाजिक विश्वास", description: "३ दशकदेखि २५,००० भन्दा बढी परिवारको विश्वास जित्न सफल।", icon: "shield" }
      ],
      missionTitle: "हाम्रो लक्ष्य (Mission)",
      mission: "प्रत्येक दम्पतीलाई अभिभावक बन्न मद्दत गर्न विस्तृत, नैतिक र उन्नत उपचार प्रदान गर्नु। हामी प्रमाणमा आधारित उपचार, पारदर्शी परामर्श र नेपालका सबै आर्थिक वर्गका लागि गुणस्तरीय सेवा सुलभ बनाउन प्रतिबद्ध छौं।",
      visionTitle: "हाम्रो दूरदृष्टि (Vision)",
      vision: "नवाचार, उत्कृष्टता र सहानुभूतिपूर्ण हेरचाहका लागि चिनिने नेपालको अग्रणी निसन्तान केन्द्र बन्नु।",
      affiliationsTitle: "सम्बन्धन",
      affiliations: [
        { name: "मेडिसिटी अस्पताल", role: "विस्तृत चिकित्सा सहयोगको लागि साझेदार अस्पताल" },
        { name: "रिलायबल ल्याब", role: "सटीक निदानको लागि उन्नत प्रयोगशाला सेवाहरू" }
      ],
      whyChooseTitle: "निसन्तान केन्द्र नै किन?",
      whyChoose: [
        { title: "अनुभवी नेतृत्व", description: "प्रजनन चिकित्सामा ३२+ वर्षको अनुभव भएका नेपालका वरिष्ठ डाक्टरहरू।" },
        { title: "सुलभ उपचार", description: "पारदर्शी मूल्य निर्धारणको साथ सबै आर्थिक वर्गका लागि सेवा।" },
        { title: "अत्याधुनिक ल्याब", description: "सटीक निदान सुनिश्चित गर्ने आधुनिक प्रविधि सहितको प्रयोगशाला।" },
        { title: "नैतिक र प्रमाणमा आधारित", description: "इमानदार परामर्श। नेपालका १५% दम्पतीहरूले निसन्तानपनको सामना गर्छन् भन्ने हामी बुझ्छौं।" }
      ],
      stats: {
        couples: "दम्पतीहरूलाई मद्दत",
        parents: "खुसी अभिभावक",
        years: "वर्षको अनुभव"
      }
    },
    services: {
      title: "हाम्रा विस्तृत सेवाहरू",
      subtitle: "तपाईंको विशिष्ट आवश्यकताहरू अनुरूप विस्तृत प्रजनन र स्वास्थ्य सेवाहरू।",
      viewAll: "सबै सेवाहरू हेर्नुहोस्",
      facilitiesTitle: "हाम्रा अत्याधुनिक सुविधाहरू",
      facilitiesSubtitle: "उत्कृष्ट प्रजनन उपचारको लागि उन्नत प्रयोगशाला उपकरण र आधुनिक सुविधाहरू",
      facilities: [
        { title: "ICSI प्रयोगशाला", description: "ICSI Laboratory", image: "https://picsum.photos/400/300?random=101" },
        { title: "Laminar Flow प्रणाली", description: "Laminar Flow System", image: "https://picsum.photos/400/300?random=102" },
        { title: "Microscope प्रयोगशाला", description: "Microscope Laboratory", image: "https://picsum.photos/400/300?random=103" },
        { title: "Ovum Pickup प्रक्रिया", description: "Ovum Pickup Procedure", image: "https://picsum.photos/400/300?random=104" },
        { title: "भिडियो एक्सरे (Ultrasound)", description: "Ultrasound Imaging", image: "https://picsum.photos/400/300?random=105" }
      ],
      categories: [
        { id: 'all', label: 'सबै सेवाहरू' },
        { id: 'primary', label: 'प्राथमिक जाँच' },
        { id: 'diagnostic', label: 'रोग निदान' },
        { id: 'treatment', label: 'उपचार' },
        { id: 'support', label: 'सहयोग र परामर्श' }
      ],
      items: [
         { id: 'basic-investigations', category: 'primary', title: 'सामान्य जाँचहरु', description: 'प्रजनन स्वास्थ्यको अवस्था बुझ्न गरिने सुरुवाती परीक्षणहरू।', icon: '📋', details: { fullDescription: "प्रजनन यात्राको पहिलो चरण।", benefits: ["प्रारम्भिक पहिचान", "सहज प्रक्रिया"], procedureSteps: ["परामर्श", "रगत जाँच", "शारीरिक जाँच"], candidates: ["निसन्तान दम्पती"] } },
         { id: 'semen-analysis', category: 'primary', title: 'विर्य जाँच (Semen Analysis)', description: 'पुरुषको शुक्रकिटको संख्या, गति र बनावटको विस्तृत प्रयोगशाला परीक्षण।', icon: '🔬', details: { fullDescription: "पुरुष प्रजनन क्षमताको मुख्य जाँच।", benefits: ["सटीक रिपोर्ट", "उपचारको दिशा निर्धारण"], procedureSteps: ["नमूना संकलन", "ल्याब परीक्षण", "रिपोर्ट"], candidates: ["पुरुष साथी"] } },
         { id: 'hormone-testing', category: 'primary', title: 'हर्मोन परीक्षण', description: 'FSH, LH, AMH, थाइराइड र अन्य प्रजननसँग सम्बन्धित हर्मोनहरूको जाँच।', icon: '🩸', details: { fullDescription: "हर्मोनको सन्तुलन जाँच।", benefits: ["अण्डाशयको क्षमता (AMH) थाहा हुने", "थाइराइड जाँच"], procedureSteps: ["रगत संकलन"], candidates: ["अनियमित महिनावारी"] } },
         { id: 'imaging-services', category: 'primary', title: 'भिडियो एक्सरे (USG/TVS)', description: 'पाठेघर र डिम्बाशयको अवस्था हेर्न गरिने अत्याधुनिक भिडियो एक्सरे।', icon: '🖥️', details: { fullDescription: "पाठेघरको विस्तृत भिडियो एक्सरे।", benefits: ["अण्डाको विकास हेर्न", "पाठेघरको समस्या हेर्न"], procedureSteps: ["स्क्यानिङ"], candidates: ["सबै बिरामी"] } },
         { id: 'ovulation-monitoring', category: 'primary', title: 'डिम्ब निस्कने समयको जाँच (Ovulation)', description: 'हर्मोन जाँच र भिडियो एक्सरे मार्फत अण्डा बन्ने प्रक्रियाको निगरानी।', icon: '📅', details: { fullDescription: "अण्डा फुट्ने समयको यकिन गर्ने।", benefits: ["गर्भधारणको सम्भावना बढाउने"], procedureSteps: ["नियमित स्क्यान"], candidates: ["प्राकृतिक गर्भधारण प्रयास"] } },
         
         { id: 'blocked-tubes', category: 'diagnostic', title: 'बन्द पाठेघरको नलीको उपचार', description: 'पाठेघरको नली (Fallopian Tube) बन्द भए नभएको हेर्ने र उपचार गर्ने।', icon: '🔎', details: { fullDescription: "नलीको अवरोध उपचार।", benefits: ["प्राकृतिक गर्भधारण सम्भव"], procedureSteps: ["HSG वा ल्याप्रोस्कोपी"], candidates: ["नली बन्द भएकाहरू"] } },
         { id: 'laparoscopy', category: 'diagnostic', title: 'दूरबीन शल्यक्रिया (Laparoscopy)', description: 'सानो प्वाल बनाएर पाठेघर र नलीको समस्या हेर्ने र उपचार गर्ने प्रविधि।', icon: '🏥', details: { fullDescription: "सानो प्वालबाट गरिने शल्यक्रिया।", benefits: ["चाँडो निको हुने", "दाग नबस्ने"], procedureSteps: ["एनेस्थेसिया", "शल्यक्रिया"], candidates: ["एन्डोमेट्रिओसिस", "सिस्ट"] } },
         { id: 'genetic-testing', category: 'diagnostic', title: 'वंशाणुगत जाँच (Genetic Testing)', description: 'सन्तानमा सर्ने रोगहरू र क्रोमोजोमको समस्या पत्ता लगाउने आधुनिक जाँच।', icon: '🧬', details: { fullDescription: "वंशाणुगत रोगको पहिचान।", benefits: ["जोखिम न्यूनीकरण"], procedureSteps: ["रगत परीक्षण"], candidates: ["बारम्बार गर्भपतन हुने"] } },
 
         { id: 'hormone-therapy', category: 'treatment', title: 'हर्मोन उपचार', description: 'प्रजनन क्षमता बढाउन र महिनावारी गडबडी मिलाउन गरिने हर्मोन उपचार।', icon: '💊', details: { fullDescription: "हर्मोन सन्तुलनका लागि औषधी।", benefits: ["महिनावारी नियमित", "अण्डा विकास"], procedureSteps: ["औषधी सेवन"], candidates: ["PCOS", "हर्मोनल समस्या"] } },
         { id: 'tight-cervix', category: 'treatment', title: 'पाठेघरको मुख साघुरो भएको उपचार', description: 'पाठेघरको मुख (Cervix) ज्यादै सानो वा बन्द भएको अवस्थाको उपचार।', icon: '🩺', details: { fullDescription: "पाठेघरको मुख खुलाउने।", benefits: ["शुक्रकिट प्रवेश सहज"], procedureSteps: ["डाइलेसन"], candidates: ["साँघुरो सर्भिक्स"] } },
         { 
           id: 'iui', 
           category: 'treatment', 
           title: 'कृत्रिम गर्भाधान (IUI)', 
           description: 'शुक्रकिटलाई सफा गरेर सिधै पाठेघरमा राख्ने सरल प्रविधि।', 
           icon: '🌱',
           details: {
            fullDescription: "कृत्रिम गर्भाधान (IUI) एक प्रजनन उपचार हो जसमा शुक्रकिटलाई महिलाको पाठेघरभित्र राखिन्छ। IUI को लक्ष्य पाठेघरको नलीसम्म पुग्ने शुक्रकिटको संख्या बढाउनु हो, जसले गर्दा गर्भाधानको सम्भावना बढ्छ।",
            benefits: ["IVF भन्दा कम खर्चिलो", "सरल र कम समय लाग्ने प्रक्रिया", "हर्मोनको कम प्रयोग", "प्राकृतिक चक्रसँग मिल्दोजुल्दो"],
            procedureTitle: "IUI प्रक्रियाका चरणहरू",
            procedureSteps: ["भिडियो एक्सरे मार्फत अण्डाको निगरानी", "प्रयोगशालामा शुक्रकिटको धुलाई र छनौट", "पाठेघरमा सफा गरिएको शुक्रकिट राख्ने", "१५-२० मिनेट आराम"],
            candidatesTitle: "उपयुक्त उम्मेदवार",
            candidates: ["अस्पष्ट निसन्तानपन भएका दम्पती", "पुरुषमा सामान्य समस्या देखिएमा", "पाठेघरको मुखमा समस्या भएमा", "दाताको शुक्रकिट प्रयोग गर्नेहरू"]
           }
         },
         { 
           id: 'ivf', 
           category: 'treatment', 
           title: 'टेस्ट ट्युब बेबी (IVF)', 
           description: 'शरीर बाहिर प्रयोगशालामा अण्डा र शुक्रकिट मिलाएर भ्रूण बनाउने प्रविधि।', 
           icon: '🧪',
           details: {
            fullDescription: "IVF (In Vitro Fertilization) वा 'टेस्ट ट्युब बेबी' एक सहायक प्रजनन प्रविधि हो। यसमा महिलाको शरीरबाट अण्डा निकालेर प्रयोगशालामा शुक्रकिटसँग मिलाइन्छ। भ्रूण तयार भएपछि त्यसलाई महिलाको पाठेघरमा राखिन्छ।",
            benefits: ["सफलताको उच्च दर", "नली बन्द भएको अवस्थामा पनि सम्भव", "पुरुषको गम्भीर समस्यामा सहयोगी", "भ्रूणको जाँच गर्न सकिने"],
            procedureTitle: "IVF उपचार चक्र",
            procedureSteps: ["औषधीद्वारा अण्डाको विकास", "बेहोस बनाएर अण्डा झिक्ने", "शुक्रकिट तयारी", "प्रयोगशालामा गर्भाधान", "भ्रूण विकास (३-५ दिन)", "पाठेघरमा भ्रूण प्रत्यारोपण"],
            candidatesTitle: "कसको लागि सिफारिस गरिएको",
            candidates: ["पाठेघरको नली बन्द वा बिग्रिएको", "पुरुषको शुक्रकिटमा गम्भीर समस्या", "अस्पष्ट निसन्तानपन", "एन्डोमेट्रिओसिस"]
           }
         },
         { 
           id: 'icsi', 
           category: 'treatment', 
           title: 'सुक्ष्म प्रविधिबाट गर्भाधान (ICSI)', 
           description: 'एउटा मात्र शुक्रकिटलाई सुईको माध्यमबाट अण्डाभित्र राखेर गर्भ बसाउने आधुनिक प्रविधि।', 
           icon: '💉',
           details: {
            fullDescription: "ICSI (Intracytoplasmic Sperm Injection) IVF को एक विशेष रूप हो जुन मुख्य रूपमा पुरुषको गम्भीर निसन्तानपनको उपचारका लागि प्रयोग गरिन्छ। यसमा एउटा मात्र स्वस्थ शुक्रकिटलाई सिधै अण्डाभित्र इन्जेक्सन गरिन्छ।",
            benefits: ["शुक्रकिटको संख्या कम हुँदा पनि प्रभावकारी", "शुक्रकिटको गति कम भएमा उपयोगी", "शल्यक्रियाबाट निकालिएको शुक्रकिट प्रयोग गर्न सकिने"],
            procedureTitle: "ICSI कसरी काम गर्छ",
            procedureSteps: ["IVF जस्तै अण्डा झिक्ने", "एउटा स्वस्थ शुक्रकिट छान्ने", "माइक्रोस्कोप मुनि अण्डामा शुक्रकिट राख्ने", "गर्भाधानको निगरानी", "भ्रूण प्रत्यारोपण"],
            candidatesTitle: "कसलाई ICSI आवश्यक छ?",
            candidates: ["पुरुषमा गम्भीर निसन्तानपन", "पहिलेको IVF मा गर्भाधान नभएको", "शुक्रकिटको आकार वा चालमा समस्या", "शल्यक्रियाद्वारा शुक्रकिट निकालिएको अवस्था"]
           }
         },
         { id: 'embryo-transfer', category: 'treatment', title: 'भ्रूण प्रत्यारोपण', description: 'IVF मार्फत तयार भएको भ्रूणलाई आमाको पाठेघरमा राख्ने प्रक्रिया।', icon: '🤰', details: { fullDescription: "भ्रूणलाई पाठेघरमा राख्ने प्रक्रिया।", benefits: ["दुखाइरहित", "महत्वपूर्ण चरण"], procedureSteps: ["अल्ट्रासाउन्ड निर्देशनमा क्याथेटर प्रयोग"], candidates: ["IVF बिरामी"] } },
         { id: 'cryopreservation', category: 'treatment', title: 'भ्रूण तथा विर्य सुरक्षित राख्ने सेवा', description: 'भविष्यमा सन्तान जन्माउनको लागि अण्डा, शुक्रकिट वा भ्रूणलाई सुरक्षित (Freezing) राख्ने।', icon: '❄️', details: { fullDescription: "जैविक पदार्थ फ्रिज गर्ने।", benefits: ["भविष्यको सुरक्षा", "बाँकी भ्रूण प्रयोग"], procedureSteps: ["द्रुत फ्रिजिंग (Vitrification)"], candidates: ["क्यान्सर बिरामी", "पछि बच्चा चाहने"] } },
         { id: 'donor-programs', category: 'treatment', title: 'अण्डा तथा विर्य दान सेवा', description: 'आफ्नै अण्डा वा शुक्रकिट नहुनेहरूका लागि दाताबाट सहयोग लिने सुविधा।', icon: '🤝', details: { fullDescription: "दाताको अण्डा वा शुक्रकिट प्रयोग।", benefits: ["सन्तान सुखको अवसर", "उच्च सफलता"], procedureSteps: ["दाता छनौट", "IVF/IUI"], candidates: ["अण्डा/शुक्रकिट नभएका"] } },
         { id: 'pcos-management', category: 'treatment', title: 'PCOS उपचार', description: 'डिम्बाशयमा पानीका फोका देखिने (PCOS) समस्याको खानपान र औषधीद्वारा उपचार।', icon: '⚖️', details: { fullDescription: "PCOS को विस्तृत व्यवस्थापन।", benefits: ["महिनावारी सुधार", "तौल नियन्त्रण"], procedureSteps: ["जीवनशैली परिवर्तन", "औषधी"], candidates: ["PCOS भएका महिला"] } },
         { id: 'endometriosis', category: 'treatment', title: 'एन्डोमेट्रिओसिस उपचार', description: 'पाठेघरको रगत अन्यत्र जमेर दुख्ने समस्याको औषधी तथा शल्यक्रियाद्वारा उपचार।', icon: '🏵️', details: { fullDescription: "दुखाइ र निसन्तानपनको उपचार।", benefits: ["दुखाइ कम", "गर्भधारण सहज"], procedureSteps: ["औषधी वा शल्यक्रिया"], candidates: ["एन्डोमेट्रिओसिस पीडित"] } },
         { 
           id: 'male-infertility', 
           category: 'treatment', 
           title: 'पुरुष निःसन्तानपन उपचार', 
           description: 'पुरुषहरूमा हुने शुक्रकिटको कमी वा अन्य समस्याहरूको विस्तृत उपचार।', 
           icon: '👨‍⚕️',
           details: {
             fullDescription: "हामी पुरुष निसन्तानपनका लागि निदान र उपचार सेवाहरूको पूर्ण दायरा प्रदान गर्दछौं। हर्मोनल मूल्याङ्कनदेखि उन्नत सर्जिकल शुक्रकिट निकाल्ने प्रविधिहरू (TESA/PESA) सम्म, हाम्रो एन्ड्रोलोजी एकाई पुरुष प्रजनन स्वास्थ्यका सबै पक्षहरूलाई सम्बोधन गर्न सक्षम छ।",
             benefits: ["विशेषज्ञ द्वारा मूल्याङ्कन", "उन्नत निदान उपकरण", "शल्यक्रिया विकल्प उपलब्ध", "गोप्य र सहयोगी हेरचाह"],
             procedureTitle: "उपलब्ध उपचारहरू",
             procedureSteps: ["हर्मोन थेरापी", "शल्यक्रियाद्वारा शुक्रकिट निकाल्ने (TESA/PESA)", "भेरिकोसेल उपचार", "जीवनशैली परामर्श"],
             candidatesTitle: "उपचार गरिने अवस्थाहरू",
             candidates: ["शुक्रकिट शून्य भएको अवस्था (Azoospermia)", "शुक्रकिट कम भएको (Oligospermia)", "यौन समस्याहरू"]
           }
         },
 
         { 
           id: 'counselling', 
           category: 'support', 
           title: 'निःसन्तान सम्बन्धी परामर्श', 
           description: 'उपचारको मानसिक तनाव कम गर्न र सही सल्लाह दिन गरिने परामर्श सेवा।', 
           icon: '🗣️',
           details: {
            fullDescription: "निसन्तानपन एक भावनात्मक यात्रा हुन सक्छ। हाम्रो व्यावसायिक परामर्श सेवाहरूले दम्पतीहरूलाई आफ्ना भावनाहरू व्यक्त गर्न, उपचार विकल्पहरू अझ राम्रोसँग बुझ्न र तनाव व्यवस्थापन गर्न सुरक्षित वातावरण प्रदान गर्दछ।",
            benefits: ["भावनात्मक सहयोग र तनाव कम गर्ने", "चिकित्सा प्रक्रियाहरूको राम्रो बुझाइ", "दम्पती बीचको सञ्चार सुधार", "निर्णय लिने क्षमतामा वृद्धि"],
            procedureTitle: "हाम्रो दृष्टिकोण",
            procedureSteps: ["व्यक्तिगत परामर्श सत्रहरू", "जोडी थेरापी", "तनाव व्यवस्थापन विधिहरू", "समूह सहयोग"],
            candidatesTitle: "कसको लागि सिफारिस गरिएको",
            candidates: ["प्रजनन उपचार गराइरहेका सबै दम्पती", "चिन्ता वा डिप्रेसन महसुस गर्नेहरू", "दाता कार्यक्रम विचार गरिरहेकाहरू"]
           }
         },
         { id: 'antenatal', category: 'support', title: 'गर्भवती जाँच तथा स्याहार', description: 'गर्भ रहेदेखि बच्चा नजन्मिएसम्म आमा र बच्चाको स्वास्थ्य निगरानी।', icon: '👶', details: { fullDescription: "गर्भावस्थाको हेरचाह।", benefits: ["आमा र बच्चाको सुरक्षा"], procedureSteps: ["नियमित जाँच"], candidates: ["गर्भवती महिला"] } },
         { id: 'pregnancy-loss', category: 'support', title: 'पटक-पटक गर्भ खेर जाने समस्या', description: 'बारम्बार गर्भ पतन हुने कारण पत्ता लगाई सफल गर्भधारण गराउने उपचार।', icon: '🩹', details: { fullDescription: "गर्भपतनको कारण खोजी।", benefits: ["सफल गर्भधारण"], procedureSteps: ["विस्तृत जाँच"], candidates: ["२ पटक भन्दा बढी गर्भ खेर गएका"] } }
      ],
      nutritionistTitle: "पोषण तथा आहार सेवा",
      nutritionist: {
        name: "सजना पोखरेल",
        role: "डाइटिसियन र पोषणविद्",
        qualification: "M.Sc. (पोषण विज्ञान)",
        experience: "८+ वर्षको अनुभव",
        specialization: "PCOS आहार व्यवस्थापन, प्रजनन पोषण, गर्भावस्थाको पोषण",
        availability: "आइतबार - शुक्रबार",
        bio: "सजना पोखरेल एक दक्ष डाइटिसियन र क्लिनिकल पोषणविद् हुनुहुन्छ जसको प्रजनन पोषण, महिला स्वास्थ्य र PCOS व्यवस्थापनमा आठ वर्षभन्दा बढीको व्यावसायिक अनुभव छ। उहाँले व्यवस्थित, प्रमाण-आधारित आहार हस्तक्षेपहरू मार्फत आफ्नो प्रजनन स्वास्थ्य सुधार गर्न चाहने महिलाहरूसँग व्यापक रूपमा काम गर्नुभएको छ। उहाँको दृष्टिकोणले दिगो जीवनशैली परिवर्तनलाई समर्थन गर्न व्यावहारिक, व्यक्तिगत मार्गदर्शनसँग चिकित्सा पोषण थेरापीलाई संयोजन गर्दछ।",
        image: "https://picsum.photos/400/400?random=88",
        areasOfExpertise: [
          "प्रजनन पोषण र गर्भाधान पूर्व आहार योजना",
          "PCOS व्यवस्थापन र हर्मोनल सन्तुलन",
          "प्रजनन विकारहरूको लागि चिकित्सा पोषण थेरापी",
          "तौल र मेटाबोलिक व्यवस्थापन",
          "महिनावारी स्वास्थ्य र हर्मोनल समस्याको लागि पोषण",
          "समग्र स्वास्थ्यको लागि उपचारात्मक आहार योजना"
        ],
        professionalFocus: "सजनाले महिलाहरूलाई व्यक्तिगत भोजन योजना, पोषण परामर्श, र निरन्तर प्रगति निगरानी मार्फत उनीहरूको प्रजनन क्षमता बढाउन र PCOS लक्षणहरू व्यवस्थापन गर्न मद्दत गर्नुहुन्छ। उहाँ PCOS, हर्मोनल सन्तुलन, र समग्र प्रजनन स्वास्थ्यको लागि वैज्ञानिक आहार रणनीतिहरू र दिगो बानीहरूमा जोड दिनुहुन्छ।",
        servicesOffered: [
          "विस्तृत पोषण मूल्याङ्कन",
          "व्यक्तिगत प्रजनन-केन्द्रित आहार योजनाहरू",
          "PCOS र हर्मोनल-स्वास्थ्य आहार परामर्श",
          "तौल-व्यवस्थापन योजनाहरू",
          "मेटाबोलिक र जीवनशैली सम्बन्धित समस्याहरूको लागि पोषण मार्गदर्शन",
          "फलो-अप परामर्श र दीर्घकालीन पोषण निगरानी"
        ],
        approachToCare: "उहाँको अभ्यास करुणा, स्पष्ट सञ्चार, र बिरामी-केन्द्रित हेरचाहमा आधारित छ। उहाँ ग्राहकहरूसँग उनीहरूको लक्ष्य, चिकित्सा इतिहास, र जीवनशैली बुझ्न नजिकबाट काम गर्नुहुन्छ, यो सुनिश्चित गर्दै कि प्रत्येक पोषण योजना यथार्थवादी, प्राप्त गर्न सकिने, र क्लिनिक रूपमा प्रभावकारी छ।"
      }
    },
    team: {
      title: "हाम्रो टिम",
      subtitle: "तपाईंको सपना पूरा गर्न समर्पित हाम्रा अनुभवी विशेषज्ञहरूसँग भेट्नुहोस्।",
      groupPhotoTitle: "निसन्तान केन्द्र परिवार",
      groupPhotoSubtitle: "परिवार सिर्जना गर्न समर्पित एउटा परिवार। तपाईंको खुसीको लागि हाम्रो विशेषज्ञहरूको टोली सधैं साथमा छ।",
      supportTitle: "समर्पित सहयोगी टिम",
      supportText: "हाम्रा डाक्टरहरूलाई उच्च तालिम प्राप्त भ्रूण विज्ञहरू, प्रयोगशाला प्राविधिकहरू, नर्सहरू र सहयोगी कर्मचारीहरूले साथ दिइरहेका छन्।",
      viewProfile: "विस्तृत जानकारी",
      bookWith: "अपोइन्टमेन्ट लिनुहोस्"
    },
    ivfUnit: {
      title: "आई.भी.एफ एकाई (IVF Unit)",
      subtitle: "अत्याधुनिक प्रविधि र अनुभवी टोली सहितको विश्वस्तरीय IVF सुविधा",
      aboutTitle: "हाम्रो IVF एकाईको बारेमा",
      aboutText: [
        "हाम्रो IVF एकाई अत्याधुनिक प्रविधिले सुसज्जित छ र उत्कृष्ट हेरचाह प्रदान गर्न डिजाइन गरिएको छ। भ्रूणको विकासको लागि उपयुक्त वातावरण सुनिश्चित गर्न प्रयोगशालामा HEPA फिल्टर गरिएको हावा, नियन्त्रित तापक्रम र आद्रता जस्ता कडा मापदण्डहरू कायम गरिएको छ।",
        "प्रयोगशाला अन्तर्राष्ट्रिय प्रोटोकल र गुणस्तर मापदण्डहरू पालना गर्ने उच्च तालिम प्राप्त भ्रूण विज्ञहरू (Embryologists) द्वारा सञ्चालित छ। हामी सबै प्रक्रियाहरूको पूर्ण अभिलेख राख्छौं, जसले सुरक्षा र सफलताको उच्च दर सुनिश्चित गर्दछ।"
      ],
      facilitiesTitle: "हाम्रा सुविधाहरू",
      facilities: [
        { title: "रिसेप्सन र परामर्श", description: "बिरामीको गोपनीयताका लागि आरामदायक प्रतिक्षा कक्ष र निजी परामर्श कोठाहरू।", icon: "hospital" },
        { title: "भ्रूण विज्ञान प्रयोगशाला", description: "भ्रूण विकासको लागि नियन्त्रित वातावरण भएको अत्याधुनिक प्रयोगशाला।", icon: "microscope" },
        { title: "ICSI प्रयोगशाला", description: "सुक्ष्म प्रविधिबाट गर्भाधान (ICSI) प्रक्रियाको लागि विशेष उपकरणहरू।", icon: "syringe" },
        { title: "क्रायोप्रिजर्भेसन (Cryopreservation)", description: "भ्रूण र विर्य सुरक्षित राख्नको लागि उन्नत फ्रिजिंग प्रविधि।", icon: "snowflake" },
        { title: "अपरेसन थिएटर", description: "अण्डा झिक्न र भ्रूण प्रत्यारोपणको लागि पूर्ण रूपमा जीवाणु रहित कोठा।", icon: "activity" }
      ],
      equipmentTitle: "हाम्रा उपकरण र प्रविधि",
      equipment: [
        { title: "ICSI प्रक्रिया", subtitle: "सुक्ष्म प्रविधि", description: "एउटा मात्र शुक्रकिटलाई अण्डामा राख्ने प्रविधि", image: "https://picsum.photos/400/300?random=110" },
        { title: "Laminar Flow प्रणाली", subtitle: "Egg Separation सहित", description: "अण्डा चलाउनको लागि तापक्रम नियन्त्रित वातावरण", image: "https://picsum.photos/400/300?random=111" },
        { title: "प्रयोगशाला माइक्रोस्कोप", subtitle: "उन्नत माइक्रोस्कोपी", description: "भ्रूणको जाँच गर्नको लागि उच्च क्षमताको माइक्रोस्कोप", image: "https://picsum.photos/400/300?random=112" },
        { title: "Ovum Pickup", subtitle: "अण्डा झिक्ने प्रक्रिया", description: "भिडियो एक्सरेको मद्दतले अण्डा झिक्ने प्रक्रिया", image: "https://picsum.photos/400/300?random=113" },
        { title: "Transvaginal Ultrasound", subtitle: "भिडियो एक्सरे", description: "उपचार र निगरानीको लागि अत्याधुनिक इमेजिङ", image: "https://picsum.photos/400/300?random=114" }
      ],
      techTitle: "उपकरण र प्रविधि विवरण",
      tech: [
        { label: "वातावरण", value: "HEPA Filtered हावा प्रणाली" },
        { label: "कल्चर (Culture)", value: "CO₂ इन्क्यूबेटरहरू" },
        { label: "ICSI", value: "Micromanipulator प्रणाली" },
        { label: "विश्लेषण", value: "Inverted माइक्रोस्कोप" },
        { label: "भण्डारण", value: "लिक्विड नाइट्रोजन ट्यांक" },
        { label: "इमेजिङ", value: "अल्ट्रासाउन्ड सिस्टम" }
      ],
      qualityTitle: "गुणस्तर र सुरक्षा मापदण्ड",
      quality: {
        envTitle: "वातावरणीय नियन्त्रण",
        envItems: ["HEPA फिल्टर गरिएको हावा", "पोजिटिभ प्रेसर कोठाहरू", "२४/७ तापक्रम निगरानी"],
        qaTitle: "गुणस्तर सुनिश्चितता",
        qaItems: ["अन्तर्राष्ट्रिय प्रोटोकलहरू", "नियमित उपकरण क्यालिब्रेसन", "पूर्ण अभिलेख प्रणाली"]
      }
    },
    patientCare: {
      title: "बिरामी सेवा र हेरचाह",
      subtitle: "तपाईंको प्रजनन यात्राको हरेक पाइलामा सहानुभूतिपूर्ण हेरचाह र सहयोग।",
      journeyTitle: "हामीसँगको तपाईंको यात्रा",
      journeySteps: [
        { step: "१", title: "प्रारम्भिक परामर्श", description: "तपाईंको स्वास्थ्य इतिहास र उपचारका विकल्पहरू बारे छलफल गर्न विशेषज्ञसँग भेट।" },
        { step: "२", title: "रोग निदान परीक्षण", description: "रगत परीक्षण, भिडियो एक्सरे र अन्य आवश्यक जाँचहरू सहितको विस्तृत प्रजनन मूल्याङ्कन।" },
        { step: "३", title: "व्यक्तिगत उपचार योजना", description: "तपाईंको अवस्था अनुसार तयार पारिएको विशेष उपचार योजना।" },
        { step: "४", title: "उपचार र सहयोग", description: "हाम्रो विशेषज्ञ टोलीको निगरानी र सहयोगमा उपचारको सुरुवात।" }
      ],
      features: [
        { title: "परामर्श सेवाहरू", description: "उपचारका विकल्पहरू बुझ्न मद्दत गर्ने व्यावसायिक परामर्श।", icon: "counseling" },
        { title: "गोपनीयता", description: "तपाईंको व्यक्तिगत जानकारी सुरक्षित राख्न कडा मापदण्डहरू।", icon: "privacy" },
        { title: "लचिलो समय", description: "तपाईंको समय अनुकुल अपोइन्टमेन्टको व्यवस्था।", icon: "schedule" }
      ],
      faqTitle: "प्राय: सोधिने प्रश्नहरू",
      faqs: [
        { question: "अपोइन्टमेन्ट कसरी लिने?", answer: "तपाईंले हाम्रो रिसेप्सन ०१-४७९५०८७, ९८५१०७४४७७ मा फोन गरेर वा वेबसाइटबाट फारम भरेर अपोइन्टमेन्ट लिन सक्नुहुन्छ।" },
        { question: "पहिलो भेटमा के ल्याउने?", answer: "कृपया आफ्ना पुराना स्वास्थ्य परीक्षणका रिपोर्टहरू र परिचय पत्र साथमा ल्याउनुहोला।" },
        { question: "IVF उपचारमा कति समय लाग्छ?", answer: "औषधी सुरु गरेदेखि गर्भ जाँच गर्दासम्म साधारणतया ४ देखि ६ हप्ता लाग्छ।" },
        { question: "IVF को सफलता दर कति छ?", answer: "सफलता दर उमेर र स्वास्थ्य अवस्थामा भर पर्छ, तर हाम्रो केन्द्रले अन्तर्राष्ट्रिय स्तरको सफलता दर कायम राखेको छ।" },
        { question: "के बीमा सुविधा छ?", answer: "हाल नेपालमा निःसन्तान उपचार साधारण स्वास्थ्य बीमामा समावेश छैन, यद्यपि विशिष्ट पोलिसीका लागि कृपया रिसेप्सनमा बुझ्नुहोला।" },
        { question: "के उपचार पीडादायी हुन्छ?", answer: "धेरैजसो प्रक्रियाहरू सामान्य असुविधा बाहेक पीडारहित हुन्छन्। अण्डा झिक्ने बेला एनेस्थेसिया दिइन्छ।" }
      ],
      privacyTitle: "गोपनीयता र सुरक्षा",
      privacyText: "हामी तपाईंको गोपनीयता र चिकित्सा जानकारीको सुरक्षा गर्न प्रतिबद्ध छौं। सबै बिरामीका रेकर्डहरू सुरक्षित राखिन्छन् र उपचारमा संलग्न अधिकृत स्वास्थ्यकर्मीले मात्र हेर्न पाउँछन्। कानुनले अनिवार्य गरेको अवस्था बाहेक, तपाईंको अनुमति बिना कुनै पनि जानकारी तेस्रो पक्षलाई दिइने छैन।"
    },
    testimonials: {
      title: "सफलताका कथाहरू",
      subtitle: "निसन्तान केन्द्रमा खुसी पाएका परिवारहरूको वास्तविक अनुभवहरू।",
      items: [
        { id: '1', name: "सीता र राम", location: "काठमाडौं", text: "५ वर्षको प्रयासपछि, निसन्तान केन्द्रले हामीलाई जुम्ल्याहा सन्तानको उपहार दियो।" },
        { id: '2', name: "अनिता जी", location: "पोखरा", text: "परामर्श सेवाले मलाई धेरै मद्दत गर्यो। यहाँको वातावरण एकदमै राम्रो छ।" },
        { id: '3', name: "श्रेष्ठ परिवार", location: "ललितपुर", text: "अत्यन्तै व्यावसायिक र सफा सुविधा। हाम्रो चमत्कारिक बच्चाको लागि हामी आभारी छौं।" }
      ]
    },
    contact: {
      title: "सम्पर्क गर्नुहोस",
      subtitle: "हामी मद्दत गर्न यहाँ छौं। बिजुलीबजार, नयाँ बानेश्वरमा हामीलाई भेट्नुहोस्।",
      info: {
        visit: "हाम्रो ठेगाना",
        call: "फोन सम्पर्क",
        email: "इमेल",
        hours: "खुल्ने समय"
      },
      actions: {
        whatsapp: "ह्वाट्सएप",
        viber: "भाइबर",
        callNow: "कल गर्नुहोस्"
      },
      form: {
        name: "पूरा नाम",
        phone: "मोबाइल नम्बर",
        email: "इमेल ठेगाना",
        message: "सन्देश",
        upload: "मेडिकल रिपोर्ट अपलोड",
        uploadHint: "यहाँ फाइल तान्नुहोस् वा क्लिक गर्नुहोस् (PDF, JPG - अधिकतम 10MB)",
        submit: "अपोइन्टमेन्ट अनुरोध",
        submitting: "पठाउँदै...",
        successTitle: "सफलतापूर्वक पठाइयो!",
        successMessage: "हाम्रो टोलीले २४ घण्टा भित्र सम्पर्क गर्नेछ।",
        reset: "अर्को अनुरोध"
      }
    },
    ai: {
      welcome: "नमस्ते! म निसन्तान केन्द्रको एआई सहायक हुँ। म कसरी मद्दत गर्न सक्छु?",
      placeholder: "हाम्रो इतिहास वा सेवाहरू बारे सोध्नुहोस्...",
      disclaimer: "यो AI ले जानकारी मात्र दिन्छ, चिकित्सा सल्लाह होइन।",
      online: "अनलाइन"
    }
  }
};

export const DOCTORS: Record<'en' | 'ne', Doctor[]> = {
  en: [
    {
      id: 'dr-uma',
      name: "Dr. Uma Shrivastava",
      role: "Executive Director & IVF Specialist",
      qualification: "M.Sc. (Reproductive Endocrinology & Infertility, University of London - UCL), M.D. (L'vov Institute of Medicine, Ukraine)",
      experience: "30+ Years",
      specialization: "Reproductive Endocrinology, IVF & ICSI, Infertility Management, Male Infertility, PCOS Treatment",
      availability: "Monday - Friday",
      image: "/dr-uma.jpg",
      isExecutive: true,
      isFeatured: true,
      languages: ["Nepali", "English", "Hindi", "Russian", "Ukrainian"],
      professionalSummary: "A pioneer in infertility care in Nepal, Dr. Uma Shrivastava has over 30 years of clinical and academic experience. She established Nepal’s first dedicated Infertility Diagnostic & Treatment Centre in 1993 and is credited with introducing the first IVF service in the country in 2002. With advanced training from University College London (1988–1990), she has helped thousands of couples achieve parenthood through hormone therapy, ICSI, IVF, and other reproductive treatments. She has served as Chapter Secretary of the Indian Fertility Society (Nepal Chapter) and is the author of the widely used medical reference “Fundamentals of Infertility Treatment” (2022).",
      advancedTraining: [
        "Specialized training in Reproductive Endocrinology, UCL (1988–1990)",
        "Accredited training in IVF/ICSI techniques, ultrasonography, and modern infertility protocols"
      ],
      milestones: [
        { year: "1986", milestone: "Developed interest in infertility care while serving as Senior House Officer, Teaching Hospital" },
        { year: "1988–1990", milestone: "Specialized in Reproductive Endocrinology at University College London" },
        { year: "1993", milestone: "Founded Nepal’s first Infertility Diagnostic & Treatment Centre" },
        { year: "2002", milestone: "Introduced the first IVF service in Nepal" },
        { year: "2022", milestone: "Published 'Fundamentals of Infertility Treatment'" }
      ],
      publications: [
        { title: "Management of An-Ovulatory Infertility in Urban Nepalese Population", journal: "World Journal of Pharmaceutical Sciences, 2015" },
        { title: "Combined Clomiphene Citrate–Metformin vs. Letrozole–Metformin for Pregnancy in PCOS", journal: "Gynecol & Reprod Health, 2019" },
        { title: "Pioneering IVF in Nepal: Effectiveness Across Age Groups", journal: "Gynecology & Reproductive Health, 2020" },
        { title: "Randomized Controlled Trial on Combination Therapy for Ovulation Induction", journal: "Fertility Science & Research, 2021" }
      ],
      books: [
        { title: "Fundamentals of Infertility Treatment", publisher: "Samiksha Publication, Kathmandu • 2022" },
        { title: "One book for the general public on infertility awareness", publisher: "" },
        { title: "One academic text for postgraduate trainees", publisher: "" }
      ],
      achievements: [
        "Over 8,000 successful births through infertility treatments including hormone therapy, tubal interventions, IVF, and ICSI",
        "Numerous scientific presentations at national and international conferences",
        "Multiple media interviews and televised programs on infertility",
        "20 years of teaching experience in reproductive endocrinology"
      ],
      awards: [
        "Young Scientist Award",
        "Award for First IVF in Nepal"
      ]
    },
    {
      id: 'dr-dalucky',
      name: "Dr. Dalucky Sherpa",
      role: "Consultant Gynecologist",
      qualification: "MBBS, MD (Obstetrics & Gynecology)",
      experience: "10+ Years",
      specialization: "Fertility & ART Specialist, IVF Procedures, Women's Reproductive Health",
      availability: "Monday - Friday",
      image: "https://picsum.photos/500/500?random=2",
      isFeatured: true,
      professionalSummary: "Dr. Dalucky Sherpa is a dedicated Obstetrician and Gynecologist specializing in infertility management and assisted reproductive technologies (ART). She completed her MBBS and MD in Obstetrics & Gynecology, followed by advanced training in Assisted Reproductive Techniques (ART) in India, where she gained in-depth clinical experience in fertility evaluation, ovulation induction, IUI, IVF, and reproductive endocrinology. Dr. Sherpa has been actively involved in improving fertility care services in Nepal and is known for her patient-centered approach, compassionate guidance, and commitment to evidence-based reproductive treatment. She has contributed to research in reproductive health, including work related to infertility as an emerging public health concern in Nepal. Her clinical work focuses on helping couples understand the causes of infertility and offering personalized treatment plans using modern fertility technologies. She frequently collaborates with leading fertility specialists in Nepal to provide comprehensive care. Dr. Dalucky Sherpa is committed to offering ethical, empathetic, and high-quality fertility services for couples seeking parenthood.",
      advancedTraining: [
         "Advanced training in Assisted Reproductive Techniques (ART) in India",
         "Specialized training in Fertility Evaluation and Ovulation Induction",
         "Clinical expertise in IVF and IUI protocols"
      ],
      achievements: [
        "Infertility evaluation & counseling",
        "Assisted Reproductive Techniques (ART)",
        "IVF & ICSI",
        "IUI",
        "Reproductive endocrinology",
        "Management of PCOS & hormonal disorders",
        "High-risk obstetrics and gynecologic care"
      ]
    },
    {
      id: 'dr-sangita',
      name: "Dr. Sangita Chakrabartty",
      role: "Consultant Gynecologist & Embryologist",
      qualification: "MD (Obstetrics & Gynecology)",
      experience: "10+ Years",
      specialization: "Embryology, IVF Laboratory Management, Reproductive Medicine",
      availability: "Monday - Saturday",
      image: "https://picsum.photos/500/500?random=3",
      isFeatured: true,
      professionalSummary: "Dr. Sangita Chakrabartty is a distinguished Consultant Gynecologist and Embryologist with over a decade of experience in reproductive medicine. As a key member of our IVF unit, she specializes in the critical laboratory aspects of assisted reproductive technology (ART), ensuring the highest standards of embryo culture and development. Her dual expertise in gynecology and embryology allows her to bridge the gap between clinical care and laboratory science, optimizing outcomes for patients undergoing IVF procedures. Dr. Chakrabartty is dedicated to meticulous laboratory management and patient-focused fertility treatments.",
      achievements: [
        "Expert in Clinical Embryology and Gamete Handling",
        "IVF Laboratory Quality Control & Management",
        "Specialized in Intracytoplasmic Sperm Injection (ICSI)",
        "Comprehensive Reproductive Health Assessments"
      ]
    }
  ],
  ne: [
    {
      id: 'dr-uma',
      name: "डा. उमा श्रीवास्तव",
      role: "कार्यकारी निर्देशक र IVF विशेषज्ञ",
      qualification: "M.Sc. (Reproductive Endocrinology & Infertility, University of London - UCL), M.D. (L'vov Institute of Medicine, Ukraine)",
      experience: "३०+ वर्ष",
      specialization: "प्रजनन एन्डोक्रिनोलजी, IVF, ICSI, निःसन्तानपन व्यवस्थापन, पुरुष निःसन्तानपन, PCOS उपचार",
      availability: "सोमबार - शुक्रबार",
      image: "/dr-uma.jpg",
      isExecutive: true,
      isFeatured: true,
      languages: ["नेपाली", "अंग्रेजी", "हिन्दी", "रसियन", "युक्रेनी"],
      professionalSummary: "निसन्तान उपचारमा नेपालका अग्रज, डा. उमा श्रीवास्तवसँग ३० वर्षभन्दा बढीको क्लिनिकल र शैक्षिक अनुभव छ। उहाँले १९९३ मा नेपालको पहिलो निसन्तान निदान र उपचार केन्द्र स्थापना गर्नुभयो र २००२ मा देशमा पहिलो IVF सेवा सुरु गर्ने श्रेय उहाँलाई जान्छ। युनिभर्सिटी कलेज लन्डन (१९८८–१९९०) बाट उन्नत तालिम लिनुभएका उहाँले हजारौं दम्पतीहरूलाई हर्मोन थेरापी, ICSI, IVF र अन्य प्रजनन उपचार मार्फत अभिभावक बन्न मद्दत गर्नुभएको छ। उहाँ इन्डियन फर्टिलिटी सोसाइटी (नेपाल च्याप्टर) को च्याप्टर सेक्रेटरीको रूपमा सेवा गरिसक्नुभएको छ र 'फन्डामेन्टल्स अफ इनफर्टिलिटी ट्रीटमेन्ट' (२०२२) पुस्तकको लेखिका हुनुहुन्छ।",
      advancedTraining: [
        "प्रजनन एन्डोक्रिनोलजीमा विशेष तालिम, UCL (१९८८–१९९०)",
        "IVF/ICSI प्रविधि, अल्ट्रासोनोग्राफी र आधुनिक निसन्तान प्रोटोकलमा मान्यता प्राप्त तालिम"
      ],
      milestones: [
        { year: "१९८६", milestone: "टिचिङ हस्पिटलमा सिनियर हाउस अफिसर हुँदा निसन्तान उपचारमा रुचि" },
        { year: "१९८८–१९९०", milestone: "युनिभर्सिटी कलेज लन्डनमा प्रजनन एन्डोक्रिनोलजीमा विशेषज्ञता" },
        { year: "१९९३", milestone: "नेपालको पहिलो निसन्तान निदान र उपचार केन्द्र स्थापना" },
        { year: "२००२", milestone: "नेपालमा पहिलो पटक IVF सेवा सुरु" },
        { year: "२०२२", milestone: "'फन्डामेन्टल्स अफ इनफर्टिलिटी ट्रीटमेन्ट' पुस्तक प्रकाशन" }
      ],
      publications: [
        { title: "Management of An-Ovulatory Infertility in Urban Nepalese Population", journal: "World Journal of Pharmaceutical Sciences, 2015" },
        { title: "Combined Clomiphene Citrate–Metformin vs. Letrozole–Metformin for Pregnancy in PCOS", journal: "Gynecol & Reprod Health, 2019" },
        { title: "Pioneering IVF in Nepal: Effectiveness Across Age Groups", journal: "Gynecology & Reproductive Health, 2020" },
        { title: "Randomized Controlled Trial on Combination Therapy for Ovulation Induction", journal: "Fertility Science & Research, 2021" }
      ],
      books: [
        { title: "फन्डामेन्टल्स अफ इनफर्टिलिटी ट्रीटमेन्ट", publisher: "समीक्षा प्रकाशन, काठमाडौं • २०२२" },
        { title: "जनचेतनाको लागि निसन्तानपन सम्बन्धी पुस्तक", publisher: "" },
        { title: "स्नातकोत्तर प्रशिक्षार्थीहरूको लागि शैक्षिक पाठ्यपुस्तक", publisher: "" }
      ],
      achievements: [
        "हर्मोन थेरापी, ट्युबको उपचार, IVF र ICSI मार्फत ८,००० भन्दा बढी सफल जन्म",
        "राष्ट्रिय र अन्तर्राष्ट्रिय सम्मेलनहरूमा धेरै वैज्ञानिक प्रस्तुतिहरू",
        "निसन्तानपन सम्बन्धी धेरै मिडिया अन्तर्वार्ता र टेलिभिजन कार्यक्रमहरू",
        "प्रजनन एन्डोक्रिनोलजीमा २० वर्षको शिक्षण अनुभव"
      ],
      awards: [
        "युवा वैज्ञानिक पुरस्कार",
        "नेपालमा पहिलो IVF को लागि पुरस्कार"
      ]
    },
    {
      id: 'dr-dalucky',
      name: "डा. डालकी शेर्पा",
      role: "कन्सल्टेन्ट स्त्री रोग विशेषज्ञ",
      qualification: "MBBS, MD (स्त्री तथा प्रसुति रोग)",
      experience: "१०+ वर्ष",
      specialization: "IVF प्रक्रिया, महिला प्रजनन स्वास्थ्य, प्रजनन मूल्याङ्कन",
      availability: "सोमबार - शुक्रबार",
      image: "https://picsum.photos/500/500?random=2",
      isFeatured: true,
      professionalSummary: "डा. डालकी शेर्पा निसन्तानपन व्यवस्थापन र सहायक प्रजनन प्रविधि (ART) मा विशेषज्ञता हासिल गरेकी एक समर्पित स्त्री रोग विशेषज्ञ हुनुहुन्छ। उहाँले स्त्री तथा प्रसुति रोगमा MBBS र MD पूरा गर्नुभएको छ, र त्यसपछि भारतमा ART सम्बन्धी उन्नत तालिम लिनुभएको छ। उहाँले प्रजनन मूल्याङ्कन, IUI, IVF र प्रजनन एन्डोक्रिनोलजीमा गहिरो अनुभव प्राप्त गर्नुभएको छ। डा. शेर्पा नेपालमा प्रजनन उपचार सेवाहरू सुधार गर्न सक्रिय हुनुहुन्छ र उहाँको बिरामी-केन्द्रित दृष्टिकोणका लागि परिचित हुनुहुन्छ।",
      advancedTraining: [
        "भारतमा सहायक प्रजनन प्रविधि (ART) मा उन्नत तालिम",
        "प्रजनन मूल्याङ्कन र ओभ्युलेसन इन्डक्सनमा विशेष तालिम",
        "IVF र IUI प्रोटोकलमा क्लिनिकल विशेषज्ञता"
      ],
      achievements: [
        "निसन्तानपन मूल्याङ्कन र परामर्श",
        "सहायक प्रजनन प्रविधि (ART)",
        "IVF र ICSI",
        "IUI",
        "प्रजनन एन्डोक्रिनोलजी",
        "PCOS र हर्मोनल विकारहरूको व्यवस्थापन",
        "उच्च जोखिमयुक्त प्रसुति र स्त्री रोग हेरचाह"
      ]
    },
    {
      id: 'dr-sangita',
      name: "डा. संगीता चक्रवर्ती",
      role: "कन्सल्टेन्ट स्त्री रोग विशेषज्ञ र भ्रूण विज्ञ (Embryologist)",
      qualification: "MD (स्त्री तथा प्रसुति रोग)",
      experience: "१०+ वर्ष",
      specialization: "भ्रूण विज्ञान, IVF प्रयोगशाला व्यवस्थापन, प्रजनन चिकित्सा",
      availability: "सोमबार - शनिबार",
      image: "https://picsum.photos/500/500?random=3",
      isFeatured: true,
      professionalSummary: "डा. संगीता चक्रवर्ती प्रजनन चिकित्सामा एक दशकभन्दा बढी अनुभव भएकी प्रतिष्ठित कन्सल्टेन्ट स्त्री रोग विशेषज्ञ र भ्रूण विज्ञ हुनुहुन्छ। हाम्रो IVF एकाईको मुख्य सदस्यको रूपमा, उहाँ सहायक प्रजनन प्रविधि (ART) को प्रयोगशाला पक्षमा विशेषज्ञ हुनुहुन्छ, जसले भ्रूण विकासको उच्च मापदण्ड सुनिश्चित गर्दछ। उहाँको स्त्री रोग र भ्रूण विज्ञानमा दोहोरो विशेषज्ञताले उहाँलाई बिरामीको हेरचाह र प्रयोगशाला विज्ञान बीचको खाडल कम गर्न मद्दत गर्दछ।",
      achievements: [
        "क्लिनिकल भ्रूण विज्ञान र ग्यामेट ह्यान्डलिंगमा विशेषज्ञ",
        "IVF प्रयोगशाला गुणस्तर नियन्त्रण र व्यवस्थापन",
        "ICSI प्रक्रियामा विशेष दख्खल",
        "विस्तृत प्रजनन स्वास्थ्य मूल्याङ्कन"
      ]
    }
  ]
};
