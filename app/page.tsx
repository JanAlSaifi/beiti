import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="homeSection h-screen overflow-x-hidden">
        <div className="h-screen absolute inset-0">
          <img
            src="/michael-starkie.jpg"
            alt="Background Image"
            className="w-full h-full object-cover block blur-sm brightness-0"
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
          <div className=" inset-0">
            <img
              src="/michael-starkie.jpg"
              alt="Hintergrundbild"
              className="w-full h-screen object-cover filter blur-sm"
            ></img>
          </div>
          <div className="px-8 relative flex flex-col h-screen justify-center items-center">
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
    </>
  );
}
