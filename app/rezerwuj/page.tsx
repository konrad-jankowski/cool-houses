import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDiscount } from "react-icons/md";
import { BsFillPeopleFill, BsPlayFill } from "react-icons/bs";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Packages from "../sections/Packages";

const Reservation = () => {
  return (
    <div className="px-14">
      <div className="flex gap-2 mt-10">
        <div>1. Termin</div>
        <div>2. Opcje</div>
        <div>3. Potwierdzenie</div>
      </div>
      <div className="my-6 flex gap-4">
        <div className="flex-1 border-[3px] border-neutral-400 rounded-md px-6 py-2 flex justify-between items-center transition duration-300 hover:border-secondary group cursor-pointer"></div>
        <div className="flex-1 border-[3px] border-neutral-400 rounded-md px-6 py-2 flex justify-between items-center transition duration-300 hover:border-secondary group">
          <div>
            <div className="py-2 text-neutral-400 transition duration-300 group-hover:text-secondary flex items-center gap-2 ">
              <BsFillPeopleFill size={20} />
              <span className="text-[15px]">DOROŚLI</span>
            </div>
            <div className="flex justify-between items-center gap-6 pb-2 ">
              <div className="flex items-center justify-center w-10 h-10 bg-primaryLight hover:bg-secondary cursor-pointer group/icon transition duration-300">
                <BiMinus
                  size={20}
                  className="fill-neutral-500  group-hover/icon:fill-white"
                />
              </div>
              <div className="text-4xl text-neutral-500">2</div>
              <div className="flex items-center justify-center w-10 h-10 bg-primaryLight hover:bg-secondary cursor-pointer group/icon transition duration-300">
                <BiPlus
                  size={20}
                  className="fill-neutral-500 group-hover/icon:fill-white"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="py-2 text-neutral-400 text-[15px] transition duration-300 group-hover:text-secondary">
              DOSTAWKI
            </div>
            <div className="flex justify-between items-center gap-6 pb-2 ">
              <div className="flex items-center justify-center w-10 h-10 bg-primaryLight hover:bg-secondary cursor-pointer group/icon transition duration-300">
                <BiMinus
                  size={20}
                  className="fill-neutral-500  group-hover/icon:fill-white"
                />
              </div>
              <div className="text-4xl text-neutral-500">0</div>
              <div className="flex items-center justify-center w-10 h-10 bg-primaryLight hover:bg-secondary cursor-pointer group/icon transition duration-300">
                <BiPlus
                  size={20}
                  className="fill-neutral-500 group-hover/icon:fill-white"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="py-2 text-neutral-400 text-[15px] transition duration-300 group-hover:text-secondary flex gap-2">
              <MdDiscount size={20} />
              <span className="text-[15px]">KOD RABATOWY</span>
            </div>
            <div className="flex justify-between items-center gap-6 pb-2">
              <div className=" h-10 w-[12rem] bg-slate-400 text-neutral-500 relative _shadow">
                <input
                  type="text"
                  className="w-full h-full px-5 outline-secondary"
                  placeholder="TWÓJ KOD"
                />
                <div className="absolute right-0 px-2 bg-secondary top-0 h-full flex justify-center items-center ">
                  <BsPlayFill size={20} fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Packages />
    </div>
  );
};

export default Reservation;
