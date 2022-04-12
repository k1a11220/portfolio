import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & a {
    color: #3d444b;
    display: flex;
    align-items: center;
    margin-left: 32px;
  }
`;

const InfoTitle = styled.p`
  word-break: keep-all;
  font-size: 1.375rem;
  line-height: 1.25;
  font-weight: 500;
`;

const InfoSummary = styled.p`
  font-size: 1.125rem;
  margin-top: 10px;
  line-height: 1.5;
  color: #767e85;
  font-weight: 300;
`;

const InfoDesc = styled(InfoSummary)`
  color: #3d444b;
`;

export function Info({ list }: any) {
  return list.map((post: any, index: number) => (
    <Container key={index}>
      <div>
        <InfoTitle>{post.title}</InfoTitle>
        <InfoSummary>{post.summary}</InfoSummary>
        <InfoDesc>{post.desc}</InfoDesc>
      </div>
      {post.isIcon ? (
        <a href={post.download} target="_blank" rel="noopener norefferer">
          <FontAwesomeIcon icon={faFileLines} size="lg" />
        </a>
      ) : null}
    </Container>
  ));
}
