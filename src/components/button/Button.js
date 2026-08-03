import React, {useRef} from "react";
import "./Button.scss";

/**
 * Reusable Button component
 *
 * @param {string}  text       — Button label
 * @param {string}  href       — Link destination (renders <a> if provided)
 * @param {boolean} newTab     — Open in new tab
 * @param {string}  variant    — "primary" | "secondary" | "outline" | "ghost"
 * @param {string}  size       — "sm" | "md" | "lg"
 * @param {string}  icon       — FontAwesome class string e.g. "fas fa-download"
 * @param {string}  iconPos    — "left" | "right" (default: "left")
 * @param {boolean} disabled   — Disabled state
 * @param {boolean} loading    — Loading state
 * @param {string}  className  — Extra class names
 * @param {function} onClick   — Click handler (when not using href)
 * @param {string}  download   — Download filename (for download links)
 */
export default function Button({
  text,
  href,
  newTab = false,
  variant = "primary",
  size = "md",
  icon,
  iconPos = "left",
  disabled = false,
  loading = false,
  className = "",
  onClick,
  download,
  ariaLabel,
  type = "button",
}) {
  const btnRef = useRef(null);

  // Ripple effect handler
  const handleRipple = e => {
    const button = btnRef.current;
    if (!button) return;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add("btn-ripple");

    const existingRipple = button.querySelector(".btn-ripple");
    if (existingRipple) existingRipple.remove();

    button.appendChild(circle);
    circle.addEventListener("animationend", () => circle.remove());
  };

  const classes = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    disabled ? "btn-disabled" : "",
    loading ? "btn-loading" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <span className="btn-spinner" aria-hidden="true" />}
      {icon && iconPos === "left" && !loading && (
        <i className={`${icon} btn-icon btn-icon-left`} aria-hidden="true" />
      )}
      <span className="btn-text">{text}</span>
      {icon && iconPos === "right" && !loading && (
        <i className={`${icon} btn-icon btn-icon-right`} aria-hidden="true" />
      )}
    </>
  );

  const commonProps = {
    ref: btnRef,
    className: classes,
    onClick: e => {
      if (disabled || loading) return;
      handleRipple(e);
      if (onClick) onClick(e);
    },
    "aria-label": ariaLabel || text,
    "aria-disabled": disabled || loading,
  };

  if (href) {
    return (
      <a
        {...commonProps}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <button {...commonProps} type={type} disabled={disabled || loading}>
      {content}
    </button>
  );
}
