import type { NextPage } from "next";
import { CustomHead } from "@components/custom-head";
import { Headline } from "@components/typography";
import { ProjectList } from "@components/home/projectList";

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        title="Beomsoo Son - Design Engineer & Product Designer"
        description="Beomsoo Son's portfolio. Product designer, Design Engineer"
      />
      <header
        style={{ marginTop: "120px", paddingTop: "140px", maxWidth: "60%" }}
      >
        <Headline
          title={"Hello I'm Beomsoo Son"}
          color={"#333333"}
          weight={400}
        />
        <Headline
          title={
            "Design Engineer and Product Designer based in Suwon, South Korea focused on Design engineering and Digital product design."
          }
          color={"#7c7c7c"}
          weight={300}
        />
      </header>
      <main style={{ marginTop: "140px" }}>
        <ProjectList />
      </main>
    </>
  );
};

export default Home;
