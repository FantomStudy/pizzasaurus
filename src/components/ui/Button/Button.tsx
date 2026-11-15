import { clsx } from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "muted";
  size?: "md" | "lg" | "icon-sm";
}

export const Button = ({ className, variant = "primary", size = "lg", ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props} />
  );
};
