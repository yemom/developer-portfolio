import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Skills.scss";
import {skillsSection, techStack} from "../../portfolio";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson.json";

/* ---- Skill categories with icons ---- */
const skillCategories = [
  {
    title: "Languages",
    icon: "fas fa-code",
    color: "#6c63ff",
    skills: ["JavaScript", "TypeScript", "Java", "Python", "Dart", "SQL"],
  },
  {
    title: "Frontend",
    icon: "fab fa-react",
    color: "#61DAFB",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "fas fa-server",
    color: "#00d4aa",
    skills: ["Node.js", "Spring Boot"],
  },
  {
    title: "Mobile",
    icon: "fas fa-mobile-alt",
    color: "#ff6584",
    skills: ["Flutter"],
  },
  {
    title: "Database",
    icon: "fas fa-database",
    color: "#f59e0b",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    title: "DevOps & Tools",
    icon: "fab fa-docker",
    color: "#3b82f6",
    skills: ["Git", "GitHub", "Docker"],
  },
];

/* ---- Animation variants ---- */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {staggerChildren: 0.08, delayChildren: 0.15},
  },
};

const cardVariants = {
  hidden: {opacity: 0, y: 30},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]},
  },
};

const barVariants = {
  hidden: {width: "0%"},
  visible: percent => ({
    width: percent,
    transition: {duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3},
  }),
};

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) return null;

  return (
    <section
      className={`skills-section ${isDark ? "skills-section--dark" : ""}`}
      id="skills"
    >
      <div className="skills-section__container">
        <SectionTitle
          title={skillsSection.title}
          subtitle={skillsSection.subTitle}
          badge="EXPERTISE"
          align="center"
        />

        {/* ---- What I Do: Lottie & Bullets ---- */}
        <div className="skills-section__intro">
          <motion.div
            className="skills-section__lottie"
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            <DisplayLottie animationData={codingPerson} />
          </motion.div>

          <motion.div
            className="skills-section__bullets"
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{duration: 0.5}}
          >
            {skillsSection.skills.map((skill, i) => (
              <p key={i} className="skills-section__bullet">
                {skill}
              </p>
            ))}
          </motion.div>
        </div>

        {/* ---- Category Cards Grid ---- */}
        <motion.div
          className="skills-section__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-card"
              variants={cardVariants}
            >
              {/* Accent top bar */}
              <div
                className="skill-card__accent"
                style={{background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)`}}
                aria-hidden="true"
              />

              <div className="skill-card__header">
                <div
                  className="skill-card__icon"
                  style={{
                    background: `${cat.color}18`,
                    color: cat.color,
                  }}
                >
                  <i className={cat.icon} aria-hidden="true" />
                </div>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>

              <div className="skill-card__tags">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className="skill-card__tag"
                    style={{
                      borderColor: `${cat.color}30`,
                      color: cat.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---- Core Strengths Progress Bars ---- */}
        {techStack.viewSkillBars && (
          <motion.div
            className="skills-section__progress"
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.2}}
          >
            <h3 className="skills-section__progress-title">Core Strengths</h3>
            <div className="skills-section__bars">
              {techStack.experience.map((exp, i) => (
                <div key={i} className="progress-bar">
                  <div className="progress-bar__header">
                    <span className="progress-bar__label">{exp.Stack}</span>
                    <span className="progress-bar__percent">
                      {exp.progressPercentage}
                    </span>
                  </div>
                  <div className="progress-bar__track">
                    <motion.div
                      className="progress-bar__fill"
                      custom={exp.progressPercentage}
                      variants={barVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ---- Software Skill Icons (from existing data) ---- */}
        <motion.div
          className="skills-section__icons"
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          viewport={{once: true}}
          transition={{duration: 0.5, delay: 0.3}}
        >
          {skillsSection.softwareSkills.map((skill, i) => (
            <div key={i} className="skill-icon" title={skill.skillName}>
              <i className={skill.fontAwesomeClassname} aria-hidden="true" />
              <span className="skill-icon__name">{skill.skillName}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
