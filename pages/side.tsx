import type { NextPage } from "next";
import { CustomHead } from "@components/custom-head";
import { H1, P } from "@components/typography";
import styled from "@emotion/styled";
import { CardMdList } from "@components/card-md-list";
import Thumbnail_solift from "@media/solift/thumbnail.png";
import Thumbnail_bokdda from "@media/bokdda/thumbnail.png";
import Thumbnail_election from "@media/election/thumbnail.png";
import Thumbnail_ald from "@media/ald/thumbnail.jpg";
import Thumbnail_hydro from "@media/hydro/thumbnail.png";

const Projects = [
  {
    title: "May KING",
    subtitle: "2019",
    description:
      "경기 꿈의학교 사업을 통해 디자인, 설계 교육 커리큘럼을 기획하고 운영했습니다.",
    thumbnail: Thumbnail_solift,
    link: "https://www.youtube.com/watch?v=Q3_Rsd0PUmA",
  },
  {
    title: "우리의 선택, 우리의 미래",
    subtitle: "2022",
    description: "프로덕트 디자인, UX 리서치, MVP",
    thumbnail: Thumbnail_bokdda,
    link: "https://www.2022-election.com",
  },
  {
    title: "군복무 가이드",
    subtitle: "2021",
    description:
      "입대 일주일 전 군복무자들에게 도움되는 정보를 정리한 서비스를 빠르게 만들었습니다.",
    thumbnail: Thumbnail_election,
    link: "https://www.goonin.kr",
  },
  {
    title: "Padintosh",
    subtitle: "2021",
    description: "레트로 감성을 자극하는 아이패드 스탠드입니다.",
    thumbnail: Thumbnail_ald,
    link: "https://www.behance.net/gallery/109584649/Padintosh",
  },
  {
    title: "Toothbrush",
    subtitle: "2020",
    description: "재사용 가능한 칫솔모를 가진 칫솔입니다.",
    thumbnail: Thumbnail_hydro,
    link: "https://www.behance.net/gallery/102975555/Toothbrush",
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

const Bside: NextPage = () => {
  return (
    <>
      <CustomHead
        title="손범수 - 디자인 엔지니어 & 프로덕트 디자이너"
        description="디자인 엔지니어, 디지털 프로덕트 디자이너 입니다. 임팩트 있는 문제를 푸는걸 좋아합니다."
      />
      <Header>
        <H1>
          새로운 도전과 함께한 <br />
          즐거운 이야기들
        </H1>
        <P>다양한 도전과 함께한 즐거운 이야기들을 소개합니다.</P>
      </Header>
      <main style={{ marginTop: "140px" }}>
        <CardMdList list={Projects} />
      </main>
    </>
  );
};

export default Bside;
