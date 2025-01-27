import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Section 1 */}
      <section className="homeSection h-screen overflow-x-hidden relative">
        <div className="absolute inset-0">
          <img
            src="/michael-starkie.jpg"
            alt="Background Image"
            className="w-full h-full object-cover blur-sm brightness-50"
          />
        </div>
        <div className="relative flex flex-col h-full justify-center items-center">
          <h1 className="text-9xl font-bold mb-5">Beiti</h1>
          <h2 className="text-3xl italic text-neutral-500 dark:text-neutral-400 mb-8">
            feine libanesische Küche
          </h2>
        </div>
      </section>

      {/* Section 2 */}
      <section className="aboutSection h-screen bg-[#1a1a1a]">
        <div className="flex flex-col md:flex-row h-full">
          <div className="hidden md:block w-1/2">
            <img
              src="/slide_1.jpg"
              alt="slider image"
              className="w-full h-full object-cover blur-xs brightness-50"
            />
          </div>

          <div className="flex flex-col justify-center items-center px-8 w-full md:w-1/2">
            <h2 className="text-3xl text-[#f5f5f5] font-bold mb-5">Über uns</h2>
            <p className="text-[#f5f5f5] leading-relaxed mb-5">
              <span className="font-bold text-lg text-[#f5f5f5]">G</span>
              astfreundschaft hat im Libanon eine lange Tradition. Freunde
              ausgiebig zu bewirten, ...
            </p>
            <p className="mt-5">
              <a href="#" className="text-[#b8860b] underline">
                Kontaktieren Sie uns
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="bg-[#1a1a1a]">
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#f5f5f5]">
              Favoriten der Gäste
            </h2>
            <p className="text-lg text-[#f5f5f5] mt-4">
              Hier kommen unsere Top 6.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
            <div className="bg-[#333333] rounded-lg shadow-lg overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_90.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  St. Thomas Gourmets Rouge
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  37,00€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Ein feiner Wein mit intensivem und komplexem Charakter. Die
                  Früchte sind gut ausgereift mit weichen und seidigen
                  Gerbstoffen.
                </p>
              </div>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg  overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_2.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  Dajaj bel Tamer
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  21,00€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Marinierte Hähnchenbrust mit Kardamom auf Dattel-Rosmarin
                  Sauce.
                </p>
              </div>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_10.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  Falafel
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  17,00€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Frittierte Kichererbsen-Medaillons mit Sesam-Sauce und Salat.
                </p>
              </div>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_7.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  Lammfilet
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  28,50€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Auf Granatapfel-Sauce mit Gemüse & Basmatireis.
                </p>
              </div>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_6.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  Beiti Grillplatte
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  26,50€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Verschiedene Fleischsorten dazu Salat, Sumakbrot und
                  Basmatireis.
                </p>
              </div>
            </div>

            <div className="bg-[#333333] rounded-lg shadow-lg overflow-hidden hover:shadow-[0px_4px_10px_rgba(212,175,55,0.5)] transition-shadow duration-300">
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: "url(/res_img_9.jpg)" }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                  Beiti Mesa
                </h3>
                <span className="block text-lg font-bold text-yellow-600 mt-2">
                  20,50€
                </span>
                <p className="text-[#f5f5f5] mt-4">
                  Ein unvergesslicher Augen- & Gaumenschmaus, vegetarisch und
                  vegan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#1a1a1a] border-[#d4af37]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          fill="#333333"
        >
          <path
            d="M500 80.7C358 68 0 4 0 4V0h1000v84.7c-216 23.3-358 8.6-500-4Z"
            opacity=".3"
          ></path>
          <path
            d="M500 65.7C358 53 0 4 0 4V0h1000v62.7c-216 23.3-358 15.6-500 3Z"
            opacity=".5"
          ></path>
          <path d="M500 50.7C358 38 0 4 0 4V0h1000v40.7C784 64 642 63.3 500 50.7Z"></path>
        </svg>
      </div>
      {/* Section 4 */}
      <section className="">
        <div className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#d4af37]">
                Aus der Speisekarte
              </h2>
              <p className="text-[#f5f5f5] text-lg">
                Weiteres aus der Speise- & Getränkekarte.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Getränke */}
              <div>
                <h3 className="text-3xl font-bold text-[#d4af37] mb-6">
                  Getränke
                </h3>
                <ul className="space-y-6">
                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="/res_img_1.jpg"
                        alt="Ixsir Rouge"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          Ixsir Rouge
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Weich und seidig, Eichenaroma und reifer schwarzer
                          Früchte
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €42.00
                      </span>
                    </div>
                  </li>

                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="/IMG_20210928_124523.jpg"
                        alt="Arak"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          Arak
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Feiner Kräutergeschmack mit schönen Anisnoten
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €5.50
                      </span>
                    </div>
                  </li>

                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="/res_img_70.jpg"
                        alt="Arak"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          Almaza-Libanesisches Bier
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Nr. 1 im Libanon,Zart und Mild mit einem hauch von
                          Mais. z.Z. leider ausverkauft.
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €4.00
                      </span>
                    </div>
                  </li>

                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="res_img_50.jpg"
                        alt="Arak"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          Chateau Musar Jeune
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Chardonnay, Vermentino & Viognier
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €58.00
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Menüs */}
              <div>
                <h3 className="text-3xl font-bold text-[#d4af37] mb-6">
                  Menüs
                </h3>
                <ul className="space-y-6">
                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="/IMG_20210922_223236.jpg"
                        alt="Beiti 3-Gänge Menü"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          Beiti 3-Gänge Menü
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Mesa, Hauptgericht Ihrer Wahl und Dessert
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €37.50
                      </span>
                    </div>
                  </li>

                  <li className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="flex gap-4">
                      <img
                        src="/res_img_7.jpg"
                        alt="3-Gänge Lammrückenmenü"
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="text-xl font-semibold text-[#f5f5f5]">
                          3-Gänge Lammrückenmenü
                        </h4>
                        <p className="text-[#bbbbbb]">
                          Mesa, Lammrückenfilet auf Joghurt-minz-sauce, Katayf
                        </p>
                      </div>
                      <span className="ml-auto text-lg font-bold text-[#d4af37]">
                        €45.00
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="images/Speisekarte.pdf"
                className="text-[#d4af37] border border-[#d4af37] rounded-lg py-3 px-6 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
              >
                Speisekarte ansehen
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          id="fh5co-events"
          className="relative bg-cover bg-center bg-fixed py-16"
          style={{ backgroundImage: "url('/images/slide_2.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div> {/* Overlay */}
          <div className="relative container mx-auto px-6 text-center">
            {/* Heading Section */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-[#d4af37] mb-4">
                Catering & Partyservice
              </h2>
              <p className="text-lg text-[#f5f5f5] leading-relaxed">
                Sie nennen uns Ihre Wünsche – wir erfüllen sie! Liebevoll und
                frisch zubereitet beliefern wir Sie gerne mit Mittagessen und
                Abendessen bei Anlässen jeder Art. Ob Firmenveranstaltungen,
                Geburtstage, Hochzeiten, Weihnachtsfeiern oder Sonstiges –
                Teilen Sie uns einfach den Umfang mit und wir kümmern uns drum.
                Je nach Bedarf kümmern wir uns auch um die Ausstattung (Gläser,
                Geschirr, Besteck, etc.). Unser stilvolles Restaurant stellen
                wir Ihnen ebenso gerne für Ihre Anlässe zur Verfügung. Unser
                Restaurant bietet Platz für 60 Personen für Empfang, Hochzeiten,
                Geburtstage, Weihnachtsfeiern oder Präsentationen. Gerne
                separieren wir das Restaurant, wenn Sie eine kleinere
                Gesellschaft empfangen möchten.
              </p>
            </div>

            {/* Event Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">
                  Weinkarte
                </h3>
                <span className="block text-sm font-medium text-[#f5f5f5] mb-4">
                  Unsere neue Weinkarte
                </span>
                <p className="text-[#f5f5f5] leading-relaxed mb-6">
                  Hier finden Sie die neue Weinkarte: Exklusive Weine aus dem
                  Libanon, Deutschland, Frankreich, Spanien etc.
                </p>
                <a
                  href="/images/Weinkarte.pdf"
                  className="text-[#d4af37] border border-[#d4af37] rounded-lg py-2 px-4 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
                >
                  Weinkarte
                </a>
              </div>

              {/* Card 2 */}
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">
                  Buffet & Menüs
                </h3>
                <span className="block text-sm font-medium text-[#f5f5f5] mb-4">
                  'a la carte
                </span>
                <p className="text-[#f5f5f5] leading-relaxed mb-6">
                  Von Mesa bis zu leckeren Desserts – unser Catering-Service
                  sorgt für die richtige Verpflegung auf jedem Event.
                </p>
                <a
                  href="/images/Catering-.pdf"
                  className="text-[#d4af37] border border-[#d4af37] rounded-lg py-2 px-4 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
                >
                  Cateringkarte
                </a>
              </div>

              {/* Card 3 */}
              <div className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] transition-shadow duration-300">
                <h3 className="text-2xl font-semibold text-[#d4af37] mb-2">
                  To Go
                </h3>
                <span className="block text-sm font-medium text-[#f5f5f5] mb-4">
                  Speisen zum Mitnehmen
                </span>
                <p className="text-[#f5f5f5] leading-relaxed mb-6">
                  Alle Speisen zum Mitnehmen. Sie können gerne telefonisch oder
                  vor Ort bestellen.
                </p>
                <a
                  href="/images/Speisekarte.pdf"
                  className="text-[#d4af37] border border-[#d4af37] rounded-lg py-2 px-4 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
                >
                  Speisekarte
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
