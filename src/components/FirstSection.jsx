import React from "react";
import { BiBeer } from "react-icons/bi";
import { BsStarHalf } from "react-icons/bs";
import { MdOutlineWbTwilight } from "react-icons/md";

const FirstSection = () => {
  return (
    <section id="first-class" className="text-yellow body-font">
      <h2 className="m-2 mt-24 text-center text-3xl">
        ¿Qué hace a esta cerveza tan especial?
      </h2>
      <div className="container px-5 py-12 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="cripto beer logo cerveza artesanal premium"
            className="object-cover object-center h-full w-full rounded-3xl border-2 border-gray"
            src="/new-logo.webp"
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <BiBeer className="text-2xl m-2" />

            <div className="flex-grow">
              <h2 className="text-gray text-lg title-font font-black mb-3">
                Calidad Premium
              </h2>
              <p className="leading-relaxed text-base text-lgray">
                Esta cerveza se caracteriza por la alta caldiad de sus
                ingredientes y la fina dedicación en cada paso de su
                elaboración... ¡Dejá que Criptobeer caautive tu paladar!
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <BsStarHalf className="text-2xl m-2" />
            <div className="flex-grow">
              <h2 className="text-gray text-lg title-font font-black mb-3">
                Excelencia
              </h2>
              <p className="leading-relaxed text-base text-lgray">
                En cada paso, en cada detalle, demostramos que la producción de
                CriptoBeer se hace con toda la dedicación necesaria para dar a
                luz un producto de priomera caldiad
              </p>
            </div>
          </div>
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <MdOutlineWbTwilight className="m-2 text-2xl" />
            <div className="flex-grow">
              <h2 className="text-gray text-lg title-font font-black mb-3">
                Innovación
              </h2>
              <p className="leading-relaxed text-base text-lgray">
                Estamos en constante proceso de aprendizaje para lograr mejorar la calidad de nuestra cerveza, y también nos atrevemos a llevar a producción recetas únicas e irrepetibles. ¿Te sumás al desafío CriptoBeer?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
