import Image from "next/image";

export default function RecommendationSection() {
  return (
    <section id="recommendation" className="pb-10">
      <div className="bg-[#2b2b2b] rounded-lg shadow-lg mx-10 p-4">
        <div className="">
          <h2 className="text-4xl font-bold text-[#d4af37] py-4 text-center">
            Empfehlung des Chefs
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Image
              alt="Image of a the chef"
              src="/DerChef.jpg"
              width={250}
              height={250}
              className="m-5 object-cover rounded-full border-4 border-[#d4af37]"
            ></Image>

            <div className="flex flex-col text-center md:text-left gap-2 md:gap-4">
              <h3 className="text-2xl text-[#f5f5f5] font-semibold ">
                <span className="underline">
                  Lammhüftensteak auf Schafskäse-Thymian-Sauce
                </span>
              </h3>
              <p className="text-[#f5f5f5] leading-relaxed">
                Genießen Sie diesen Monat unser zartes Lammhüftensteak, perfekt
                gebraten und serviert auf einer aromatischen
                Schafskäse-Thymian-Sauce – eine harmonische Komposition voller
                mediterraner Aromen. <br /> Lassen Sie sich verwöhnen!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
