import type { NextPage } from "next";
import { CustomHead } from "@components/custom-head";
import { Headline } from "@components/typography";
import { ProjectList } from "@components/home/projectList";
import Thumbnail_solift from "@media/solift/thumbnail.png";
import Thumbnail_bokdda from "@media/bokdda/thumbnail.png";
import Thumbnail_election from "@media/election/thumbnail.png";
import Thumbnail_ald from "@media/ald/thumbnail.jpg";
import Thumbnail_hydro from "@media/hydro/thumbnail.png";
import Thumbnail_javara from "@media/javara/thumbnail.png";
import styled from "@emotion/styled";

const Projects = [
  {
    title: "Solift",
    description: "Product Design, Full stack development",
    thumbnail: Thumbnail_solift,
    link: "/projects/solift",
  },
  {
    title: "볶다",
    description: "Product Design, UX Research, MVP",
    thumbnail: Thumbnail_bokdda,
    link: "/projects/bokdda",
  },
  {
    title: "우리의 선택, 우리의 미래",
    description: "Product Design, Full stack development",
    thumbnail: Thumbnail_election,
    link: "/projects/election",
  },
  {
    title: "ALD Equipments",
    description: "Design Engineering, Reseach, Patent",
    thumbnail: Thumbnail_ald,
    link: "/projects/ald",
  },
  {
    title: "Hydrogen Compressor",
    description: "Design Engineering, Reseach",
    thumbnail: Thumbnail_hydro,
    link: "/projects/hydro",
  },
  {
    title: "자바라이트",
    description: "Design Engineering, Reseach, Rapid Prototyping",
    thumbnail: Thumbnail_javara,
    link: "/projects/javalight",
  },
];

const Header = styled.header`
  margin-top: var(--nav-height);
  padding-top: 120px;
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
        <Headline
          title={"안녕하세요 손범수입니다."}
          color={"#333333"}
          weight={500}
        />
        <Headline
          title={
            "디자인 엔지니어, 디지털 프로덕트 디자이너 입니다. 임팩트 있는 문제를 푸는걸 좋아합니다. 지금은 군대갔습니다. ⛈"
          }
          color={"#7c7c7c"}
          weight={300}
        />
      </Header>
      <main style={{ marginTop: "140px" }}>
        <ProjectList list={Projects} />
      </main>
    </>
  );
};

export default Home;
