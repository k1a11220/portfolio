import React from "react";
import styled from "@emotion/styled";

export function Headline({ title, color }: any) {
  return (
    <h2
      style={{
        fontSize: "1.5rem",
        color: `${color}`,
        lineHeight: "1.25",
        marginBottom: "1.5rem",
      }}
    >
      {title}
    </h2>
  );
}
