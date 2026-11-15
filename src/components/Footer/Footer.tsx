import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "../ui/Button";
import { Logo } from "../ui/Logo";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className="container">
      <footer className={styles.footer}>
        <nav className={styles.nav}>
          <Link href="/">
            <Logo />
          </Link>

          <div className={styles.block}>
            <a href="tel:890683346355">8 906 834-63-55</a>
            <a href="mailto:feedback@pizzasaurus.ru">feedback@pizzasaurus.ru</a>
          </div>

          <div className={styles.socials}>
            <ButtonLink href="https://web.telegram.org/" size="icon-md" variant="muted">
              <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
            </ButtonLink>
            <ButtonLink href="https://vk.ru/" size="icon-md" variant="muted">
              <Image src="/icons/vk.svg" alt="vk" width={24} height={24} />
            </ButtonLink>
            <ButtonLink href="https://www.youtube.com/" size="icon-md" variant="muted">
              <Image src="/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </ButtonLink>
          </div>
        </nav>

        <hr />

        <div className={styles.legal}>
          <span>© 2026 Pizzasaurus. Сделано с любовью к пицце и динозаврам</span>

          <Link href="/">Правовая информация</Link>
        </div>
      </footer>
    </div>
  );
};
