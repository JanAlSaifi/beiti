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
        <div className="fixed top-0 pl-5 pt-5 z-10">
          <input className="peer hidden" type="checkbox" id="navbar-open" />
          <label className="cursor-pointer" htmlFor="navbar-open">
            <span className="sr-only">Toggle Navigation</span>
            <svg
              className="w-10 h-10 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </label>
          <nav
            aria-label="Navigation"
            className="peer-checked:hidden text-white"
          >
            <ul className="flex flex-col gap-7 pt-40">
              <li className="">
                <a
                  className="text-[18px] font-bold px-6 py-2 rounded-3xl text-foreground"
                  href="#"
                >
                  Über uns
                </a>
              </li>
              <li className="">
                <a
                  className="text-[18px] font-bold px-6 py-2 rounded-3xl text-foreground"
                  href="#"
                >
                  Active
                </a>
              </li>
              <li className="">
                <a
                  className="text-[18px] font-bold px-6 py-2 rounded-3xl text-foreground"
                  href="#"
                >
                  Speisekarte
                </a>
              </li>
              <li className="">
                <a
                  className="text-[18px] font-bold px-6 py-2 rounded-3xl text-foreground"
                  href="#"
                >
                  Catering
                </a>
              </li>
              <li className="">
                <a
                  className="text-[18px] font-bold px-6 py-2 rounded-3xl text-foreground"
                  href="#"
                >
                  Reservierung
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="">
          <div className="text-center bg-background">{children}</div>
        </main>

        <footer className="text-center bg-background text-[#f5f5f5]">
          <p className="">
            <a href="tel:04069459970" className="tel">
              Rufen Sie uns an: 040 69459970
            </a>
          </p>
          <p className="">
            &copy; 2025 Restaurant Beiti. Alsterdorfer Str. 76, 22299 Hamburg.
            Mo.-Sa. 17.00 - 23.00 Uhr, Küche bis 22.00 Uhr.
            <br />
            <a href="images/Impressum.pdf" target="_blank">
              Impressum
            </a>
            <br />
            Bilder & Design: Jan Al Saifi
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
