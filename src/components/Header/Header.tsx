import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Logo } from "../Logo";
import { Button } from "../ui/Button";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link href="/">
          <Logo />
        </Link>

        <div className={styles.right}>
          <Button>
            <ShoppingBag /> Корзина
          </Button>

          <Button variant="muted">Войти</Button>
        </div>
      </header>
    </div>
  );
};
