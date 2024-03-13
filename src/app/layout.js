import { Orbitron } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Patient Padawan Portfolio",
  description: "A place for projects",
};

export const viewport = {
  themeColor: "#DCEAFE",
};

export default function RootLayout({ children }) {
  const background = {
    backgroundImage: "linear-gradient(to bottom, #DCEAFE, #fee2e2)",
  };
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.ico" sizes="any" />
      </head>
      <body className={orbitron.className} style={background}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
