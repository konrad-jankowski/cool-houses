import Image from "next/image";
import MainSlider from "./components/Main/MainSlider";
import Heading from "./components/Heading";
import Button from "./components/Button";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <section className="px-28 h-[80vh] flex items-center ">
        <div className="flex-1 h-[85%] pr-20">
          <Heading title="O Nas" />
          <h2 className=" mb-6 font-bold">
            Słoneczne Chatki – relaks z widokiem na całą panoramę Tatr
          </h2>
          <p className="leading-7">
            Słoneczne Chatki to wyjątkowe miejsce na mapie Małopolski. W
            Knurowie w powiecie nowotarskim na Gości czeka pięć{" "}
            <b>przestronnych, komfortowo wyposażonych, dwupoziomowych domków</b>{" "}
            z pełnym wyposażeniem. Z każdego z nich rozpościera się{" "}
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
        <div className="flex-1 bg-red-500 h-[85%]">
          <img
            src="https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/850x560/banery/Sloneczne-Chatki/103_knurow-domek.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      <section className="px-28 h-[110vh] flex flex-col ">
        <Heading title="Pakiety" />
        <div className="flex gap-5 h-[58%] font-beautyFont">
          <div className="basis-[38%] border-2 border-primary w-full h-full flex flex-col justify-center items-center gap-4">
            <h3 className="text-4xl ">Oferta Weekendowa</h3>
            <div className="w-[6rem] h-[2px] bg-primary my-6" />
            <div>3 dni</div>
            <div>
              <span className="text-2xl text-primary">od 500 zł /</span> noc
            </div>
            <Button />
          </div>
          <div className="basis-[62%] w-full h-full">
            <img
              src="https://img.hotelsystems.pl/777x492/img/slonecznechatki/offers/antonino-visalli-1nbgyxgpgu-unsplash.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <button className="button2 mt-16 self-center">ZOBACZ WIĘCEJ</button>
      </section>
      <section className="px-28 h-[100vh] flex flex-col">
        <Heading title="Okolica" />
      </section>
    </main>
  );
}
