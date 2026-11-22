"use client";

import { ShoppingBag } from "lucide-react";
import { useRef } from "react";
import { CartSheet } from "../CartSheet";
import { useLoginDialog } from "../LoginDialog";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import styles from "./Header.module.css";

export const Header = () => {
  const { openLoginDialog } = useLoginDialog();
  const shopRef = useRef<HTMLDialogElement>(null);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo className={styles.logo} />

          <div className={styles.right}>
            <Button onClick={() => shopRef.current?.showModal()}>
              <ShoppingBag /> Корзина
            </Button>

            <CartSheet ref={shopRef} />

            <Button variant="muted" onClick={openLoginDialog}>
              Войти
            </Button>
          </div>

          <div className={styles.mobileRight}>
            <Button variant="muted" size="md" onClick={openLoginDialog}>
              Войти
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
