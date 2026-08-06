import styles from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  href,
  type = "button",
  disabled,
  className,
  children,
}: ButtonProps) {
  const classes = `${styles.button} ${variant === "ghost" ? styles.buttonGhost : ""} tap ${className ?? ""}`.trim();

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {children}
    </button>
  );
}
