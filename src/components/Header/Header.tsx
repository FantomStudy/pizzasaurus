"use client";

import { ShoppingBag } from "lucide-react";
import { useLoginDialog } from "../LoginDialog";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  const { openLoginDialog } = useLoginDialog();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />

          <div className={styles.right}>
            <Button>
              <ShoppingBag /> Корзина
            </Button>

            <Button variant="muted" onClick={openLoginDialog}>
              Войти
            </Button>
          </div>

          <div className={styles.mobileRight}>
            <Button variant="muted" size="md">
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
