"use client";
import React, { useState } from "react";
import Theinfo from "./Theinfo";
import Image from "next/image";
import ChartButton from "./Chartbutton";

const Well = () => {
  const [openIndex, setopenIndex] = useState(0);
  const handleToggle = (index) => {
    setopenIndex(index);
  };
  return (
    <div className="flex flex-col gap-8">
      <div className="grid pt-5 px-4 grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <Theinfo className="p-2" title="well_id" value="# id">
          <Image
            src={"/icon/oil-pump.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width="20"
            height="22"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </Theinfo>
        <Theinfo title="Manifold" value="# id">
          <Image
            src={"/icon/manifold.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width="20"
            height="22"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </Theinfo>
        <Theinfo title="Sous manifold" value="# id">
          <Image
            src={"/icon/tanks.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width="20"
            height="22"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </Theinfo>
        <Theinfo title="Type" value="# id">
          <Image
            src={"/icon/energy.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            width="20"
            height="22"
            style={{
              width: "auto",
              height: "auto",
            }}
          />
        </Theinfo>
      </div>
      <div className="flex px-4 flex-col items-center w-full h-auto">
        {["Chart 1", "Chart 2", "Chart 3"].map((label, index) => (
          <ChartButton
            key={index}
            label={label}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Well;
