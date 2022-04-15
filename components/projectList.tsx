import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Thumbnail_ald from "@media/thumbnail_ald.jpg";
import Thumbnail_bokdda from "@media/thumbnail_bokdda.png";
import Thumbnail_goonin from "@media/thumbnail_goonin.png";
import Thumbnail_solift from "@media/thumbnail_solift.png";
import Thumbnail_hydro from "@media/thumbnail_hydro.png";
import Thumbnail_javara from "@media/thumbnail_javara.png";

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

const Project = styled.li`
  cursor: pointer;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  background-color: #f2f4f6;
  overflow: hidden;
`;

export function ProjectList() {
  return (
    <ProjectContainer>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_solift} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_bokdda} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_goonin} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_hydro} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_javara} layout="responsive"></Image>
        </Link>
      </Project>
    </ProjectContainer>
  );
}
