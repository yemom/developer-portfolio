import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  const cardVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94]},
    },
  };

  return (
    <motion.div 
      className="education-card"
      variants={cardVariants}
    >
      {school.logo && (
        <div className="education-card-left">
          <img
            crossOrigin={"anonymous"}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
            loading="lazy"
          />
        </div>
      )}
      <div className="education-card-right">
        <h5 className="education-text-school">{school.schoolName}</h5>

        <div className="education-text-details">
          <h5 className="education-text-subHeader">
            {school.subHeader}
          </h5>
          <p className="education-text-duration">
            {school.duration}
          </p>
          <p className="education-text-desc">{school.desc}</p>
          
          {school.descBullets && school.descBullets.length > 0 && (
            <div className="education-text-bullets">
              <ul>
                {school.descBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
