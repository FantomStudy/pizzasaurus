"use client";

import { useState } from "react";
import { Dialog } from "../ui/Dialog";
import { CodeForm } from "./CodeForm";
import { Step, STEPS } from "./constants";
import { PhoneForm } from "./PhoneForm";
import styles from "./LoginDialog.module.css";

export const LoginDialog = ({ ...props }: React.ComponentProps<typeof Dialog>) => {
  const [step, setStep] = useState<Step>("phone");
  const [phone, setPhone] = useState<string>("");

  const onCodeConfirm = () => {
    const dialogRef = props.ref;
    if (dialogRef && typeof dialogRef !== "function") {
      dialogRef.current?.close();
    }
    setPhone("");
    setStep("phone");
  };

  return (
    <Dialog {...props}>
      <div className={styles.wrapper}>
        {step === "phone" && (
          <PhoneForm
            initialPhone={phone}
            onConfirm={(value: string) => {
              setPhone(value);
              setStep("code");
            }}
          />
        )}

        {step === "code" && (
          <CodeForm phone={phone} onBack={() => setStep("phone")} onConfirm={onCodeConfirm} />
        )}

        <div className={styles.steps}>
          {STEPS.map((s) => (
            <div key={s} data-active={s === step} />
          ))}
        </div>
      </div>
    </Dialog>
  );
};
