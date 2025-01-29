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
  );
}
