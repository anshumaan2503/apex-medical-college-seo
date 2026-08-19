"use client";

import { useState, useEffect } from "react";
import { GraduationCap, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Campus", href: "#campus" },
  { label: "Admissions", href: "#admissions" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container navbar-inner" aria-label="Main Navigation">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo("#home")}
          className="brand-logo-btn"
          aria-label="Apex Medical College Home"
        >
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" />
          </div>
          <div>
            <span className="brand-name">Apex Medical College</span>
            <span className="brand-tagline">Est. 1999 · Mumbai</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop">
          <button
            onClick={() => scrollTo("#admissions")}
            className="btn-navy"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            className="mobile-nav-item"
          >
            {link.label}
          </button>
        ))}
        <div style={{ paddingTop: "12px" }}>
          <button
            onClick={() => scrollTo("#admissions")}
            className="btn-navy"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Apply Now
          </button>
        </div>
      </div>
    </header>
  );
}
