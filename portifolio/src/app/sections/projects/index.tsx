import CardProjects from "@/app/components/cardProjects";
import { ContainerProjects, TitleProjects } from "./style";
import { Orbitron } from "next/font/google";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export default function ProjectsPage() {
  return (
    <ContainerProjects>
      <TitleProjects className={orbitronFont.className}>Projects</TitleProjects>
      <CardProjects />
    </ContainerProjects>
  );
}
