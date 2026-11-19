import { clsx } from "clsx";
import styles from "./Input.module.css";

export const Input = ({ type = "text", className, ...props }: React.ComponentProps<"input">) => {
  return <input type={type} className={clsx(styles.input, className)} {...props} />;
};
