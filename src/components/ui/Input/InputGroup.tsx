import { clsx } from "clsx";
import styles from "./InputGroup.module.css";

export const InputGroup = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.group, className)} {...props} />;
};

export const InputGroupAddon = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.addon, className)} {...props} />;
};
