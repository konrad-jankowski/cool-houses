import React from "react";
import Heading from "../components/Heading";

export const Area = () => {
  return (
    <section className="px-4 lg:px-28  flex flex-col relative overflow-hidden">
      <div className="hidden lg:block absolute -right-[33rem] top-[50%] -translate-y-[40%] ">
        <img className="w-[80%] object-cover" src="/gora.png" alt="" />
      </div>
      <Heading title="Okolica" />
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:basis-[50%] w-[calc(100%+2rem)] mb-4 lg:mb-0">
          <img
            src="https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/747x673/banery/Atrakcje/snowy-peaks-g42ed2ba4e_1920_copy_1.jpg"
            alt=""
            className="w-full lg:w-[80%] h-[95%] object-cover"
          />
        </div>
        <div className="basis-[24%] px-10 lg:px-0 flex flex-col gap-8">
          <h4 className="font-semibold">
            Noclegi z widokiem na Tatry w spokojnej okolicy
          </h4>
          <p className="z-10">
            Marzy Wam się wypoczynek w górach, ale chcecie uniknąć tłumów i
            zgiełku największych tatrzańskich kurortów? Domki w Knurowie to
            strzał w dziesiątkę. Zielona, spokojna okolica i spektakularna
            panorama na Tatry, Gorce i Zalew Czorsztyński to klucz do
            prawdziwego odpoczynku.
          </p>
          <button className="_button2 mt-4 mx-auto">WIĘCEJ</button>
        </div>
      </div>
    </section>
  );
};
