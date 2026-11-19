"use client";

import { createContext, use, useRef } from "react";
import { LoginDialog } from "./LoginDialog";

interface LoginDialogContext {
  openLoginDialog: () => void;
}

const LoginDialogContext = createContext<LoginDialogContext | null>(null);

export const useLoginDialog = () => {
  const context = use(LoginDialogContext);

  if (!context) {
    throw new Error("LoginDialogProvider is missing");
  }

  return context;
};

export const LoginDialogProvider = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDialogElement>(null);

  const openLoginDialog = () => {
    const dialog = ref.current;
    if (!dialog?.open) {
      dialog?.showModal();
    }
  };

  return (
    <LoginDialogContext value={{ openLoginDialog }}>
      {children}
      <LoginDialog ref={ref} />
    </LoginDialogContext>
  );
};
