import React, {useContext} from "react";
import "./SectionTitle.scss";
import StyleContext from "../../contexts/StyleContext";

/**
 * Reusable SectionTitle component
 *
 * @param {string} title       — Main section heading
 * @param {string} subtitle    — Subtitle / descriptive text below title
 * @param {string} badge       — Small accent badge label above the title (optional)
 * @param {string} align       — "left" | "center" | "right" (default: "left")
 * @param {string} className   — Extra class names
 */
export default function SectionTitle({
  title,
  subtitle,
  badge,
  align = "left",
  className = "",
}) {
  const {isDark} = useContext(StyleContext);

  return (
    <div
      className={[
        "section-title",
        `section-title--${align}`,
        isDark ? "section-title--dark" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {badge && (
        <span className="section-title__badge" aria-hidden="true">
          {badge}
        </span>
      )}
      <h2 className="section-title__heading">{title}</h2>
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
      <div className="section-title__line" aria-hidden="true" />
    </div>
  );
}
