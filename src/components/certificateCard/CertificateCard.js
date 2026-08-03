import React, { useContext } from "react";
import "./CertificateCard.scss";
import StyleContext from "../../contexts/StyleContext";
import { motion } from "framer-motion";
import Button from "../button/Button";

export default function CertificateCard({ certificate }) {
  const { isDark } = useContext(StyleContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 15 }
    }
  };

  return (
    <motion.div 
      className={isDark ? "certificate-card dark-mode" : "certificate-card"}
      variants={cardVariants}
    >
      <div className="card-top-accent"></div>
      
      <div className="card-content">
        <div className="icon-container">
          <i className="fas fa-certificate"></i>
        </div>
        
        <div className="cert-info">
          <h3 className="cert-title">{certificate.title}</h3>
          
          <div className="cert-meta">
            <span className="cert-issuer">{certificate.issuer}</span>
            <span className="cert-date">{certificate.date}</span>
          </div>
          
          <div className="cert-id-container">
            <span className="cert-id-label">ID:</span>
            <span className="cert-id-value">{certificate.credentialId}</span>
          </div>
        </div>
        
        <div className="cert-actions">
          <Button 
            text="View" 
            variant="outline"
            size="small"
            onClick={() => window.open(certificate.pdfLink, '_blank')}
          />
          <Button 
            text="Download" 
            variant="solid"
            size="small"
            href={certificate.pdfLink}
            download
            newTab
          />
        </div>
      </div>
    </motion.div>
  );
}
