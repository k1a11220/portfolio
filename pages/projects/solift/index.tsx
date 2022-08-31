import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider, Section } from "@components/typography";
import hero from "@media/solift/thumbnail-4.png";
import img_1 from "@media/solift/thumbnail-3.png";

import ComingSoon from "@components/project/coming-soon";
import StyledImage from "@components/project/styled-image";
import FloatingButton from "@components/floating-button";

const SoliftPage: NextPage = () => {
  return (
    <>
      <CustomHead title="SOLIFT" description="" />
      <article>
        <ProjectHeader
          title="SOLIFT, OKR 기반의 개인목표 관리 서비스"
          description="직접 복무하면서 느낀 불편함을 바탕으로 병사들의 의미있는 군생활을 도와주는 솔루션을 만듭니다."
          timeline="May 2022 - July 2022"
          role="프로덕트 디자인 & 풀스택 개발"
          product={[
            {
              type: "ios",
              href: "https://apps.apple.com/kr/app/solift/id1637383448",
            },
          ]}
          hero={hero}
          background={"#F4FAFF"}
        />
        <ComingSoon type="coming" />
        {/* <Section>
          <StyledImage src={img_1} />
        </Section> */}
        <FloatingButton
          icon={"bulb"}
          label={"제품 써보기"}
          link="https://apps.apple.com/kr/app/solift/id1637383448"
        />
      </article>
    </>
  );
};

export default SoliftPage;
