import React, { useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface Headline {
  title: string;
  color: string;
  weight: number;
}

export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  word-break: keep-all;
`;

export const H2 = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.4;
  word-break: keep-all;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e9ebee;
  margin-bottom: 0.5rem;
`;

export const H3 = styled.h3`
  margin-top: 1rem;
  font-size: 1.5rem;
  font-weight: 500;
  word-break: keep-all;
`;

export const H4 = styled.h4`
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  word-break: keep-all;
`;

export const P = styled.p`
  margin-top: 1rem;
  line-height: 1.75;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--grey200);
  word-break: keep-all;
`;

export const B = styled.b<{ color: "var(--grey400)" | "var(--blue)" }>`
  font-weight: 500;
  color: ${(props) => props.color};
`;

export const Section = styled.section`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 80px;
`;

export const Box = styled.div`
  padding: 40px;
  background-color: var(--grey50);
  border-radius: 1rem;
  margin: 40px 0;

  & p {
    color: var(--grey500);
    margin-top: 0;
  }
`;

export function Headline({ title, color, weight }: Headline) {
  return (
    <h2
      style={{
        fontSize: "1.25rem",
        color: `${color}`,
        lineHeight: "1.5",
        marginBottom: "1rem",
        fontWeight: `${weight}`,
        wordBreak: "keep-all",
      }}
    >
      {title}
    </h2>
  );
}

export function Ul({ list }: any) {
  return (
    <ul style={{ marginTop: "1rem" }}>
      {list.map((data: string, index: string) => (
        <li
          style={{
            marginLeft: "1.25rem",
            listStyle: "circle",
            lineHeight: " 1.5",
            fontSize: "1.125rem",
            color: "var(--grey200)",
          }}
          key={index}
        >
          {data}
        </li>
      ))}
    </ul>
  );
}
