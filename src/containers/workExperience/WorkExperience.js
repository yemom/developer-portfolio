import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./WorkExperience.scss";
import {workExperiences} from "../../portfolio";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import StyleContext from "../../contexts/StyleContext";

const timelineVariants = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.2, delayChildren: 0.1},
  },
};

const itemVariants = {
  hidden: {opacity: 0, x: -40},
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);

  if (!workExperiences.display) return null;

  return (
    <section
      className={`experience-section ${isDark ? "experience-section--dark" : ""}`}
      id="experience"
    >
      <div className="experience-section__container">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey and the projects I've contributed to."
          badge="CAREER"
          align="center"
        />

        <motion.div
          className="experience-timeline"
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
          {/* Timeline center line */}
          <div className="experience-timeline__line" aria-hidden="true" />

          {workExperiences.experience.map((exp, i) => (
            <motion.div
              key={i}
              className="experience-timeline__item"
              variants={itemVariants}
            >
              {/* Timeline dot */}
              <div className="experience-timeline__dot" aria-hidden="true">
                <div className="experience-timeline__dot-inner" />
              </div>

              {/* Card */}
              <div className="experience-timeline__card">
                {/* Header with logo and info */}
                <div className="experience-timeline__header">
                  <div className="experience-timeline__logo-wrap">
                    <img
                      src={exp.companylogo}
                      alt={exp.company}
                      className="experience-timeline__logo"
                      loading="lazy"
                    />
                  </div>
                  <div className="experience-timeline__info">
                    <h3 className="experience-timeline__role">{exp.role}</h3>
                    <p className="experience-timeline__company">{exp.company}</p>
                    <span className="experience-timeline__date">
                      <i className="far fa-calendar-alt" aria-hidden="true" />{" "}
                      {exp.date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                {exp.desc && (
                  <p className="experience-timeline__desc">{exp.desc}</p>
                )}

                {/* Bullet Points */}
                {exp.descBullets && exp.descBullets.length > 0 && (
                  <ul className="experience-timeline__bullets">
                    {exp.descBullets.map((bullet, j) => (
                      <li key={j} className="experience-timeline__bullet">
                        <span
                          className="experience-timeline__bullet-icon"
                          aria-hidden="true"
                        >
                          ▹
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
