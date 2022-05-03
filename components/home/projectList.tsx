import styled from "@emotion/styled";
import Thumbnail_ald from "@media/thumbnail_ald.jpg";
import Thumbnail_bokdda from "@media/thumbnail_bokdda.png";
import Thumbnail_goonin from "@media/thumbnail_goonin.png";
import Thumbnail_solift from "@media/thumbnail_solift.png";
import Thumbnail_hydro from "@media/thumbnail_hydro.png";
import Thumbnail_javara from "@media/thumbnail_javara.png";
import { Project } from "./project";

const ProjectContainer = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  gap: 16px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export function ProjectList() {
  return (
    <ProjectContainer>
      <Project
        title="Solift"
        description="군 장병 혜택정보 제공 및 자기계발 서비스"
        thumbnail={Thumbnail_solift}
        link="/projects/solift"
      />
      <Project
        title="볶다"
        description="복지 검색경험 개선 프로젝트"
        thumbnail={Thumbnail_bokdda}
        link="/projects/bokdda"
      />
      <Project
        title="군복무 가이드"
        description="입대 전 각종 군 정보 제공 서비스"
        thumbnail={Thumbnail_goonin}
        link="/projects/"
      />
      <Project
        title="ALD Equipments"
        description="Develop optimized ALD equipment"
        thumbnail={Thumbnail_ald}
        link="/projects/ald"
      />
      <Project
        title="Hydrogen Compressor"
        description="Non-contact high pressure compressor"
        thumbnail={Thumbnail_hydro}
        link="/projects/hydro"
      />
      <Project
        title="Javara Light"
        description="Small energy solution for Africa"
        thumbnail={Thumbnail_javara}
        link="/projects/javara"
      />
    </ProjectContainer>
  );
}
