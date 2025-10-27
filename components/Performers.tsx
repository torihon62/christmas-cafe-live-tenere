/* eslint-disable @next/next/no-img-element */
"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import Mic from "./icons/Mic";
import Piano from "./icons/Piano";
import McImg from "./assets/Mc.jpg";
import HashizumeImg from "./assets/_hashizume.jpg";
import TsukaTImg from "./assets/_tsuka-t.jpg";

function Performers() {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#f2ebe6">
      <SectionHead topLeftIcon={<Mic />} topRightIcon={<Piano />}>
        出演者
      </SectionHead>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center justify-center mt-4">
          <img className="rounded-full" src={McImg.src} alt="hashizume" />
          <p className="mt-4 text-lg">Mc Gilbert</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <img
            className="rounded-full"
            src={HashizumeImg.src}
            alt="hashizume"
          />
          <p className="mt-4 text-lg">橋爪 紋佳</p>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <img className="rounded-full" src={TsukaTImg.src} alt="hashizume" />
          <p className="mt-4 text-lg">つかT</p>
        </div>
      </div>
    </SectionContainer>
  );
}

export default Performers;
