import { clsx } from "clsx";
import { XIcon } from "lucide-react";
import { Button } from "../Button";
import styles from "./Dialog.module.css";

interface DialogProps extends React.ComponentProps<"dialog"> {
  showCloseButton?: boolean;
}

export const Dialog = ({
  showCloseButton = true,
  className,
  children,
  closedby = "any",
  ...props
}: DialogProps) => {
  return (
    <dialog className={clsx(styles.dialog, className)} closedby={closedby} {...props}>
      {children}
      {showCloseButton && <DialogClose />}
    </dialog>
  );
};

const DialogClose = () => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.closest("dialog")?.close();
  };

  return (
    <Button variant="muted" size="icon-sm" className={styles.close} onClick={handleClose}>
      <XIcon />
    </Button>
  );
};
