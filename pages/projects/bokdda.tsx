import { CustomHead } from "@components/customHead";
import { ProjectHeader } from "@components/project/projectHeader";
import { Divider, Section } from "@components/typography";
import { NextPage } from "next";
import thumbnail from "@media/hero_bokdda.png";
import kitechLogo from "@media/kitech_logo.png";
import tngLogo from "@media/tng_logo.png";

const BokddaPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="볶다, 복지 검색 서비스 개발 프로젝트"
        description="How we reduced friction in one of the identity confirmation flow of Facebook"
      />
      <article>
        <ProjectHeader
          title="볶다, 복지 검색 서비스 개발 프로젝트"
          description="How we reduced friction in one of the identity confirmation flow of Facebook"
          timeline="Dec 2018 - Jan 2019"
          role="Product Design & MVP developing"
          profile={[
            { name: "Wonjun", role: "Research", image: kitechLogo },
            { name: "Beyonghun", role: "Product Strategy", image: tngLogo },
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
