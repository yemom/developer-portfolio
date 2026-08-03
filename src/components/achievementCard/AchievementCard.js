import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./AchievementCard.scss";
import StyleContext from "../../contexts/StyleContext";
import Button from "../button/Button";

export default function AchievementCard({cardInfo}) {
  const {isDark} = useContext(StyleContext);

  const cardVariants = {
    hidden: {opacity: 0, y: 30},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.1, // Stagger items inside the card
      },
    },
  };

  const itemVariants = {
    hidden: {opacity: 0, y: 15},
    visible: {opacity: 1, y: 0, transition: {duration: 0.4}},
  };

  return (
    <motion.div 
      className={`achievement-card ${isDark ? "achievement-card--dark" : ""}`}
      variants={cardVariants}
      whileHover={{y: -8}}
    >
      <motion.div className="achievement-image-wrap" variants={itemVariants}>
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="achievement-image"
          loading="lazy"
        />
      </motion.div>
      <div className="achievement-content">
        <motion.h5 className="achievement-title" variants={itemVariants}>
          {cardInfo.title}
        </motion.h5>
        <motion.p className="achievement-desc" variants={itemVariants}>
          {cardInfo.description}
        </motion.p>
        <motion.div className="achievement-footer" variants={itemVariants}>
          {cardInfo.footer.map((v, i) => (
            <Button
              key={i}
              text={v.name}
              href={v.url}
              newTab={true}
              variant="outline"
              size="sm"
              icon="fas fa-external-link-alt"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
