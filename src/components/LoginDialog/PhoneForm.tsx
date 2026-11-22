"use state";

import { useMask } from "@siberiacancode/reactuse";
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
  const [error, setError] = useState("");

  const phone = useMask("(999) 999-99-99", {
    initialValue: initialPhone,
    showMask: "never",
    sanitize: (value) => {
      const digits = value.replace(/\D/g, "");

      if (digits.length === 11 && /^[78]/.test(digits)) {
        return digits.slice(1);
      }

      return digits;
    },
  });

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    const value = phone.getValue("masked");
    console.log(value);

    if (!value.length) {
      setError("Введите номер телефона");
      return;
    }

    if (value.length < 15) {
      setError("Введите номер телефона полностью");
      return;
    }

    onConfirm(value);
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
          <Input type="tel" name="phone" placeholder="Номер телефона" {...phone.register()} />
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
