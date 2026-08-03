import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);

  if (!achievementSection.display) {
    return null;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger items
      },
    },
  };

  return (
    <section className={`achievement-section ${isDark ? "achievement-section--dark" : ""}`} id="achievements">
      <div className="achievement-container">
        <SectionTitle 
          title={achievementSection.title} 
          subtitle={achievementSection.subtitle}
          badge="LEARNING" 
          align="center" 
        />
        <motion.div 
          className="achievement-cards-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.1}}
        >
          {achievementSection.achievementsCards.map((card, i) => (
            <AchievementCard
              key={i}
              cardInfo={{
                title: card.title,
                description: card.subtitle,
                image: card.image,
                imageAlt: card.imageAlt,
                footer: card.footerLink
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
