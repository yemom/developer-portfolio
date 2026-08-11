import React, {useState, useEffect, useContext, useCallback} from "react";
import {motion, AnimatePresence} from "framer-motion";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  achievementSection,
  educationInfo,
} from "../../portfolio";

/* ---- Nav link definitions ---- */
const buildNavLinks = ({viewSkills, viewExperience, viewProjects, viewAchievement, viewEducation}) =>
  [
    {label: "About",       href: "#greeting"},
    viewSkills      && {label: "Skills",      href: "#skills"},
    viewEducation   && {label: "Education",   href: "#education"},
    viewExperience  && {label: "Experience",  href: "#experience"},
    viewProjects    && {label: "Projects",    href: "#projects"},
    viewAchievement && {label: "Learning",    href: "#achievements"},
    {label: "Certificates", href: "#certificates"},
    {label: "Contact",    href: "#contact"},
  ].filter(Boolean);

/* ---- Section IDs to watch for active state ---- */
const SECTION_IDS = [
  "greeting", "skills", "education", "experience",
  "projects", "achievements", "certificates", "contact",
];

function Header() {
  const {isDark} = useContext(StyleContext);

  // Mobile menu open/close
  const [menuOpen, setMenuOpen]       = useState(false);
  // Has user scrolled past hero?
  const [scrolled, setScrolled]       = useState(false);
  // Which section is currently in view
  const [activeSection, setActiveSection] = useState("greeting");

  const viewSkills      = skillsSection.display;
  const viewExperience  = workExperiences.display;
  const viewProjects    = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewEducation   = educationInfo.display;

  const navLinks = buildNavLinks({
    viewSkills, viewExperience, viewProjects, viewAchievement, viewEducation,
  });

  /* ---- Scroll shadow handler ---- */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---- Active section via IntersectionObserver ---- */
  useEffect(() => {
    const observers = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        {rootMargin: "-40% 0px -50% 0px", threshold: 0}
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* ---- Close menu on Escape key ---- */
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* ---- Lock body scroll when mobile menu is open ---- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* ---- Smooth scroll + close mobile menu ---- */
  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({top, behavior: "smooth"});
    }
  }, []);

  /* ---- Logo click → scroll to top ---- */
  const handleLogoClick = e => {
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
    setMenuOpen(false);
  };

  /* ---- Animation variants ---- */
  const mobileMenuVariants = {
    hidden:  {opacity: 0, x: "100%"},
    visible: {opacity: 1, x: 0, transition: {type: "tween", duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94]}},
    exit:    {opacity: 0, x: "100%", transition: {type: "tween", duration: 0.25}},
  };

  const menuItemVariants = {
    hidden:  {opacity: 0, x: 30},
    visible: i => ({
      opacity: 1, x: 0,
      transition: {delay: i * 0.06 + 0.1, duration: 0.3},
    }),
  };

  return (
    <>
      {/* ---- Navbar ---- */}
      <motion.header
        className={[
          "navbar",
          scrolled  ? "navbar--scrolled" : "",
          isDark    ? "navbar--dark"      : "navbar--light",
          menuOpen  ? "navbar--menu-open" : "",
        ].filter(Boolean).join(" ")}
        initial={{y: -80, opacity: 0}}
        animate={{y: 0,   opacity: 1}}
        transition={{duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]}}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar__inner">

          {/* ---- Logo ---- */}
          <a
            href="/"
            className="navbar__logo"
            onClick={handleLogoClick}
            aria-label="Go to top"
          >
            <span className="navbar__logo-bracket" aria-hidden="true">&lt;</span>
            <span className="navbar__logo-name">{greeting.username}</span>
            <span className="navbar__logo-bracket" aria-hidden="true">/&gt;</span>
          </a>

          {/* ---- Desktop Nav Links ---- */}
          <nav className="navbar__links" aria-label="Desktop navigation">
            <ul>
              {navLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={[
                      "navbar__link",
                      activeSection === link.href.replace("#", "") ? "navbar__link--active" : "",
                    ].filter(Boolean).join(" ")}
                    onClick={e => handleNavClick(e, link.href)}
                    aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                  >
                    {link.label}
                    <span className="navbar__link-underline" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ---- Right Side Actions ---- */}
          <div className="navbar__actions">
            <ToggleSwitch />

            {/* ---- Mobile Hamburger Button ---- */}
            <button
              className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""}`}
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
              <span className="navbar__hamburger-line" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ---- Mobile Menu Overlay ---- */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="navbar__backdrop"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-in panel */}
            <motion.div
              id="mobile-menu"
              className={`navbar__mobile-menu ${isDark ? "navbar__mobile-menu--dark" : ""}`}
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-label="Mobile navigation menu"
              aria-modal="true"
            >
              {/* Close button inside panel */}
              <button
                className="navbar__mobile-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <i className="fas fa-times" aria-hidden="true" />
              </button>

              {/* Mobile logo */}
              <div className="navbar__mobile-logo" aria-hidden="true">
                <span className="navbar__logo-bracket">&lt;</span>
                <span className="navbar__logo-name">{greeting.username}</span>
                <span className="navbar__logo-bracket">/&gt;</span>
              </div>

              {/* Mobile nav links */}
              <nav aria-label="Mobile navigation">
                <ul className="navbar__mobile-links">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      custom={i}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <a
                        href={link.href}
                        className={[
                          "navbar__mobile-link",
                          activeSection === link.href.replace("#", "") ? "navbar__mobile-link--active" : "",
                        ].filter(Boolean).join(" ")}
                        onClick={e => handleNavClick(e, link.href)}
                        aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Mobile CTA */}
              <div className="navbar__mobile-cta">
                <a
                  href="#contact"
                  className="btn btn-primary btn-md"
                  onClick={e => handleNavClick(e, "#contact")}
                >
                  <i className="fas fa-paper-plane" aria-hidden="true" style={{marginRight: "8px"}} />
                  Hire Me
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
