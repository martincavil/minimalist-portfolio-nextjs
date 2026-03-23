import React from "react";
import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  children: React.ReactNode;
  ariaLabel?: string;
  tabIndex?: number;
  className?: string;
  as?: "button" | "a";
  target?: string;
  rel?: string;
};

export const Button: React.FC<ButtonProps> = ({
  href,
  onClick,
  icon,
  children,
  ariaLabel,
  tabIndex = 0,
  className = "",
  as = "a",
  target,
  rel,
}) => {
  const baseClasses =
    "relative w-full md:w-fit group inline-flex justify-center items-center px-5 py-3 rounded-3xl border border-interactive overflow-hidden transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  const contentClasses =
    "relative z-10 flex items-center gap-2 text-lg font-light text-text-primary group-hover:text-text-secondary transition-colors duration-300";
  const iconWrapperClasses =
    "ml-3 w-6 h-6 rounded-full border border-interactive flex items-center justify-center group-hover:border-interactive-hover transition-colors duration-200 z-10 group-hover:text-text-secondary";

  const overlay = (
    <span className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"></span>
  );

  const content = (
    <>
      {overlay}
      <span className={contentClasses}>{children}</span>
      {icon && <div className={iconWrapperClasses}>{icon}</div>}
    </>
  );

  if (as === "a" && href) {
    // Use native <a> tag for external links with target="_blank"
    if (target === "_blank" || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={`${baseClasses} ${className}`}
          aria-label={ariaLabel}
          tabIndex={tabIndex}
          target={target}
          rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        >
          {content}
        </a>
      );
    }

    // Use Next.js Link for internal links
    return (
      <Link
        href={href}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
        tabIndex={tabIndex}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
