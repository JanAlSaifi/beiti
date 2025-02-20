import Image from "next/image";

export default function RecommendationSection() {
  return (
    <section id="recommendation" className="pb-10">
      <div className="bg-backgroundBox rounded-lg shadow-lg mx-10 p-4">
        <div className="">
          <h2 className="text-4xl font-bold text-highlight py-4 text-center">
            Empfehlung des Chefs
          </h2>
          <div className="flex flex-col items-center  md:flex-row md:items-center  gap-2">
            <div className="flex flex-1 justify-center">
              <Image
                alt="Image of the chef"
                src="/img/DerChef.jpg"
                width={250}
                height={250}
                className="object-cover rounded-full border-4 border-highlight"
              />
            </div>
            <div className="flex flex-col text-mainText gap-2 md:gap-4 items-left text-left flex-1">
              <h3 className="text-2xl font-semibold">
                <span className="underline">
                  Lammhüftensteak auf Schafskäse-Thymian-Sauce
                </span>
              </h3>
              <p className="leading-relaxed">
                Genießen Sie diesen Monat unser zartes Lammhüftensteak, perfekt
                gebraten und serviert auf
                <br />
                einer aromatischen Schafskäse-Thymian-Sauce – eine harmonische
                Komposition voller mediterraner Aromen.
                <br /> Lassen Sie sich verwöhnen!
              </p>
            </div>
            <div className="flex flex-1 justify-center">
              <Image
                alt="Image of the chef"
                src="/img/LRF.jpg"
                width={250}
                height={250}
                className="object-cover rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
