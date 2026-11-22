import { clsx } from "clsx";
import { XIcon } from "lucide-react";
import { Button } from "../Button";
import styles from "./Sheet.module.css";

interface SheetProps extends React.ComponentProps<"dialog"> {
  side?: "left" | "right";
}

export const Sheet = ({
  side = "right",
  className,
  children,
  closedby = "any",
  ...props
}: SheetProps) => {
  return (
    <dialog
      data-side={side}
      className={clsx(styles.sheet, className)}
      closedby={closedby}
      {...props}
    >
      {children}
      <SheetClose />
    </dialog>
  );
};

const SheetClose = () => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.closest("dialog")?.close();
  };

  return (
    <Button variant="muted" size="icon-sm" className={styles.close} onClick={handleClose}>
      <XIcon />
    </Button>
  );
};

export const SheetHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.header, className)} {...props} />;
};

export const SheetTitle = ({ className, ...props }: React.ComponentProps<"h3">) => {
  return <h3 className={clsx(styles.title, className)} {...props} />;
};

export const SheetFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={clsx(styles.footer, className)} {...props} />;
};
