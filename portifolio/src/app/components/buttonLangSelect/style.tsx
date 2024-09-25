"use client";

import { SlGlobe } from "react-icons/sl";
import styled from "styled-components";

export const DivSelect = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  border: none;
  height: 100%;
  background: none;
  width: 120px;

`;

export const ButtonLang = styled.select`
  border: none;
  color: white;
  font-size: 25px;
  height: 100%;
  background: none;
  transition: 0.5s;
  outline: none;
  &:hover {
    cursor: pointer;
    color: #1e1e1e;
  }
`;

export const GlobeIcon = styled(SlGlobe)`
  font-size: 25px;
  margin-right: 10px;
`;

export const OptionSelect = styled.option``;
