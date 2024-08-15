import { Orbitron } from "next/font/google";
import { CardContainer, IconCard, SubTitleCard } from "./style";
import { SiCsharp } from "react-icons/si";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});


interface IcardProps {
  icon: any;
  subtitle: string;
}

export default function CardKnowlodge({ icon, subtitle }: IcardProps) {

  return (
    <CardContainer>
      <IconCard>{icon}</IconCard>
      <SubTitleCard className={orbitronFont.className}>{subtitle}</SubTitleCard>
    </CardContainer>
  );
}
