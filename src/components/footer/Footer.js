import React, { useContext } from "react";
import "./Footer.scss";
import StyleContext from "../../contexts/StyleContext";
import { greeting, socialMediaLinks } from "../../portfolio";
import { motion } from "framer-motion";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.footer
      className={isDark ? "footer-section dark-mode" : "footer-section"}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="footer-gradient-bar"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="logo-text">
              <span className="logo-bracket">&lt;</span>
              {greeting.username}
              <span className="logo-bracket">/&gt;</span>
            </h2>
            <p className="footer-desc">
              Building digital products, brands, and experience.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h3>Socials</h3>
            <div className="social-icons">
              {socialMediaLinks.github && (
                <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <i className="fab fa-github"></i>
                </a>
              )}
              {socialMediaLinks.linkedin && (
                <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer" className="icon-link">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              )}
              {socialMediaLinks.gmail && (
                <a href={`mailto:${socialMediaLinks.gmail}`} className="icon-link">
                  <i className="fas fa-envelope"></i>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {greeting.username}. Built with React.
          </p>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
