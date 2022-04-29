import React from "react";
import styled from "@emotion/styled";

interface Headline {
  title: string;
  color: string;
  weight: number;
}

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const H3 = styled.h3`
  margin-top: 2rem;
  font-size: 1.375rem;
  font-weight: 500;
`;

export const Section = styled.section`
  margin-bottom: 6rem;
`;

export const Divider = styled.div`
  height: 80px;
`;

export const Paragraph = styled.p`
  margin-top: 1rem;
  line-height: 1.5;
  font-size: 1.125rem;
  color: var(--grey200);
`;

export const ImgContainer = styled.div`
  aspect-ratio: 16 / 9;
  background-color: var(--grey50);
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  border-radius: 10px;
`;

export const B = styled.b`
  font-weight: 500;
  color: var(--grey400);
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
            listStyle: "circle !important",
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
