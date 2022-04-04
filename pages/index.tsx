import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
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
  gap: 30px;
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
      <Head>
        <title>Beomsoo Son</title>
        <meta
          name="description"
          content="Beomsoo Son's portfolio. Product designer, Design Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div style={{ padding: "96px 0 120px;" }}>
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
            <header style={{ paddingTop: "140px", maxWidth: "80%" }}>
              <Headline title={"Hello I'm Beomsoo Son"} color={"#3D444B"} />
              <Headline
                title={
                  "Design Engineer and Product Designer based in Suwon, South Korea focused on Design engineering and Digital product design."
                }
                color={"#A7A7AF"}
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
