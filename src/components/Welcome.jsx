import React from "react";

const Welcome = () => {
  return (
    <div className="min-h-screen min-w-full bg-hero bg-cover bg-left md:bg-center">
      <div className="flex gap-4 mx-2 justify-center p-2 pt-2 font-extrabold text-yellow textDark">
        <a href="#first-class">Inicio</a> •<a href="#variedades">Variedades</a>{" "}
        •<a href="#servicios">Servicios</a>
      </div>
      <div className="flex flex-col justify-center p-1 md:p-24 mx-0 md:mx-40 text-center">
        <div className="mainAbsolute mx-0">
          <img src="/logo.png" alw="criptobeer logo" className="textLight" />
          <h1 className="textDark text-xl md:text-4xl m-2 md:m-3 uppercase font-bold text-yellow drop-shadow-lg ">
            Cerveza Artesanal
          </h1>
          <h2 className="textDark text-lg md:text-2xl font-bold text-yellow uppercase">
            Coquimbito - Mendoza
          </h2>
        </div>
        <div className="flex classabsolute gap-4 md:gap-12 p-4 justify-center ">
          <a
            href="https://instagram.com/cripto.beer"
            target="_blank"
            rel="noopener"
          >
            <img src="/im.png" className="w-12 md:w-20 h-12 md:h-20" />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5492612496071"
            target="_blank"
            rel="noopener"
          >
            <img src="/wp.webp" className="w-12 md:w-20 h-12 md:h-20" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .textLight {
          text-shadow: 1px 2px 4px white;
        }
        .textDark {
          text-shadow: 1px 2px 4px black;
        }
        .classabsolute {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          width: 300px;
        }

        .mainAbsolute {
          position: absolute;
          top: 30%;
        }
      `}</style>
    </div>
  );
};

export default Welcome;
