import { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import styles from "./error.module.css";

export const metadata: Metadata = {
  title: "404 - Страница не найдена",
};

const NotFoundPage = () => {
  return (
    <div className={styles.main}>
      <div className="container">
        <div className={styles.wrapper}>
          <span className={styles.code}>
            4 <Image src="/errors/404.svg" alt="0" width={200} height={122} /> 4
          </span>

          <div className={styles.text}>
            <h1>Ой, страница потерялась в продакшене...</h1>
            <p>
              Страница не найдена: возможно, её удалили во время очередного мерж-реквеста или этот
              эндпоинт пока находится в стадии разработки.
            </p>
          </div>

          <ButtonLink href="/">Вернуться к меню</ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
