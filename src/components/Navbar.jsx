import { useState } from "react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Work", "#work"],
  ["Education", "#education"],
  ["Certifications", "#certifications"],
  ["Contact", "#contact"],
];

export default function Navbar({ theme, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-nav sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className="nav-inner mx-auto flex min-h-18 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          onClick={closeMenu}
          className="brand-mark font-display text-lg font-extrabold tracking-tight text-primary"
        >
          Aman<span className="text-accent">.</span>dev
        </a>
        <div className="flex items-center gap-3 sm:gap-6">
          <ul
            id="nav-links"
            className={`${menuOpen ? "flex" : "hidden"} nav-links absolute left-0 right-0 top-full flex-col gap-1 p-4 sm:static sm:flex sm:flex-row sm:items-center sm:gap-1 sm:p-1`}
          >
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="nav-link block rounded-lg px-3 py-2 text-sm sm:px-2 sm:py-2 lg:px-4"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onThemeToggle}
            className="icon-button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3.5" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 15.2A8.5 8.5 0 0 1 8.8 3.5 8.5 8.5 0 1 0 20.5 15.2Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="nav-menu-button rounded-full border border-line px-4 py-2 text-sm text-primary sm:hidden"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>
    </header>
  );
}
