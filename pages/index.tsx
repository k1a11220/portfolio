import styled from "@emotion/styled";
import { CustomHead } from "../components/customHead";
import { Headline } from "../components/typography";
import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Thumbnail_ald from "../media/thumbnail_ald.jpg";

const ProjectContainer = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const ProjectWrapper = styled.li`
  cursor: pointer;
  height: 320px;
  border-radius: 12px;
  background-color: #f2f4f6;
  overflow: hidden;
`;

const Project = styled(Image)``;

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        title="Beomsoo Son - Design Engineer & Product Designer"
        description="Beomsoo Son's portfolio. Product designer, Design Engineer"
      />
      <header style={{ paddingTop: "140px", maxWidth: "60%" }}>
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
        <ProjectContainer>
          <ProjectWrapper>
            <Link href="/projects/ald">
              <Project src={Thumbnail_ald} layout="responsive"></Project>
            </Link>
          </ProjectWrapper>
        </ProjectContainer>
      </main>
    </>
  );
};

export default Home;
