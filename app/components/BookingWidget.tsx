"use client";

import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";
import { pl } from "react-date-range/dist/locale";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { BsCalendar3 } from "react-icons/bs";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const BookingWidget = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="hidden lg:flex mt-8 font-beautyFont relative">
      <div className="flex">
        <div
          onClick={() => setOpen((open) => !open)}
          className="flex items-center bg-black/50 gap-4 pr-6 cursor-pointer transition duration-300 hover:bg-primaryLight hover:text-black"
        >
          <BsCalendar3 size={20} className="ml-4" />
          <span className="text-2xl">{`${format(range[0].startDate, "dd", {
            locale: pl,
          })}`}</span>
          <span className="pt-1">{`${format(range[0].startDate, "LLL", {
            locale: pl,
          }).toUpperCase()}`}</span>
        </div>
        <div
          onClick={() => setOpen((open) => !open)}
          className="flex items-center bg-black/50 gap-4 pr-6 cursor-pointer transition duration-300 hover:bg-primaryLight hover:text-black"
        >
          <BsCalendar3 size={20} className="ml-4" />
          <span className="text-2xl">{`${format(range[0].endDate, "dd", {
            locale: pl,
          })}`}</span>
          <span className="pt-1">{`${format(range[0].endDate, "LLL", {
            locale: pl,
          }).toUpperCase()}`}</span>
        </div>
        <button className="_button">REZERWUJ</button>
      </div>
      <div ref={refOne} className="absolute bottom-12">
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            showDateDisplay={false}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            rangeColors={["#961F1B"]}
            locale={pl}
          />
        )}
      </div>
    </div>
  );
};

export default BookingWidget;
