"use client";

import SectionContainer from "./SectionContainer";
import SectionHead from "./SectionHead";
import Mic from "./icons/Mic";
import Piano from "./icons/Piano";
import React from "react";

function Performers() {
  return (
    <SectionContainer backgroundColor="white" nextBackgroundColor="#f2ebe6">
      <SectionHead topLeftIcon={<Mic />} topRightIcon={<Piano />}>
        出演者
      </SectionHead>
    </SectionContainer>
  );
}

export default Performers;
