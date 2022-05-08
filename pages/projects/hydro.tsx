import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider } from "@components/typography";
import hero from "@media/solift/thumbnail.png";
import ComingSoon from "@components/project/coming-soon";

const ElectionPage: NextPage = () => {
  return (
    <>
      <CustomHead title="Hydrogen Comporessor" description="" />
      <article>
        {/* <ProjectHeader
          title="Solift, 군 장병 자기계발 플랫폼"
          description="직접 복무하면서 느낀 문제점을 바탕으로 병사들의 의미있는 군생활을 도와주는 솔루션을 만듭니다."
          timeline="Dec 2021 - Present"
          role="Product Design & Development"
          hero={hero}
          background={"#F4FAFF"}
        /> */}
        <ComingSoon type="nda" />
      </article>
    </>
  );
};

export default ElectionPage;
