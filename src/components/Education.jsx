const education = [
  {
    title: "Secondary Education (Class 10)",
    meta: "2021",
    description: "Baradongal Ramanath Institution · 88.42%",
  },
  {
    title: "Higher Secondary Education (Class 12)",
    meta: "2023",
    description: "Baradongal Ramanath Institution · 84%",
  },
  {
    title: "Bachelor of Technology, Computer Science and Engineering",
    meta: "Aug 2023 – June 2027",
    description: "RCC Institute of Information Technology (MAKAUT) · Kolkata, India · CGPA 8.03/10 (up to 6th semester)",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-wrap pt-4 sm:pt-8" aria-labelledby="education-title">
      <div className="mx-auto max-w-6xl">
        <div className="education-heading">
          <p>Education</p>
          <h2 id="education-title">The Journey</h2>
        </div>
        <ol className="education-timeline">
          {education.map((item, index) => (
            <li
              key={item.title}
              className={`education-entry ${index % 2 === 0 ? "education-entry-right" : "education-entry-left"}`}
            >
              <p className="education-date">{item.meta}</p>
              <span className="education-point" aria-hidden="true" />
              <div className="education-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
