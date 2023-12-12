import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El-Razin Jo",
  description: "Your full stack dev",
};

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body>
        {children}
      </body>
    </html>
  );
}
