import { CustomHead } from "@components/customHead";
import { ProjectHeader } from "@components/project/projectHeader";
import { Divider, Section } from "@components/typography";
import { NextPage } from "next";
import thumbnail from "@media/thumbnail_bokdda.png";

const BokddaPage: NextPage = () => {
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
            { name: "Beyonghun", role: "Design Engineering", image: tngLogo },
            { name: "Wonjun", role: "Research, Test", image: kitechLogo },
          ]}
          thumbnail={thumbnail}
        />
        <Divider />
        <Section></Section>
      </article>
    </>
  );
};

export default BokddaPage;
