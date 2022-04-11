import React from "react";
import styled from "@emotion/styled";

interface HeadlineProps {
  title: string;
  color: string;
  weight: number;
}

export function Headline({ title, color, weight }: HeadlineProps) {
  return (
    <h2
      style={{
        fontSize: "1.5rem",
        color: `${color}`,
        lineHeight: "1.25",
        marginBottom: "1.5rem",
        fontWeight: `${weight}`,
      }}
    >
      {title}
    </h2>
  );
}
