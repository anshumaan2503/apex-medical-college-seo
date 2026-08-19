import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const FOOTER_QUICK_LINKS = [
  { label: "About the College", href: "#about" },
  { label: "MBBS Program", href: "#courses" },
  { label: "BDS Program", href: "#courses" },
  { label: "Postgraduate Programs", href: "#courses" },
  { label: "Research Centers", href: "#campus" },
  { label: "Alumni Network", href: "#about" },
];

const FOOTER_ADMISSIONS_LINKS = [
  { label: "How to Apply", href: "#admissions" },
  { label: "Eligibility Criteria", href: "#admissions" },
  { label: "Entrance Examinations", href: "#admissions" },
  { label: "Fee Structure", href: "#admissions" },
  { label: "Scholarships", href: "#admissions" },
  { label: "International Students", href: "#admissions" },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

const SOCIAL_NETWORKS = [
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: TwitterIcon, label: "Twitter" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: LinkedinIcon, label: "LinkedIn" },
  { Icon: YoutubeIcon, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Column */}
          <div>
            <a href="#home" className="brand-logo-btn" style={{ marginBottom: "24px" }} aria-label="Apex Medical College Home">
              <div
                className="brand-icon-wrapper"
                style={{ backgroundColor: "#0B9B8B" }}
              >
                <GraduationCap className="brand-icon" style={{ color: "#FFFFFF" }} aria-hidden="true" />
              </div>
              <div>
                <span className="brand-name" style={{ color: "#FFFFFF", fontSize: "15px" }}>
                  Apex Medical College
                </span>
                <span className="brand-tagline">Est. 1999</span>
              </div>
            </a>

            <p className="footer-bio">
              Committed to producing compassionate, competent, and globally competitive healthcare professionals since 1999.
            </p>

            <div className="social-links">
              {SOCIAL_NETWORKS.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={`Follow Apex Medical College on ${label}`}
                  className="social-icon-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-links-list">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label} className="footer-link-item">
                  <a
                    href={link.href}
                    className="footer-link-btn"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Column */}
          <div>
            <h3 className="footer-column-title">Admissions</h3>
            <ul className="footer-links-list">
              {FOOTER_ADMISSIONS_LINKS.map((link) => (
                <li key={link.label} className="footer-link-item">
                  <a
                    href={link.href}
                    className="footer-link-btn"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="footer-column-title">Contact Us</h3>
            <div className="contact-info-list">
              <div className="contact-item">
                <MapPin className="contact-icon" aria-hidden="true" />
                <span>
                  Apex Medical College Road, Sector 14,
                  <br />
                  Navi Mumbai, Maharashtra 400 706, India
                </span>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" aria-hidden="true" />
                <span>+91 22 6890 4400</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" aria-hidden="true" />
                <span>admissions@apexmedicalcollege.edu.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2025 Apex Medical College. All rights reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#" className="legal-link-btn">Privacy Policy</a>
            <a href="#" className="legal-link-btn">Terms of Use</a>
            <a href="#" className="legal-link-btn">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
