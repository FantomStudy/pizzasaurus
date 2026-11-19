import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoginDialogProvider } from "@/components/LoginDialog";
import "@/styles/reset.css";
import "@/styles/globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pizzasaurus - Доставка пиццы",
  description: "Сделано с любовью к пицце и динозаврам",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="ru" className={nunito.variable}>
      <body>
        <LoginDialogProvider>
          <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </LoginDialogProvider>
      </body>
    </html>
  );
};

export default RootLayout;
