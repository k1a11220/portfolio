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

const Projects = [
  {
    title: "Solift",
    description: "군 장병 혜택정보 제공 및 자기계발 서비스",
    thumbnail: Thumbnail_solift,
    link: "/projects/solift",
  },
  {
    title: "볶다",
    description: "복지 검색경험 개선 프로젝트",
    thumbnail: Thumbnail_bokdda,
    link: "/projects/bokdda",
  },
  {
    title: "2022 election",
    description: "입대 전 각종 군 정보 제공 서비스",
    thumbnail: Thumbnail_election,
    link: "/projects/",
  },
  {
    title: "ALD Equipments",
    description: "Develop optimized ALD equipment",
    thumbnail: Thumbnail_ald,
    link: "/projects/ald",
  },
  {
    title: "Hydrogen Compressor",
    description: "Non-contact high pressure compressor",
    thumbnail: Thumbnail_hydro,
    link: "/projects/hydro",
  },
  {
    title: "Javara Light",
    description: "Small energy solution for Africa",
    thumbnail: Thumbnail_javara,
    link: "/projects/javara",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <CustomHead
        title="손범수 - 디자인 엔지니어 & 프로덕트 디자이너"
        description="디자인 엔지니어, 디지털 프로덕트 디자이너 입니다. 임팩트 있는 문제를 푸는걸 좋아합니다."
      />
      <header
        style={{ marginTop: "120px", paddingTop: "140px", maxWidth: "60%" }}
      >
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
      </header>
      <main style={{ marginTop: "140px" }}>
        <ProjectList list={Projects} />
      </main>
    </>
  );
};

export default Home;
