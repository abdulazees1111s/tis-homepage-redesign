import {
  ArrowRight,
  Award,
  BookOpen,
  GraduationCap,
  HeartPulse,
  MapPin,
  Medal,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';

export const brand = {
  name: 'Tulas International School',
  shortName: 'TIS',
  logo: 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png',
  campusImage: 'https://tis.edu.in/_next/static/media/Image%202.0c5295c9.webp',
  alternateCampusImage: 'https://tis.edu.in/_next/static/media/AtTIS.59351600.png',
  phone: '+91-9837983791',
  email: 'info@tis.edu.in',
  address: 'Dhoolkot, P.O. Selaqui, Chakrata Road, Dehradun, Uttarakhand',
};

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Academics', href: '#academics' },
  { label: 'Boarding Life', href: '#campus-life' },
  { label: 'Admissions', href: '#admissions' },
];

export const stats = [
  { value: '22', label: 'acre pollution free campus', icon: MapPin },
  { value: '16+', label: 'olympic sports', icon: Trophy },
  { value: '24x7', label: 'medical assistance', icon: HeartPulse },
  { value: '6:1', label: 'student teacher ratio', icon: Users },
];

export const highlights = [
  {
    icon: GraduationCap,
    title: 'CBSE Boarding and Day School',
    body: 'A balanced academic environment for grades IV to XII with structure, mentoring, and space to grow.',
  },
  {
    icon: ShieldCheck,
    title: 'Nurturing Residential Care',
    body: 'Boarding life is shaped around safety, discipline, health, and belonging for every student.',
  },
  {
    icon: Sparkles,
    title: 'Learning Beyond Classrooms',
    body: 'Music, art, drama, leadership, sports, and collaborations give students many ways to discover themselves.',
  },
];

export const programs = [
  {
    title: 'Academic Excellence',
    eyebrow: 'CBSE Curriculum',
    body: 'Concept-led learning, guided preparation, and teacher attention help students build confidence across disciplines.',
    icon: BookOpen,
  },
  {
    title: 'Sports Foundation',
    eyebrow: '16+ Sports',
    body: 'Archery, swimming, football, basketball, cricket, badminton, shooting, and more build discipline through movement.',
    icon: Medal,
  },
  {
    title: 'Recognition and Exposure',
    eyebrow: 'Ranked Institution',
    body: 'TIS has been recognized among leading co-educational boarding schools in Dehradun, Uttarakhand, and India.',
    icon: Award,
  },
];

export const sports = [
  'Archery',
  'Swimming',
  'Football',
  'Shooting Range',
  'Horse Riding',
  'Basketball',
  'Cricket',
  'Badminton',
];

export const testimonials = [
  {
    quote:
      'We have seen a remarkable improvement in our child’s confidence and skills since joining Tulas.',
    name: 'Selendra K. Ajmera',
    role: 'Parent',
  },
  {
    quote:
      'The teachers here are genuinely dedicated to bringing out the best in every student.',
    name: 'Namita Agarwal',
    role: 'Parent',
  },
  {
    quote:
      'Sports, academics, and extra-curricular activities have helped our child know himself better.',
    name: 'Sandeep Kumar',
    role: 'Parent',
  },
];

export const actions = {
  primary: { label: 'Apply Now', href: 'https://admission.tis.edu.in/', icon: ArrowRight },
  secondary: { label: 'Explore Campus', href: '#campus-life' },
};
