import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="homeSection h-screen">
        <div className="h-full absolute inset-0">
          <img
            src="/michael-starkie.jpg"
            alt="Background Image"
            className="w-full h-full object-cover filter blur-sm"
          ></img>
        </div>
        <div className="relative flex flex-col h-screen justify-center items-center">
          <h1 className="text-9xl font-bold mb-5">Beiti</h1>
          <h2 className="text-3xl italic text-neutral-500 dark:text-neutral-400 mb-8">
            feine libanesische Küche
          </h2>
        </div>
      </section>
    </>
  );
}
