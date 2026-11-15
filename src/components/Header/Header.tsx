import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className="container">
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Logo />
        </Link>

        <div className={styles.right}>
          <Button>
            <ShoppingBag /> Корзина
          </Button>

          <Button variant="muted">Войти</Button>
        </div>

        <div className={styles.mobileRight}>
          <Button variant="muted" size="md">
            Войти
          </Button>
        </div>
      </header>
    </div>
  );
};
