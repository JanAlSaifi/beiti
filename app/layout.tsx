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
      <body>
        <main className="text-center bg-background">{children}</main>

        <footer className="text-center bg-background text-[#f5f5f5] py-10">
          <p className="pb-3">Rufen Sie uns an: 040 69459970</p>
          <p className="pb-2">
            &copy; 2025 Restaurant Beiti. Alsterdorfer Str. 76, 22299 Hamburg.
          </p>
          <p className="pb-3">
            Mo.-Sa. 17.00 - 23.00 Uhr, Küche bis 22.00 Uhr.
          </p>
          <p className="pb-3 text-[#d4af37]">
            <a href="images/Impressum.pdf" target="_blank">
              Impressum
            </a>
          </p>
          <p>Design: Jan Al Saifi</p>
          <p className="pb-3 ">
            <a href="#" className="">
              Nach Oben
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
