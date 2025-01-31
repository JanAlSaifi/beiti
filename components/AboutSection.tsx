export default function AboutSection() {
  return (
    <section className="aboutSection h-screen pb-8">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="hidden md:block lg:w-2/3 h-full">
          <img
            src="/slide_1.jpg"
            alt="slider image"
            className="w-full h-full object-cover blur-xs brightness-50"
          />
        </div>

        <div className=" w-full lg:w-1/3 flex flex-col justify-center items-center flex-1">
          <div className="bg-[#2b2b2b] rounded-lg m-10 p-4 shadow-lg text-center">
            <h2 className="text-5xl text-[#f5f5f5] font-bold mb-6">Über uns</h2>
            <p className="text-[#f5f5f5] text-lg leading-relaxed">
              Gastfreundschaft hat im Libanon Tradition – Gäste bewirten, Fremde
              zu Freunden machen. Im <strong>Beiti</strong> leben wir diese
              Werte mit authentischer Küche und einladender Atmosphäre.
              <br />
              <br />
              Unser Ambiente verbindet Tradition mit Moderne, inspiriert vom
              Libanon. Neben exzellentem Essen erwarten Sie herzliche Begrüßung
              und persönliche Betreuung.
              <br />
              <br />
              Erleben Sie libanesische Gastfreundschaft in Hamburg!
            </p>
            <p className="mt-6">
              <a
                href="#"
                className="text-[#d4af37] underline font-medium hover:text-[#b8860b] transition-colors duration-300"
              >
                Kontaktieren Sie uns
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
