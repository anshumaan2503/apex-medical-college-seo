"use client";

import Image from "next/image";
import { ChevronRight, ArrowRight } from "lucide-react";

const ABOUT_HIGHLIGHTS = [
  "NMC-Accredited MBBS, BDS & Postgraduate Programs",
  "WHO-Listed Institution with a Global Alumni Network of 18,000+",
  "1,200-bed Affiliated Teaching Hospital on campus",
  "Active research partnerships with 14 international universities",
];

export default function AboutSection() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Image Frame with Floating Badge */}
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <Image
                src="/images/about.jpg"
                alt="Apex Medical College students in seminar discussion"
                width={800}
                height={600}
                className="about-image"
              />
            </div>
            <div className="about-stat-badge">
              <div className="about-stat-num">98%</div>
              <div className="about-stat-lbl">
                Graduate<br />Employment Rate
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="section-tag section-tag-dark">About the College</div>
            <h2 className="section-heading-large">
              Excellence in
              <br />
              Medical Education
            </h2>
            <p className="about-paragraph">
              Founded in 1999, Apex Medical College has spent over two decades cultivating a tradition of academic rigor, compassionate patient care, and groundbreaking medical research. Our campus houses one of the region's most advanced teaching hospitals, giving students unmatched clinical exposure from their very first semester.
            </p>
            <p className="about-paragraph">
              We believe great medicine begins with great education. Our curriculum integrates basic sciences, clinical reasoning, and humanistic values — preparing graduates who are not only technically excellent but deeply empathetic practitioners ready to serve diverse communities around the world.
            </p>

            <ul className="about-checklist">
              {ABOUT_HIGHLIGHTS.map((item) => (
                <li key={item} className="about-check-item">
                  <span className="check-icon-box">
                    <ChevronRight size={12} color="#0B9B8B" />
                  </span>
                  <span className="check-text">{item}</span>
                </li>
              ))}
            </ul>

            <button onClick={() => scrollTo("#courses")} className="about-link-btn">
              View all programs
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
