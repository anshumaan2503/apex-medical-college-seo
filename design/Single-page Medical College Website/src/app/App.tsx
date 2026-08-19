import { useState, useEffect } from "react";
import {
  GraduationCap,
  Stethoscope,
  FlaskConical,
  BookOpen,
  Users,
  Building2,
  Microscope,
  Award,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart,
  Lightbulb,
  Activity,
  ChevronRight,
  Star,
  Clock,
  Shield,
} from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Campus", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

const COURSES = [
  {
    icon: Stethoscope,
    title: "MBBS",
    fullName: "Bachelor of Medicine & Bachelor of Surgery",
    description:
      "Our flagship MBBS program delivers rigorous biomedical science, clinical reasoning, and hands-on hospital exposure across five and a half comprehensive years of training.",
    duration: "5.5 Years",
    accent: true,
  },
  {
    icon: Heart,
    title: "BDS",
    fullName: "Bachelor of Dental Surgery",
    description:
      "A comprehensive dental surgery program combining oral sciences, prosthodontics, orthodontics, and supervised clinical practice in our state-of-the-art dental school.",
    duration: "5 Years",
    accent: false,
  },
  {
    icon: Microscope,
    title: "MD / MS",
    fullName: "Postgraduate Medical Programs",
    description:
      "Advanced postgraduate specializations across 22 disciplines, designed for practicing physicians seeking clinical mastery, research depth, and leadership in their specialty.",
    duration: "3 Years",
    accent: true,
  },
];

const FEATURES = [
  {
    icon: Users,
    title: "Experienced Faculty",
    description:
      "Our 280+ faculty members include internationally trained physicians, researchers, and clinicians with decades of combined expertise across every major medical discipline.",
  },
  {
    icon: Activity,
    title: "Advanced Clinical Training",
    description:
      "Affiliated with a 1,200-bed teaching hospital providing immersive, real-world clinical rotations from the very first year of the program.",
  },
  {
    icon: Building2,
    title: "Modern Infrastructure",
    description:
      "State-of-the-art anatomy halls, high-fidelity simulation labs, digital radiology suites, and smart classrooms across a sprawling 45-acre campus.",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation",
    description:
      "Active research centers in oncology, cardiology, and genomics with dedicated grants supporting student and faculty publications in peer-reviewed journals.",
  },
];

const CAMPUS_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1758270704384-9df36d94a29d?w=600&h=500&fit=crop&auto=format",
    alt: "Students attending a lecture at Apex Medical College",
    label: "Modern Lecture Halls",
  },
  {
    url: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=600&h=500&fit=crop&auto=format",
    alt: "Medical laboratory with microscopes and analytical equipment at Apex Medical College",
    label: "Research Laboratories",
  },
  {
    url: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=600&h=500&fit=crop&auto=format",
    alt: "University library with tall windows and bookshelves at Apex Medical College",
    label: "Academic Library",
  },
  {
    url: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&h=500&fit=crop&auto=format",
    alt: "Doctor consulting with a patient in the Apex Medical College clinical training center",
    label: "Clinical Training Center",
  },
];

const FOOTER_QUICK_LINKS = [
  "About the College",
  "MBBS Program",
  "BDS Program",
  "Postgraduate Programs",
  "Research Centers",
  "Alumni Network",
];

const FOOTER_ADMISSIONS_LINKS = [
  "How to Apply",
  "Eligibility Criteria",
  "Entrance Examinations",
  "Fee Structure",
  "Scholarships",
  "International Students",
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-foreground antialiased">

      {/* ── STICKY NAVBAR ─────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-[0_1px_24px_rgba(13,31,60,0.08)]"
            : "bg-white/96 backdrop-blur-md"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-3 flex-shrink-0 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0D1F3C] flex items-center justify-center shadow-sm">
              <GraduationCap className="w-5 h-5 text-[#0B9B8B]" />
            </div>
            <div className="leading-tight text-left">
              <span className="block font-serif font-bold text-[#0D1F3C] text-[17px] leading-none tracking-tight">
                Apex Medical College
              </span>
              <span className="block text-[10px] text-[#0B9B8B] font-semibold tracking-[0.15em] uppercase mt-0.5">
                Est. 1999 · Mumbai
              </span>
            </div>
          </button>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-[13.5px] text-[#4A5568] hover:text-[#0D1F3C] font-medium transition-colors duration-200 relative group pb-0.5"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0B9B8B] transition-all duration-250 group-hover:w-full rounded-full" />
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollTo("#admissions")}
              className="px-5 py-2.5 bg-[#0D1F3C] text-white text-sm font-semibold rounded-lg hover:bg-[#0B9B8B] transition-colors duration-200 shadow-sm"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-[#0D1F3C] rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-5 space-y-1 shadow-lg">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="flex w-full text-left text-[14px] text-[#4A5568] hover:text-[#0D1F3C] hover:bg-gray-50 px-3 py-2.5 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3">
              <button
                onClick={() => scrollTo("#admissions")}
                className="w-full py-3 bg-[#0D1F3C] text-white text-sm font-semibold rounded-lg"
              >
                Apply Now
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section id="home" className="pt-[72px] min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 xl:gap-20 items-center">

            {/* Text column */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#E6F5F3] text-[#0B9B8B] text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8 border border-[#0B9B8B]/20">
                <Star className="w-3 h-3 fill-[#0B9B8B]" />
                NMC Accredited &nbsp;·&nbsp; WHO Listed Institution
              </div>

              <h1 className="font-serif text-[3.2rem] lg:text-[3.75rem] xl:text-[4.25rem] font-bold text-[#0D1F3C] leading-[1.08] tracking-tight mb-6">
                Shaping
                <br />
                <span className="text-[#0B9B8B] italic">Tomorrow's</span>
                <br />
                Healthcare Leaders
              </h1>

              <p className="text-[1.05rem] text-[#4A5568] leading-[1.75] mb-10 max-w-[30rem]">
                Apex Medical College provides world-class medical education, advanced clinical training, and a strong foundation for the next generation of healthcare professionals.
              </p>

              <div className="flex flex-wrap gap-3.5 mb-14">
                <button
                  onClick={() => scrollTo("#courses")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0B9B8B] text-white font-semibold text-sm rounded-xl hover:bg-[#09897A] active:scale-[0.98] transition-all duration-200 shadow-md shadow-[#0B9B8B]/25"
                >
                  Explore Courses
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollTo("#admissions")}
                  className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0D1F3C] text-[#0D1F3C] font-semibold text-sm rounded-xl hover:bg-[#0D1F3C] hover:text-white active:scale-[0.98] transition-all duration-200"
                >
                  Apply for Admission
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-8 sm:gap-12 pt-8 border-t border-[#0D1F3C]/8">
                {[
                  { value: "25+", label: "Years of Excellence" },
                  { value: "5,000+", label: "Active Students" },
                  { value: "280+", label: "Expert Faculty" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-0">
                    <div className="text-[2rem] font-bold text-[#0D1F3C] font-serif leading-none">{stat.value}</div>
                    <div className="text-[12.5px] text-[#6B7280] mt-1.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image column */}
            <div className="relative">
              {/* Decorative blocks */}
              <div className="absolute -top-5 -right-5 w-28 h-28 bg-[#E6F5F3] rounded-2xl -z-10" />
              <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-[#0D1F3C]/6 rounded-2xl -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(13,31,60,0.18)] bg-[#0D1F3C]">
                <img
                  src="https://images.unsplash.com/photo-1758270704522-f091f8064a81?w=900&h=680&fit=crop&auto=format"
                  alt="Students engaged in a lecture at Apex Medical College"
                  className="w-full h-[520px] object-cover opacity-92 mix-blend-luminosity"
                  style={{ mixBlendMode: "normal" }}
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/50 via-transparent to-transparent" />

                {/* Floating credential card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-xl p-4 flex items-center gap-4 shadow-xl">
                  <div className="w-12 h-12 bg-[#E6F5F3] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#0B9B8B]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0D1F3C] text-sm leading-snug">
                      Ranked #1 Medical College
                    </div>
                    <div className="text-xs text-[#6B7280] mt-0.5">
                      National Healthcare Education Rankings 2024
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="py-24 lg:py-32 bg-[#F8FAFB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl bg-[#E6F5F3]">
                <img
                  src="https://images.unsplash.com/photo-1758270705482-cee87ea98738?w=750&h=560&fit=crop&auto=format"
                  alt="Apex Medical College students in discussion during a seminar"
                  className="w-full h-[440px] object-cover"
                />
              </div>
              {/* Stat badge */}
              <div className="absolute -bottom-7 -right-4 lg:-right-7 bg-[#0D1F3C] text-white rounded-2xl px-6 py-5 shadow-2xl">
                <div className="font-serif text-[2.25rem] font-bold leading-none">98%</div>
                <div className="text-[#0B9B8B] text-xs font-semibold mt-1.5 leading-tight">
                  Graduate
                  <br />
                  Employment Rate
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2 lg:pl-4">
              <div className="text-[#0B9B8B] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                About the College
              </div>
              <h2 className="font-serif text-4xl lg:text-[2.75rem] font-bold text-[#0D1F3C] leading-[1.15] mb-6">
                Excellence in
                <br />
                Medical Education
              </h2>
              <p className="text-[#4A5568] leading-[1.8] mb-5 text-[15.5px]">
                Founded in 1999, Apex Medical College has spent over two decades cultivating a tradition of academic rigor, compassionate patient care, and groundbreaking medical research. Our campus houses one of the region's most advanced teaching hospitals, giving students unmatched clinical exposure from their very first semester.
              </p>
              <p className="text-[#4A5568] leading-[1.8] mb-8 text-[15.5px]">
                We believe great medicine begins with great education. Our curriculum integrates basic sciences, clinical reasoning, and humanistic values — preparing graduates who are not only technically excellent but deeply empathetic practitioners ready to serve diverse communities around the world.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "NMC-Accredited MBBS, BDS & Postgraduate Programs",
                  "WHO-Listed Institution with a Global Alumni Network of 18,000+",
                  "1,200-bed Affiliated Teaching Hospital on campus",
                  "Active research partnerships with 14 international universities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#E6F5F3] flex items-center justify-center flex-shrink-0 mt-[2px]">
                      <ChevronRight className="w-3 h-3 text-[#0B9B8B]" />
                    </span>
                    <span className="text-[14px] text-[#4A5568] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("#courses")}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B9B8B] hover:text-[#0D1F3C] transition-colors group"
              >
                View all programs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSES ───────────────────────────────────────────── */}
      <section id="courses" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-[#0B9B8B] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
              Academic Programs
            </div>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] font-bold text-[#0D1F3C] mb-4">
              Explore Our Programs
            </h2>
            <p className="text-[#6B7280] text-[15.5px] max-w-[500px] mx-auto leading-[1.7]">
              Designed in collaboration with leading healthcare institutions, our programs meet the highest global standards of medical education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {COURSES.map((course) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="group bg-white border border-[rgba(13,31,60,0.08)] rounded-2xl p-8 shadow-[0_2px_16px_rgba(13,31,60,0.06)] hover:shadow-[0_16px_48px_rgba(13,31,60,0.14)] transition-all duration-350 hover:-translate-y-1.5 flex flex-col"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                      course.accent
                        ? "bg-[#E6F5F3] group-hover:bg-[#0B9B8B]"
                        : "bg-[#EEF2F7] group-hover:bg-[#0D1F3C]"
                    }`}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        course.accent
                          ? "text-[#0B9B8B] group-hover:text-white"
                          : "text-[#0D1F3C] group-hover:text-white"
                      }`}
                    />
                  </div>

                  <div className="font-serif text-[1.75rem] font-bold text-[#0D1F3C] mb-1 leading-none">
                    {course.title}
                  </div>
                  <div className="text-[13px] text-[#0B9B8B] font-semibold mb-4 leading-snug">
                    {course.fullName}
                  </div>
                  <p className="text-[#6B7280] text-[14px] leading-[1.75] flex-1 mb-6">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-[rgba(13,31,60,0.07)]">
                    <div className="flex items-center gap-1.5 text-[13px] text-[#4A5568]">
                      <Clock className="w-3.5 h-3.5 text-[#0B9B8B]" />
                      <span className="font-semibold text-[#0D1F3C]">{course.duration}</span>
                    </div>
                    <button className="inline-flex items-center gap-1 text-[13px] font-semibold text-[#0B9B8B] hover:text-[#0D1F3C] transition-colors group/btn">
                      Learn More
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ────────────────────────────────────────── */}
      <section className="py-24 lg:py-32 bg-[#0D1F3C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-[#0B9B8B] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
              Our Strengths
            </div>
            <h2 className="font-serif text-4xl lg:text-[2.75rem] font-bold text-white mb-4">
              Why Choose Apex Medical College
            </h2>
            <p className="text-[#94A3B8] text-[15.5px] max-w-[500px] mx-auto leading-[1.7]">
              We combine academic tradition with forward-thinking clinical practice to produce healthcare professionals the world needs most.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-7 hover:bg-white/[0.08] hover:border-[#0B9B8B]/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-[#0B9B8B]/15 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0B9B8B]/30 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#0B9B8B]" />
                  </div>
                  <h3 className="font-serif text-[1.1rem] font-semibold text-white mb-3 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#94A3B8] text-[13.5px] leading-[1.75]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAMPUS & FACILITIES ───────────────────────────────── */}
      <section id="campus" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 xl:gap-20 items-start">

            {/* Sticky text */}
            <div className="lg:sticky lg:top-28">
              <div className="text-[#0B9B8B] text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
                Campus Life
              </div>
              <h2 className="font-serif text-4xl lg:text-[2.75rem] font-bold text-[#0D1F3C] mb-6 leading-[1.15]">
                Learn, Practice
                <br />
                and Grow
              </h2>
              <p className="text-[#4A5568] leading-[1.8] text-[15.5px] mb-5">
                Our 45-acre campus is a living ecosystem for medical education — designed to inspire curiosity, enable precision, and foster a close-knit community among the next generation of healthcare leaders.
              </p>
              <p className="text-[#4A5568] leading-[1.8] text-[15.5px] mb-10">
                From simulation suites equipped with high-fidelity patient mannequins to a fully operational 1,200-bed teaching hospital, every facility at Apex mirrors real-world clinical environments so students are ready from day one.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "45", label: "Acre Campus" },
                  { value: "12", label: "Research Centers" },
                  { value: "1,200", label: "Hospital Beds" },
                  { value: "22", label: "PG Specialties" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#F8FAFB] border border-[rgba(13,31,60,0.07)] rounded-xl p-5"
                  >
                    <div className="font-serif text-[1.75rem] font-bold text-[#0D1F3C] leading-none">
                      {stat.value}
                    </div>
                    <div className="text-[12px] text-[#6B7280] mt-1.5 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4">
              {CAMPUS_IMAGES.map((img) => (
                <div
                  key={img.label}
                  className="group relative rounded-xl overflow-hidden bg-[#E6F5F3] aspect-square shadow-sm"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F3C]/70 via-[#0D1F3C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-[13px] font-semibold drop-shadow-sm">
                      {img.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ADMISSIONS CTA ────────────────────────────────────── */}
      <section id="admissions" className="py-24 lg:py-32 bg-[#0B9B8B]">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-[11px] font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full mb-8 border border-white/30">
            <GraduationCap className="w-3.5 h-3.5" />
            Admissions Open — 2025–26 Academic Year
          </div>

          <h2 className="font-serif text-[2.75rem] lg:text-[3.5rem] font-bold text-white mb-6 leading-[1.1]">
            Begin Your Journey
            <br />
            in Medicine
          </h2>

          <p className="text-white/80 text-[1.05rem] leading-[1.8] mb-10 max-w-[580px] mx-auto">
            Take the first step toward a rewarding career in healthcare. Explore our programs and start your admission journey today. Our admissions team is ready to guide you every step of the way.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-14">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0D1F3C] font-bold text-sm rounded-xl hover:bg-gray-50 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-black/15">
              View Admission Process
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#0D1F3C] text-white font-bold text-sm rounded-xl hover:bg-[#0D1F3C]/85 active:scale-[0.98] transition-all duration-200">
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Key admission details */}
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Application Deadline", value: "31 March 2025" },
              { label: "Entrance Examination", value: "NEET-UG / NEET-PG" },
              { label: "Session Commencement", value: "August 2025" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/15 backdrop-blur-sm rounded-xl p-5 border border-white/25 text-left"
              >
                <div className="text-[11.5px] text-white/65 font-medium mb-1.5 uppercase tracking-wide">
                  {item.label}
                </div>
                <div className="font-serif font-bold text-white text-[1.15rem]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT & FOOTER ──────────────────────────────────── */}
      <footer id="contact" className="bg-[#0A1628] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10 pb-12 border-b border-white/[0.08]">

            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0B9B8B] flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div className="leading-tight">
                  <div className="font-serif font-bold text-white text-[15px] leading-none">
                    Apex Medical College
                  </div>
                  <div className="text-[#0B9B8B] text-[10px] font-semibold mt-1">Est. 1999</div>
                </div>
              </div>
              <p className="text-[#94A3B8] text-[13.5px] leading-[1.75] mb-6">
                Committed to producing compassionate, competent, and globally competitive healthcare professionals since 1999.
              </p>

              {/* Social icons */}
              <div className="flex gap-2.5">
                {[
                  { Icon: Facebook, label: "Facebook" },
                  { Icon: Twitter, label: "Twitter" },
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Linkedin, label: "LinkedIn" },
                  { Icon: Youtube, label: "YouTube" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={`Apex Medical College on ${label}`}
                    className="w-9 h-9 bg-white/8 rounded-lg flex items-center justify-center hover:bg-[#0B9B8B] transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mb-5">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_QUICK_LINKS.map((link) => (
                  <li key={link}>
                    <button className="text-[#94A3B8] hover:text-[#0B9B8B] text-[13.5px] transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Admissions links */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mb-5">
                Admissions
              </h4>
              <ul className="space-y-2.5">
                {FOOTER_ADMISSIONS_LINKS.map((link) => (
                  <li key={link}>
                    <button className="text-[#94A3B8] hover:text-[#0B9B8B] text-[13.5px] transition-colors duration-200">
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/60 mb-5">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-[#94A3B8]">
                  <MapPin className="w-4 h-4 text-[#0B9B8B] flex-shrink-0 mt-[2px]" />
                  <span className="text-[13.5px] leading-[1.65]">
                    Apex Medical College Road, Sector 14,
                    <br />
                    Navi Mumbai, Maharashtra 400 706, India
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[#94A3B8]">
                  <Phone className="w-4 h-4 text-[#0B9B8B] flex-shrink-0" />
                  <span className="text-[13.5px]">+91 22 6890 4400</span>
                </div>
                <div className="flex items-center gap-3 text-[#94A3B8]">
                  <Mail className="w-4 h-4 text-[#0B9B8B] flex-shrink-0" />
                  <span className="text-[13.5px] break-all">
                    admissions@apexmedicalcollege.edu.in
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#4A5568] text-[12.5px]">
              &copy; 2025 Apex Medical College. All rights reserved.
            </p>
            <div className="flex gap-5">
              {["Privacy Policy", "Terms of Use", "Sitemap"].map((link) => (
                <button
                  key={link}
                  className="text-[#4A5568] hover:text-[#94A3B8] text-[12.5px] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
