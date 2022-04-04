import styled from "@emotion/styled";
import React from "react";
import { Info } from "./info";

const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16%;

  & h3 {
    font-size: 1.5rem;
    line-height: 1.25;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 140px;
`;

export function InfoList({ label, list }: any) {
  return (
    <InfoContainer>
      <h3>{label}</h3>
      <InfoWrapper>
        <Info list={list} />
      </InfoWrapper>
    </InfoContainer>
  );
}
