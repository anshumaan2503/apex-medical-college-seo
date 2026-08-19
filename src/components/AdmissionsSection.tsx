import { GraduationCap, ChevronRight, ArrowRight } from "lucide-react";

const ADMISSION_DETAILS = [
  { label: "Application Deadline", value: "31 March 2025" },
  { label: "Entrance Examination", value: "NEET-UG / NEET-PG" },
  { label: "Session Commencement", value: "August 2025" },
];

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="admissions-section">
      <div className="container">
        <div className="admissions-content-wrapper">
          <div
            className="section-tag section-tag-pill"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "#FFFFFF",
              borderColor: "rgba(255, 255, 255, 0.3)",
              marginBottom: "32px",
            }}
          >
            <GraduationCap size={14} color="#FFFFFF" aria-hidden="true" />
            <span>Admissions Open — 2025–26 Academic Year</span>
          </div>

          <h2 className="admissions-heading">
            Begin Your Journey
            <br />
            in Medicine
          </h2>

          <p className="admissions-description">
            Take the first step toward a rewarding career in healthcare. Explore our programs and start your admission journey today. Our admissions team is ready to guide you every step of the way.
          </p>

          <div className="admissions-actions">
            <a href="#contact" className="btn-white">
              View Admission Process
              <ChevronRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-dark-navy">
              Apply Now
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="admissions-details-grid">
            {ADMISSION_DETAILS.map((item) => (
              <div key={item.label} className="admission-detail-card">
                <div className="admission-detail-lbl">{item.label}</div>
                <div className="admission-detail-val">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
