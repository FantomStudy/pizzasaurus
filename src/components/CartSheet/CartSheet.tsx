import { ButtonLink } from "../ui/Button";
import { Sheet, SheetFooter, SheetHeader, SheetTitle } from "../ui/Sheet";
import styles from "./CartSheet.module.css";

export const CartSheet = ({ ...props }: React.ComponentProps<typeof Sheet>) => {
  return (
    <Sheet {...props}>
      <SheetHeader>
        <SheetTitle>Корзина</SheetTitle>
      </SheetHeader>

      <SheetFooter className={styles.footer}>
        <ButtonLink href="/">Перейти к оформлению</ButtonLink>
      </SheetFooter>
    </Sheet>
  );
};
