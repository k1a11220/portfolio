import type { NextPage } from "next";
import { CustomHead } from "@components/custom-head";
import { H1, P } from "@components/typography";
import styled from "@emotion/styled";
import { CardMdList } from "@components/card-md-list";
import Thumbnail_m1 from "@media/mayking/thumbnail.jpg";
import Thumbnail_election from "@media/election/thumbnail.png";
import Thumbnail_toothbrush from "@media/toothbrush/thumbnail.png";
import Thumbnail_padintosh from "@media/padintosh/thumbnail.png";
import Thumbnail_goonin from "@media/goonin/thumbnail-2.png";

const Projects = [
  {
    title: "May KING",
    subtitle: "2019",
    description:
      "경기 꿈의학교 사업에 선정되어 디자인, 설계 교육 커리큘럼을 기획하고 직접 운영했습니다.",
    thumbnail: Thumbnail_m1,
    link: "https://www.youtube.com/watch?v=Q3_Rsd0PUmA",
  },
  {
    title: "군복무 가이드",
    subtitle: "2021",
    description:
      "입대 일주일 전 군복무자들에게 도움되는 정보를 정리한 서비스를 빠르게 만들었습니다.",
    thumbnail: Thumbnail_goonin,
    link: "https://www.goonin.kr",
  },
  {
    title: "Padintosh",
    subtitle: "2021",
    description: "매킨토시에 영감을 받아 만든 아이패드 스탠드입니다.",
    thumbnail: Thumbnail_padintosh,
    link: "https://www.behance.net/gallery/109584649/Padintosh",
  },
  {
    title: "Toothbrush",
    subtitle: "2020",
    description: "칫솔모를 교체할 수 있는 칫솔입니다.",
    thumbnail: Thumbnail_toothbrush,
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
