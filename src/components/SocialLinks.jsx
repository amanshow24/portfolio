import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const socialLinks = [
  ["LinkedIn", "https://linkedin.com/in/aman-kumar-show", FaLinkedinIn],
  ["GitHub", "https://github.com/amanshow24", FaGithub],
  ["LeetCode", "https://leetcode.com/u/amanshow24/", SiLeetcode],
  ["Codolio", "https://codolio.com/profile/amanshow24", null],
  ["X / Twitter", "https://twitter.com/amanshow24", FaXTwitter],
];

export default function SocialLinks({ showLabels = false }) {
  return (
    <nav className="social-links" aria-label="Social profiles">
      {socialLinks.map(([label, href, Icon]) => (
        <a
          key={label}
          className={`social-link${showLabels ? " social-link-labeled" : ""}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          {Icon ? <Icon aria-hidden="true" focusable="false" /> : <span aria-hidden="true">C</span>}
          {showLabels && <span className="social-link-name">{label}</span>}
        </a>
      ))}
    </nav>
  );
}
