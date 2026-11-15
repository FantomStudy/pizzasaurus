import { clsx } from "clsx";
import Link from "next/link";
import { ButtonBaseProps } from "./Button";
import styles from "./Button.module.css";

type ButtonLinkProps = ButtonBaseProps & React.ComponentProps<typeof Link>;

export const ButtonLink = ({
  href,
  className,
  variant = "primary",
  size = "lg",
  ...props
}: ButtonLinkProps) => {
  const isExternal = typeof href === "string" && !href.startsWith("/");

  if (isExternal) {
    return (
      <a
        href={href}
        className={clsx(styles.button, styles[variant], styles[size], className)}
        {...props}
      />
    );
  }

  return (
    <Link
      href={href}
      className={clsx(styles.button, styles[variant], styles[size], className)}
      {...props}
    />
  );
};
