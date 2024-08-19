import { Orbitron } from "next/font/google";
import {
  CardContainer,
  DescriptionCard,
  LinksProject,
  TitleCard,
  VideoCard,
} from "./style";
// import ReactPlayer from "react-player/file";

// import example from "./example.mp4"
// import from ".."
// portifolio/public/videos/vidsaodama.mp4
// import {example} from "../../../../public/videos"
// import dd from "../../../../public/videos/vidsaodama.mp4"

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export default function CardProjects() {
  return (
    <CardContainer>
      <TitleCard className={orbitronFont.className}>
        chat em tempo real
      </TitleCard>
      <VideoCard>
        <video preload="none" controls>
          <source
            src="public/videos/vidsaodama.mp4"
            // type="video/mp4"
          />
        </video>
      </VideoCard>
      <DescriptionCard>
        Lorem Ipsum é simplesmente uma simulação de texto da indústria
        tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
        quando um impressor desconhecido pegou uma bandeja de tipos e os
        embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
        sobreviveu não só a cinco séculos, como também ao salto para a
      </DescriptionCard>
      <LinksProject>links for project</LinksProject>
    </CardContainer>
  );
}
