"use client";

import styled from "styled-components";

export const ContainerHome = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
`;

export const TextConteiner = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 10px;
`;

export const TextSytled = styled.p`
  font-size: 3.5rem;
  text-align: left;
  color: #ffffff;
`;

export const ButtonNextSection = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: xx-large;
  color: #2ecc71;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: end;
  :hover {
    color: #169e46;
  }
`;
