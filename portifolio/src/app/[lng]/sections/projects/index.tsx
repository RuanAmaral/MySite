import CardProjects from "@/app/[lng]/components/cardProjects";
import {
  ContainerProjects,
  ContainerProjectsCards,
  TitleProjects,
} from "./style";
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
      <ContainerProjectsCards>
        <CardProjects
          videoPath="./videos/SampleVideo_1280x720_1mb.mp4"
          title="Chat em Tempo real"
          descriptionText="fdfdfdf fdfdfd fdfdfd fdfdfd fdfdfd fdfdfd fdfd"
          githubLink="#"
          viewProjectLink="#"
        />
      </ContainerProjectsCards>
    </ContainerProjects>
  );
}
