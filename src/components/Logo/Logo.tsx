import Image from "next/image";
import styles from "./Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" alt="pizza" width={73} height={52} priority />
      <p>Pizzasaurus</p>
    </div>
  );
};
