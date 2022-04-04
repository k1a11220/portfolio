import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  & strong {
    font-size: 1.25rem;
    line-height: 1.25;
    padding-bottom: 12px;
  }

  & p {
    font-size: 1rem;
    margin-top: 8px;
    line-height: 1.25;
  }
`;

export function Info({ list }: any) {
  return list.map((post: any, index: number) => (
    <Container key={index}>
      <strong>{post.title}</strong>
      <p>{post.summary}</p>
      <p>{post.desc}</p>
    </Container>
  ));
}
