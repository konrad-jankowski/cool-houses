import Image from "next/image";
import MainSlider from "./components/Main/MainSlider";
import Heading from "./components/Heading";
import { FaShower, FaDesktop } from "react-icons/fa";
import { GiTowel, GiKitchenKnives, GiLighter } from "react-icons/gi";
import { IoWifi } from "react-icons/io5";
import Accessibility from "./components/Accessibility";
import Packages from "./sections/Packages";

export default function Home() {
  const accessibility = [
    { name: "tv", icon: FaDesktop },
    { name: "wifi", icon: IoWifi },
    { name: "dryer", icon: GiLighter },
    { name: "bath", icon: FaShower },
    { name: "towels", icon: GiTowel },
    { name: "kitchen", icon: GiKitchenKnives },
  ];

  return (
    <main>
      <MainSlider />
      <section className="px-4 lg:px-28 lg:h-[80vh] flex flex-col lg:flex-row items-center ">
        <div className="flex-1 h-[85%] lg:pr-20 order-1 lg:order-none">
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
      <Packages />
      <section className="px-4 lg:px-28 h-[100vh] flex flex-col relative overflow-x-hidden">
        {/* <div className="absolute -right-[33rem] top-[50%] -translate-y-[40%] ">
          <img className="w-[78%] object-cover" src="/gora.png" alt="" />
        </div> */}
        <Heading title="Okolica" />
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:basis-[50%] w-[calc(100%+2rem)] mb-4 lg:mb-0">
            <img
              src="https://thumbs.hotelsystems.pl/slonecznechatki/_thumb/747x673/banery/Atrakcje/snowy-peaks-g42ed2ba4e_1920_copy_1.jpg"
              alt=""
              className="w-full lg:w-[80%] h-[95%] object-cover"
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
            <button className="_button2 mt-4 mx-auto">WIĘCEJ</button>
          </div>
        </div>
      </section>
      <section className="h-[150vh] px-4 lg:px-28">
        <Heading title="Domki" />
        <div className="lg:mb-4 w-full h-[40vh] lg:h-[80vh]">
          <img
            src="https://sloneczne-chatki.pl/_thumb/1920x1080x80/img/slonecznechatki/rooms_types/035_knurow-domek.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="_shadow basis-[60%] py-6 lg:py-0 flex flex-col px-4 lg:px-0 lg:flex-row justify-around items-center ">
            <div className="">
              <div className="font-beautyFont text-2xl mb-5">Domek 4</div>
              <div>
                <span className="text-primary">od </span>500 zł{" "}
                <span className="text-primary">/ noc</span>
              </div>
            </div>
            <div className="flex lg:flex-col gap-10 lg:gap-0 mt-4 lg:mt-4 flex-row justify-between">
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
            <div className="lg:border-l-2 lg:pl-10 py-4 border-primary grid lg:grid-cols-3 grid-cols-6 gap-3">
              {accessibility.map((item) => {
                return <Accessibility icon={item.icon} name={item.name} />;
              })}
            </div>
            <div className="flex basis-[40%] w-full h-[10rem] lg:hidden justify-center items-center gap-[6%]">
              <button className="_button2">SZCZEGÓŁY</button>
              <button className="_button">REZERWUJ</button>
            </div>
          </div>
          <div className="_shadow hidden   basis-[40%] w-full h-[10rem] lg:flex justify-center items-center gap-[10%]">
            <button className="_button2">SZCZEGÓŁY</button>
            <button className="_button">REZERWUJ</button>
          </div>
        </div>
      </section>
    </main>
  );
}
