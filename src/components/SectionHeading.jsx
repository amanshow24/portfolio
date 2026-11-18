export default function SectionHeading({ number, title }) {
  return (
    <div className="section-heading mb-8 flex items-baseline justify-between gap-5 sm:mb-10">
      <h2 className="section-title font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
        {title}
      </h2>
      {number && <span className="section-number font-mono text-xs text-muted">{number}</span>}
    </div>
  );
}
