import Img from "../../assets/images/pastila.png";
import Img2 from "../../assets/images/couscous-boulettes-de-poulet.jpg";
import Img3 from "../../assets/images/tchakchouka-a-l-oeuf.jpg";
import Rfissa4 from "../../assets/images/rfissa.png";
import TajinePruneaux5 from "../../assets/images/tajine_pruneaux.png";
import TajineLegumes6 from "../../assets/images/tajine_legumes.png";
import PastillaPoisson7 from "../../assets/images/pastilla_poisson.png";
import TajineOlivePoulet8 from "../../assets/images/tagine-aux-pommes-de-terre-olives-et-citrons-confits.jpg";
import Zaalouk9 from "../../assets/images/zaalouk.png";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Pastilla sucrée",
    description:
      "Prix",
  },
  {
    id: 2,
    img: Img2,
    name: "Couscous",
    description:
      "Prix",
  },
  {
    id: 3,
    img: Img3,
    name: "Tchakchouka",
    description:
      "Prix",
  },
  {
    id: 4,
    img: Rfissa4,
    name: "Rfissa",
    description:
    "18$ pour 4 personnes",
  }, 
  {
    id: 5,
    img: TajinePruneaux5,
    name: "Tajine Pruneaux",
    description:
    "16$ pour 3 personnes",
  },
  {
    id: 6,
    img: TajineLegumes6,
    name: "Tajines Légumes" ,
    description:  "Prix",

  },
  {
    id: 7,
    img: PastillaPoisson7,
    name: "Pastilla au poisson" ,
    description: "Prix" ,
  },
  {
    id: 8,
    img: TajineOlivePoulet8,
    name: "Tajines Poulet aux Olives",
    description:  "Prix",
  },
  {
    id: 9,
    img: Zaalouk9,
    name: "Caviar d'aubergine",
    description: "Prix" ,
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-2xl bg-clip-text text-primary bg-gradient-to-r from-primary to-secondary ">
             Nos Services
            </p>
            <h1 className="text-5xl font-bold">Notre Menu</h1>
            <p className="text-s text-gray-400">
            Nos services incluent la livraison de plats traditionnels marocains, des assiettes de gâteaux à emporter, et des cosmétiques authentiques du Maroc, disponibles uniquement à Toulouse.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-24 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[110px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-5 text-center h-[220px]">
                  <div className="w-full ">
                  </div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-secondary duration-high text-sm ">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;