import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CampusSection from "@/components/CampusSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <WhyChooseSection />
        <CampusSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </>
  );
}
