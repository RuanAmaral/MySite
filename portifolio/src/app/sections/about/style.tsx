"use client";

import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #1e1e1e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const AboutSubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 90%;
  flex-wrap: wrap;
  justify-content: center;
  /* padding-left: 70px;
padding-right: 70px; */
  /* overflow: ; */
`;

export const TextDiv = styled.div`
  width: 600px;
  /* padding: 0px 30px 0px 10px; */
  /* margin-top: 25px; */
  margin-left: 30px;
  display: flex;
  justify-content: baseline;
  flex-direction: column;
`;

export const TextStyled = styled.p`
  color: #e0e0e0;
  font-size: 1.5rem;
  text-align: left;
`;

export const Title = styled.b`
  font-size: 1.9rem;
  color: #ffffff;
  margin-bottom: 15px;
`;
export const ImageContainer = styled.div`
  border-radius: auto;
  width: 400px;
  height: 450px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3%;
  box-shadow: 0px 0px 10px 0px #121212;
`;

export const ImageStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "3%",
};
