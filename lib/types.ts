export interface PostData {
  slug: string;
  title: string;
  date: string;
  content: string;
  image?: string;
  categories?: string[];
  [key: string]: any;
}

export const abujaClients = [
  "Kado Estate FCT Abuja", "Best Price Golden Venture Estate FCT Abuja", "DeDen Abuja", "God's own plaza Abuja",
  "Strength Filed Pharmacy, Abuja", "Citec Estate FCT Abuja", "Gonny Pharmacy Ltd Abuja", "Fruitful Orchard School, Abuja",
  "AVM Gregory RTD Resident Abuja", "Dei Dei international building materials Abuja", "God has done Estate FCT Abuja",
  "Xtoget Luxury Light Abuja", "COME IN Hotel and suits", "Wali Suits and hotel", "BKT Cribs", "Nature Furniture House",
  "Lace Restaurant and Suits", "Flozic Global Nig Ltd Office", "Diamond suits and hotel", "Oladele Hamzat Estate",
  "Aveon Hotel Abuja", "Holcare Health And Wellness Clinic Ltd", "The Penielville School, Dawaki", "Peace Arena Lugbe",
  "Blue Haven Apartment", "Ecwa Seminary School Karu Abuja", "Ain't Comfort Homes Jabi"
];

export const josClients = [
  "Graceland international school, Jos", "College De Mazenod, Jos", "Open heaven international Ministry, Jos",
  "Coca-Cola Depot", "Abbey Technical Lab", "Virgman Gas Plant", "Virgman truck Station", "Uchesco Oil and gas",
  "NNPC Limited", "Ray field Private school", "Adoka Holding Ltd", "Flourish Supermarket",
  "Dr Mrs Deborah Residence Ray field", "St Gabriel Catholic Church"
];

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  source: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Emmanuel Okoro",
    role: "Estate Manager, Citec",
    content: "Master Eye Security has transformed our estate safety protocols. Their guards are exceptionally disciplined and their technical monitoring is world-class.",
    rating: 5,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=dr_okoro"
  },
  {
    name: "Chief Ahmed Musa",
    role: "CEO, Musa Holdings",
    content: "The VIP protection services provided during our sensitive corporate events were impeccable. Discreet, professional, and highly skilled operators.",
    rating: 5,
    source: "Trust Pilot",
    image: "https://i.pravatar.cc/150?u=ahmed_musa"
  },
  {
    name: "Sarah Williams",
    role: "Director, Fruitful Orchard School",
    content: "As a school, security is our top priority. Master Eye's electronic surveillance system gives us 24/7 visibility and peace of mind. Truly reliable.",
    rating: 5,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=sarah_williams"
  },
  {
    name: "Engineer Victor Adeyemi",
    role: "Project Manager, NNPC Depot",
    content: "Industrial security requires precision. Master Eye understands the complexities of site protection. Their reporting system is highly detailed.",
    rating: 5,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=victor_adeyemi"
  },
  {
    name: "Mrs. Olabisi Johnson",
    role: "Resident, Kado Estate",
    content: "I've never felt safer in my own home. The patrols are consistent and the guards are respectful yet very firm in their duties. Highly recommended.",
    rating: 4,
    source: "Trust Pilot",
    image: "https://i.pravatar.cc/150?u=olabisi"
  },
  {
    name: "Kevin Peterson",
    role: "Operations Manager, Aveon Hotel",
    content: "Running a 24-hour business needs reliable security. Messl personnel are proactive and handled a few incidents with extreme professional calm.",
    rating: 5,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=kevin"
  },
  {
    name: "Hajiya Mariam Bello",
    role: "Owner, Bello Luxury Suits",
    content: "Their surveillance tech is second to none. Remote access works perfectly and the image quality is crystal clear. Exceptional value for money.",
    rating: 5,
    source: "Trust Pilot",
    image: "https://i.pravatar.cc/150?u=mariam"
  },
  {
    name: "Lt. Col John RTD",
    role: "Security Consultant",
    content: "I've seen many security outfits in Nigeria, but Master Eye's training protocols are what sets them apart. They think strategically, not just physically.",
    rating: 5,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=john_rt"
  },
  {
    name: "Chukwudi Eze",
    role: "Logistics Manager",
    content: "Prompt response and great customer service. Whenever we have a technical glitch, their support team is there within the hour. Five stars.",
    rating: 4,
    source: "Google Reviews",
    image: "https://i.pravatar.cc/150?u=eze"
  },
  {
    name: "Blessing Amusa",
    role: "Facility Lead, Diamond Suits",
    content: "The level of integrity shown by the guards provided to our facility is remarkable. They have truly become part of our safety culture.",
    rating: 5,
    source: "Trust Pilot",
    image: "https://i.pravatar.cc/150?u=blessing"
  }
];
