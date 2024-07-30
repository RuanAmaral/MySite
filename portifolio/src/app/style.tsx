"use client";

import styled from "styled-components";

export const ImageStyle = {
  borderRadius: "50%",
  width: "100%",
  height: "auto",
};

export const ImageContainer = styled.div`
  padding: 10px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LateralNav = styled.div`
  background-color: #444343;
  width: 20%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentPage = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ULlistpages = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const LIlistpagesDefaut = styled.li`
  /* border: solid black;
  border-width: 2px 2px 2px 2px; */
  box-sizing: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const LIlistpagesHome = styled(LIlistpagesDefaut)`
  color: aquamarine;
`;

export const LIlistpagesAbout = styled(LIlistpagesDefaut)``;

export const LIlistpagesKnowlodges = styled(LIlistpagesDefaut)``;

export const LIlistpagesProjects = styled(LIlistpagesDefaut)``;

export const LIlistpagesContacts = styled(LIlistpagesDefaut)``;

export const ButtonPagesDefault = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 150%;
`;

export const ButtonHome = styled(ButtonPagesDefault)``;

export const ButtonAbout = styled(ButtonPagesDefault)``;

export const ButtonKnowlodges = styled(ButtonPagesDefault)``;

export const ButtonProjects = styled(ButtonPagesDefault)``;

export const ButtonContacts = styled(ButtonPagesDefault)``;
