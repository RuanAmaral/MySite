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

const Exo_2Font = Exo_2({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Home() {
  return (
    <PrincipalContainer>
      <NavSections>
        <NavIcon>RAL</NavIcon>
        <UlNavSections>
          <LiNavHome>
            <ANavDefault href="#Home" className={Exo_2Font.className}>
              Home
            </ANavDefault>
          </LiNavHome>
          <LiNavAbout>
            <ANavDefault href="#About" className={Exo_2Font.className}>
              About
            </ANavDefault>
          </LiNavAbout>
          <LiNavKnowlodges>
            <ANavDefault href="#Knowlodges" className={Exo_2Font.className}>
              Knowlodges
            </ANavDefault>
          </LiNavKnowlodges>
          <LiNavProjects>
            <ANavDefault href="#Projects" className={Exo_2Font.className}>
              Projects
            </ANavDefault>
          </LiNavProjects>
          <LiNavContacts>
            <ANavDefault href="#Contacts" className={Exo_2Font.className}>
              Contacts
            </ANavDefault>
          </LiNavContacts>
        </UlNavSections>
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
