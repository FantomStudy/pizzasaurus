import { clsx } from "clsx";
import styles from "./Button.module.css";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "muted";
  size?: "md" | "lg" | "icon-sm" | "icon-md";
}

type ButtonProps = ButtonBaseProps & React.ComponentProps<"button">;

export const Button = ({ className, variant = "primary", size = "lg", ...props }: ButtonProps) => {
  return (
    <button className={clsx(styles.button, styles[variant], styles[size], className)} {...props} />
  );
};
