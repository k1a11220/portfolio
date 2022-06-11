import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider } from "@components/typography";
import hero from "@media/election/thumbnail.png";
import ComingSoon from "@components/project/coming-soon";
import FloatingButton from "@components/floating-button";

const ElectionPage: NextPage = () => {
  return (
    <>
      <CustomHead title="우리의 선택, 우리의 미래" description="" />
      <article>
        <ProjectHeader
          title="우리의 선택, 우리의 미래"
          description="2022년 대선를 준비하며 부대 내부에서 공유한 대선 후보를 정리한 서비스입니다."
          timeline="Mar 2022 - Mar 2022"
          product={[
            {
              type: "web",
              href: "https://www.2022-election.com/",
            },
          ]}
          role="Product Design & Development"
          hero={hero}
          background={"#F2F7F6"}
        />
        <ComingSoon type="coming" />
      </article>
      <FloatingButton
        icon={"bulb"}
        label={"제품 써보기"}
        link={"https://www.2022-election.com/"}
      />
    </>
  );
};

export default ElectionPage;
