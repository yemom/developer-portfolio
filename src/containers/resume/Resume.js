import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Resume.scss";
import {greeting, resumeSection, techStack, skillsSection, educationInfo, workExperiences} from "../../portfolio";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";

const statsData = [
  {label: "Technologies", value: skillsSection.softwareSkills.length + "+", icon: "fas fa-code"},
  {label: "Projects", value: "5+", icon: "fas fa-project-diagram"},
  {label: "Certificates", value: "6", icon: "fas fa-certificate"},
  {label: "Experience", value: workExperiences.experience.length + "+", icon: "fas fa-briefcase"},
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.1, delayChildren: 0.1},
  },
};

const itemVariants = {
  hidden: {opacity: 0, y: 25},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};

export default function Resume() {
  const {isDark} = useContext(StyleContext);

  if (!resumeSection.display) return null;

  return (
    <section
      className={`resume-section ${isDark ? "resume-section--dark" : ""}`}
      id="resume"
    >
      <div className="resume-section__container">
        <SectionTitle
          title={resumeSection.title}
          subtitle={resumeSection.subtitle}
          badge="CV"
          align="center"
        />

        {/* ---- Stats Bar ---- */}
        <motion.div
          className="resume-section__stats"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.2}}
        >
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="resume-stat"
              variants={itemVariants}
            >
              <div className="resume-stat__icon">
                <i className={stat.icon} aria-hidden="true" />
              </div>
              <span className="resume-stat__value">{stat.value}</span>
              <span className="resume-stat__label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Resume Card ---- */}
        <motion.div
          className="resume-section__card"
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.2}}
        >
          {/* Left: Summary */}
          <div className="resume-section__summary">
            <h3 className="resume-section__name">{greeting.username}</h3>
            <p className="resume-section__role">Full-Stack Software Engineer</p>

            {/* Education */}
            {educationInfo.display && educationInfo.schools.length > 0 && (
              <div className="resume-section__detail">
                <div className="resume-section__detail-icon">
                  <i className="fas fa-graduation-cap" aria-hidden="true" />
                </div>
                <div>
                  <strong>{educationInfo.schools[0].subHeader}</strong>
                  <p>{educationInfo.schools[0].schoolName}</p>
                </div>
              </div>
            )}

            {/* Experience */}
            {workExperiences.display && workExperiences.experience.length > 0 && (
              <div className="resume-section__detail">
                <div className="resume-section__detail-icon">
                  <i className="fas fa-briefcase" aria-hidden="true" />
                </div>
                <div>
                  <strong>{workExperiences.experience[0].role}</strong>
                  <p>{workExperiences.experience[0].company}</p>
                </div>
              </div>
            )}

            {/* Top Skills */}
            <div className="resume-section__skills">
              <h4>Key Skills</h4>
              <div className="resume-section__skill-tags">
                {techStack.experience.map((exp, i) => (
                  <span key={i} className="resume-section__skill-tag">
                    {exp.Stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: PDF Preview Placeholder + CTAs */}
          <div className="resume-section__preview">
            <div className="resume-section__pdf-placeholder">
              <div className="resume-section__pdf-icon">
                <i className="far fa-file-pdf" aria-hidden="true" />
              </div>
              <p className="resume-section__pdf-text">
                {greeting.username}'s Resume
              </p>
              <p className="resume-section__pdf-subtext">
                PDF Document • Download or View
              </p>
            </div>

            <div className="resume-section__actions">
              <Button
                text="View Resume"
                href={greeting.resumeLink}
                variant="primary"
                icon="fas fa-eye"
                newTab={true}
                size="md"
              />
              <Button
                text="Download CV"
                href={greeting.resumeLink}
                variant="outline"
                icon="fas fa-download"
                download="Esrom_Basazinew_Resume.pdf"
                size="md"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
