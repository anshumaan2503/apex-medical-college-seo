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
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="container navbar-inner" aria-label="Main Navigation">
        {/* Brand Logo */}
        <a
          href="#home"
          className="brand-logo-btn"
          aria-label="Apex Medical College Home"
          onClick={() => setMenuOpen(false)}
        >
          <div className="brand-icon-wrapper">
            <GraduationCap className="brand-icon" aria-hidden="true" />
          </div>
          <div>
            <span className="brand-name">Apex Medical College</span>
            <span className="brand-tagline">Est. 1999 · Mumbai</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="nav-cta-desktop">
          <a
            href="#admissions"
            className="btn-navy"
          >
            Apply Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="mobile-toggle-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${menuOpen ? "open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="mobile-nav-item"
          >
            {link.label}
          </a>
        ))}
        <div style={{ paddingTop: "12px" }}>
          <a
            href="#admissions"
            onClick={() => setMenuOpen(false)}
            className="btn-navy"
            style={{ width: "100%", justifyContent: "center" }}
          >
            Apply Now
          </a>
        </div>
      </div>
    </header>
  );
}
