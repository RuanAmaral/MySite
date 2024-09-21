"use client";

import { SlArrowDown, SlArrowLeft, SlGlobe } from "react-icons/sl";
import styled from "styled-components";

export const ButtonLang = styled.button`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: none;
  height: 100%;
  background: none;
  transition: 400ms;
  width: 120px;
  &:hover {
    cursor: pointer;
    color: #1e1e1e;
  }
`;

export const GlobeIcon = styled(SlGlobe)`
  font-size: 25px;
  margin-right: 10px;
`;

export const ArrowLeft = styled(SlArrowLeft)`
  font-size: 22px;
  transition: 2s;

`;

export const ArrowDown = styled(SlArrowDown)`
  font-size: 22px;
  margin-left: 10px;
  margin-right: 10px;
  transition: 2s;
`;

export const InsideValue = styled.p`
  font-size: 22px;
`;
