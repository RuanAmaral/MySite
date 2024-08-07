'use client'

import {
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
            <a href="#" className={Exo_2Font.className}>
              Home
            </a>
          </LiNavHome>
          <LiNavAbout>
            <a href="#" className={Exo_2Font.className}>
              About
            </a>
          </LiNavAbout>
          <LiNavKnowlodges>
            <a href="#" className={Exo_2Font.className}>
              Knowlodges
            </a>
          </LiNavKnowlodges>
          <LiNavProjects>
            <a href="#" className={Exo_2Font.className}>
              Projects
            </a>
          </LiNavProjects>
          <LiNavContacts>
            <a href="#" className={Exo_2Font.className}>
              Contacts
            </a>
          </LiNavContacts>
        </UlNavSections>
      </NavSections>
      <ContentPage>
        <SectionHome>
          <HomePage
            nextSectionFunction={() => alert("pass to about")}
          ></HomePage>
        </SectionHome>
        <SectionAbout>
          <AboutPage></AboutPage>
        </SectionAbout>
        <SectionKnowlodges>
          <KnowlodgesPage></KnowlodgesPage>
        </SectionKnowlodges>
        <SectionProjects>
          <ProjectsPage></ProjectsPage>
        </SectionProjects>
        <SectionContacts>
          <ContactsPage></ContactsPage>
        </SectionContacts>
      </ContentPage>
    </PrincipalContainer>
  );
}
