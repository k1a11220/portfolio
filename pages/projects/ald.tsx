import { NextPage } from "next";
import React from "react";
import { ProjectHeader } from "../../components/project/projectHeader";
import {
  Divider,
  H3,
  ImgContainer,
  Paragraph,
  Section,
} from "../../components/typography";

const ALDPage: NextPage = () => {
  return (
    <article>
      <ProjectHeader />
      <Divider />
      <Section>
        <H3>Overview</H3>
        <Paragraph>
          In the ALD process, wafer can't move to another space. Because wafers
          can be polluted by gas or particles. But if wafer can move to another
          space without pollution, process productivity will increase. So, our
          team developed this equipment prototype to prove our theory.
        </Paragraph>
        <ImgContainer></ImgContainer>
      </Section>
    </article>
  );
};

export default ALDPage;
