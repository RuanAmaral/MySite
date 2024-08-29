import { Orbitron } from "next/font/google";
import {
  ContactContainer,
  ContactsLinksDiv,
  ContactsSubContainer,
  Footer,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconPhoneNumber,
  IconTelegram,
  IconWhatsapp,
  LinkedinLink,
  LinkIcons,
  MailLink,
  MenssageText,
  MessageDiv,
  TelegramLink,
  TextLink,
  Title,
  TitleDiv,
} from "./style";

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

export default function ContactsPage() {
  return (
    <ContactContainer>
      <TitleDiv>
        <Title className={orbitronFontBold.className}>Contacts</Title>
      </TitleDiv>
      <ContactsSubContainer>
        <MessageDiv>
          <MenssageText className={orbitronFont.className}>
            Do you have any questions or want to hire me?
          </MenssageText>
          <MenssageText className={orbitronFont.className}>
            contact me
          </MenssageText>
        </MessageDiv>
        <ContactsLinksDiv>
          <LinkedinLink>
            <LinkIcons href="https://www.linkedin.com/in/ruan-a-92457612a/">
              <IconLinkedin />
              <TextLink>Linkedin</TextLink>
            </LinkIcons>
          </LinkedinLink>
          <MailLink>
            <LinkIcons href="mailto:ruan.amaral.lemos@gmail.com">
              <IconMail />
              <TextLink>ruan.amaral.lemos@gmail.com</TextLink>
            </LinkIcons>
          </MailLink>
          {/* <LinkIcons href="tel:+351910914377">
            <IconPhoneNumber />
            <TextLink>+351 910 914 377</TextLink>
          </LinkIcons> */}
          {/* <LinkIcons href="https://api.whatsapp.com/send?phone=351910914377&text=Hello, I have a question about your work.">
            <IconWhatsapp />
            <TextLink>Whatsapp</TextLink>
          </LinkIcons> */}
          <TelegramLink>
            <LinkIcons href="https://t.me/RuanAmaralLemos">
              <IconTelegram />
              <TextLink>Telegram</TextLink>
            </LinkIcons>
          </TelegramLink>
        </ContactsLinksDiv>
      </ContactsSubContainer>
      <Footer></Footer>
    </ContactContainer>
  );
}
