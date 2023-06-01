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
      <section className="px-28 h-[100vh] flex flex-col relative overflow-x-hidden">
        <div className="absolute -right-[33rem] top-[50%] -translate-y-[40%] ">
          <img className="w-[78%] object-cover" src="/gora.png" alt="" />
        </div>
        <Heading title="Okolica" />
        <div className="flex items-center">
          <div className="basis-[50%]">
            <img
              src="https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/747x673/banery/Atrakcje/snowy-peaks-g42ed2ba4e_1920_copy_1.jpg"
              alt=""
              className="w-[80%] h-[95%] object-cover"
            />
          </div>
          <div className="basis-[24%] flex flex-col gap-8">
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
            <button className="_button2 mt-4">WIĘCEJ</button>
          </div>
        </div>
      </section>
      <section className="h-[150vh] px-28 mb-20">
        <Heading title="Domki" />
        <div className="mb-4 w-full h-[80vh]">
          <img
            src="https://sloneczne-chatki.pl/_thumb/1920x1080x80/img/slonecznechatki/rooms_types/035_knurow-domek.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-4">
          <div className="_shadow basis-[60%] flex justify-around items-center ">
            <div className="">
              <div className="font-beautyFont text-2xl mb-5">Domek 4</div>
              <div>
                <span className="text-primary">od </span>500 zł{" "}
                <span className="text-primary">/ noc</span>
              </div>
            </div>
            <div>
              <div className="flex gap-6 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                  />
                </svg>
                <span>90 m2</span>
              </div>
              <div className="flex gap-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                    clipRule="evenodd"
                  />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
                <span>max 6 os.</span>
              </div>
            </div>
            <div className="border-l-2 pl-10 py-4 border-primary grid grid-cols-3 gap-3">
              <div className="w-8 h-8 border border-primary"></div>
              <div className="w-8 h-8 border border-primary"></div>
              <div className="w-8 h-8 border border-primary"></div>
              <div className="w-8 h-8 border border-primary"></div>
              <div className="w-8 h-8 border border-primary"></div>
              <div className="w-8 h-8 border border-primary"></div>
            </div>
          </div>
          <div className="_shadow  basis-[40%] w-full h-[10rem] flex justify-center items-center gap-[10%]">
            <button className="_button2">SZCZEGÓŁY</button>
            <button className="_button">REZERWUJ</button>
          </div>
        </div>
      </section>
    </main>
  );
}
