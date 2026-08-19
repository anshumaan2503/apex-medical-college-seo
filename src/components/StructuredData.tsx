export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Apex Medical College",
    description:
      "A medical college offering MBBS, BDS, and postgraduate medical education with clinical training.",
    url: "https://apex-medical-college-seo.onrender.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}