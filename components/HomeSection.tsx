import Image from "next/image";

export default function HomeSection() {
  return (
    <section className="homeSection h-screen overflow-x-hidden relative">
      <div className="absolute inset-0">
        <Image
          src="/michael-starkie.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="brightness-50"
        />
      </div>
      <div className="relative flex flex-col h-screen justify-center items-center text-center px-4">
        <h1 className="font-sans text-[12vw] md:text-[10vw] lg:text-[8vw] font-extrabold tracking-wide text-white drop-shadow-xl">
          Restaurant Beiti
        </h1>
        <h2 className="text-[5vw] md:text-[3vw] lg:text-[2.5vw] italic text-neutral-300 dark:text-neutral-400 mt-4 tracking-widest">
          Feine libanesische Küche
        </h2>
      </div>
    </section>
  );
}
