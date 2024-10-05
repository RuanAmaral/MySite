"use client";

import styled from "styled-components";
import { SlGlobe } from "react-icons/sl";

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  transition: 0.5s;
  color: #ffffff;
`;

export const NavSections = styled.div`
  width: 100%;
  background-color: #0047ff;
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  transition: 0.5s;
`;

export const NavIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
  transition: 0.5s;
`;

export const UlNavSections = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: right;
  list-style: none;
  width: 100%;
  height: 100%;
  transition: 0.5s;
`;

export const LiNavDefault = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  transition: 0.5s;
`;

export const ANavDefault = styled.a`
  transition: 0.5s;
`;

export const LiNavHome = styled(LiNavDefault)`
  transition: 0.5s;
  :hover {
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
    color: #1e1e1e;
  }
`;
export const LiNavAbout = styled(LiNavDefault)`
  :hover {
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
    color: #1e1e1e;
  }
`;
export const LiNavKnowlodges = styled(LiNavDefault)`
  :hover {
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
    color: #1e1e1e;
  }
`;
export const LiNavProjects = styled(LiNavDefault)`
  :hover {
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
    color: #1e1e1e;
  }
`;
export const LiNavContacts = styled(LiNavDefault)`
  :hover {
    cursor: pointer;
    transition: 0.5s;
    margin-bottom: 5px;
    color: #1e1e1e;
  }
`;

export const ContentPage = styled.div`
  margin-top: 40px;
  background-color: #121212;
`;

const SectionDefault = styled.section`
  height: 100%;
  width: 100%;
`;

export const SectionHome = styled(SectionDefault)`
  height: auto;
`;
export const SectionAbout = styled(SectionDefault)`
  height: auto;
`;
export const SectionKnowlodges = styled(SectionDefault)`
  height: auto;
  background-color: #121212;
`;
export const SectionProjects = styled(SectionDefault)`
  background-color: #1e1e1e;
  height: auto;
`;
export const SectionContacts = styled(SectionDefault)`
  background-color: #121212;
  height: auto;
`;