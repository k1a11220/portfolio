import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import Thumbnail_ald from "@media/thumbnail_ald.jpg";

const ProjectContainer = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

const Project = styled.li`
  cursor: pointer;
  height: 320px;
  border-radius: 12px;
  background-color: #f2f4f6;
  overflow: hidden;
`;

export function ProjectList() {
  return (
    <ProjectContainer>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
      <Project>
        <Link href="/projects/ald">
          <Image src={Thumbnail_ald} layout="responsive"></Image>
        </Link>
      </Project>
    </ProjectContainer>
  );
}
