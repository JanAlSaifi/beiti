import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="homeSection h-screen">
        <div className="absolute inset-0">
          <img
            src="/michael-starkie.jpg"
            alt="Hintergrundbild"
            className="w-full h-full object-cover filter blur-sm"
          ></img>
        </div>
        <div className="relative flex flex-col h-screen justify-center items-center">
          <h1 className="text-9xl font-bold mb-5">Beiti</h1>
          <h2 className="text-3xl italic text-neutral-500 dark:text-neutral-400 mb-8">
            feine libanesische Küche
          </h2>
        </div>
      </section>
      <section className="aboutSection h-screen">
        <div className="grid grid-cols-2 ">
          <div className="bg-blue-500">
            <img src="/michael-starkie-UnF992yroQo-unsplash.jpg"></img>
          </div>
          <div>
            <h2 className="">Über uns</h2>
            <p className="">
              <span className="">G</span>astfreundschaft hat im Libanon eine
              lange Tradition. Freunde ausgiebig zu bewirten, Fremde zu Freunden
              zu machen, gemeinsam essen, plaudern, sich entspannen,dies alles
              sind Charakterzüge, auf die die Libanesen stolz sind. Im Beiti
              wird diese Tradition sorgfältig gepflegt. Wer hierher kommt, freut
              sich nicht nur auf die unverfälschte, exzellente libanesische
              Küche, sondern auf eine Atmosphäre, die den Gast für ein paar
              Stunden aus dem hektischen Alltag in eine andere Welt entführt.
              Deswegen legt man im Beiti auch so großen Wert auf das Ambiente,
              das mit seinen freundlichen Farben und seiner geschmackvollen
              Einrichtung den modernen Libanon verkörpert: ein Land, das am
              Fortschritt teilnimmt, ohne seine Herkunft zu verleugnen Aber
              selbstverständlich bilden diese Äußerlichkeiten nur den Rahmen
              dessen, was den Gast im Beiti erwartet: Die herzliche Begrüßung,
              die persönliche Betreuung bei der Auswahl von Speisen und
              Getränken und eine kurze Einführung in die typisch arabische
              Esstechnik. Entdecken Sie also die libanesische Gastfreundschaft
              in der schönsten Stadt der Welt: Hamburg!.
            </p>
            <p className="">
              <a href="#" className="">
                Kontaktieren Sie uns
              </a>
            </p>
          </div>
        </div>
      </section>
      <section className="popularSection h-screen">
        <div className="grid grid-cols-2 ">
          <div className="bg-red-500">
            <img src="/michael-starkie-UnF992yroQo-unsplash.jpg"></img>
          </div>
          <div>
            <div className="grid grid-cols-4">
              <div className="">
                <h2 className="">Favoriten der Gäste</h2>
                <p className="">Hier kommen unsere Top 6.</p>
              </div>
              <div className="">
                <h2>Dajaj bel Tamer,</h2>
                <span className=""> 21,00€</span>
                <p>
                  marinierte Hähnchenbrust mit Kardamom auf Dattel-Rosmarin
                  Sauce.
                </p>
              </div>
              <div className="">
                <h2>Falafel </h2>
                <span className="">17.00€</span>
                <p>
                  frittierte Kichererbsen Medaillions mit Sesam-Sauce und Salat.
                </p>
              </div>
              <div className="">
                <h2>Lammfilet</h2>
                <span className="">28,50€</span>
                <p>auf Granatapfel-Sauce mit Gemüse & Basmatireis.</p>
              </div>
              <div className="">
                <h2>Beiti Grillplatte</h2>
                <span className="">26,50€</span>
                <p>
                  verschiedene Fleischsorten dazu Salat,Sumakbrot und
                  Basmatireis.
                </p>
              </div>
              <div className="">
                <h2>Beiti Mesa</h2>
                <span className="">20,50€</span>
                <p>
                  Ein unvergesslicher Augen- & Gaumenschmaus, vegetarisch und
                  vegan
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="menuCardSection h-screen">
        <div className="grid grid-cols-2 ">
          <div className="bg-green-500">
            <img src="/michael-starkie-UnF992yroQo-unsplash.jpg"></img>
          </div>
          <div className="">
            <div className="">
              <h2 className="">Aus der Speisekarte</h2>
              <p className="">Weiteres aus der Speise- & Getränkekarte.</p>
            </div>
            <div className="">
              <h2 className="">Getränke</h2>
              <ul>
                <li>
                  <div className="">
                    <div>
                      <h3>Ixsir Rouge</h3>
                      <p>
                        Weich und seidig,Eichenaroma und reifer schwarzer
                        Früchte
                      </p>
                    </div>
                  </div>
                  <div className="">€42.00</div>
                </li>
                <li>
                  <div className="">
                    <div>
                      <h3>Arak</h3>
                      <p>feiner Kräutergeschmack mit schönen Anisnoten</p>
                    </div>
                  </div>
                  <div className="">€5.50</div>
                </li>
                <li>
                  <div className="">
                    <div>
                      <h3>Almaza-Libanesisches Bier</h3>
                      <p>
                        Nr. 1 im Libanon,Zart und Mild mit einem hauch von Mais.
                        z.Z. ausverkauft.
                      </p>
                    </div>
                  </div>
                  <div className="">€4.00</div>
                </li>
                <li>
                  <div className="">
                    <div>
                      <h3>Chateau Musar Jeune</h3>
                      <p>Chardonnay, Vermentino & Viognier</p>
                    </div>
                  </div>
                  <div className="">€58.00</div>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="">
                <h2 className="">Menüs</h2>
                <ul>
                  <li>
                    <div className="">
                      <div>
                        <h3>Beiti 3-Gänge Menü</h3>
                        <p>Mesa, Hauptgericht Ihrer Wahl und Dessert</p>
                      </div>
                    </div>
                    <div className="">€37.50</div>
                  </li>
                  <li>
                    <div className="">
                      <div>
                        <h3>3-Gänge Lammrückenmenü</h3>
                        <p>
                          Mesa, Lammrückenfilet auf Joghurt-minz-sauce, Katayf
                        </p>
                      </div>
                    </div>
                    <div className="">€45,00</div>
                  </li>
                  <li>
                    <div className="">
                      <div>
                        <h3>Grillmenü</h3>
                        <p>Speisen Sie wie im Libanon, Ab 2 Personen</p>
                      </div>
                    </div>
                    <div className="">€37.50</div>
                  </li>
                  <li>
                    <div className="">
                      <div>
                        <h3>Weihnachtsmenü</h3>
                        <p>ab dem 01.11.2023</p>
                      </div>
                    </div>
                    <div className="">ab €36.00</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <p>
                <a href="" className="">
                  Speisekarte
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="cateringSection h-screen">
        <div className="grid grid-cols-2 ">
          <div className="bg-red-500">
            <img src="/michael-starkie-UnF992yroQo-unsplash.jpg"></img>
          </div>
          <div>
            <div className="">
              <div className="">
                <h2 className="">Catering & Partyservice</h2>
                <p className="">
                  Sie nennen uns Ihre Wünsche – wir erfüllen Sie!. Liebevoll und
                  frisch zubereitet beliefern wir Sie gerne mit Mittagessen und
                  Abendessen bei Anlässen jeder Art. Ob Firmenveranstaltungen,
                  Geburtstage, Hochzeiten, Weihnachtsfeiern oder Sonstiges –
                  Teilen Sie uns einfach den Umfang mit und wir kümmern uns
                  drum. Je nach Bedarf kümmern wir uns auch um die Ausstattung
                  (Gläser, Geschirr, Besteck, etc.). Unser stilvolles Restaurant
                  stellen wir Ihnen ebenso gerne für Ihre Anlässe zur Verfügung.
                  Unser Restaurant bietet Platz für 60 Personen für Empfang,
                  Hochzeiten, Geburtstage, Weihnachtsfeiern oder Präsentationen.
                  Gerne separieren wir das Restaurant wenn Sie eine kleinere
                  Gesellschaft empfangen möchten.
                </p>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="">
                  <h3>Weinkarte</h3>
                  <span className="">Unsere neue Weinkarte</span>
                  <p>
                    Hier finden Sie die Neue Weinkarte: Exlusive Weine aus dem
                    Libanon, Deutschland, Frankreich, Spanien etc.
                  </p>
                  <p>
                    <a href="" className="">
                      Weinkarte
                    </a>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h3>Buffet & Menüs</h3>
                  <span className="">'a la carte</span>
                  <p>
                    Von Mesa bis zu leckeren Desserts – unser Catering-Service
                    sorgt für die richtige Verpflegung auf jedem Event.
                  </p>
                  <p>
                    <a href="" className="">
                      Cateringkarte
                    </a>
                  </p>
                </div>
              </div>
              <div className="">
                <div className="">
                  <h3>To Go</h3>
                  <span className="">Speisen zum mitnehmen</span>
                  <p>
                    Alle Speisen zum Mitnehmen. Sie können gerne telefonisch
                    oder vor Ort bestellen.
                  </p>
                  <p>
                    <a href="" className="">
                      Speisekarte
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contactSection h-screen">
        <div className="grid grid-cols-2">
          <div className="bg-orange-500">
            <img src="/michael-starkie-UnF992yroQo-unsplash.jpg"></img>
          </div>
          <div>
            <h2 className="">Reservieren Sie einen Tisch</h2>

            <p>
              Für Catering-Anfragen oder Reservierungen ab 10 Personen rufen Sie
              uns gerne an:
            </p>
            <p>
              <a href="tel: +494069459970" className="">
                04069459970
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
