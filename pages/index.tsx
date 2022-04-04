import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/navigation";
import { Headline } from "../components/typography";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  background-color: #ffffff;
  height: 180vh;
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
      <div style={{ padding: "84px 0 120px;" }}>
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
            <header style={{ paddingTop: "80px" }}>
              <Headline title={"Hello I'm Beomsoo Son"} color={"#3D444B"} />
              <Headline
                title={
                  "Design Engineer and Product Designer based in Suwon, South Korea focused on Design engineering and Digital product design."
                }
                color={"#A7A7AF"}
              />
            </header>
            <main>
              <div>
                <ul>
                  <li></li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>

      <footer></footer>
    </Container>
  );
};

export default Home;
