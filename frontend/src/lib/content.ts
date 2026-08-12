/**
 * SITE CONTENT — SINGLE SOURCE OF TRUTH
 * ---------------------------------------------------------------
 * Everything in this file is placeholder / generic content for a
 * preschool built as a starting baseline. When this is customised
 * for a real school, this is the only file that needs to change
 * for most text, contact details and structured data.
 *
 * Sections marked "REPLACE" are the highest-priority items to
 * swap out first.
 * ---------------------------------------------------------------
 */

// REPLACE: school identity
export const school = {
  name: "Little Explorers",
  tagline: "Where Curiosity Begins",
  shortName: "Little Explorers",
  descriptionShort:
    "A warm, nurturing preschool where young children learn through play, discovery and meaningful everyday experiences.",
  founded: "2011",
  studentsCount: "500+",
  yearsOfCare: "13",
  teacherRatio: "1:8",
};

// REPLACE: contact & location details
export const contact = {
  addressLine1: "24 Willow Garden Road",
  addressLine2: "Sector 12, Chandigarh, 160012",
  phonePrimary: "+91 98765 43210",
  phoneSecondary: "+91 98765 43211",
  email: "hello@littleexplorers.example",
  admissionsEmail: "admissions@littleexplorers.example",
  hoursWeekday: "8:30 AM – 3:30 PM",
  hoursSaturday: "9:00 AM – 12:00 PM (select programs)",
  daysOpen: "Monday – Saturday",
  mapEmbedLabel: "Map placeholder — embed your school's exact location here",
};

export const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Activities", href: "/activities" },
  { label: "Facilities", href: "/facilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// REPLACE: age-based programs — order carries meaning (youngest to oldest)
export const programs = [
  {
    slug: "playgroup",
    name: "Playgroup",
    ageRange: "1.5 – 2.5 yrs",
    tagline: "First steps away from home",
    description:
      "A gentle, play-first introduction to a classroom — sensory play, music and simple routines in a small, familiar group.",
    highlights: ["Sensory play stations", "Circle-time songs", "Nap & rest routine", "Low child-to-teacher ratio"],
    color: "marigold",
  },
  {
    slug: "nursery",
    name: "Nursery",
    ageRange: "2.5 – 3.5 yrs",
    tagline: "Building independence, one day at a time",
    description:
      "Children explore language, movement and early social skills through guided play, storytelling and hands-on activities.",
    highlights: ["Story & rhyme time", "Fine motor skill play", "Buddy activities", "Outdoor exploration"],
    color: "peacock",
  },
  {
    slug: "lkg",
    name: "LKG",
    ageRange: "3.5 – 4.5 yrs",
    tagline: "Curiosity meets early concepts",
    description:
      "A structured-yet-playful introduction to letters, numbers and the world around us, balanced with creative and physical play.",
    highlights: ["Phonics & pre-writing", "Number sense through play", "Art & craft projects", "Community helpers unit"],
    color: "berry",
  },
  {
    slug: "ukg",
    name: "UKG",
    ageRange: "4.5 – 5.5 yrs",
    tagline: "Ready, confident, school-bound",
    description:
      "Children build reading, writing and reasoning skills while developing confidence, focus and collaboration — preparing them for Grade 1.",
    highlights: ["Reading readiness", "Early math & logic", "Show & tell / public speaking", "School-readiness projects"],
    color: "peacock",
  },
];

// Learning through play — key developmental areas shown on the homepage
export const learningAreas = [
  {
    name: "Creative Arts",
    description: "Painting, craft and open-ended making that builds imagination and fine motor control.",
    icon: "palette",
  },
  {
    name: "Music & Movement",
    description: "Rhythm, songs and dance that support coordination, memory and self-expression.",
    icon: "music",
  },
  {
    name: "Sports & Movement",
    description: "Structured physical play that builds strength, balance and teamwork.",
    icon: "activity",
  },
  {
    name: "Outdoor Play",
    description: "Unstructured time outdoors to explore, take safe risks and build resilience.",
    icon: "trees",
  },
  {
    name: "Early Learning",
    description: "Letters, numbers and concepts introduced through games, not worksheets.",
    icon: "book-open",
  },
  {
    name: "Exploration",
    description: "Sensory bins, nature walks and simple science that feed natural curiosity.",
    icon: "compass",
  },
];

// Activities page — a broader list than the homepage preview
export const activities = [
  {
    name: "Storytelling Circle",
    category: "Language & Literacy",
    description: "Daily read-aloud sessions that build vocabulary, listening skills and a lifelong love of books.",
    icon: "book-open",
  },
  {
    name: "Little Picassos Art Studio",
    category: "Creative Arts",
    description: "Open-ended painting, collage and craft that celebrates process over perfect outcomes.",
    icon: "palette",
  },
  {
    name: "Rhythm & Rhyme",
    category: "Music & Movement",
    description: "Action songs, simple instruments and movement games that build coordination and confidence.",
    icon: "music",
  },
  {
    name: "Mini Explorers Nature Walk",
    category: "Outdoor Play",
    description: "Guided walks in the school garden to observe plants, insects and the changing seasons.",
    icon: "trees",
  },
  {
    name: "Building & Blocks Lab",
    category: "Early Learning",
    description: "Open block play and simple construction challenges that introduce early engineering thinking.",
    icon: "blocks",
  },
  {
    name: "Sensory Play Stations",
    category: "Exploration",
    description: "Sand, water, dough and textured play that supports sensory development and calm focus.",
    icon: "sparkles",
  },
  {
    name: "Yoga & Mindful Movement",
    category: "Sports & Movement",
    description: "Simple stretches and breathing games that help children build body awareness and calm.",
    icon: "activity",
  },
  {
    name: "Little Chefs Kitchen Play",
    category: "Life Skills",
    description: "Pretend cooking and simple, supervised food activities that build independence and vocabulary.",
    icon: "chef-hat",
  },
];

// Facilities page & homepage preview
export const facilities = [
  {
    name: "Bright Learning Classrooms",
    description: "Airy, naturally lit classrooms zoned for group time, quiet reading and hands-on play.",
    icon: "school",
  },
  {
    name: "Outdoor Play Yard",
    description: "A soft-surfaced play yard with age-appropriate equipment, shaded seating and open lawn.",
    icon: "trees",
  },
  {
    name: "Art & Craft Studio",
    description: "A dedicated, washable-surface studio stocked with paints, clay and collage materials.",
    icon: "palette",
  },
  {
    name: "Story & Reading Corner",
    description: "A cosy, cushioned nook filled with picture books for quiet time and read-alouds.",
    icon: "book-open",
  },
  {
    name: "Indoor Play & Motor Skills Room",
    description: "A padded indoor space for movement games on rainy days and gross-motor development.",
    icon: "activity",
  },
  {
    name: "Nutritious Meal Area",
    description: "A clean, supervised space for healthy snacks and meals with a focus on good habits.",
    icon: "utensils",
  },
  {
    name: "CCTV-Monitored Campus",
    description: "Continuous monitoring across classrooms and common areas for parents' peace of mind.",
    icon: "shield-check",
  },
  {
    name: "Health & First-Aid Room",
    description: "An on-site space for basic care, staffed by trained personnel during school hours.",
    icon: "heart-pulse",
  },
];

// Homepage "Why Choose Us"
export const whyChooseUs = [
  {
    title: "Safe, Secure Environment",
    description: "CCTV-monitored campus, verified staff and controlled entry so every drop-off feels safe.",
    icon: "shield-check",
  },
  {
    title: "Caring, Qualified Teachers",
    description: "Trained early-years educators who know each child's name, pace and personality.",
    icon: "heart-handshake",
  },
  {
    title: "Child-Centred Learning",
    description: "Every activity is designed around how young children actually learn — through play.",
    icon: "sparkles",
  },
  {
    title: "Activity-Based Education",
    description: "Concepts are introduced through hands-on activities, not worksheets or rote learning.",
    icon: "blocks",
  },
  {
    title: "Modern, Thoughtful Facilities",
    description: "Purpose-built spaces for art, movement, reading and outdoor play — all on one safe campus.",
    icon: "school",
  },
  {
    title: "Small Class Sizes",
    description: `A ${school.teacherRatio} teacher-to-child ratio means real attention for every child.`,
    icon: "users",
  },
];

// About page — school values & timeline
export const values = [
  {
    title: "Play is the Curriculum",
    description: "We believe children learn best when they're curious, engaged and having fun — so play is never a break from learning, it is the learning.",
  },
  {
    title: "Every Child is Different",
    description: "We meet each child where they are, celebrating different paces, personalities and ways of exploring the world.",
  },
  {
    title: "Warmth Before Worksheets",
    description: "Confidence and emotional security come first. Academic skills grow naturally from a child who feels safe and seen.",
  },
  {
    title: "Partnership with Parents",
    description: "Families are part of the classroom, not just spectators — through regular updates, events and open conversations.",
  },
];

export const milestones = [
  { year: school.founded, label: "School founded with a single playgroup classroom" },
  { year: "2015", label: "Expanded campus to include a dedicated outdoor play yard" },
  { year: "2019", label: "Introduced our full Playgroup–UKG program pathway" },
  { year: "2023", label: "Opened a new art studio and indoor movement room" },
];

export const teamRoles = [
  { role: "Head of School", description: "Oversees curriculum quality, staff training and the overall school experience." },
  { role: "Lead Early-Years Educators", description: "Plan and lead daily classroom activities across every age group." },
  { role: "Activity & Enrichment Coordinators", description: "Design our art, music and movement programs." },
  { role: "Care & Support Staff", description: "Support health, hygiene and day-to-day wellbeing on campus." },
];

// Admissions page
export const admissionSteps = [
  {
    title: "Enquire",
    description: "Share a few details about your child through our enquiry form or a phone call — we'll respond within one working day.",
  },
  {
    title: "School Visit",
    description: "Tour the campus, meet our teachers and see a classroom in session so you can picture your child here.",
  },
  {
    title: "Application",
    description: "Complete a short application form along with basic documentation for your child.",
  },
  {
    title: "Meet & Greet",
    description: "An informal, play-based interaction lets us understand your child's comfort and interests — no formal testing.",
  },
  {
    title: "Confirmation",
    description: "Receive your admission confirmation along with orientation details and a welcome pack.",
  },
];

export const admissionFaqs = [
  {
    question: "What is the minimum age for admission?",
    answer: "Children can join our Playgroup program from 1.5 years. Each program has a corresponding age band listed on our Programs page.",
  },
  {
    question: "What documents are required?",
    answer: "Typically a birth certificate, address proof, immunisation record and passport-size photographs. Our admissions team will share the exact checklist for your child's program.",
  },
  {
    question: "Do you offer transport?",
    answer: "REPLACE: Add details here about school transport routes and availability, if offered.",
  },
  {
    question: "What are the school timings?",
    answer: `Regular school hours are ${contact.hoursWeekday}, ${contact.daysOpen.toLowerCase()}. Extended care options can be discussed during your school visit.`,
  },
  {
    question: "Is there an application fee?",
    answer: "REPLACE: Add your school's specific fee structure and payment details here.",
  },
];

// Gallery page — placeholder categories
export const galleryCategories = [
  "All",
  "Classrooms",
  "Outdoor Play",
  "Art & Craft",
  "Events",
  "Facilities",
];

export const galleryItems = [
  { title: "Morning Circle Time", category: "Classrooms" },
  { title: "Water Play Afternoon", category: "Outdoor Play" },
  { title: "Little Picassos at Work", category: "Art & Craft" },
  { title: "Annual Day Celebration", category: "Events" },
  { title: "Reading Corner", category: "Facilities" },
  { title: "Sports Day Fun Run", category: "Outdoor Play" },
  { title: "Clay Modelling Session", category: "Art & Craft" },
  { title: "New Building Block Lab", category: "Facilities" },
  { title: "Diwali Celebrations", category: "Events" },
  { title: "Nap Time Nursery", category: "Classrooms" },
  { title: "Garden Nature Walk", category: "Outdoor Play" },
  { title: "Puppet Show Day", category: "Events" },
];

// Testimonials — used sparingly, homepage + about page
export const testimonials = [
  {
    quote:
      "Our daughter runs to the classroom door every morning. The teachers know exactly how to make each child feel excited about learning.",
    name: "Parent of a Nursery student",
  },
  {
    quote:
      "What stood out to us was how calm and safe the whole campus feels — from drop-off to pick-up, everything is thoughtfully organised.",
    name: "Parent of a UKG student",
  },
  {
    quote:
      "He's more confident, more talkative and genuinely loves going to school. That's really all we hoped for.",
    name: "Parent of a Playgroup student",
  },
];
