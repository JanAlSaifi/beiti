export default function CateringSection() {
  const eventCards = [
    {
      title: "Weinkarte",
      titleDescription: "Unsere neue Weinkarte",
      Description:
        "Hier finden Sie die neue Weinkarte: Exklusive Weine aus dem Libanon, Deutschland, Frankreich, Spanien etc.",
      linkTitle: "Weinkarte",
      href: "/pdf/Weinkarte.pdf",
    },
    {
      title: "Buffet & Menüs",
      titleDescription: "'a la carte",
      Description:
        "Von Mesa bis zu leckeren Desserts – unser Catering-Service sorgt für die richtige Verpflegung auf jedem Event.",
      linkTitle: "Cateringkarte",
      href: "/pdf/Catering.pdf",
    },
    {
      title: "To Go",
      titleDescription: "Speisen zum Mitnehmen",
      Description:
        "Alle Speisen zum Mitnehmen. Sie können gerne telefonisch oder vor Ort bestellen.",
      linkTitle: "Speisekarte",
      href: "/pdf/Speisekarte.pdf",
    },
  ];

  return (
    <section id="catering" className="pb-10">
      <div className="relative container mx-auto px-6 py-8 text-center">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-highlight mb-4">
            Catering & Partyservice
          </h2>
          <p className="text-lg text-mainText leading-relaxed">
            Sie nennen uns Ihre Wünsche – wir erfüllen sie! Liebevoll und frisch
            zubereitet beliefern wir Sie gerne mit Mittagessen und Abendessen
            bei Anlässen jeder Art. Ob Firmenveranstaltungen, Geburtstage,
            Hochzeiten, Weihnachtsfeiern oder Sonstiges – Teilen Sie uns einfach
            den Umfang mit und wir kümmern uns drum. Je nach Bedarf kümmern wir
            uns auch um die Ausstattung (Gläser, Geschirr, Besteck, etc.). Unser
            stilvolles Restaurant stellen wir Ihnen ebenso gerne für Ihre
            Anlässe zur Verfügung. Unser Restaurant bietet Platz für 60 Personen
            für Empfang, Hochzeiten, Geburtstage, Weihnachtsfeiern oder
            Präsentationen. Gerne separieren wir das Restaurant, wenn Sie eine
            kleinere Gesellschaft empfangen möchten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-mainText">
          {eventCards.map((event) => (
            <div
              key={event.title}
              className="bg-backgroundBox rounded-lg shadow-lg p-8 hover:shadow-[0_4px_15px_rgba(212,175,55,0.5)] transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-highlight mb-2">
                {event.title}
              </h3>
              <span className="block text-sm font-medium  mb-4">
                {event.titleDescription}
              </span>
              <p className=" leading-relaxed mb-6">{event.Description}</p>
              <a
                href={event.href}
                className="text-highlight border border-highlight rounded-lg py-2 px-4 hover:bg-highlight hover:text-[#1a1a1a] transition-colors"
              >
                {event.linkTitle}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
