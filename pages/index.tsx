import type { NextPage } from "next";
import { CustomHead } from "@components/custom-head";
import { B, H1, H3, Headline, P } from "@components/typography";
import Thumbnail_solift from "@media/solift/thumbnail-8.png";
import Thumbnail_bokdda from "@media/bokdda/thumbnail-1.png";
import Thumbnail_election from "@media/election/thumbnail.png";
import Thumbnail_ald from "@media/ald/thumbnail.jpg";
import Thumbnail_hydro from "@media/hydro/thumbnail.png";
import Thumbnail_javara from "@media/javara/thumbnail-1.png";
import Thumbnail_4ds from "@media/4ds/thumbnail.png";
import styled from "@emotion/styled";
import { CardMdList } from "@components/card-md-list";

const Projects = [
  {
    title: "solift, OKR 기반의 개인목표 관리 서비스",
    description: "프로덕트 디자인, 풀스택 개발",
    thumbnail: Thumbnail_solift,
    link: "/projects/solift",
  },
  {
    title: "42world Design System",
    description: "디자인 시스템, 프론트엔드 개발",
    thumbnail: Thumbnail_4ds,
    link: "/projects/4ds",
  },
  {
    title: "볶다, 복지 검색경험 개선 프로젝트",
    description: "프로덕트 디자인, UX 리서치, MVP",
    thumbnail: Thumbnail_bokdda,
    link: "/projects/bokdda",
  },

  {
    title: "우리의 선택, 우리의 미래",
    description: "프로덕트 디자인, 풀스택 개발",
    thumbnail: Thumbnail_election,
    link: "/projects/election",
  },
  {
    title: "ALD Equipments",
    description: "디자인 엔지니어링, 연구개발",
    thumbnail: Thumbnail_ald,
    link: "/projects/ald",
  },
  // {
  //   title: "Hydrogen Compressor",
  //   description: "디자인 엔지니어링, 연구개발",
  //   thumbnail: Thumbnail_hydro,
  //   link: "/projects/hydro",
  // },
  {
    title: "자바라이트",
    description: "디자인 엔지니어링, 연구개발, 프로토타이핑",
    thumbnail: Thumbnail_javara,
    link: "/projects/javalight",
  },
];

const Header = styled.header`
  margin-top: var(--nav-height);
  padding-top: calc(120px - 22px);
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        title="손범수 - 디자인 엔지니어 & 프로덕트 디자이너"
        description="디자인 엔지니어, 디지털 프로덕트 디자이너 입니다. 임팩트 있는 문제를 푸는걸 좋아합니다."
      />
      <Header>
        <H3>안녕하세요 손범수입니다.</H3>
        <P>
          디자인 엔지니어, 디지털 프로덕트 디자이너 입니다. 임팩트 있는 문제를
          푸는걸 좋아합니다.
        </P>
      </Header>
      <main style={{ marginTop: "140px" }}>
        <CardMdList isWide={false} list={Projects} />
      </main>
    </>
  );
};

export default Home;
