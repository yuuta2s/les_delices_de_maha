import React, { useState } from "react";
import CouscousBoeuf1 from "../../assets/images/couscous-boeuf.jpg";
import TagineOlivesImg2 from "../../assets/images/tagine-aux-pommes-de-terre-olives-et-citrons-confits.jpg";
import TchakchoukaImg3 from "../../assets/images/tchakchouka-a-l-oeuf.jpg";
import Vector from "../../assets/images/vector_hero_section.png";

const ImageList = [
  {
    id: 1,
    img: CouscousBoeuf1, 
  },
  {
    id: 2,
    img: TagineOlivesImg2,
  },
  {
    id: 3,
    img: TchakchoukaImg3,
  },
];

const Hero = () => {
  const [imageId, setImageId] = useState(CouscousBoeuf1);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div
      className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
      style={bgImage}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div
            data-aos="zoom-out"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Découvrez{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Les Délices de
              </span>{" "}
              Maha
            </h1>
            <p className="text-sm">
              Plongez dans l'authenticité du Maroc avec nos plats savoureux et nos desserts exquis. Commandez maintenant et laissez vos papilles voyager!
            </p>
            <div>
              <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                Commandez maintenant !
              </button>
            </div>
          </div>
          {/* Image section */}
          <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img
                data-aos="zoom-in"
                data-aos-duration="300"
                data-aos-once="true"
                src={imageId}
                alt="Plat"
                className="w-[300px] sm:w-[450px] sm:scale-125  mx-auto spin"
              />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  data-aos="zoom-in"
                  data-aos-duration="400"
                  data-aos-once="true"
                  src={item.img}
                  onClick={() => setImageId(item.img)}
                  alt="Plat miniature"
                  className="max-w-[80px] h-[80px] object-contain inline-block hover:scale-105 duration-200 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
