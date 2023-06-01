import Image from "next/image";
import { IoTriangleOutline } from "react-icons/io5";

const images = [
  "https://sloneczne-chatki.pl/_thumb/1920x1080x80/banery/Atrakcje/snowy-peaks-g42ed2ba4e_1920_copy_1.jpg",
  "https://sloneczne-chatki.pl/_thumb/1920x1080x80/banery/Sloneczne-Chatki/108_knurow-domek.jpg",
  "https://sloneczne-chatki.pl/_thumb/1920x1080x80/banery/Sloneczne-Chatki/103_knurow-domek.jpg",
];

const MainSlider = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black/60 to-black/10 z-10" />
      <IoTriangleOutline
        className="absolute m-auto left-0 right-0 z-50 bottom-10  _floating cursor-pointer"
        size={42}
        color="white"
      />
      <Image src={images[1]} alt="images" fill />
      <div className="absolute ml-40 inset-0 text-white/90 z-20 flex justify-center flex-col ">
        <h1 className="text-6xl font-beautyFont tracking-wider">
          {" "}
          Domki z widokiem na Tatry
        </h1>
        <div className="w-[7rem] h-[2px] bg-white my-10" />
        <p className="max-w-[550px] leading-7">
          Magiczny wypoczynek w sercu Małopolski. Spędźcie niezapomniane chwile
          w miejscu, gdzie natura odsłania swoje najpiękniejsze oblicze.
          Zapraszamy do Słonecznych Chatek!
        </p>
        <div className="flex mt-8 font-beautyFont ">
          <div className="flex items-center bg-black/50 gap-4 pr-6 cursor-pointer hover:bg-primary hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl">01</span>
            <span className="pt-1">CZE</span>
          </div>
          <div className="flex items-center bg-black/50 gap-4 pr-4 hover:bg-primary hover:text-black cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-4"
            >
              <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
              <path
                fillRule="evenodd"
                d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-2xl">02</span>
            <span className="pt-1">CZE</span>
          </div>

          <button className="_button">REZERWUJ</button>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;
