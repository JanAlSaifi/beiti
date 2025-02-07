export default function AboutSection() {
  return (
    <section id="aboutSection" className="pb-10">
      <div className="flex flex-col lg:flex-row w-full h-full">
        <div className="hidden md:block lg:w-2/3 h-full p-2 ">
          <img
            src="/img/BeitiFrontBreit.jpg"
            alt="slider image"
            className="w-full h-full object-cover blur-xs brightness-50 rounded-lg"
          />
        </div>

        <div className=" w-full lg:w-1/3 flex flex-col justify-center items-center flex-1">
          <div className="bg-backgroundBox rounded-lg m-10 p-4 shadow-lg text-center">
            <h2 className="text-5xl text-highlight font-bold mb-6">Über uns</h2>
            <p className="text-lg leading-relaxed">
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
            <p className="mt-6">Kontaktieren Sie uns:</p>
            <p className="mt-6">
              <a
                href="mailto:info@beiti-hamburg.de"
                className="text-highlight underline font-medium hover:text-textHover transition-colors duration-300"
              >
                info@beiti-hamburg.de
              </a>
            </p>
            <p className="mt-6">
              <a
                href="tel:+4940 69459970"
                className="text-highlight underline font-medium hover:text-textHover transition-colors duration-300"
              >
                040 69459970
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
