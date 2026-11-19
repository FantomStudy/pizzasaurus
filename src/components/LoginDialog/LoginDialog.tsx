import Link from "next/link";
import { Button } from "../ui/Button";
import { Dialog } from "../ui/Dialog";
import { Input, InputGroup, InputGroupAddon } from "../ui/Input";
import styles from "./LoginDialog.module.css";

export const LoginDialog = ({ ...props }: React.ComponentProps<typeof Dialog>) => {
  return (
    <Dialog {...props}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Укажите телефон</h3>
          <p>Чтобы войти в профиль</p>
        </div>

        <InputGroup>
          <InputGroupAddon>+7</InputGroupAddon>
          <Input placeholder="Номер телефона" />
        </InputGroup>

        <div className={styles.footer}>
          <p className={styles.legal}>
            Продолжая, вы соглашаетесь с условиями наших <br />
            <Link href="/">юридических документов</Link>
          </p>

          <Button>Продолжить</Button>
        </div>

        <div className={styles.steps}>
          <div data-active="true" />
          <div />
        </div>
      </div>
    </Dialog>
  );
};
