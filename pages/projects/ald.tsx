import { NextPage } from "next";
import React from "react";
import { CustomHead } from "../../components/customHead";
import { ProjectHeader } from "../../components/project/projectHeader";
import {
  Divider,
  H3,
  ImgContainer,
  Paragraph,
  Section,
} from "../../components/typography";
import thumbnail from "../../media/thumbnail_ald.jpg";
import samsungLogo from "../../media/samsung_logo.png";
import kitechLogo from "../../media/kitech_logo.png";
import tngLogo from "../../media/tng_logo.png";

const ALDPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="ALD Equipments develop project"
        description="How we reduced friction in one of the identity confirmation flow of Facebook"
      />
      <article>
        <ProjectHeader
          title="ALD Equipments develop project"
          description="How we reduced friction in one of the identity confirmation flow of Facebook"
          timeline="Dec 2018 - Jan 2019"
          role="Design Engineering & Research"
          profile={[
            { name: "TNG", role: "Design Engineering", image: tngLogo },
            { name: "KITECH", role: "Research, Test", image: kitechLogo },
            { name: "Samsung Display", role: "Research", image: samsungLogo },
          ]}
          thumbnail={thumbnail}
        />
        <Divider />
        <Section>
          <H3>Overview</H3>
          <Paragraph>
            In the ALD process, wafer can't move to another space. Because
            wafers can be polluted by gas or particles. But if wafer can move to
            another space without pollution, process productivity will increase.
            So, our team developed this equipment prototype to prove our theory.
          </Paragraph>
          <ImgContainer></ImgContainer>
        </Section>
      </article>
    </>
  );
};

export default ALDPage;
