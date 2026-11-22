import { clsx } from "clsx";
import styles from "./Button.module.css";

export interface ButtonBaseProps {
  variant?: "primary" | "secondary" | "muted" | "link";
  size?: "md" | "lg" | "icon-sm" | "icon-md";
}

type ButtonProps = ButtonBaseProps & React.ComponentProps<"button">;

export const Button = ({
  type = "button",
  className,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    />
  );
};
