import {AiOutlineInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="text-lgray body-font" id="servicios">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray" href="https://devzeppelin.ar" target="_blank" rel="noopener">
           
            <span className="ml-3 text-xl font-bold text-yellow">CriptoBeer</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">
           La mejor cerveza mendocina
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow tracking-widest text-xl mb-3">
              SERVICIOS/VENTA
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-lgray hover:text-gray-800">Botellas de 1 litro</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Botellas de 2 litros</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Alquiler de barriles</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Venta de Merchandaising</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-yellow tracking-widest text-lg mb-3">
              VARIEDADES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-lgray hover:text-gray-800">IPA</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Honey</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Barley Wine</a>
              </li>
              <li>
                <a className="text-lgray hover:text-gray-800">Porter</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2022 DevZeppelin —
            <a
              href="https://twitter.com/moonwatcher.dev"
              rel="noopener noreferrer"
              className="text-lgray ml-1"
              target="_blank"
            >
              @moonwatcher.dev
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-4xl gap-4">
          <a
            href="https://api.whatsapp.com/send?phone=5492612496071"
            target="_blank"
            rel="noopener"
          ><BsWhatsapp className="text-yellow"/></a>
            <a
            href="https://instagram.com/cripto.beer"
            target="_blank"
            rel="noopener"
          ><AiOutlineInstagram className="text-yellow"/></a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
