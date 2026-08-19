import Image from "next/image";
import { Star, ArrowRight, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Text Content */}
          <div>
            <div className="section-tag section-tag-pill">
              <Star size={12} fill="#087B6F" color="#087B6F" aria-hidden="true" />
              <span>NMC Accredited &nbsp;·&nbsp; WHO Listed Institution</span>
            </div>

            <h1 className="hero-title">
              Shaping
              <br />
              <span className="hero-title-highlight">Tomorrow's</span>
              <br />
              Healthcare Leaders
            </h1>

            <p className="hero-description">
              Apex Medical College provides world-class medical education,
              advanced clinical training, and a strong foundation for the next
              generation of healthcare professionals.
            </p>

            <div className="hero-actions">
              <a href="#courses" className="btn-primary">
                Explore Courses
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a href="#admissions" className="btn-secondary-outline">
                Apply for Admission
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="trust-stats-bar">
              <div className="stat-item">
                <div className="stat-value">25+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5,000+</div>
                <div className="stat-label">Active Students</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">280+</div>
                <div className="stat-label">Expert Faculty</div>
              </div>
            </div>
          </div>

          {/* Right Image Frame & Floating Card */}
          <div className="hero-image-wrapper">
            <div className="hero-deco-bg-1" />
            <div className="hero-deco-bg-2" />

            <div className="hero-image-card">
              <Image
                src="/images/hero.jpg"
                alt="Medical students attending a clinical lecture at Apex Medical College"
                width={800}
                height={600}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="hero-image"
              />

              {/* Floating Credential Card */}
              <div className="floating-rank-card">
                <div className="rank-badge-icon">
                  <Award size={24} color="#0B9B8B" aria-hidden="true" />
                </div>
                <div>
                  <div className="rank-text-title">
                    Ranked #1 Medical College
                  </div>
                  <div className="rank-text-sub">
                    National Healthcare Education Rankings 2024
                  </div>
                </div>
                <div className="stars-flex" aria-label="5 out of 5 stars rating">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
