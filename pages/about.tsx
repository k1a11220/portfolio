import styled from "@emotion/styled";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import profile from "../public/me.png";

const Header = styled.header`
  & h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  & h3 {
    font-size: 1.125rem;
    line-height: 1.25;
    color: #767e85;
  }
`;

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Beomsoo Son - About me</title>
        <meta
          name="description"
          content="Beomsoo Son's portfolio. Product designer, Design Engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div style={{ padding: "96px 0 120px" }}>
        <div
          style={{
            maxWidth: "780px",
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
            <Header>
              <div style={{ marginTop: "64px" }}>
                <Image src={profile} width={90} height={90} />
              </div>
              <h1>안녕하세요 손범수입니다.</h1>
              <h3>
                문제의 본질을 바라보는 디자인 엔지니어입니다. 제품의 형태에
                구애받지 않고 디지털과 하드웨어 사이를 넘나들며 문제를 풀어가고
                있습니다. 제품과 사용자의 관계에 주목하며, 멋진 서비스가
                사람들의 삶과 함께하는 모습을 꿈꿉니다.
              </h3>
            </Header>
            <main style={{ marginTop: "120px" }}>
              <div>
                <h3>Work Experience</h3>
                <div>
                  <div>
                    <strong>의무경찰, 대한민국 경찰청</strong>
                    <p>2021.8 ~ Present</p>
                    <p>신임 의무경찰 온보딩 경험 개선</p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
