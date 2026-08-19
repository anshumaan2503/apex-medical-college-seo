const CAMPUS_STATS = [
  { value: "45", label: "Acre Campus" },
  { value: "12", label: "Research Centers" },
  { value: "1,200", label: "Hospital Beds" },
  { value: "22", label: "PG Specialties" },
];

const CAMPUS_IMAGES = [
  {
    url: "/images/campus-1.jpg",
    alt: "Students attending a lecture at Apex Medical College",
    label: "Modern Lecture Halls",
  },
  {
    url: "/images/campus-2.jpg",
    alt: "Medical laboratory with microscopes and analytical equipment",
    label: "Research Laboratories",
  },
  {
    url: "/images/campus-3.jpg",
    alt: "University library with tall windows and bookshelves",
    label: "Academic Library",
  },
  {
    url: "/images/campus-4.jpg",
    alt: "Doctor consulting with a patient in clinical training center",
    label: "Clinical Training Center",
  },
];

export default function CampusSection() {
  return (
    <section id="campus" className="section-padding campus-section">
      <div className="container">
        <div className="campus-grid">
          {/* Sticky Left Column */}
          <div className="sticky-campus-info">
            <div className="section-tag section-tag-dark">Campus Life</div>
            <h2 className="section-heading-large">
              Learn, Practice
              <br />
              and Grow
            </h2>
            <p className="campus-paragraph">
              Our 45-acre campus is a living ecosystem for medical education — designed to inspire curiosity, enable precision, and foster a close-knit community among the next generation of healthcare leaders.
            </p>
            <p className="campus-paragraph">
              From simulation suites equipped with high-fidelity patient mannequins to a fully operational 1,200-bed teaching hospital, every facility at Apex mirrors real-world clinical environments so students are ready from day one.
            </p>

            <div className="campus-stats-grid">
              {CAMPUS_STATS.map((stat) => (
                <div key={stat.label} className="campus-stat-card">
                  <div className="campus-stat-val">{stat.value}</div>
                  <div className="campus-stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Gallery */}
          <div className="campus-image-gallery">
            {CAMPUS_IMAGES.map((img) => (
              <div key={img.label} className="campus-img-item">
                <img src={img.url} alt={img.alt} className="campus-img" />
                <div className="campus-img-overlay" />
                <div className="campus-img-label">{img.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
