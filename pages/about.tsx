import styled from "@emotion/styled";
import Image from "next/image";
import { NextPage } from "next";
import { InfoList } from "@components/about/infoList";
import { CTA } from "@components/cta";
import { CustomHead } from "@components/custom-head";

import porfile_1 from "@media/profile/profile_1.jpeg";
import porfile_2 from "@media/profile/profile_2.jpg";
import porfile_3 from "@media/profile/profile_3.jpg";
import porfile_4 from "@media/profile/profile_4.jpeg";

const Header = styled.header`
  padding-bottom: 220px;
  padding-top: 120px;

  & h1 {
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 32px;
    margin-bottom: 1rem;
    font-weight: 600;
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
        title="손범수 - About me"
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
        <h1>
          도전, 설렘, 가슴 뛰는 삶
          <br />
          그리고 이야기
        </h1>
        <h3>
          안녕하세요, 손범수입니다. 디자인 엔지니어이자 디지털 프로덕트 디자이너
          입니다. 도전적인 팀원들과 함께 사용자 관점에서 문제를 해결하는 걸
          좋아합니다. 제품의 형태에 구애받지 않고 소프트웨어와 하드웨어 사이를
          넘나들며 문제를 풀어가고 있습니다. 제품과 사용자의 관계에 주목하며,
          멋진 서비스가 사람들의 삶과 함께하는 모습을 꿈꿉니다.
        </h3>
      </Header>
      <main>
        <InfoList
          label={"Experience"}
          list={[
            {
              title: "대한민국 경찰청",
              summary: "의무경찰 · 2021.8 ~ Present",
              desc: "신임 의무경찰 온보딩 경험 개선 프로젝트.",
            },
            {
              title: "TNG",
              summary: "Design Engineer · 2020.1 ~ 2021.8",
              desc: "한국생산기술연구원, 삼성디스플레이와 함께 ALD 장비를 만들었습니다. ALD 장비의 하드웨어 설계 및 사용자 인터페이스 설계에 참여했습니다. 비접촉 수소 압축기 프로토타입을 개발했습니다.",
            },
            {
              title: "BE THE LIGHT",
              summary: "Design Engineer · 2021.3 ~ 2021.8",
              desc: "아프리카에 빛을 전하자는 목표로 탄생한 소셜 스타트업인 BE THE LIGHT에서 휴대용 태양광 에너지 솔루션인 JAVALIGHT를 설계했습니다.",
            },
            {
              title: "May KING",
              summary: "Founder, Design Instructor · 2018.1 ~ 2019.12",
              desc: "제품 디자인 및 엔지니어링을 가르치는 비영리 교육 기관인 May KING을 설립했습니다. 제품 설계 및 하드웨어 엔지니어링 커리큘럼을 제작하여 운영했습니다.",
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
              summary: "대한기계학회 2022 열공학부문 춘계학술대회",
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
