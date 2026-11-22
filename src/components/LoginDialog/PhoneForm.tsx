"use state";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/Button";
import { Field, FieldError } from "../ui/Field";
import { Input, InputGroup, InputGroupAddon } from "../ui/Input";
import styles from "./LoginDialog.module.css";

interface PhoneFormProps {
  initialPhone: string;
  onConfirm: (phone: string) => void;
}

export const PhoneForm = ({ initialPhone, onConfirm }: PhoneFormProps) => {
  const [phone, setPhone] = useState(initialPhone);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const value = phone.trim();

    if (!value.length) {
      setError("Введите номер телефона");
      return;
    }

    if (value.length !== 10) {
      setError("Введите номер телефона полностью");
      return;
    }

    onConfirm(phone);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.header}>
        <h3>Укажите телефон</h3>
        <p>Чтобы войти в профиль</p>
      </div>

      <Field>
        <InputGroup>
          <InputGroupAddon>+7</InputGroupAddon>
          <Input
            type="tel"
            name="phone"
            placeholder="Номер телефона"
            maxLength={10}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputGroup>
        {error && <FieldError>{error}</FieldError>}
      </Field>

      <div className={styles.footer}>
        <p className={styles.legal}>
          Продолжая, вы соглашаетесь с условиями наших <br />
          <Link href="/">юридических документов</Link>
        </p>

        <Button type="submit">Продолжить</Button>
      </div>
    </form>
  );
};
