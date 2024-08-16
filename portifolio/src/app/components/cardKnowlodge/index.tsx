import { Orbitron } from "next/font/google";
import { CardContainer, IconCard, SubTitleCard } from "./style";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
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
