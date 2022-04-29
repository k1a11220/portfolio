import styled from "@emotion/styled";
import Image from "next/image";
import { NextPage } from "next";
import { InfoList } from "@components/about/infoList";
import { CTA } from "@components/cta";
import { CustomHead } from "@components/custom-head";

import porfile_1 from "@media/profile_1.jpeg";
import porfile_2 from "@media/profile_2.jpg";
import porfile_3 from "@media/profile_3.jpg";
import porfile_4 from "@media/profile_4.jpeg";

const Header = styled.header`
  padding-bottom: 220px;
  padding-top: 120px;

  & h1 {
    font-size: 1.5rem;
    line-height: 1.25;
    margin-top: 32px;
    margin-bottom: 12px;
  }

  & h3 {
    font-size: 1.25rem;
    line-height: 1.5;
    color: var(--grey200);
    margin-bottom: 1.5rem;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    padding-bottom: 140px;
    padding-top: 80px;
  }
`;

const ImgContainer = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-bottom: 32px;
  margin-top: 100px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Img = styled.div`
  aspect-ratio: 1;
  background-color: var(--grey50);
  border-radius: 8px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 20px;
  margin-top: 80px;
`;

const About: NextPage = () => {
  return (
    <>
      <CustomHead
        title="Beomsoo Son - About me"
        description="Beomsoo Son's portfolio. Product designer, Design Engineer"
      />
      <Header>
        <ImgContainer>
          <Img>
            <Image src={porfile_1} layout="responsive" />
          </Img>
          <Img>
            <Image src={porfile_2} layout="responsive" />
          </Img>
          <Img>
            <Image src={porfile_3} layout="responsive" />
          </Img>
          <Img>
            <Image src={porfile_4} layout="responsive" />
          </Img>
        </ImgContainer>
        <h1>Hello I'm Beomsoo Son</h1>
        <h3>
          I’m a design engineer and a digital product designer. I enjoy digging
          into the essence of users' problems and solving them. Regardless of
          the shape of the product, I'm solving problems across software and
          hardware. I pay attention to the relationship between the product and
          the user. I dream of an awesome product being with people's lives.
        </h3>
      </Header>
      <main>
        <InfoList
          label={"Experience"}
          list={[
            {
              title: "KOREAN NATIONAL POLICE AGENCY",
              summary: "Auxiliary Police · 2021.8 ~ Present",
              desc: "Improve auxiliary police onboarding experience.",
            },
            {
              title: "TNG",
              summary: "Design Engineer · 2020.1 ~ 2021.8",
              desc: "Worked with KITECH, Samsung Display to optimize ALD Equipment. Involved in hardware design and user interface design of ALD equipment. Developed non-contact hydrogen compressor.",
            },
            {
              title: "BE THE LIGHT",
              summary: "Design Engineer · 2021.3 ~ 2021.8",
              desc: "Designed Javara Light, a portable solar energy solution. BE THE LIGHT is social startup team, which was created with the goal of bringing light to Africa.",
            },
            {
              title: "May KING",
              summary: "Founder, Design Instructor · 2018.1 ~ 2019.12",
              desc: "Found May KING, a non-profit educational organization that teaches product design and engineering. Created and operated product design and hardware engineering curriculum.",
            },
          ]}
        />
        <InfoList
          label={"Research & Patent"}
          list={[
            {
              title: "원자층 복합 증착 챔버 (Atomic layer deposition chamber)",
              summary: "한국생산기술연구원 · 10-2021-009228",
              desc: "",
              isIcon: true,
              download:
                "https://drive.google.com/file/d/1rQBLTZFnai_l8u99YKmbyzYq6n96Pvhw/view?usp=sharing",
            },
            {
              title:
                "원자층 복합 증착 장치 (Atomic layer deposition apparatus)",
              summary: "한국생산기술연구원 · 10-2021-0157694",
              desc: "",
              isIcon: true,
              download:
                "https://drive.google.com/file/d/1nkY36Mrk5nwd21ji3nZB43bU_hGDTvPV/view?usp=sharing",
            },
            {
              title:
                "지속가능한 ALD 공정챔버 개발을 위한 공정갭에 따른 가스유동 평가",
              summary: "제 29회 한국반도체학술대회 · D_0041 / TP1-085",
              desc: "",
              isIcon: true,
              download:
                "https://drive.google.com/file/d/1oF_pKLJUzYGfqvyuiFWvCP3-YQFqZBkA/view?usp=sharing",
            },
            {
              title: "전기클린룸 개발을 위한 수분무 가습노즐 평가",
              summary: "대한설비공학회 2021 동계학술발표대회 · 21-W-160",
              desc: "",
              isIcon: true,
              download:
                "https://drive.google.com/file/d/1sPA_wkmsuZalpGL9T9EI_-vAwwvdSL6K/view?usp=sharing",
            },
            {
              title:
                "전기클린룸 개발을 위한 일유체노즐 내부의 물 유동장 수치해석",
              summary: "대한기계학회 2022 열공학부문 춘계학술대회 · ",
              desc: "",
              isIcon: true,
              download:
                "https://drive.google.com/file/d/1XMzDLgodgGJj8_1wBceAbOGyDHYTxBYa/view?usp=sharing",
            },
          ]}
        />
        <hr
          style={{
            border: "1px solid var(--greyOpacity500)",
          }}
        />
        <ButtonContainer>
          <CTA
            href="mailto:beskar.son@gmail.com"
            isPrimary={true}
            label={"Contact"}
            blank={true}
          />
          <CTA
            href="https://docs.google.com/document/d/1ecSm_tNUoL6ZVSBwjyNmpl_TiBkEgGb3oAIUFjjOWdY/edit?usp=sharing"
            isPrimary={false}
            label={"Resume"}
            blank={true}
          />
        </ButtonContainer>
      </main>
    </>
  );
};

export default About;
