import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <Link href="/" className={clsx(styles.logo, className)}>
      <Image src="/logo.svg" alt="pizza" width={73} height={52} priority />
      <p>Pizzasaurus</p>
    </Link>
  );
};
