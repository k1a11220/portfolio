import styled from "@emotion/styled";
import React from "react";
import { Info } from "./info";

interface InfoList {
  label: string;
  list: Array<{
    title: string;
    summary: string;
    desc: string;
    isIcon?: boolean;
    download?: string;
  }>;
}

const InfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16%;

  & h3 {
    font-size: 1.625rem;
    line-height: 1.25;
    font-weight: 400;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  margin-bottom: 160px;
`;

export function InfoList({ label, list }: InfoList) {
  return (
    <InfoContainer>
      <h3>{label}</h3>
      <InfoWrapper>
        <Info list={list} />
      </InfoWrapper>
    </InfoContainer>
  );
}
