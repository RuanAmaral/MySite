"use client";
import { Orbitron } from "next/font/google";
import {
  CardContainer,
  DescriptionCard,
  DescriptionText,
  IconLinkGit,
  IconLinkView,
  LinkAProject,
  LinksProject,
  TitleCard,
  VideoCard,
  VideoPlayer,
} from "./style";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});
const orbitronFontNormal = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

interface ICardProjects {
  title: string;
  githubLink: string;
  viewProjectLink?: string;
  descriptionText: string;
  videoPath: string;
}

export default function CardProjects({
  title,
  githubLink,
  viewProjectLink,
  descriptionText,
  videoPath,
}: ICardProjects) {
  return (
    <CardContainer>
      <TitleCard className={orbitronFont.className}>{title}</TitleCard>
      <VideoCard>
        <VideoPlayer preload="true" autoPlay loop muted>
          <source src={videoPath} type="video/mp4" />
        </VideoPlayer>
      </VideoCard>
      <DescriptionCard>
        <DescriptionText className={orbitronFontNormal.className}>
          {descriptionText}
        </DescriptionText>
      </DescriptionCard>
      <LinksProject>
        <LinkAProject href={githubLink}>
          <IconLinkGit />
        </LinkAProject>
        {viewProjectLink ? (
          <LinkAProject href={viewProjectLink}>
            <IconLinkView />
          </LinkAProject>
        ) : (
           null
        )}
      </LinksProject>
    </CardContainer>
  );
}
