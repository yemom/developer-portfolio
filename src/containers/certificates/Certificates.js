import React, { useContext } from "react";
import "./Certificates.scss";
import StyleContext from "../../contexts/StyleContext";
import { certificatesSection } from "../../portfolio";
import { motion } from "framer-motion";
import CertificateCard from "../../components/certificateCard/CertificateCard";
import SectionTitle from "../../components/sectionTitle/SectionTitle";

export default function Certificates() {
  const { isDark } = useContext(StyleContext);

  if (!certificatesSection.display) {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section id="certificates" className={isDark ? "certificates dark-mode" : "certificates"}>
      <div className="certificates-container">
        <SectionTitle 
          title={certificatesSection.title} 
          subtitle={certificatesSection.subtitle} 
          badge="CERTIFICATIONS" 
          align="center" 
        />
        <motion.div 
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certificatesSection.certificates.map((cert, i) => (
            <CertificateCard key={i} certificate={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
