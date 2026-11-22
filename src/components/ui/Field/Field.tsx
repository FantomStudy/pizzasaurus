import styles from "./Field.module.css";

export const Field = ({ ...props }: React.ComponentProps<"div">) => {
  return <div className={styles.field} {...props} />;
};

export const FieldError = ({ ...props }: React.ComponentProps<"span">) => {
  return <span className={styles.error} {...props} />;
};
