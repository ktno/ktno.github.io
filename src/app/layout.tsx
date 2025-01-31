import type { Metadata } from "next";
import "./globals.css";
import { instrumentSans } from "../components/Fonts";

export const metadata: Metadata = {
  title: "Katie No",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.className} bg-black text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
