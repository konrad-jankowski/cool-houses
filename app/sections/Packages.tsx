import Heading from "../components/Heading";

const Packages = () => {
  return (
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
        </div>
        <div className="basis-[62%] w-full h-full">
          <img
            src="https://img.hotelsystems.pl/777x492/img/slonecznechatki/offers/antonino-visalli-1nbgyxgpgu-unsplash.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <button className="_button2 mt-16 self-center">ZOBACZ WIĘCEJ</button>
    </section>
  );
};

export default Packages;
