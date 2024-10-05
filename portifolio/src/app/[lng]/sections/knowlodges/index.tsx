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
import CardKnowlodge from "@/app/[lng]/components/cardKnowlodge";

import Image from "next/image";

import dotnetIcon from     "../../../../../public/images/icons/dotnet.svg";
import csharpIcon from     "../../../../../public/images/icons/csharp.svg";
import mongodbIcon from    "../../../../../public/images/icons/mongodb.svg";
import mysqlIcon from      "../../../../../public/images/icons/mysql.svg";
import pythonIcon from     "../../../../../public/images/icons/python.svg";
import rustIcon from       "../../../../../public/images/icons/rust.svg";
import sqlserverIcon from  "../../../../../public/images/icons/sqlserver.svg";
import nodeJsIcon from     "../../../../../public/images/icons/nodejs.svg";
import angularIcon from    "../../../../../public/images/icons/angular.svg";
import javascriptIcon from "../../../../../public/images/icons/javascript.svg";
import nextIcon from       "../../../../../public/images/icons/next.svg";
import typeScriptIcon from "../../../../../public/images/icons/typescript.svg";
import cssIcon from        "../../../../../public/images/icons/css.svg";
import reactIcon from      "../../../../../public/images/icons/react.svg";
import linuxIcon from      "../../../../../public/images/icons/linux.svg";
import windowsIcon from    "../../../../../public/images/icons/windows.svg";
import godotIcon from      "../../../../../public/images/icons/godot.svg";
import gitIcon from        "../../../../../public/images/icons/git.svg";
import dockerIcon from     "../../../../../public/images/icons/docker.svg";
import azuredevopsIcon from "../../../../../public/images/icons/azuredevos.svg";

import "./style.css";

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
            icon={<Image src={dotnetIcon} title=".Net" alt=".Net" className="ImageStyle" />}
            subtitle=".NET"
          />
          <CardKnowlodge
            icon={<Image src={csharpIcon} title="C-Sharp" alt="C-Sharp" className="ImageStyle" />}
            subtitle="C-Sharp"
          />
          <CardKnowlodge
            icon={<Image src={nodeJsIcon} title="Node JS" alt="Node JS" className="ImageStyle" />}
            subtitle="Node Js"
          />
          <CardKnowlodge
            icon={<Image src={rustIcon} title="Rust" alt="Rust" className="ImageStyle" />}
            subtitle="Rust"
          />
          <CardKnowlodge
            icon={<Image src={pythonIcon} title="Python" alt="Python" className="ImageStyle" />}
            subtitle=" Python"
          />
          <CardKnowlodge
            icon={<Image src={sqlserverIcon} title="SQL Server" alt="SQL Server" className="ImageStyle" />}
            subtitle="SQLS"
          />
          <CardKnowlodge
            icon={<Image src={mongodbIcon} title="Mongo DB" alt="Mongo DB" className="ImageStyle" />}
            subtitle="Mongo"
          />
          <CardKnowlodge
            icon={<Image src={mysqlIcon} title="MySQLServer" alt="My SQL Server" className="ImageStyle" />}
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
            icon={<Image src={javascriptIcon} title="JavaScript" alt="JavaScript" className="ImageStyle" />}
            subtitle="JavaScript"
          />
          <CardKnowlodge
            icon={<Image src={typeScriptIcon} title="TypeScript" alt="TypeScript" className="ImageStyle" />}
            subtitle="TypeScript"
          />
          <CardKnowlodge
            icon={<Image src={reactIcon} title="React" alt="React" className="ImageStyle" />}
            subtitle="React"
          />
          <CardKnowlodge
            icon={<Image src={nextIcon} title="NextJs" alt="NextJs" className="ImageStyle" />}
            subtitle="NextJs"
          />
          <CardKnowlodge
            icon={<Image src={cssIcon} title="CSS" alt="CSS" className="ImageStyle" />}
            subtitle="CSS"
          />
          <CardKnowlodge
            icon={<Image src={angularIcon} title="Angular" alt="Angular" className="ImageStyle" />}
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
            icon={<Image src={linuxIcon} title="Linux" alt="Linux" className="ImageStyle" />}
            subtitle="Linux"
          />
          <CardKnowlodge
            icon={<Image src={gitIcon} title="Git" alt="Git" className="ImageStyle" />}
            subtitle="Git"
          />
          <CardKnowlodge
            icon={<Image src={godotIcon} title="Godot" alt="Godot" className="ImageStyle" />}
            subtitle="Godot"
          />
          <CardKnowlodge
            icon={<Image src={dockerIcon} title="Docker" alt="Docker" className="ImageStyle" />}
            subtitle="Docker"
          />
          <CardKnowlodge
            icon={<Image src={windowsIcon} title="Windows" alt="Windows" className="ImageStyle" />}
            subtitle="Windows"
          />
          <CardKnowlodge
            icon={<Image src={azuredevopsIcon} title="Azure Dev Ops" alt="Azure" className="ImageStyle" />}
            subtitle="Azure"
          />
        </TenolhogysOthersDiv>
      </OthersDiv>
    </KnowlodgesContainer>
  );
}
