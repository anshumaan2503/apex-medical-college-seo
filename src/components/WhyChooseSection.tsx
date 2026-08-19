import { Users, Activity, Building2, Lightbulb } from "lucide-react";

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

export default function WhyChooseSection() {
  return (
    <section className="section-padding why-choose-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag section-tag-dark">Our Strengths</div>
          <h2 className="section-heading-large text-white">
            Why Choose Apex Medical College
          </h2>
          <p className="section-subtitle section-subtitle-center" style={{ color: "#CBD5E1" }}>
            We combine academic tradition with forward-thinking clinical practice to produce healthcare professionals the world needs most.
          </p>
        </div>

        <div className="why-grid">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="why-card">
                <div className="why-icon-box">
                  <Icon size={24} color="#0B9B8B" aria-hidden="true" />
                </div>
                <h3 className="why-title">{feature.title}</h3>
                <p className="why-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
