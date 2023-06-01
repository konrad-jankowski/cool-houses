import React from "react";

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  const firstLetter = title.slice(0, 1);
  const rest = title.slice(1);

  return (
    <div>
      <h1 className="text-5xl font-beautyFont tracking-widest	">
        <span className="text-primary text-9xl ">{firstLetter}</span>
        {rest}
      </h1>
      <div className="my-[30px] bg-primary w-[6rem] h-[2.2px]" />
    </div>
  );
};

export default Heading;
