import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider, Section } from "@components/typography";
import hero from "@media/javara/thumbnail.png";
import ComingSoon from "@components/project/coming-soon";
import j1 from "@media/javara/j1.jpeg";
import j2 from "@media/javara/j2.jpeg";
import j3 from "@media/javara/j3.jpeg";
import j4 from "@media/javara/j4.jpeg";
import j5 from "@media/javara/j5.jpeg";
import j6 from "@media/javara/j6.png";
import j7 from "@media/javara/j7.png";
import j8 from "@media/javara/j8.png";
import j9 from "@media/javara/j9.png";
import j10 from "@media/javara/j10.png";
import j11 from "@media/javara/j11.png";
import j12 from "@media/javara/j12.png";

import profile_wonjun from "@media/common/profile_wonjun.jpeg";
import profile_jinsoo from "@media/common/profile_jinsoo.png";
import profile_changhyun from "@media/common/profile_changhyun.png";
import profile_jinho from "@media/common/profile_jinho.png";

import styled from "@emotion/styled";
import Image from "next/image";

const ImgGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const JavalightPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="자바라이트"
        description="5.6억명의 빛 없이 살아가는 아프리카 사람들을 위한 에너지 솔루션"
      />
      <article>
        <ProjectHeader
          title="자바라이트"
          description="5.6억명의 빛 없이 살아가는 아프리카 사람들을 위한 에너지 솔루션"
          timeline="Mar 2021 - Aug 2021"
          role="Design Engineering"
          hero={hero}
          background={"#fdfafa"}
          profile={[
            { name: "Jinsoo", role: "Project Lead", image: profile_jinsoo },
            {
              name: "Changhyun",
              role: "Full stack Developing",
              image: profile_changhyun,
            },
            {
              name: "Jinho",
              role: "Electronic Engineering",
              image: profile_jinho,
            },
            {
              name: "Wonjun",
              role: "Product Design",
              image: profile_wonjun,
            },
          ]}
        />
        <Divider />
        <Section>
          <ImgGrid>
            <Image src={j6} />
            <Image src={j7} />
            <Image src={j9} />
            <Image src={j10} />
            <Image src={j1} />
            <Image src={j2} />
            <Image src={j3} />
            <Image src={j4} />
          </ImgGrid>
        </Section>

        <ComingSoon type="coming" />
      </article>
    </>
  );
};

export default JavalightPage;
