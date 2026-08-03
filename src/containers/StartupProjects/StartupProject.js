import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { motion } from "framer-motion";

export default function StartupProject() {
  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <div className="projects-main" id="projects">
      <div className="projects-container">
        <SectionTitle 
          title={bigProjects.title} 
          subtitle={bigProjects.subtitle} 
          badge="PORTFOLIO" 
          align="center" 
        />
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {bigProjects.projects.map((project, i) => {
            return (
              <motion.div 
                key={i} 
                className={`project-card ${isDark ? "dark-mode" : ""}`}
                variants={cardVariants}
                whileHover={{ y: -10 }}
              >
                <motion.div className="project-image-container" variants={itemVariants}>
                  <img src={project.image} alt={project.projectName} className="project-image" />
                  <div className="project-image-overlay">
                    <div className="overlay-content">
                      <span className="overlay-text">View Project</span>
                    </div>
                  </div>
                </motion.div>
                <div className="project-content">
                  <motion.h3 className={`project-title ${isDark ? "dark-text" : ""}`} variants={itemVariants}>
                    {project.projectName}
                  </motion.h3>
                  <motion.p className={`project-desc ${isDark ? "dark-subtext" : ""}`} variants={itemVariants}>
                    {project.projectDesc}
                  </motion.p>
                  
                  <motion.div className="tech-stack-container" variants={itemVariants}>
                    {project.techStack && project.techStack.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div className="project-links" variants={itemVariants}>
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-link">
                        <i className="fab fa-github"></i> Source
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-link live">
                        <i className="fas fa-external-link-alt"></i> Demo
                      </a>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
