import React from "react";

const BgFixed = () => {
  return (
    <section>
      <div className="p-8 md:p-32 py-32  font-bold text-black text-center bg-cover bg-bg-fixed bg-fixed grid grid-cols-1 md:grid-cols-2 h-screen">
        <div></div>
        <div className="bg-yellow bg-opacity-50 rounded-2xl p-6 h-min">
          <h2 className="text-3xl text-gray fadeIn">
            ¡Tenés que probarla!
          </h2>
        
        </div>
      </div>
    </section>
  );
};

export default BgFixed;
