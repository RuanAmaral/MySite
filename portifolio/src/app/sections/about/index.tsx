import {
  AboutContainer,
  ImageContainer,
  ImageStyle,
  TextDiv,
  Title,
  TextStyled,
  AboutSubContainer,
} from "./style";
import { Orbitron } from "next/font/google";
import Image from "next/image";
import exemple from "../../../../public/images/perfilexample.png";

const orbitronFont = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const orbitronFontBold = Orbitron({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
});

export default function AboutPage() {
  return (
    <AboutContainer>
      <AboutSubContainer>
        <ImageContainer>
          <Image src={exemple} alt={"pefil image"} style={ImageStyle} />
        </ImageContainer>
        <TextDiv>
      <Title className={orbitronFontBold.className}>Aboute me</Title>
          <TextStyled className={orbitronFont.className}>
            I am Ruan Amaral Lemos , a technology enthusiast dedicated to
            continuous growth and development. With over 4 years of experience ,
            I hold a degree in Systems Analysis and a technical diploma in
            Information Technology. My professional background includes
            expertise in back-end development , as well as experience in
            full-stack development.
          </TextStyled>
        </TextDiv>
      </AboutSubContainer>
    </AboutContainer>
  );
}
