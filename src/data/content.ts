export const siteConfig = {
  name: "Dr. Milky Derara Specialty Dental Clinic",
  shortName: "Dr. Milky Dental Clinic",
  tagline: "Modern Dentistry. Gentle Care. Confident Smiles.",
  phone: "+251938329999",
  phoneDisplay: "+251 938 329 999",
  whatsapp: "+251938329999",
  address: {
    line1: "Wolo Sefer, Medco Building",
    line2: "1st Floor",
    city: "Addis Ababa",
    country: "Ethiopia",
    full: "Wolo Sefer, Medco Building, 1st Floor, Addis Ababa, Ethiopia",
  },
  hours: {
    weekdays: "Monday – Saturday",
    morning: "2:30 AM – 6:30 AM",
    afternoon: "7:30 PM – 12:30 AM",
    note: "Walk-ins welcome based on availability",
  },
  socialMedia: {
    facebook: "https://web.facebook.com/milky.derara",
    instagram: "https://www.instagram.com",
    tiktok: "https://www.tiktok.com/@dr.milkyderara",
    telegram: "https://t.me",
  },
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7578!3d9.0192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDr.+Milky+Derara+Specialty+Dental+Clinic!5e0!3m2!1sen!2set!4v1",
  googleDirectionsUrl:
    "https://maps.google.com/?q=Wolo+Sefer+Medco+Building+Addis+Ababa+Ethiopia",
  rating: 5.0,
  reviewCount: 74,
};

export const services = [
  {
    id: "checkup",
    title: "General Dental Checkup",
    description:
      "Routine examinations that help detect dental problems early and maintain long-term oral health.",
    icon: "Stethoscope",
    // Dentist examining a patient's teeth in a clinical setting
    image: "https://images.pexels.com/photos/6528867/pexels-photo-6528867.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist examining a patient's teeth during a routine dental checkup",
  },
  {
    id: "cleaning",
    title: "Dental Cleaning & Scaling",
    description:
      "Professional cleaning removes plaque and tartar while helping prevent gum disease and maintaining healthy teeth.",
    icon: "Sparkles",
    // Dental hygienist performing professional cleaning with clinical instruments
    image: "https://images.pexels.com/photos/6812543/pexels-photo-6812543.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dental professional cleaning a patient's teeth with dental instruments",
  },
  {
    id: "whitening",
    title: "Teeth Whitening",
    description:
      "Professional whitening treatments designed to improve the brightness of your smile.",
    icon: "Sun",
    // Dentist comparing tooth shades for a whitening treatment
    image: "https://images.pexels.com/photos/7800662/pexels-photo-7800662.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist comparing tooth shades for a professional teeth whitening treatment",
  },
  {
    id: "braces",
    title: "Braces & Orthodontic Treatment",
    description:
      "Correct misaligned teeth and improve bite alignment for healthier, more confident smiles.",
    icon: "Brackets",
    // Orthodontist examining metal braces and brackets
    image: "https://images.pexels.com/photos/19147369/pexels-photo-19147369.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Orthodontist examining metal braces with dental tools",
  },
  {
    id: "aligners",
    title: "Clear Aligners",
    description:
      "Comfortable and nearly invisible orthodontic treatment for properly aligned teeth.",
    icon: "Eye",
    // Transparent orthodontic aligner shown in a dental clinic
    image: "https://images.pexels.com/photos/28470229/pexels-photo-28470229.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Patient holding a transparent clear orthodontic aligner",
  },
  {
    id: "cosmetic",
    title: "Cosmetic Dentistry",
    description:
      "Enhance the appearance of your smile with modern cosmetic dental procedures.",
    icon: "Star",
    // Dentist applying a veneer during cosmetic smile treatment
    image: "https://images.pexels.com/photos/6627571/pexels-photo-6627571.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist applying a veneer during a cosmetic dentistry procedure",
  },
  {
    id: "extraction",
    title: "Tooth Extraction",
    description:
      "Safe and comfortable tooth removal when necessary using professional techniques.",
    icon: "Shield",
    // Dentist performing a tooth extraction with forceps
    image: "https://images.pexels.com/photos/6627569/pexels-photo-6627569.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist performing a tooth extraction with dental forceps",
  },
  {
    id: "filling",
    title: "Tooth Filling",
    description:
      "Restore damaged teeth caused by cavities while preserving natural tooth structure.",
    icon: "Zap",
    // Dental curing light used to restore a tooth filling
    image: "https://images.pexels.com/photos/6812544/pexels-photo-6812544.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dental curing light used during a composite tooth filling procedure",
  },
  {
    id: "preventive",
    title: "Preventive Dental Care",
    description:
      "Regular examinations and preventive treatments that help maintain excellent oral health.",
    icon: "Heart",
    // Dentist educating a patient about preventive oral care
    image: "https://images.pexels.com/photos/4269360/pexels-photo-4269360.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist educating a patient about preventive dental care using a tooth model",
  },
  {
    id: "consultation",
    title: "Dental Consultation",
    description:
      "Personalized consultation to understand your dental needs and recommend the most suitable treatment.",
    icon: "MessageCircle",
    // Dentist explaining dental X-rays and a treatment plan
    image: "https://images.pexels.com/photos/6502030/pexels-photo-6502030.jpeg?auto=compress&cs=tinysrgb&w=900",
    imageAlt: "Dentist discussing a dental X-ray and treatment plan with a patient",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Amazing service and professional care! If you want the best dental treatment, visit Dr. Milky Derara Specialty Dental Clinic. Your smile will thank you.",
    rating: 5,
    initials: "A.M.",
    name: "A. Mekonnen",
  },
  {
    id: 2,
    quote:
      "I received tooth extraction, scaling, and polishing services, and everything was excellent. Thank you, Dr. Milky, for your professional and humble treatment.",
    rating: 5,
    initials: "B.T.",
    name: "B. Tadesse",
  },
  {
    id: 3,
    quote:
      "Very clean and very professional. I will definitely recommend this clinic.",
    rating: 5,
    initials: "S.G.",
    name: "S. Girma",
  },
  {
    id: 4,
    quote: "Clean place, great service, and an understanding doctor.",
    rating: 5,
    initials: "H.A.",
    name: "H. Assefa",
  },
  {
    id: 5,
    quote: "Great service and very good hospitality.",
    rating: 5,
    initials: "Y.B.",
    name: "Y. Bekele",
  },
  {
    id: 6,
    quote:
      "Really nice service with excellent hospitality and advanced professional care.",
    rating: 5,
    initials: "D.W.",
    name: "D. Wolde",
  },
  {
    id: 7,
    quote:
      "I brought my two children after passing several clinics because I trusted their service. The care was excellent, and I recommend others to visit.",
    rating: 5,
    initials: "F.H.",
    name: "F. Haile",
  },
  {
    id: 8,
    quote:
      "Number one in quality and customer service. I recommend it for everyone.",
    rating: 5,
    initials: "M.D.",
    name: "M. Desta",
  },
];

export const whyChooseUs = [
  {
    icon: "BadgeCheck",
    title: "Professional Care",
    description:
      "Every patient receives careful, professional treatment focused on long-term oral health.",
  },
  {
    icon: "Cpu",
    title: "Modern Equipment",
    description:
      "Modern dental equipment helps deliver efficient and comfortable treatment.",
  },
  {
    icon: "Sparkles",
    title: "Clean Environment",
    description:
      "A clean, organized, and welcoming clinic designed for patient comfort.",
  },
  {
    icon: "Heart",
    title: "Patient-Centered Care",
    description: "Every treatment plan is personalized to meet the patient's needs.",
  },
  {
    icon: "Smile",
    title: "Comfortable Experience",
    description:
      "Our goal is to make every visit as comfortable and stress-free as possible.",
  },
  {
    icon: "Star",
    title: "Trusted Reputation",
    description:
      "Patients consistently appreciate our professionalism, cleanliness, hospitality, and quality of care.",
  },
];

export const faqs = [
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended to minimize waiting time, although walk-in patients may be accepted depending on availability.",
  },
  {
    question: "How often should I visit the dentist?",
    answer:
      "A dental checkup every six months is generally recommended to maintain good oral health.",
  },
  {
    question: "Do you provide teeth cleaning?",
    answer:
      "Yes. Professional dental cleaning and scaling services are available.",
  },
  {
    question: "Do you provide braces?",
    answer: "Yes. Orthodontic treatment options are available.",
  },
  {
    question: "Is the clinic suitable for children?",
    answer:
      "Yes. We welcome patients of all ages and strive to create a comfortable experience for children and families. We even have a dedicated Dental Kids Corner.",
  },
  {
    question: "Do you provide emergency dental care?",
    answer:
      "Patients with urgent dental concerns are encouraged to contact the clinic as soon as possible for guidance.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "Wolo Sefer, Medco Building, 1st Floor, Addis Ababa, Ethiopia.",
  },
  {
    question: "How can I contact the clinic?",
    answer:
      "You can reach us by phone or WhatsApp at +251 938 329 999. We are happy to assist you.",
  },
];

export const galleryImages = [
  {
    id: 1,
    title: "Reception Flowers",
    image: "/images/clinic/reception-flowers.jpg",
    alt: "Dr. Milky Dental Clinic reception with floral decoration",
    category: "Treatment Rooms",
  },
  {
    id: 2,
    title: "Reception Desk",
    image: "/images/clinic/reception-desk.jpg",
    alt: "Dr. Milky Dental Clinic front reception desk",
    category: "Reception",
  },
  {
    id: 3,
    title: "Waiting Area",
    image: "/images/clinic/reception-waiting.jpg",
    alt: "Comfortable waiting area at Dr. Milky Dental Clinic",
    category: "Reception",
  },
  {
    id: 4,
    title: "Dental Treatment Equipment",
    image: "/images/clinic/treatment-room-equipment.jpg",
    alt: "Modern dental treatment room with advanced equipment",
    category: "Clinic",
  },
  {
    id: 5,
    title: "Dental Treatment Room",
    image: "/images/clinic/treatment-room-blue.jpg",
    alt: "Professional dental chair and equipment",
    category: "Exterior",
  },
  {
    id: 6,
    title: "Consultation Office",
    image: "/images/clinic/consultation-office.jpg",
    alt: "Doctor consultation office at Dr. Milky Dental Clinic",
    category: "Treatment Rooms",
  },
  {
    id: 7,
    title: "Dental Kids Corner",
    image: "/images/clinic/kids-corner.jpg",
    alt: "Dental Kids Corner - child-friendly area",
    category: "Kids Corner",
  },
  {
    id: 8,
    title: "Clinic Entrance",
    image: "/images/clinic/entrance-door.jpg",
    alt: "Entrance to Dr. Milky Specialty Dental Clinic",
    category: "Exterior",
  },
  {
    id: 9,
    title: "Dr. Milky with a Patient",
    image: "/images/doctor/dr-milky-with-patient.jpg",
    alt: "Dr. Milky Derara with a patient at the clinic",
    category: "Patients & Guests",
  },
  {
    id: 10,
    title: "Dr. Milky Providing Treatment",
    image: "/images/doctor/dr-milky-treating.jpg",
    alt: "Dr. Milky Derara providing dental treatment",
    category: "Doctor",
  },
  {
    id: 11,
    title: "Clinic Building",
    image: "/images/clinic/building-exterior.jpg",
    alt: "Dr. Milky Derara Specialty Dental Clinic exterior building",
    category: "Exterior",
  },
  {
    id: 12,
    title: "Medco Building",
    image: "/images/clinic/building-full.jpg",
    alt: "Medco Building hosting Dr. Milky Dental Clinic, Addis Ababa",
    category: "Exterior",
  },
  {
    id: 13,
    title: "Reception Feature Wall",
    image: "/images/clinic/reception-logo.jpg",
    alt: "Reception feature wall at Dr. Milky Derara Specialty Dental Clinic",
    category: "Reception",
  },
  {
    id: 14,
    title: "Dr. Milky Portrait",
    image: "/images/doctor/dr-milky-portrait.jpg",
    alt: "Portrait of Dr. Milky Derara",
    category: "Doctor",
  },
  {
    id: 15,
    title: "Dr. Milky Professional Profile",
    image: "/images/doctor/dr-milky-professional.jpg",
    alt: "Professional profile of Dr. Milky Derara",
    category: "Doctor",
  },
  {
    id: 16,
    title: "Dr. Milky Interview",
    image: "/images/doctor/dr-milky-interview.jpg",
    alt: "Dr. Milky Derara during an interview",
    category: "Doctor",
  },
  {
    id: 17,
    title: "Dr. Milky at Reception",
    image: "/images/doctor/dr-milky-reception.jpg",
    alt: "Dr. Milky Derara at the clinic reception",
    category: "Doctor",
  },
  {
    id: 18,
    title: "Dr. Milky with Guests",
    image: "/images/doctor/dr-milky-with-patients.jpg",
    alt: "Dr. Milky Derara with clinic guests",
    category: "Patients & Guests",
  },
  {
    id: 19,
    title: "Dr. Milky Nameplate",
    image: "/images/doctor/dr-milky-nameplate.jpg",
    alt: "Dr. Milky Derara nameplate at the clinic",
    category: "Doctor",
  },
  {
    id: 20,
    title: "Dr. Milky with Flowers",
    image: "/images/doctor/dr-milky-flowers.jpg",
    alt: "Dr. Milky Derara with flowers at the clinic",
    category: "Patients & Guests",
  },
];

export const trustBarItems = [
  { icon: "BadgeCheck", label: "Professional Care" },
  { icon: "Cpu", label: "Modern Equipment" },
  { icon: "Sparkles", label: "Comfortable Environment" },
  { icon: "Users", label: "Friendly Team" },
  { icon: "ThumbsUp", label: "High Patient Satisfaction" },
];
