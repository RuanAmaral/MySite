import { VisitCard, TitleDevName, TitleDevFunction } from "./style";
import localFont from "next/font/local";

const fontPressStart = localFont({
  src: "../../fonts/PressStart2PRegular.ttf",
});

const fontKodeMonoVariable = localFont({
  src: "../../fonts/KodeMonoVariableFontwght.ttf",
});
export default function FirstView() {
  return (
    <VisitCard>
      <TitleDevName className={fontPressStart.className}>
        Ruan Amaral Lemos
      </TitleDevName>
      <TitleDevFunction className={fontPressStart.className}>Sofwtare Developer</TitleDevFunction>
    </VisitCard>
  );
}
