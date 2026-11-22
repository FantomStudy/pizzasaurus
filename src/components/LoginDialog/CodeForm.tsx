"use client";

import { useState } from "react";
import { Button } from "../ui/Button";
import { Field, FieldError } from "../ui/Field";
import { Input } from "../ui/Input";
import styles from "./LoginDialog.module.css";

interface CodeFormProps {
  phone: string;
  onBack: () => void;
  onConfirm: () => void;
}

export const CodeForm = ({ phone, onBack, onConfirm }: CodeFormProps) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const value = code.trim();

    if (!value.length) {
      setError("Введите проверочный код");
      return;
    }

    if (value.length !== 5) {
      setError("Введите проверочный код полностью");
      return;
    }

    onConfirm();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.header}>
        <h3>Введите код из мессенджера или СМС</h3>

        <div className={styles.subtitle}>
          <p>на номер +7{phone}</p>
          <Button variant="link" onClick={onBack}>
            Изменить
          </Button>
        </div>
      </div>

      <Field>
        <Input
          name="code"
          placeholder="Проверочный код"
          value={code}
          maxLength={5}
          onChange={(e) => setCode(e.target.value)}
        />
        {error && <FieldError>{error}</FieldError>}
      </Field>

      <div className={styles.buttons}>
        <Button type="submit">Войти</Button>
        <Button variant="muted">Отправить код еще раз</Button>
      </div>
    </form>
  );
};
