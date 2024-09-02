import { Inter } from "next/font/google";
import "./globals.css";
import favicon from "./../../public/favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JianhongLi",
  description: "Portfolio by Jianhong Li",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon.src} />
      </head>
      <body className="w-dvw h-dvh">{children}</body>
    </html>
  );
}
