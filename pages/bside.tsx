import styled from "@emotion/styled";
import { NextPage } from "next";
import { CustomHead } from "@components/custom-head";

const Header = styled.header`
  padding-bottom: 220px;
  padding-top: 120px;

  & h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-top: 32px;
    margin-bottom: 12px;
    font-weight: 500;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    color: var(--grey200);
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding-bottom: 140px;
    padding-top: 80px;
  }
`;

const About: NextPage = () => {
  return (
    <>
      <CustomHead
        title="손범수 - B-side"
        description="Beomsoo Son's portfolio. Product designer, Design Engineer"
      />
      <Header></Header>
      <main></main>
    </>
  );
};

export default About;
