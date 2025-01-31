import Image from "next/image";

export default function MenuSection() {
  const drinksMenu = [
    {
      title: "Ixsir Rouge",
      price: "42.00€",
      description: "Weich und seidig, Eichenaroma und reifer schwarzer Früchte",
      backgroundImage: "/res_img_1.jpg",
    },
    {
      title: "Arak",
      price: "5.50€",
      description: "Weich und seidig, Eichenaroma und reifer schwarzer Früchte",
      backgroundImage: "/IMG_20210928_124523.jpg",
    },
    {
      title: "Almaza - das libanesisches Bier",
      price: "4.00€",
      description:
        "Nr. 1 im Libanon,Zart und Mild mit einem hauch von Mais. z.Z. leider ausverkauft",
      backgroundImage: "/res_img_70.jpg",
    },
    {
      title: "Château Musar Jeune",
      price: "58.00€",
      description:
        "Ein lebendiger, fruchtbetonter Wein aus dem Libanon, der mit mediterraner Frische und eleganter Struktur begeistert.",
      backgroundImage: "/res_img_50.jpg",
    },
  ];
  const foodMenu = [
    {
      title: "Beiti 3-Gänge Menü",
      price: "37.50€",
      description: "Mesa, Hauptgericht Ihrer Wahl und Dessert",
      backgroundImage: "/IMG_20210922_223236.jpg",
    },
    {
      title: "3-Gänge Lammrückenmenü",
      price: "45.00€",
      description: "Mesa, Lammrückenfilet auf Joghurt-minz-sauce, Katayf",
      backgroundImage: "/res_img_7.jpg",
    },
    {
      title: "Grillmenü",
      price: "37.50€",
      description: "Speisen Sie wie im Libanon, Ab 2 Personen",
      backgroundImage: "/res_img_6.jpg",
    },
  ];

  return (
    <section className="">
      <div className="bg-[rgb(26,26,26)] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#d4af37]">
              Aus der Speisekarte
            </h2>
            <p className="text-[#f5f5f5] text-lg">
              Weiteres aus der Speise- & Getränkekarte.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-3xl font-bold text-[#d4af37] mb-6">
                Getränke
              </h3>
              <ul className="space-y-6">
                {drinksMenu.map((item, index) => (
                  <>
                    <li
                      key={index}
                      className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 relative">
                        <Image
                          alt="Image of a Drink"
                          src={item.backgroundImage}
                          width={96}
                          height={96}
                          className="object-cover rounded-lg"
                        ></Image>
                        <div>
                          <h4 className="text-xl font-semibold text-[#f5f5f5] mb-2">
                            {item.title}
                          </h4>
                          <p className="text-[#bbbbbb]">{item.description}</p>
                        </div>
                        <span className="text-lg font-bold text-[#d4af37] text-center w-20">
                          {item.price}
                        </span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#d4af37] mb-6">Menüs</h3>
              <ul className="space-y-6">
                {foodMenu.map((item, index) => (
                  <>
                    <li
                      key={index}
                      className="bg-[#2b2b2b] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-center gap-4 relative">
                        <Image
                          alt="Image of Menus"
                          src={item.backgroundImage}
                          width={96}
                          height={96}
                          className="object-cover rounded-lg"
                        ></Image>
                        <div>
                          <h4 className="text-xl font-semibold text-[#f5f5f5] mb-2">
                            {item.title}
                          </h4>
                          <p className="text-[#bbbbbb]">{item.description}</p>
                        </div>
                        <span className="text-lg font-bold text-[#d4af37] text-center w-20">
                          {item.price}
                        </span>
                      </div>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a
              href="/Speisekarte.pdf"
              className="text-[#d4af37] border border-[#d4af37] rounded-lg py-3 px-6 hover:bg-[#d4af37] hover:text-[#1a1a1a] transition-colors"
            >
              Speisekarte ansehen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
