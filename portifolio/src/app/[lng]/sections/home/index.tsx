import { Orbitron } from "next/font/google";
import {
  ContainerHome,
  TextSytled,
  ButtonNextSection,
  ButtonContainer,
  TextConteiner,
} from "./style";
import { BsChevronCompactDown } from "react-icons/bs";

// Enhance your team or project by hiring a highly qualified software developer.

// I am Ruan Amaral Lemos, a technology enthusiast committed to continuous growth and development.

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface IHomeProps {
  nextSectionFunction: () => void
}

export default function HomePage({nextSectionFunction}:IHomeProps ) {
  return (
    <ContainerHome>
      <TextConteiner>
        <TextSytled className={orbitronFont.className}>
          Enhance your team or project by hiring a highly qualified software
          developer.
        </TextSytled>
      </TextConteiner>
      <ButtonContainer>
        <ButtonNextSection
          onClick={()=> nextSectionFunction()}
          className={orbitronFont.className}
        >
          See more
          <BsChevronCompactDown />
        </ButtonNextSection>
      </ButtonContainer>
    </ContainerHome>
  );
}
