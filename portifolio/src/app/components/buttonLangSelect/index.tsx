import { useRef, useState } from "react";
import { ButtonLang, DivSelect, GlobeIcon, OptionSelect } from "./style";

export default function ButtonLangSelect() {  

  return (
    <DivSelect>
      <GlobeIcon />
      <ButtonLang>
        <OptionSelect>PT</OptionSelect>
        <OptionSelect>EN</OptionSelect>
      </ButtonLang>
    </DivSelect>
  );
}
