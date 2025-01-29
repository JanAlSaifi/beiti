export default function AboutSection() {
  return (
    <section className="aboutSection h-screen overflow-x-hidden bg-[#1a1a1a]">
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
            ausgiebig zu bewirten, Fremde zu Freunden zu machen, gemeinsam
            essen, plaudern, sich entspannen,dies alles sind Charakterzüge, auf
            die die Libanesen stolz sind. Im Beiti wird diese Tradition
            sorgfältig gepflegt. Wer hierher kommt, freut sich nicht nur auf die
            unverfälschte, exzellente libanesische Küche, sondern auf eine
            Atmosphäre, die den Gast für ein paar Stunden aus dem hektischen
            Alltag in eine andere Welt entführt. Deswegen legt man im Beiti auch
            so großen Wert auf das Ambiente, das mit seinen freundlichen Farben
            und seiner geschmackvollen Einrichtung den modernen Libanon
            verkörpert: ein Land, das am Fortschritt teilnimmt, ohne seine
            Herkunft zu verleugnen Aber selbstverständlich bilden diese
            Äußerlichkeiten nur den Rahmen dessen, was den Gast im Beiti
            erwartet: Die herzliche Begrüßung, die persönliche Betreuung bei der
            Auswahl von Speisen und Getränken und eine kurze Einführung in die
            typisch arabische Esstechnik. Entdecken Sie also die libanesische
            Gastfreundschaft in der schönsten Stadt der Welt: Hamburg!
          </p>
          <p className="mt-5">
            <a href="#" className="text-[#b8860b] underline">
              Kontaktieren Sie uns
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
