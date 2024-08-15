"use client";

import styled from "styled-components";

export const PrincipalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

export const NavSections = styled.div`
  width: 100%;
  background-color: #0047FF;
  height: 40px;
  position: fixed;
  display: flex;
  justify-content: space-between;
`;

// export const NavSectionsAfterHome = styled.div``

export const NavIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

export const UlNavSections = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: right;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const LiNavDefault = styled.li`
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export const LiNavHome = styled(LiNavDefault)`
  :hover {
    color: #000000;
    border-bottom: solid 10px;
  }
`;
export const LiNavAbout = styled(LiNavDefault)`
  :hover {
    color: #000000;
    border-bottom: solid 10px;
  }
`;
export const LiNavKnowlodges = styled(LiNavDefault)`
  :hover {
    color: #000000;
    border-bottom: solid 10px;
  }
`;
export const LiNavProjects = styled(LiNavDefault)`
  :hover {
    color: #000000;
    border-bottom: solid 10px;
  }
`;
export const LiNavContacts = styled(LiNavDefault)`
  :hover {
    color: #000000;
    border-bottom: solid 10px;
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
export const SectionKnowlodges = styled(SectionDefault)``;
export const SectionProjects = styled(SectionDefault)``;
export const SectionContacts = styled(SectionDefault)``;
