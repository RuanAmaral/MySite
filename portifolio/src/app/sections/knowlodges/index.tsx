"use client";
import { Orbitron } from "next/font/google";
import {
  BackEndDiv,
  BackEndTitle,
  FrontEndDiv,
  KnowlodgesContainer,
  TenolhogysBackEndDiv,
  TitleText,
  ImageStyle,
} from "./style";
import CardKnowlodge from "@/app/components/cardKnowlodge";
import { SiCsharp, SiDotnet, SiRust } from "react-icons/si";
import {
  DiDotnet,
  DiMongodb,
  DiMsqlServer,
  DiNodejsSmall,
  DiPython,
  DiRust,
} from "react-icons/di";

import Image from "next/image";

import dotnetIcon from "../../../../public/images/icons/dotnet.svg";
import csharpIcon from "../../../../public/images/icons/csharp.svg";
import mongodbIcon from "../../../../public/images/icons/mongodb.svg";
import mysqlIcon from "../../../../public/images/icons/mysql.svg";
import pythonIcon from "../../../../public/images/icons/python.svg";
import rustIcon from "../../../../public/images/icons/rust.svg";
import sqlserverIcon from "../../../../public/images/icons/sqlserver.svg";
import nodeJsIcon from "../../../../public/images/icons/nodejs.svg";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function KnowlodgesPage() {
  return (
    <KnowlodgesContainer>
      <TitleText className={orbitronFont.className}>My Knowlodges</TitleText>
      <BackEndDiv>
        <BackEndTitle className={orbitronFont.className}>Back End</BackEndTitle>
        <TenolhogysBackEndDiv>
          <CardKnowlodge
            icon={<Image src={dotnetIcon} alt="" style={ImageStyle} />}
            subtitle=".NET"
          />
          <CardKnowlodge
            icon={<Image src={csharpIcon} alt="" style={ImageStyle} />}
            subtitle="C-Sharp"
          />
          <CardKnowlodge
            icon={<Image src={nodeJsIcon} alt="" style={ImageStyle} />}
            subtitle="Node Js"
          />
          <CardKnowlodge
            icon={<Image src={rustIcon} alt="" style={ImageStyle} />}
            subtitle="Rust"
          />
          <CardKnowlodge
            icon={<Image src={pythonIcon} alt="" style={ImageStyle} />}
            subtitle=" Python"
          />
          <CardKnowlodge
            icon={<Image src={sqlserverIcon} alt="" style={ImageStyle} />}
            subtitle="SQLServer"
          />
          <CardKnowlodge
            icon={<Image src={mongodbIcon} alt="" style={ImageStyle} />}
            subtitle="MongoDB"
          />
        </TenolhogysBackEndDiv>
      </BackEndDiv>
      <FrontEndDiv></FrontEndDiv>
    </KnowlodgesContainer>
  );
}
