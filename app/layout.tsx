import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Beiti ",
  description: "Website for the restaurant Beiti located in Hamburg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="fullscreen-background">
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <main>
          <div style={{ marginLeft: "220px", padding: "20px" }}>{children}</div>
        </main>
      </body>
    </html>
  );
}
