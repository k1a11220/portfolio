import styled from "@emotion/styled";
import type { NextPage } from "next";
import Head from "next/head";
import { Navigation } from "../components/navigation";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
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
      <main></main>

      <footer></footer>
    </Container>
  );
};

export default Home;
