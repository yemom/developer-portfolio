import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);

  if (!educationInfo.display) {
    return null;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section className={`education-section ${isDark ? "education-section--dark" : ""}`} id="education">
      <div className="education-container">
        <SectionTitle 
          title="Education" 
          subtitle="My academic background and qualifications."
          badge="DEGREE"
          align="center"
        />
        <motion.div 
          className="education-card-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
