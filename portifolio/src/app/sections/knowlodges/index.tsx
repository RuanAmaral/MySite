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
  FrontEndTitle,
  OthersDiv,
  OthersTitle,
  TenolhogysFrontEndDiv,
  TenolhogysOthersDiv,
  BackEndTitleDiv,
  FrontEndTitleDiv,
  OthersTitleDiv,
} from "./style";
import CardKnowlodge from "@/app/components/cardKnowlodge";

import Image from "next/image";

import dotnetIcon from "../../../../public/images/icons/dotnet.svg";
import csharpIcon from "../../../../public/images/icons/csharp.svg";
import mongodbIcon from "../../../../public/images/icons/mongodb.svg";
import mysqlIcon from "../../../../public/images/icons/mysql.svg";
import pythonIcon from "../../../../public/images/icons/python.svg";
import rustIcon from "../../../../public/images/icons/rust.svg";
import sqlserverIcon from "../../../../public/images/icons/sqlserver.svg";
import nodeJsIcon from "../../../../public/images/icons/nodejs.svg";
import angularIcon from "../../../../public/images/icons/angular.svg";
import javascriptIcon from "../../../../public/images/icons/javascript.svg";
import nextIcon from "../../../../public/images/icons/next.svg";
import typeScriptIcon from "../../../../public/images/icons/typescript.svg";
import cssIcon from "../../../../public/images/icons/css.svg";
import reactIcon from "../../../../public/images/icons/react.svg";

import linuxIcon from "../../../../public/images/icons/linux.svg";
import windowsIcon from "../../../../public/images/icons/windows.svg";
import godotIcon from "../../../../public/images/icons/godot.svg";
import gitIcon from "../../../../public/images/icons/git.svg";
import dockerIcon from "../../../../public/images/icons/docker.svg";
import azuredevopsIcon from "../../../../public/images/icons/azuredevos.svg";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
});

export default function KnowlodgesPage() {
  return (
    <KnowlodgesContainer>
      <BackEndTitleDiv>
        <TitleText className={orbitronFont.className}>My Knowlodges</TitleText>
      </BackEndTitleDiv>
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
          <CardKnowlodge
            icon={<Image src={mysqlIcon} alt="" style={ImageStyle} />}
            subtitle="MySql"
          />
        </TenolhogysBackEndDiv>
      </BackEndDiv>
      <FrontEndDiv>
        <FrontEndTitleDiv>
          <FrontEndTitle className={orbitronFont.className}>
            Front End
          </FrontEndTitle>
        </FrontEndTitleDiv>
        <TenolhogysFrontEndDiv>
          <CardKnowlodge
            icon={<Image src={javascriptIcon} alt="" style={ImageStyle} />}
            subtitle="JavaScript"
          />
          <CardKnowlodge
            icon={<Image src={typeScriptIcon} alt="" style={ImageStyle} />}
            subtitle="TypeScript"
          />
          <CardKnowlodge
            icon={<Image src={reactIcon} alt="" style={ImageStyle} />}
            subtitle="React"
          />
          <CardKnowlodge
            icon={<Image src={nextIcon} alt="" style={ImageStyle} />}
            subtitle="NextJs"
          />
          <CardKnowlodge
            icon={<Image src={cssIcon} alt="" style={ImageStyle} />}
            subtitle="CSS"
          />
          <CardKnowlodge
            icon={<Image src={angularIcon} alt="" style={ImageStyle} />}
            subtitle="Angular"
          />
        </TenolhogysFrontEndDiv>
      </FrontEndDiv>
      <OthersDiv>
        <OthersTitleDiv>
          <OthersTitle className={orbitronFont.className}>Others</OthersTitle>
        </OthersTitleDiv>
        <TenolhogysOthersDiv>
          <CardKnowlodge
            icon={<Image src={linuxIcon} alt="" style={ImageStyle} />}
            subtitle="Linux"
          />
          <CardKnowlodge
            icon={<Image src={gitIcon} alt="" style={ImageStyle} />}
            subtitle="Git"
          />
          <CardKnowlodge
            icon={<Image src={godotIcon} alt="" style={ImageStyle} />}
            subtitle="Godot"
          />
          <CardKnowlodge
            icon={<Image src={dockerIcon} alt="" style={ImageStyle} />}
            subtitle="Docker"
          />
          <CardKnowlodge
            icon={<Image src={windowsIcon} alt="" style={ImageStyle} />}
            subtitle="Windows"
          />
          <CardKnowlodge
            icon={<Image src={azuredevopsIcon} alt="" style={ImageStyle} />}
            subtitle="AzureDevOps"
          />
        </TenolhogysOthersDiv>
      </OthersDiv>
    </KnowlodgesContainer>
  );
}
