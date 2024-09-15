"use client";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { FaLinkedinIn, FaTelegram, FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #121212;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 93.8vh;
`;

export const TitleDiv = styled.div`
  margin-top: 15px;
`;

export const Title = styled.p`
  font-size: 2rem;
`;

export const ContactsSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 10px 10px 10px;
  border-radius: 5px;
  padding: 2px;
  justify-content: space-between;
  height: 89%;
  width: 70%;
  flex-wrap: wrap;
`;

export const MessageDiv = styled.div`
  /* height: 100%; */
  display: flex;
  width: 100%;
  text-align: left;
  margin-right: 10px;
  flex-direction: column;
  height: fit-content;
`;

export const MenssageText = styled.p`
  font-size: 40px;
  color: #dddddd;
`;

export const ContactsLinksDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
export const LinkIcons = styled.a`
  font-size: 28px;
  color: #aad4e5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  text-align: left;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
  }
`;

export const TextLink = styled.p`
  margin-left: 10px;
  color: #dddddd;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
  }
`;

export const LinkDiv = styled.div`
  transition: 0.5s;
  :hover {
    transition: 0.5s;
  }
`;

export const TelegramLink = styled(LinkDiv)`
  width: fit-content;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    /* background-color: #1c93e3; */
    color: #1c93e3;
    /* border-radius: 10px; */
    /* font-size: 32px; */
    /* padding-bottom: 2px; */
  }
`;
export const MailLink = styled(LinkDiv)`
  width: fit-content;
  transition: 0.5s;
  :hover {
    /* background-color: #cb3a2e; */
    /* font-size: 29px; */
    /* border-radius: 10px;
    padding: 2px; */
    color: #cb3a2e;
  }
`;
export const LinkedinLink = styled(LinkDiv)`
  width: fit-content;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    /* background-color: #0a66c2; */
    color: #0a66c2;
    /* padding: 2px; */
    /* font-size: 32px; */
    /* border-radius: 10px; */
  }
`;

export const IconGithub = styled(AiFillGithub)`
  transition: 0.5s;
`;

export const IconWhatsapp = styled(AiOutlineWhatsApp)``;
export const IconTelegram = styled(FaTelegramPlane)``;
export const IconPhoneNumber = styled(AiFillPhone)``;
export const IconMail = styled(AiOutlineMail)``;
export const IconLinkedin = styled(FaLinkedinIn)`
  transition: 0.5s;
`;
export const IconInstagram = styled(AiFillInstagram)``;

export const Footer = styled.div`
  border-top: solid 2px #dddddd;
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: end;
  justify-content: space-between;
  margin: 0px 0px 20px 0px;
  padding-top: 20px;
  transition: 0.5s;
`;
export const MyLogo = styled.p`
  font-size: large;
  margin-bottom: 10px;
  color: #dddddd;
`;
export const NameAndRights = styled.p`
  margin-bottom: 2px;
  color: #dddddd;
`;

export const FooterSubDivLeft = styled.div`
  width: fit-content;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const FooterSubDivRight = styled.div`
  width: fit-content;
  margin-right: 20px;
  transition: 0.5s;
`;
export const LinkGitFooter = styled.a`
  font-size: 40px;
  margin-right: 10px;
  color: #dddddd;
  :hover {
    transition: 0.5s;
    color: #fff;
    /* margin-bottom: 5px; */
  }
`;
export const LinkLinkedinFooter = styled.a`
  font-size: 40px;
  margin-right: 10px;
  color: #dddddd;
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    color: #0a66c2;
    /* margin-bottom: 5px; */
  }
`;
