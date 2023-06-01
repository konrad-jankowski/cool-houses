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
      </div>
    </div>
  );
};

export default MainSlider;
