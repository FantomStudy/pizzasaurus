"use client";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.code}>
            <Image src="/errors/500.svg" alt="0" width={300} height={183} />
          </span>

          <div className={styles.text}>
            <h1>Упс... Что-то пошло не так</h1>
            <p>
              Произошла внутренняя ошибка сервера. Наша команда уже в курсе и исправляет код. Скоро
              всё заработает!
            </p>
          </div>

          <ButtonLink href="/">Вернуться к меню</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
