import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider, Section } from "@components/typography";
import { NextPage } from "next";
import thumbnail from "@media/hero_bokdda.png";
import profile_wonjun from "@media/profile_wonjun.jpeg";

const BokddaPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="볶다, 복지 검색경험 개선 프로젝트"
        description="복지 검색과정의 문제점을 분석하고, 검색경험을 개선하는 프로젝트입니다."
      />
      <article>
        <ProjectHeader
          title="볶다, 복지 검색경험 개선 프로젝트"
          description="복지 검색과정의 문제점을 분석하고, 실제 프로덕트에 적용 가능한 솔루션을 제시합니다."
          timeline="Dec 2018 - Jan 2019"
          role="Product Design & MVP developing"
          profile={[
            { name: "Wonjun", role: "Research", image: profile_wonjun },
            {
              name: "Beyonghun",
              role: "Product Strategy",
              image: profile_wonjun,
            },
          ]}
          thumbnail={thumbnail}
          background={"#ffffff"}
        />
        <Divider />
        <Section></Section>
      </article>
    </>
  );
};

export default BokddaPage;
