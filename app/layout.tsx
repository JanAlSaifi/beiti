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
      <body className="relativ">
        <main className="">
          <nav className="z-50">
            <a href="#home">Home</a>
            <a href="#about">Über</a>
            <a href="#popular">Beliebt</a>
            <a href="#catering">Catering</a>
            <a href="#contact">Reservierung</a>
          </nav>

          <div className="text-center dark:text-neutral-200">{children}</div>
        </main>

        <footer className="text-center bg-black text-neutral-200">
          <p className="">
            <a href="tel:04069459970" className="tel">
              Rufen Sie uns an: 040 69459970
            </a>
          </p>
          <p className="">
            &copy; 2021 Restaurant Beiti. Alsterdorfer Str. 76, 22299 Hamburg.
            Mo.-Sa. 17.00 - 23.00 Uhr, Küche bis 22.00 Uhr.
            <br />
            <a href="images/Impressum.pdf" target="_blank">
              Impressum.
            </a>
            Bilder & Design:
            <a href="" target="_blank">
              Jan
            </a>
          </p>
          <p className="">
            <a href="#" className="js-gotop">
              Nach Oben
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
