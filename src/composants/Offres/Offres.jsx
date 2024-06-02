import React from 'react';
import AssietteImg from '../../assets/images/assortimentdessert.png';
import GateauxImg from '../../assets/images/gateaux-removebg-preview.png';
const Offres = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-5xl font-bold">Offres spéciales fêtes</h1>
            <p className="text-s text-gray-400 my-7">
              Célébrez les moments sacrés d'Eid et de Ramadan avec nos somptueuses assiettes de gâteaux marocains. Offrez à vos proches des douceurs authentiques, disponibles exclusivement pendant ces fêtes religieuses, et apportez une touche d'exotisme et de tradition à vos célébrations.
            </p>
          </div>
          <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
            <div data-aos="slide-up" data-aos-duration="300" className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Image section */}
                <div>
                  <img
                    src={AssietteImg}
                    alt="assortiment de desserts img"
                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-lg"
                  />
                  <p className="text-2xl font-bold flex justify-center my-4">Spécial Eid Aïd al-Adha
                </p>
                <p className="text-xl flex justify-center">Prix: 45$ pour 20 pièces</p>

                </div>
                <div>
                  <img
                    src={GateauxImg}
                    alt="assortiment de desserts img"
                    className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] rounded-lg"
                  />
                    <p className="text-2xl font-bold flex justify-center my-4">Spécial Ramadan
                </p>
                <p className="text-xl flex justify-center">Prix: 25$ pour 20 pièces</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Offres;
