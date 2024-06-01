import Img from "../../assets/images/pastila.png";
import Img2 from "../../assets/images/couscous-boulettes-de-poulet.jpg";
import Img3 from "../../assets/images/Chabikia.png";
const ServicesData = [
  {
    id: 1,
    img: Img,
    name: "Pastilla sucrée",
    description:
      "La pastilla, également connue sous le nom de bastilla ou bstilla, est une spécialité marocaine emblématique, souvent servie lors de grandes occasions et de célébrations.",
  },
  {
    id: 2,
    img: Img2,
    name: "Couscous",
    description:
      "Le couscous aux boulettes de viande est un plat traditionnel et convivial, représentant la richesse et la diversité de la cuisine orientale.",
  },
  {
    id: 3,
    img: Img3,
    name: "Chabikia",
    description:
      "La chebakia estfrite et enrobée de miel, parfumée aux épices et à la fleur d'oranger. Sa forme unique et son goût sucré en font une friandise populaire, surtout pendant le mois de Ramadan.",
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
            <h1 className="text-5xl font-bold">Services</h1>
            <p className="text-s text-gray-400">
            Nos services incluent la livraison de plats traditionnels marocains, des assiettes de gâteaux à emporter, et des cosmétiques authentiques du Maroc, disponibles uniquement à Toulouse.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
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
                <div className="p-4 text-center h-[220px]">
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