import Image from "next/image";
export default function FavoritesSection() {
  const menuItems = [
    {
      title: "St. Thomas Gourmets Rouge",
      price: "37,00€",
      description:
        "Ein feiner Wein mit intensivem und komplexem Charakter. Die Früchte sind gut ausgereift mit weichen und seidigen Gerbstoffen.",
      backgroundImage: "/res_img_90.jpg",
    },
    {
      title: "Dajaj bel Tamer",
      price: "21,00€",
      description:
        "Marinierte Hähnchenbrust mit Kardamom auf Dattel-Rosmarin Sauce.",
      backgroundImage: "/res_img_2.jpg",
    },
    {
      title: "Falafel",
      price: "17,00€",
      description:
        "Frittierte Kichererbsen-Medaillons mit Sesam-Sauce und Salat.",
      backgroundImage: "/res_img_10.jpg",
    },
    {
      title: "Lammfilet",
      price: "28,50€",
      description: "Auf Granatapfel-Sauce mit Gemüse & Basmatireis.",
      backgroundImage: "/res_img_7.jpg",
    },
    {
      title: "Beiti Grillplatte",
      price: "26,50€",
      description:
        "Verschiedene Fleischsorten dazu Salat, Sumakbrot und Basmatireis.",
      backgroundImage: "/res_img_6.jpg",
    },
    {
      title: "Beiti Mesa",
      price: "20,50€",
      description:
        "Ein unvergesslicher Augen- & Gaumenschmaus, vegetarisch und vegan.",
      backgroundImage: "/res_img_9.jpg",
    },
  ];

  return (
    <section id="favorites" className="pb-10 flex">
      <div className="mx-10 py-4  ">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#d4af37]">
            Favoriten der Gäste
          </h2>
          <p className="text-lg text-[#f5f5f5] mt-4">
            Hier kommen unsere Top 6.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-12">
          {menuItems.map((item, index) => (
            <>
              <div
                key={index}
                className="bg-[#333333] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-56 bg-cover bg-center relative">
                  <Image
                    alt="Image of Food"
                    src={item.backgroundImage}
                    fill
                    sizes="auto"
                    className="object-cover"
                  ></Image>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#f5f5f5]">
                    {item.title}
                  </h3>
                  <span className="block text-lg font-bold text-yellow-600 mt-2">
                    {item.price}
                  </span>
                  <p className="text-[#f5f5f5] mt-4">{item.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
