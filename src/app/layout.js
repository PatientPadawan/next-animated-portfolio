import { Orbitron } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Patient Padawan Portfolio",
  description: "A place for projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" sizes="any" />
      </head>
      <body className={orbitron.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
