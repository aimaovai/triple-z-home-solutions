import heroLivingRoom from "@/assets/tz/hero-living-room.jpg";
import projectAccentWall from "@/assets/tz/project-accent-wall.jpg";
import projectShelving from "@/assets/tz/project-shelving.jpg";
import projectLighting from "@/assets/tz/project-lighting.jpg";
import projectCollage from "@/assets/tz/project-collage.jpg";
import ownerPortrait from "@/assets/tz/owner-portrait.jpg";
import serviceHomeTheater from "@/assets/tz/service-home-theater.jpg";
import serviceReverseOsmosis from "@/assets/tz/service-reverse-osmosis.jpg";
import serviceTvMounting from "@/assets/tz/service-tv-mounting.jpg";
import projectChandelier from "@/assets/tz/project-chandelier.jpg";
import projectCeilingFan from "@/assets/tz/project-ceiling-fan.jpg";
import projectCabinets from "@/assets/tz/project-cabinets.jpg";
import projectReverseOsmosis from "@/assets/tz/project-reverse-osmosis.jpg";
import projectCloset from "@/assets/tz/project-closet.jpg";
import projectCurtains from "@/assets/tz/project-curtains.jpg";
import serviceWaterFiltration from "@/assets/tz/service-water-filtration.jpg";
import serviceWallArt from "@/assets/tz/service-wall-art.jpg";
import serviceCabinets from "@/assets/tz/service-cabinets.jpg";
import serviceFaucet from "@/assets/tz/service-faucet.jpg";
import serviceCloset from "@/assets/tz/service-closet.jpg";
import serviceCurtains from "@/assets/tz/service-curtains.jpg";
import serviceCeilingFan from "@/assets/tz/service-ceiling-fan.jpg";
import logo from "@/assets/tz/logo.webp";

export const images = {
  heroLivingRoom,
  projectAccentWall,
  projectShelving,
  projectLighting,
  projectCollage,
  ownerPortrait,
  serviceHomeTheater,
  serviceReverseOsmosis,
  serviceTvMounting,
  serviceWaterFiltration,
  serviceWallArt,
  serviceCabinets,
  serviceFaucet,
  serviceCloset,
  serviceCurtains,
  serviceCeilingFan,
  logo,
};

export const business = {
  name: "Triple Z Home Solutions",
  tagline: "Houston Handyman & Remodeling Experts",
  phone: "915-227-7449",
  phoneHref: "tel:+19152277449",
  email: "contact@triplezhomesolutions.com",
  emailHref: "mailto:contact@triplezhomesolutions.com",
  hours: [
    { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
    { days: "Saturday", time: "9:00 AM – 4:00 PM" },
    { days: "Sunday", time: "By appointment" },
  ],
  instagram: "https://www.instagram.com/triple_z_home_solutions",
  tiktok: "https://tiktok.com/@triplezhomesolutionsllc",
  areas: ["Houston", "Katy", "Cypress", "Sugar Land", "Richmond", "Fulshear"],
  stats: [
    { value: "150+", label: "Projects completed" },
    { value: "82", label: "Customer reviews" },
    { value: "5.0", label: "Star rating on Thumbtack" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceCard = {
  slug: string;
  title: string;
  blurb: string;
  bullets: string[];
  image: string;
  alt: string;
};

export const serviceCards: ServiceCard[] = [
  {
    slug: "handyman",
    title: "Handyman Services",
    blurb: "Drywall fixes, door adjustments, and the punch-list items that never get done.",
    bullets: ["Drywall patching", "Door & hinge adjustment", "Furniture assembly", "General repairs"],
    image: projectCollage,
    alt: "Triple Z handyman work in a Houston home",
  },
  {
    slug: "remodeling",
    title: "Remodeling",
    blurb: "Kitchens, bathrooms, and full rooms rebuilt to fit how you actually live.",
    bullets: ["Kitchen & bath updates", "Accent walls", "Trim & millwork", "Full room transformations"],
    image: projectAccentWall,
    alt: "Finished accent wall remodel by Triple Z Home Solutions",
  },
  {
    slug: "electrical",
    title: "Electrical",
    blurb: "Light fixtures, ceiling fans, and clean, safe installs that look factory-fitted.",
    bullets: ["Light fixture replacement", "Ceiling fan installs", "Chandelier hanging", "Switch & outlet swaps"],
    image: projectChandelier,
    alt: "Technician installing a chandelier in a living room",
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    blurb: "Faucets, showers, and reverse osmosis systems installed right the first time.",
    bullets: ["Faucet replacement", "Shower fixtures", "Reverse osmosis systems", "Leak repairs"],
    image: serviceFaucet,
    alt: "Installer working on a modern kitchen faucet",
  },
  {
    slug: "painting",
    title: "Painting",
    blurb: "Crisp lines, even coverage, and rooms that look brand new by the end of the day.",
    bullets: ["Interior repaints", "Accent & feature walls", "Trim and doors", "Drywall prep & finish"],
    image: projectLighting,
    alt: "Freshly painted and lit interior space",
  },
  {
    slug: "installations",
    title: "Installations",
    blurb: "TVs, shelving, closets, curtains, cabinets — mounted level, cables hidden.",
    bullets: ["TV mounting", "Custom shelving", "Walk-in closets", "Curtains & wall decor"],
    image: serviceHomeTheater,
    alt: "Mounted TV and home theater setup in a living room",
  },
];

export type Tier = {
  name: string;
  summary: string;
  bullets: string[];
  images: { src: string; alt: string }[];
};

export const tiers: Tier[] = [
  {
    name: "Essential Repairs",
    summary: "Essential repairs and installations to keep things running smoothly.",
    bullets: [
      "Drywall patching and touch-up paint",
      "Door, cabinet, and hinge adjustments",
      "Faucet and fixture replacement",
      "Furniture and equipment assembly",
      "Minor electrical swaps",
      "Punch-list clean-up before a move or sale",
    ],
    images: [
      { src: projectCollage, alt: "Repair work completed in a Houston home" },
      { src: serviceFaucet, alt: "New faucet installed on a kitchen sink" },
    ],
  },
  {
    name: "Custom Upgrades",
    summary: "Custom upgrades like shelving, lighting, accent walls, and home theater setups.",
    bullets: [
      "Accent walls and feature paneling",
      "Custom shelving and storage builds",
      "Light fixtures, chandeliers, ceiling fans",
      "TV mounting and home theater setup",
      "Walk-in closet systems",
      "Curtains, wall art, and decor installation",
    ],
    images: [
      { src: projectShelving, alt: "Custom shelving built by Triple Z Home Solutions" },
      { src: serviceHomeTheater, alt: "Home theater installation in a living room" },
    ],
  },
  {
    name: "Full Remodeling",
    summary: "Complete remodeling and tailored solutions for your space.",
    bullets: [
      "Kitchen and bathroom remodels",
      "Cabinet and countertop installation",
      "Flooring and trim work",
      "Whole-room transformations",
      "Commercial and rental turnovers",
      "Project management from demo to final walkthrough",
    ],
    images: [
      { src: projectAccentWall, alt: "Completed remodel with a finished accent wall" },
      { src: serviceCabinets, alt: "Newly installed cabinetry and fixtures" },
    ],
  },
];

export type DetailedService = {
  title: string;
  body: string;
  image: string;
  alt: string;
};

export const detailedServices: DetailedService[] = [
  {
    title: "Home Theater Installation",
    body: "Triple Z's Home Theater Installation transforms your space into a cinematic experience with high-definition visuals and immersive surround sound. Our team expertly positions and connects all components, ensuring optimal performance and a clean, polished look. Enjoy seamless entertainment customized just for you.",
    image: serviceHomeTheater,
    alt: "Technician adjusting TV settings during a home theater installation",
  },
  {
    title: "TV Mounting",
    body: "Triple Z's TV Mounting service offers a secure, sleek installation that enhances your viewing experience and maximizes space. Our experts carefully position and mount your TV, managing cables for a clean, modern look. Enjoy the perfect angle and stability with a setup tailored to your room.",
    image: projectAccentWall,
    alt: "TV mounted on a finished accent wall",
  },
  {
    title: "Reverse Osmosis Drinking Water System",
    body: "Enjoy crystal-clear, refreshing water straight from your tap with a Reverse Osmosis Drinking Water System. This powerful filtration setup removes impurities, giving you pure, great-tasting water every time. Pure hydration made easy — brought to you by Triple Z.",
    image: serviceReverseOsmosis,
    alt: "Reverse osmosis drinking water system under a kitchen sink",
  },
  {
    title: "Cabinet and Fixture Installation",
    body: "Transform your kitchen or bathroom with Triple Z's Cabinet and Fixture Installation service, bringing functionality and style to your space. Our experts ensure precise alignment, secure mounting, and seamless integration of fixtures for a polished, high-quality finish.",
    image: serviceCabinets,
    alt: "Newly installed cabinets and fixtures",
  },
  {
    title: "Shower & Faucet Installation",
    body: "Say goodbye to leaky faucets and outdated showers. Our Shower & Faucet Installation service combines top-notch craftsmanship with attention to detail, ensuring a flawless, modern look and reliable performance in a refreshed, worry-free bathroom.",
    image: serviceFaucet,
    alt: "Installer fitting a modern faucet",
  },
  {
    title: "Walk-In Closet Setup",
    body: "Triple Z's Walk-In Closet Setup service transforms your space into a storage dream, with custom shelving, hanging solutions, and thoughtful design. Say hello to effortless organization and a closet that makes finding your favorites a breeze.",
    image: serviceCloset,
    alt: "Handyman installing shelves in a walk-in closet",
  },
  {
    title: "Light Fixture & Ceiling Fan Installation",
    body: "From statement chandeliers to quiet, balanced ceiling fans, we handle the wiring, mounting, and finishing so every fixture sits level and runs safely. Better light, better airflow, no guesswork.",
    image: serviceCeilingFan,
    alt: "Technician installing a ceiling fan",
  },
  {
    title: "Curtain Installation",
    body: "Let natural light and style flow seamlessly with Triple Z's Curtain Installation service. We handle precise measurements, secure mounting, and perfect alignment for a polished look that complements your space.",
    image: serviceCurtains,
    alt: "Curtains installed in a residential setting",
  },
  {
    title: "Wall Art & Decor Installation",
    body: "Personalize your space with Triple Z's Wall Art & Decor Installation service, bringing your vision to life with precision and style. Our experts handle secure mounting, ideal placement, and meticulous alignment for a flawless display.",
    image: serviceWallArt,
    alt: "Handyman hanging artwork in a living room",
  },
  {
    title: "Water Filtration Systems",
    body: "Whole-home and under-sink filtration installed cleanly and tested before we leave. Better water for drinking, cooking, and everything in between.",
    image: serviceWaterFiltration,
    alt: "Technician installing a water filtration system",
  },
];

export const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. Tell us what you need and send a photo or two, and we'll give you a clear, no-obligation estimate before any work starts.",
  },
  {
    q: "How soon can you start?",
    a: "Most small jobs are scheduled within a few days, and we can often handle urgent repairs same week. Larger remodels are scheduled after a walkthrough.",
  },
  {
    q: "Do you bring materials?",
    a: "We can supply materials or install what you've already purchased — whichever saves you money. We'll confirm the plan in your estimate.",
  },
  {
    q: "What areas do you serve?",
    a: `We serve ${business.areas.join(", ")} and the surrounding Houston area. Just ask if you're nearby.`,
  },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  location?: string;
  image: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "Living Room Accent Wall",
    category: "Custom Builds",
    description: "Full-height paneled accent wall with clean seams and a color-matched finish.",
    location: "Houston, TX",
    image: projectAccentWall,
    alt: "Finished living room accent wall",
  },
  {
    title: "Custom Shelving Build",
    category: "Custom Builds",
    description: "Built-in shelving sized to the alcove, sanded, sealed, and anchored to studs.",
    location: "Katy, TX",
    image: projectShelving,
    alt: "Custom built-in shelving installed in a home",
  },
  {
    title: "Interior Lighting Upgrade",
    category: "Lighting",
    description: "Replaced dated fixtures with warm, layered lighting throughout the main living space.",
    location: "Cypress, TX",
    image: projectLighting,
    alt: "Interior room after a lighting upgrade",
  },
  {
    title: "Chandelier & Fixture Hanging",
    category: "Lighting",
    description: "Statement chandelier hung, balanced, and wired to a dimmer for evening light.",
    image: projectChandelier,
    alt: "Chandelier being installed in a living room",
  },
  {
    title: "Ceiling Fan Installation",
    category: "Lighting",
    description: "Quiet, balanced ceiling fan swapped in with new bracing and a wall control.",
    image: projectCeilingFan,
    alt: "Ceiling fan installed in a living room",
  },
  {
    title: "Home Theater Setup",
    category: "TV Mounting",
    description: "Mounted display with concealed cabling and calibrated surround sound.",
    location: "Sugar Land, TX",
    image: serviceHomeTheater,
    alt: "Home theater installation with mounted TV",
  },
  {
    title: "Kitchen Cabinet Installation",
    category: "Kitchen Upgrades",
    description: "New cabinetry hung level with matched hardware and a clean caulk line.",
    image: projectCabinets,
    alt: "Newly installed kitchen cabinets",
  },
  {
    title: "Reverse Osmosis System",
    category: "Kitchen Upgrades",
    description: "Under-sink RO system installed, pressure-tested, and flushed before handoff.",
    image: projectReverseOsmosis,
    alt: "Reverse osmosis drinking water system installed under a sink",
  },
  {
    title: "Faucet Replacement",
    category: "Repairs",
    description: "Old leaking faucet removed and replaced with a modern pull-down fixture.",
    image: serviceFaucet,
    alt: "Modern faucet installed on a sink",
  },
  {
    title: "Punch-List Repairs",
    category: "Repairs",
    description: "Drywall patches, door adjustments, and touch-ups handled in a single visit.",
    image: projectCollage,
    alt: "Collage of completed handyman repairs",
  },
  {
    title: "Walk-In Closet System",
    category: "Furniture Assembly",
    description: "Custom shelving and hanging rods laid out for real, everyday storage.",
    image: projectCloset,
    alt: "Walk-in closet with custom shelving",
  },
  {
    title: "Curtains & Wall Decor",
    category: "Furniture Assembly",
    description: "Rods measured and mounted level, artwork hung and aligned across the wall.",
    image: projectCurtains,
    alt: "Curtains installed in a residential room",
  },
];

export const projectCategories = [
  "All",
  "Lighting",
  "Kitchen Upgrades",
  "TV Mounting",
  "Furniture Assembly",
  "Repairs",
  "Custom Builds",
];

export type Review = {
  quote: string;
  name: string;
  detail: string;
};

export const reviews: Review[] = [
  {
    quote:
      "Adding the perfect finishing touch to a room or transforming an entire space — they handled it with precision and care from start to finish.",
    name: "Verified Thumbtack customer",
    detail: "Remodeling · Houston",
  },
  {
    quote:
      "Dependable service, transparent pricing, and quality craftsmanship. Exactly what they promise on their site is what we got.",
    name: "Verified Thumbtack customer",
    detail: "Handyman services · Houston",
  },
  {
    quote:
      "Every project, big or small, was handled with professionalism and attention to detail. The results have held up beautifully.",
    name: "Verified Thumbtack customer",
    detail: "Installations · Katy",
  },
  {
    quote: "A true 5-star experience. Reliable, skilled, and genuinely easy to work with.",
    name: "Verified Thumbtack customer",
    detail: "Repairs · Cypress",
  },
  {
    quote:
      "Gave us peace of mind and confidence in the work delivered. They showed up when they said they would and finished clean.",
    name: "Verified Thumbtack customer",
    detail: "Remodeling · Sugar Land",
  },
  {
    quote: "Functional, stylish, and comfortable — our space finally works the way we needed it to.",
    name: "Verified Thumbtack customer",
    detail: "Custom builds · Richmond",
  },
];

export const whyChooseUs = [
  { title: "Licensed & Insured", body: "Covered on every job, residential or commercial." },
  { title: "5-Star Rated", body: "82 reviews and a perfect 5.0 rating on Thumbtack." },
  { title: "Fast Response", body: "We answer quotes within 24 hours, most within a few." },
  { title: "Transparent Pricing", body: "A clear estimate up front. No surprise line items." },
  { title: "Quality Workmanship", body: "Level, sealed, cleaned up. Work that holds up." },
];
