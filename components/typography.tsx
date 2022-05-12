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
  font-size: 1.5rem;
  font-weight: 600;
  word-break: keep-all;
`;

export const H3 = styled.h3`
  margin-top: 2rem;
  font-size: 1.375rem;
  font-weight: 500;
  word-break: keep-all;
`;

export const P = styled.p`
  margin-top: 1rem;
  line-height: 1.5;
  font-size: 1.125rem;
  color: var(--grey200);
  word-break: keep-all;
`;

export const B = styled.b`
  font-weight: 500;
  color: var(--grey400);
`;

export const Section = styled.section`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.div`
  height: 80px;
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
