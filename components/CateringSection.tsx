export default function CateringSection() {
  return (
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
              Geburtstage, Hochzeiten, Weihnachtsfeiern oder Sonstiges – Teilen
              Sie uns einfach den Umfang mit und wir kümmern uns drum. Je nach
              Bedarf kümmern wir uns auch um die Ausstattung (Gläser, Geschirr,
              Besteck, etc.). Unser stilvolles Restaurant stellen wir Ihnen
              ebenso gerne für Ihre Anlässe zur Verfügung. Unser Restaurant
              bietet Platz für 60 Personen für Empfang, Hochzeiten, Geburtstage,
              Weihnachtsfeiern oder Präsentationen. Gerne separieren wir das
              Restaurant, wenn Sie eine kleinere Gesellschaft empfangen möchten.
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
                Von Mesa bis zu leckeren Desserts – unser Catering-Service sorgt
                für die richtige Verpflegung auf jedem Event.
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
  );
}
