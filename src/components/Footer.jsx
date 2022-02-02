import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="text-yellow body-font bg-custom-footer" id="servicios">
      <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <img
            className="flex justify-center rounded-3xl"
            src="/new-logo.jpg"
          />
          <span className="inline-flex text-center p-4 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-4xl gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=5492612496071"
              target="_blank"
              rel="noopener"
            >
              <BsWhatsapp className="text-yellow" />
            </a>
            <a
              href="https://instagram.com/cripto.beer"
              target="_blank"
              rel="noopener"
            >
              <AiOutlineInstagram className="text-yellow" />
            </a>
          </span>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-2/3 w-full px-4">
            <h2 className="title-font font-medium text-lyellow tracking-widest text-xl mb-3">
              SERVICIOS/VENTA
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>Botellas de 1 litro</a>
              </li>
              <li>
                <a>Botellas de 2 litros</a>
              </li>
              <li>
                <a>Alquiler de barriles</a>
              </li>
              <li>
                <a>Venta de Merchandaising</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-lyellow tracking-widest text-lg mb-3">
              VARIEDADES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a>IPA</a>
              </li>
              <li>
                <a>Honey</a>
              </li>
              <li>
                <a>Barley Wine</a>
              </li>
              <li>
                <a>Porter</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <p className="text-gray-500 text-sm text-center sm:text-left mt-8">
          © 2022 DevZeppelin —
          <a
            href="https://twitter.com/moonwatcher.dev"
            rel="noopener noreferrer"
            className="text-yellow ml-1"
            target="_blank"
          >
            @moonwatcher.dev
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
