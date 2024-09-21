"use client";

import {
  ANavDefault,
  ContentPage,
  LiNavAbout,
  LiNavContacts,
  LiNavHome,
  LiNavKnowlodges,
  LiNavProjects,
  NavIcon,
  NavSections,
  PrincipalContainer,
  SectionAbout,
  SectionContacts,
  SectionHome,
  SectionKnowlodges,
  SectionProjects,
  UlNavSections,
} from "./style";
import { Exo_2 } from "next/font/google";
import HomePage from "./sections/home";
import AboutPage from "./sections/about";
import KnowlodgesPage from "./sections/knowlodges";
import ProjectsPage from "./sections/projects";
import ContactsPage from "./sections/contacts";
import { useEffect, useRef } from "react";
import ButtonLangSelect from "./components/buttonLangSelect";

const Exo_2Font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

/* 0 = not
   1 = home
   2 = about
   3 = knowlodes
   4 = projects
   5 = contacts
*/

export default function Home() {
  const VerfyScroll = () => {
    const AllSections = [
      document.getElementById("Home"),
      document.getElementById("About"),
      document.getElementById("Knowlodges"),
      document.getElementById("Projects"),
      document.getElementById("Contacts"),
    ];

    let WSY = scrollPosition.current; //window.scrollY;
    AllSections.map((e, i) => {
      if (e != null) {
        let OT: number = e.offsetTop;
        let OH: number = e.offsetHeight;
        let OFinishSection: number = OT + OH;
        let HalfO: number = OH / 2 + OT;
        if (OT - OH / 2 <= WSY && WSY < OFinishSection) {
          SelectNavSection(i + 1);
        }
      }
    });
  };

  let SelectedSection = 0;

  const UnselectAll = () => {
    const AllNav = [
      document.getElementById("NavHome"),
      document.getElementById("NavAbout"),
      document.getElementById("NavKnowlodges"),
      document.getElementById("NavProjects"),
      document.getElementById("NavContacts"),
    ];
    AllNav.map((e) => {
      if (e != null) {
        e.style.cssText = "";
      }
    });
  };

  const SelectNav = (IdNav: string) => {
    let e = document.getElementById(IdNav);
    e != null ? (e.style.color = "#1e1e1e") : null;
  };

  const SelectNavSection = (Section: number) => {
    UnselectAll();
    switch (Section) {
      case 1:
        SelectNav("NavHome");
        SelectedSection = 1;

        break;

      case 2:
        SelectNav("NavAbout");

        SelectedSection = 2;

        break;

      case 3:
        SelectNav("NavKnowlodges");

        SelectedSection = 3;

        break;

      case 4:
        SelectNav("NavProjects");

        SelectedSection = 4;

        break;

      case 5:
        SelectNav("NavContacts");

        SelectedSection = 5;

        break;

      default:
        break;
    }
  };

  const SelectSection = (Section: number) => {
    switch (Section) {
      case 1:
        document.getElementById("Home")?.scrollIntoView();
        UnselectAll();
        SelectNav("NavHome");
        SelectedSection = 1;

        break;

      case 2:
        document.getElementById("About")?.scrollIntoView();
        UnselectAll();
        SelectNav("NavAbout");

        SelectedSection = 2;

        break;

      case 3:
        document.getElementById("Knowlodges")?.scrollIntoView();
        UnselectAll();
        SelectNav("NavKnowlodges");

        SelectedSection = 3;

        break;

      case 4:
        document.getElementById("Projects")?.scrollIntoView();
        UnselectAll();
        SelectNav("NavProjects");

        SelectedSection = 4;

        break;

      case 5:
        document.getElementById("Contacts")?.scrollIntoView();
        UnselectAll();
        SelectNav("NavContacts");

        SelectedSection = 5;

        break;

      default:
        break;
    }
  };

  const scrollPosition = useRef(0);

  const handleScroll = () => {
    const position = window.scrollY;
    console.log("antes" + scrollPosition);
    console.log("position" + position);

    scrollPosition.current = position;
    console.log("Depois" + scrollPosition);

    VerfyScroll();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <PrincipalContainer>
      <NavSections>
        <NavIcon>RAL</NavIcon>
        <UlNavSections>
          <LiNavHome>
            <ANavDefault
              onClick={() => SelectSection(1)}
              id="NavHome"
              className={Exo_2Font.className}
            >
              Home
            </ANavDefault>
          </LiNavHome>
          <LiNavAbout>
            <ANavDefault
              onClick={() => SelectSection(2)}
              id="NavAbout"
              className={Exo_2Font.className}
            >
              About
            </ANavDefault>
          </LiNavAbout>
          <LiNavKnowlodges>
            <ANavDefault
              onClick={() => SelectSection(3)}
              id="NavKnowlodges"
              className={Exo_2Font.className}
            >
              Knowlodges
            </ANavDefault>
          </LiNavKnowlodges>
          <LiNavProjects>
            <ANavDefault
              onClick={() => SelectSection(4)}
              id="NavProjects"
              className={Exo_2Font.className}
            >
              Projects
            </ANavDefault>
          </LiNavProjects>
          <LiNavContacts>
            <ANavDefault
              onClick={() => SelectSection(5)}
              id="NavContacts"
              className={Exo_2Font.className}
            >
              Contacts
            </ANavDefault>
          </LiNavContacts>
        </UlNavSections>
        <ButtonLangSelect/>
      </NavSections>
      <ContentPage>
        <SectionHome id="Home">
          <HomePage
            nextSectionFunction={() => {
              var i = document.getElementById("About");
              if (i != null) {
                window.scrollTo(0, i.offsetTop);
              }
            }}
          ></HomePage>
        </SectionHome>
        <SectionAbout id="About">
          <AboutPage></AboutPage>
        </SectionAbout>
        <SectionKnowlodges id="Knowlodges">
          <KnowlodgesPage></KnowlodgesPage>
        </SectionKnowlodges>
        <SectionProjects id="Projects">
          <ProjectsPage></ProjectsPage>
        </SectionProjects>
        <SectionContacts id="Contacts">
          <ContactsPage></ContactsPage>
        </SectionContacts>
      </ContentPage>
    </PrincipalContainer>
  );
}
