import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

/**
 * SocialMedia — displays social icon links
 * Fixed: function name was lowercase (violates React convention)
 * Fixed: added aria-label to all icon links for accessibility
 */
export default function SocialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }

  return (
    <div className="social-media-div" role="list" aria-label="Social media links">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitHub profile"
          role="listitem"
        >
          <i className="fab fa-github" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit LinkedIn profile"
          role="listitem"
        >
          <i className="fab fa-linkedin-in" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Send email to ${socialMediaLinks.gmail}`}
          role="listitem"
        >
          <i className="fas fa-envelope" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.gitlab && (
        <a
          href={socialMediaLinks.gitlab}
          className="icon-button gitlab"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit GitLab profile"
          role="listitem"
        >
          <i className="fab fa-gitlab" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.facebook && (
        <a
          href={socialMediaLinks.facebook}
          className="icon-button facebook"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Facebook profile"
          role="listitem"
        >
          <i className="fab fa-facebook-f" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.instagram && (
        <a
          href={socialMediaLinks.instagram}
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Instagram profile"
          role="listitem"
        >
          <i className="fab fa-instagram" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.twitter && (
        <a
          href={socialMediaLinks.twitter}
          className="icon-button twitter"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Twitter profile"
          role="listitem"
        >
          <i className="fab fa-twitter" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.medium && (
        <a
          href={socialMediaLinks.medium}
          className="icon-button medium"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Medium blog"
          role="listitem"
        >
          <i className="fab fa-medium" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.stackoverflow && (
        <a
          href={socialMediaLinks.stackoverflow}
          className="icon-button stack-overflow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Stack Overflow profile"
          role="listitem"
        >
          <i className="fab fa-stack-overflow" aria-hidden="true" />
          <span />
        </a>
      )}

      {socialMediaLinks.kaggle && (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Kaggle profile"
          role="listitem"
        >
          <i className="fab fa-kaggle" aria-hidden="true" />
          <span />
        </a>
      )}
    </div>
  );
}
