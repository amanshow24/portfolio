import SocialLinks from "./SocialLinks.jsx";

export default function Contact() {
  return (
    <section id="contact" className="contact-section px-5 py-16 sm:px-8 sm:py-24">
      <div className="contact-card mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-primary sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-2xl leading-7 text-secondary">
          Open to full-stack development, backend engineering, and AI engineering roles — reach out any time.
        </p>
        <div className="contact-actions mt-7 flex flex-wrap gap-3">
          <a href="mailto:amanshow44@gmail.com" className="button-primary">
            amanshow44@gmail.com
          </a>
        </div>
        <div className="mt-7">
          <SocialLinks showLabels />
        </div>
      </div>
    </section>
  );
}
