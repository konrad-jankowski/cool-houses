import React from "react";
import Heading from "../components/Heading";

export const About = () => {
  return (
    <section
      id="about"
      className="px-4 lg:px-28 lg:h-[80vh] flex flex-col lg:flex-row items-center "
    >
      <div className="flex-1 h-[85%] lg:pr-20 order-1 lg:order-none">
        <Heading title="O Nas" />
        <h2 className=" mb-6 font-bold">
          Słoneczne Chatki – relaks z widokiem na całą panoramę Tatr
        </h2>
        <p className="leading-7">
          Słoneczne Chatki to wyjątkowe miejsce na mapie Małopolski. W Knurowie
          w powiecie nowotarskim na Gości czeka pięć{" "}
          <b>przestronnych, komfortowo wyposażonych, dwupoziomowych domków</b> z
          pełnym wyposażeniem. Z każdego z nich rozpościera się{" "}
          <b>spektakularny widok</b> na całe Tatry, Zalew Czorsztyński i
          przepiękne, zielone wzgórza. To idealne miejsce do „naładowania
          baterii”. Z dala od zgiełku, hałasu i tłumów turystów. Blisko
          prawdziwej natury, która zachwyca przez cały rok. Tu czas płynie
          wolniej. Po prostu.
        </p>
      </div>
      <div
        className="flex bg-black/20 w-[100px] h-[85%] mt-12 mr-1.5"
        style={{
          backgroundImage:
            "url('https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/850x560/banery/Sloneczne-Chatki/103_knurow-domek.jpg')",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="flex-1 h-[85%]">
        <img
          src="https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/850x560/banery/Sloneczne-Chatki/103_knurow-domek.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};
