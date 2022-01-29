import React from "react";

const Testimonials = () => {
  return (
    <section id="variedades" className="text-lgray body-font">
      <h2 className="m-2 mt-24 text-center text-3xl text-gray">
        Variedades Destacadas
      </h2>
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/wine.png"
              />
              <h2 className="text-gray font-medium title-font tracking-wider text-xl mb-3">
               BARLEY WINE
              </h2>
             
              <p className="leading-relaxed">
               Cerveza fuerte, aromática con tonos de roble y whiskey, sabrosa y poderosa, elegante y deliciosa. ¡Animate a probar esta, nuestra especialidad!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow mt-6 mb-4"></span>
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/ipa.png"
              />
              <h2 className="text-gray font-medium title-font tracking-wider text-xl mb-3">
                IPA
              </h2>
              <p className="leading-relaxed">
               En su amargor encontrarás variedad de sabores que dejarán tu boca en el deleite por unos largos momentos. Nuestra IPA es especial, es fuerte, y bien fría va más allá de la delicia. ¿Que esperás para probar la mejor IPA del mercado?
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow mt-6 mb-4"></span>
             
            </div>
          </div>
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-2 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="/honey.png"
              />
              <h2 className="text-gray font-medium title-font tracking-wider text-xl mb-3">
               HONEY
              </h2>
              <p className="leading-relaxed">
               No solo el gusto a miel va a deleitar tu paladar, sino que su textura y aroma dulzón te dejarán cautivado. Solo probarla te va a sacar de la duda de qué cerveza artesanal logra mejor sus sabores y aromas. ¡Tenés que probarla!
              </p>
              <span className="inline-block h-1 w-10 rounded bg-yellow mt-6 mb-4"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
