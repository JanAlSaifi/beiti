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
      <div className="relative flex flex-col h-full justify-center items-center">
        <h1 className="text-9xl font-bold mb-5">Beiti</h1>
        <h2 className="text-3xl italic text-neutral-500 dark:text-neutral-400 mb-8">
          feine libanesische Küche
        </h2>
      </div>
    </section>
  );
}
