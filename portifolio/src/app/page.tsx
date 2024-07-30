import Image from "next/image";
import {
  ButtonAbout,
  ButtonContacts,
  ButtonHome,
  ButtonKnowlodges,
  ButtonProjects,
  Container,
  ContentPage,
  ImageContainer,
  ImageStyle,
  LateralNav,
  LIlistpagesAbout,
  LIlistpagesContacts,
  LIlistpagesHome,
  LIlistpagesKnowlodges,
  LIlistpagesProjects,
  ULlistpages,
} from "./style";
import exemple from "./images/perfilexample.png";
import { Black_Ops_One } from "next/font/google";
import HomePage from "./sections/home";
import AboutPage from "./sections/about";
import KnowlodgesPage from "./sections/knowlodges";
import ProjectsPage from "./sections/projects";
import ContactsPage from "./sections/contacts";

const blackOpsFont = Black_Ops_One({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});


export default function Home() {

  return (
    <Container>
      <LateralNav>
        <ImageContainer>
          <Image
            src={exemple}
            alt="Perfil Image"
            style={ImageStyle}
          />
        </ImageContainer>
        <ULlistpages>
          <LIlistpagesHome>
            <ButtonHome className={blackOpsFont.className}>Home</ButtonHome>
          </LIlistpagesHome>
          <LIlistpagesAbout>
            <ButtonAbout className={blackOpsFont.className}>About</ButtonAbout>
          </LIlistpagesAbout>
          <LIlistpagesKnowlodges>
            <ButtonKnowlodges className={blackOpsFont.className}>
              Knowlodges
            </ButtonKnowlodges>
          </LIlistpagesKnowlodges>
          <LIlistpagesProjects>
            <ButtonProjects className={blackOpsFont.className}>
              Projects
            </ButtonProjects>
          </LIlistpagesProjects>
          <LIlistpagesContacts>
            <ButtonContacts className={blackOpsFont.className}>
              Contacts
            </ButtonContacts>
          </LIlistpagesContacts>
        </ULlistpages>
      </LateralNav>
      <ContentPage>
        <section><HomePage></HomePage></section>
        <section><AboutPage></AboutPage></section>
        <section><KnowlodgesPage></KnowlodgesPage></section>
        <section><ProjectsPage></ProjectsPage></section>
        <section><ContactsPage></ContactsPage></section>
      </ContentPage>
    </Container>
  );
}
