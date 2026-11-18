import SectionHeading from "./SectionHeading.jsx";

const certifications = [
  {
    title: "Programming in Java",
    issuer: "NPTEL · IIT Kharagpur",
    detail: "Elite · 85% · Jul–Oct 2025",
  },
  {
    title: "Database Management System",
    issuer: "NPTEL · IIT Kharagpur",
    detail: "Elite · 64% · Jan–Mar 2026",
  },
  {
    title: "Software Engineer Intern",
    issuer: "HackerRank · Role certification",
    detail: "Completed Aug 2026",
  },
];

const leadership = [
  {
    title: "Hackathon Team Lead",
    detail: "Led teams at SIH event and two additional hackathons.",
  },
  {
    title: "Google Cloud Arcade",
    detail: "Completed the April 2025 Arcade milestone with 75+ points.",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrap pt-4 sm:pt-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Certifications & Highlights" />
        <div className="credentials-layout">
          <div>
            <h3 className="credentials-column-title">Selected certifications</h3>
            <ul className="credentials-list">
              {certifications.map(({ title, issuer, detail }) => (
                <li className="credential-entry" key={title}>
                  <h4>{title}</h4>
                  <p>{issuer}</p>
                  <p className="credential-detail">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="credentials-column-title">Highlights</h3>
            <ul className="credentials-list">
              {leadership.map(({ title, detail }) => (
                <li className="credential-entry highlight-entry" key={title}>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
