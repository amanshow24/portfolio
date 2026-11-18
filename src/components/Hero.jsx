import HeroIllustration from "./HeroIllustration.jsx";
import SocialLinks from "./SocialLinks.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero-section relative px-5 sm:px-8">
      <div className="hero-layout mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="hero-copy">
          <p className="hero-location eyebrow">Kolkata, India</p>
          <h1 className="hero-title" aria-label="Hey, I'm Aman.">
            <span className="hero-title-word" aria-hidden="true">Hey, I'm</span>
            <span className="hero-title-word hero-title-name" aria-hidden="true">Aman.</span>
          </h1>
          <p className="hero-subtitle">
            CSE undergrad building full-stack products, with a growing focus on applied AI.
          </p>
          <SocialLinks />
          <div className="hero-actions">
            <a
              href="/Aman_Resume_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              Résumé
            </a>
            <a href="mailto:amanshow44@gmail.com" className="button-primary">
              Let's talk
            </a>
          </div>
        </div>

        <div className="hero-art-wrap">
          <HeroIllustration />
        </div>
      </div>
    </section>
  );
}
