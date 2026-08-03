import React, {useContext, useState, useEffect} from "react";
import {motion} from "framer-motion";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, illustration} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full-Stack Developer",
    "Backend Engineer",
    "Mobile App Developer",
    "Software Architect"
  ];

  useEffect(() => {
    let ticker = setTimeout(() => {
      handleType();
    }, typingSpeed);
    return () => clearTimeout(ticker);
  });

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 150);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  if (!greeting.displayGreeting) {
    return null;
  }

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section id="greeting" className={`greeting-section ${isDark ? "dark-mode" : ""}`}>
      <div className="greeting-container">
        <motion.div 
          className="greeting-text-column"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="status-badge">
            <span className="status-dot"></span>
            <span className="status-text">Available for hire</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="greeting-title">
            Hi, I'm <span className="greeting-name">{greeting.username}</span>
            <span className="wave-emoji">👋</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="greeting-subtitle">
            I am a <span className="typing-text">{text}</span>
            <span className="cursor">|</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="greeting-description">
            {greeting.subTitle}
          </motion.p>

          <motion.div variants={itemVariants} className="greeting-socials">
            <SocialMedia />
          </motion.div>

          <motion.div variants={itemVariants} className="greeting-buttons">
            <Button
              text="Hire Me"
              href="#contact"
              variant="primary"
              icon="fas fa-paper-plane"
              size="lg"
            />
            <Button
              text="View Resume"
              href="#resume"
              variant="outline"
              icon="fas fa-eye"
              size="lg"
            />
            {greeting.resumeLink && (
              <Button
                text="Download CV"
                href={greeting.resumeLink}
                variant="ghost"
                icon="fas fa-download"
                download="Esrom_Basazinew_Resume.pdf"
                size="lg"
              />
            )}
          </motion.div>
        </motion.div>

        <motion.div 
          className="greeting-image-column"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {illustration.animated ? (
            <DisplayLottie animationData={landingPerson} />
          ) : (
            <img 
              alt="man sitting on table" 
              src={require("../../assets/images/manOnTable.svg")} 
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
