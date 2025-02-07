import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="h-screen overflow-x-hidden relative">
      <div className="absolute inset-0">
        <Image
          src="/img/michael-starkie.jpg"
          alt="Background Image"
          fill
          className="brightness-50 object-cover"
        />
      </div>
      <div className="homepage relative flex flex-col h-screen justify-center items-center text-center px-4">
        <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-extrabold tracking-wide text-white drop-shadow-xl">
          Restaurant Beiti
        </h1>
        <h2 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] italic  mt-4 tracking-widest">
          Feine libanesische Küche
        </h2>
      </div>
    </section>
  );
}
