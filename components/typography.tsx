import React from "react";
import styled from "@emotion/styled";

interface Headline {
  title: string;
  color: string;
  weight: number;
}

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
