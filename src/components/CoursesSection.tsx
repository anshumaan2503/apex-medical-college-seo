import { Stethoscope, Heart, Microscope, Clock, ArrowRight } from "lucide-react";

const COURSES = [
  {
    icon: Stethoscope,
    title: "MBBS",
    fullName: "Bachelor of Medicine & Bachelor of Surgery",
    description:
      "Our flagship MBBS program delivers rigorous biomedical science, clinical reasoning, and hands-on hospital exposure across five and a half comprehensive years of training.",
    duration: "5.5 Years",
    accentStyle: "accent",
  },
  {
    icon: Heart,
    title: "BDS",
    fullName: "Bachelor of Dental Surgery",
    description:
      "A comprehensive dental surgery program combining oral sciences, prosthodontics, orthodontics, and supervised clinical practice in our state-of-the-art dental school.",
    duration: "5 Years",
    accentStyle: "navy",
  },
  {
    icon: Microscope,
    title: "MD / MS",
    fullName: "Postgraduate Medical Programs",
    description:
      "Advanced postgraduate specializations across 22 disciplines, designed for practicing physicians seeking clinical mastery, research depth, and leadership in their specialty.",
    duration: "3 Years",
    accentStyle: "accent",
  },
];

export default function CoursesSection() {
  return (
    <section id="courses" className="section-padding courses-section">
      <div className="container">
        <div className="text-center">
          <div className="section-tag section-tag-dark">Academic Programs</div>
          <h2 className="section-heading-large">Explore Our Programs</h2>
          <p className="section-subtitle section-subtitle-center">
            Designed in collaboration with leading healthcare institutions, our programs meet the highest global standards of medical education.
          </p>
        </div>

        <div className="courses-grid">
          {COURSES.map((course) => {
            const Icon = course.icon;
            return (
              <article key={course.title} className="course-card">
                <div className={`course-icon-wrapper ${course.accentStyle}`}>
                  <Icon className="course-icon" aria-hidden="true" />
                </div>

                <h3 className="course-title">{course.title}</h3>
                <div className="course-fullname">{course.fullName}</div>
                <p className="course-description">{course.description}</p>

                <div className="course-footer">
                  <div className="course-duration">
                    <Clock size={14} color="#087B6F" aria-hidden="true" />
                    <span className="course-duration-value">{course.duration}</span>
                  </div>
                  <a href="#admissions" className="course-learn-more">
                    Learn More
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
