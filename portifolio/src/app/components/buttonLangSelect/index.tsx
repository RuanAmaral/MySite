import { useRef, useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ButtonLang,
  GlobeIcon,
  InsideValue,
} from "./style";

export default function ButtonLangSelect() {
  const [selectedArrow, setSelectedArrow] = useState(true);

  const openBox = () => {
    selectedArrow ? setSelectedArrow(false) : setSelectedArrow(true);
  };

  return (
    <ButtonLang
      onClick={() => {
        openBox();
      }}
    >
      <GlobeIcon />
      <InsideValue>PT</InsideValue>
      {selectedArrow ? <ArrowLeft /> : <ArrowDown />}
    </ButtonLang>
  );
}
