import SavonNoirImg from "../../assets/images/black_soap.jpg";
import Vector from "../../assets/images/bea.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Cosmetic = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div
            data-aos="slide-up"
            data-aos-duration="300"
            className="container"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div>
                <img
                  src={SavonNoirImg}
                  alt="black soap img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-lg"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">
                 Nos Cosmétiques
                </h1>
                <p className="text-sm text-gray-500 tracking-wide leading-5">
                Découvrez l'élégance marocaine avec notre savon noir et son gant exfoliant, accompagnés du rouge à lèvres rassit pour une beauté authentique et naturelle.
                  <br />
                  <br />
                  Plongez dans l'art ancestral du soin de la peau avec notre savon noir marocain, un trésor de beauté utilisé depuis des siècles. Traditionnellement fabriqué à partir d'olives noires et d'huile d'olive, le savon noir est connu pour ses propriétés purifiantes et hydratantes. Accompagné de son gant exfoliant, appelé "kessa", ce rituel transforme votre routine de soin en une expérience luxueuse. Utilisé dans les hammams marocains, ces bains de vapeur traditionnels, le savon noir et le gant exfoliant travaillent ensemble pour éliminer les impuretés, renouveler les cellules de la peau et laisser une sensation de douceur incomparable. Intégrez ce rituel de beauté dans votre quotidien et découvrez la sérénité et la pureté des traditions marocaines.
                </p>
                <div className="flex gap-6">
                  <div>
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400" />
                  </div>
                  <div>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400" />
                  </div>
                  <div>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400" />
                  </div>
                </div>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                  Achetez maintenant 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cosmetic;