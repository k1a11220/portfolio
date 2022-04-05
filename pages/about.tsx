import styled from "@emotion/styled";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import { InfoList } from "../components/about/infoList";
import { CTA } from "../components/cta";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";
import profile from "../public/me.png";

const Header = styled.header`
  padding-bottom: 80px;
  & h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-top: 24px;
    margin-bottom: 12px;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #767e85;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: 32px;
  margin-top: 80px;
`;

const TestImg = styled.div`
  aspect-ratio: 1;
  background-color: #696969;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 20px;
  margin-top: 100px;
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
      <div style={{ padding: "102px 0 10px" }}>
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
              <ImgContainer>
                <TestImg />
                <TestImg />
                <TestImg />
                <TestImg />
              </ImgContainer>
              <h1>Hello I'm Beomsoo Son</h1>
              <h3>
                I'm a User Experience + Product Designer constructing
                playgrounds for people to explore, enjoy, and work in. I strive
                to foster long-lasting relationships between people and services
                by weaving carefully crafted personalities into different
                services. I love watching users develop an affinity for
                services, allowing the services to become part of the very
                fabric of people's lives.
              </h3>
            </Header>
            <main style={{ marginTop: "120px" }}>
              <InfoList
                label={"Experience"}
                list={[
                  {
                    title: "대한민국 경찰청",
                    summary: "의무경찰 · 2021.8 ~ Present",
                    desc: "Designing simple & understandable patterns for communication at WhatsApp for it’s 1+ billion users while maintaining end-to-end encryption.",
                  },
                  {
                    title: "TNG",
                    summary: "Design Engineer · 2020.1 ~ 2021.8",
                    desc: "Designing simple & understandable patterns for communication at WhatsApp for it’s 1+ billion users while maintaining end-to-end encryption.",
                  },
                  {
                    title: "BE THE LIGHT",
                    summary: "Design Engineer · 2021.3 ~ 2021.8",
                    desc: "Designing simple & understandable patterns for communication at WhatsApp for it’s 1+ billion users while maintaining end-to-end encryption.",
                  },
                  {
                    title: "May KING",
                    summary: "Founder, Design Instructor · 2018.1 ~ 2019.12",
                    desc: "Designing simple & understandable patterns for communication at WhatsApp for it’s 1+ billion users while maintaining end-to-end encryption.",
                  },
                ]}
              />
              <InfoList
                label={"Research & Patent"}
                list={[
                  {
                    title:
                      "원자층 복합 증착 챔버 (Atomic layer deposition chamber)",
                    summary: "한국생산기술연구원 · 10-2021-009228",
                    desc: "",
                    isIcon: true,
                    download: "",
                  },
                  {
                    title:
                      "원자층 복합 증착 장치 (Atomic layer deposition apparatus)",
                    summary: "한국생산기술연구원 · 10-2021-0157694",
                    desc: "",
                    isIcon: true,
                    download: "",
                  },
                  {
                    title:
                      "지속가능한 ALD 공정챔버 개발을 위한 공정갭에 따른 가스유동 평가",
                    summary: "제 29회 한국반도체학술대회 · D_0041 / TP1-085",
                    desc: "",
                    isIcon: true,
                    download: "",
                  },
                  {
                    title: "전기클린룸 개발을 위한 수분무 가습노즐 평가",
                    summary: "대한설비공학회 2021 동계학술발표대회 · 21-W-160",
                    desc: "",
                    isIcon: true,
                    download: "",
                  },
                  {
                    title:
                      "전기클린룸 개발을 위한 일유체노즐 내부의 물 유동장 수치해석",
                    summary: "대한기계학회 2022 열공학부문 춘계학술대회 · ",
                    desc: "",
                    isIcon: true,
                    download: "",
                  },
                ]}
              />
              <hr
                style={{
                  border: "1px solid #EAEAEA",
                }}
              />
              <ButtonContainer>
                <CTA color={true} label={"Contact"} />
                <CTA color={false} label={"Resume"} />
              </ButtonContainer>
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
