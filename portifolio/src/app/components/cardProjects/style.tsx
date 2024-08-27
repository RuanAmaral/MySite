"use client";

import { DiGithubBadge } from "react-icons/di";
import { RxEyeOpen } from "react-icons/rx";
import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #2c2c2c;
  border-radius: 3px;
  padding: 10px;
  width: 23rem;
  height: 390px;
  box-shadow: 0px 0px 10px 0px #121212;
`;

export const TitleCard = styled.p`
  margin-bottom: 10px;
`;

export const VideoPlayer = styled.video`
  width: 20rem;
  height: 11rem;
`;

export const VideoCard = styled.div``;

export const DescriptionCard = styled.div`
  height: 50%;
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5px;
  overflow: hidden;
  text-align: left;
  `;
export const DescriptionText = styled.p`
`;

export const LinksProject = styled.div`
  width: 40%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;

export const LinkAProject = styled.a`
  color: #dddddd;
  box-shadow: 0px 0px 10px 0px #121212;
  background-color: #171717;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  transition: 0.5s;
  border: none;
  :hover {
    transition: 0.5s;
    color: #171717;
    background-color: #dddddd;
    border-radius: 5px;
    border: none;
    padding: 2px;
    /* font-size: 51px; */
  }
`;

export const IconLinkGit = styled(DiGithubBadge)`
  color: #dddddd;
  background-color: #171717;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  transition: 0.5s;
  border: none;
  :hover {
    transition: 0.5s;
    color: #171717;
    background-color: #dddddd;
    border-radius: 5px;
    border: none;
    padding: 2px;
    /* font-size: 51px; */
  }
`;

export const IconLinkView = styled(RxEyeOpen)`
  color: #dddddd;
  background-color: #171717;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  transition: 0.5s;
  border: none;
  :hover {
    transition: 0.5s;
    color: #171717;
    background-color: #dddddd;
    border-radius: 50%;
    border: none;
    padding: 2px;
    /* font-size: 51px; */
  }
`;
