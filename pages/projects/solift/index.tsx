import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider, H1, H2, P, Section } from "@components/typography";
import hero from "@media/solift/thumbnail-4.png";
import img_1 from "@media/solift/thumbnail-3.png";
import s1 from "@media/solift/s1.png";
import s2 from "@media/solift/s2.png";
import s3 from "@media/solift/s3.png";
import s4 from "@media/solift/s4.png";
import s5 from "@media/solift/s5.png";
import s6 from "@media/solift/s6.png";
import StyledImage from "@components/project/styled-image";
import FloatingButton from "@components/floating-button";
import ComingSoon from "@components/project/coming-soon";

const SoliftPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="solift"
        description="직접 군 복무하면서 느낀 불편함을 바탕으로 사람들의 목표관리를 도와주는 솔루션을 만듭니다."
      />
      <article>
        <ProjectHeader
          title="solift, OKR 기반의 개인목표 관리 서비스"
          description="직접 군 복무하면서 느낀 불편함을 바탕으로 사람들의 목표관리를 도와주는 솔루션을 만듭니다."
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
        <Divider />
        <ComingSoon type="coming" />
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
