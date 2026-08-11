import React, { useContext, useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Button from "../../components/button/Button";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      window.location.href = `mailto:12yemom@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Contact Request')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    }
  };

  return (
    <motion.div
      className={isDark ? "contact-section dark-mode" : "contact-section"}
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-container">
        <SectionTitle
          title="Get In Touch"
          subtitle={contactInfo.subtitle}
          badge="CONTACT"
          align="center"
        />

        <div className="contact-content">
          <div className="contact-info-col">
            <h3 className="contact-heading">Contact Information</h3>
            <p className="contact-desc">
              Feel free to reach out to me for any questions or opportunities!
            </p>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p><a href={`mailto:${contactInfo.email_address}`}>{contactInfo.email_address}</a></p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-details">
                  <h4>Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>

            <div className="social-links-container">
              <h4>Follow Me</h4>
              <SocialMedia />
            </div>
          </div>

          <div className="contact-form-col">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className={isDark ? "dark-input" : ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className={isDark ? "dark-input" : ""}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className={isDark ? "dark-input" : ""}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello, I would like to discuss..."
                  className={isDark ? "dark-input" : ""}
                ></textarea>
              </div>

              <Button type="submit" text="Send Message" icon="fas fa-paper-plane" variant="primary" />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
