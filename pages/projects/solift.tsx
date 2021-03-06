import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider } from "@components/typography";
import hero from "@media/solift/thumbnail-2.png";
import ComingSoon from "@components/project/coming-soon";

const SoliftPage: NextPage = () => {
  return (
    <>
      <CustomHead title="SOLIFT" description="" />
      <article>
        <ProjectHeader
          title="SOLIFT, 군 장병 자기계발 플랫폼"
          description="직접 복무하면서 느낀 불편함을 바탕으로 병사들의 의미있는 군생활을 도와주는 솔루션을 만듭니다."
          timeline="May 2022 - Present"
          role="프로덕트 디자인 & 풀스택 개발"
          hero={hero}
          background={"#F4FAFF"}
        />
        <ComingSoon type="coming" />
      </article>
    </>
  );
};

export default SoliftPage;
