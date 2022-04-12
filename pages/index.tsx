import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { CustomHead } from "../components/customHead";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import { Headline } from "../components/typography";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  background-color: #ffffff;
`;

const ProjectContainer = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

const ProjectWrapper = styled.li``;

const Project = styled.div`
  height: 320px;
  border-radius: 12px;
  background-color: #f2f4f6;
`;

const Home: NextPage = () => {
  return (
    <Container>
      <CustomHead
        title="Beomsoo Son - Design Engineer & Product Designer"
        description="Beomsoo Son's portfolio. Product designer, Design Engineer"
      />
      <Navigation />
      <div style={{ padding: "120px 0 120px" }}>
        <div
          style={{
            maxWidth: "1140px",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "92%",
              margin: "auto",
              maxWidth: "calc(100% - 48px)",
            }}
          >
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
                  <Project></Project>
                </ProjectWrapper>
                <ProjectWrapper>
                  <Project></Project>
                </ProjectWrapper>
                <ProjectWrapper>
                  <Project></Project>
                </ProjectWrapper>
                <ProjectWrapper>
                  <Project></Project>
                </ProjectWrapper>
              </ProjectContainer>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Home;
