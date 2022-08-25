import styled from "@emotion/styled";
import { ImageProps } from "next/image";
import { CardMd } from "./card-md";

export interface Project {
  title: string;
  description: string;
  thumbnail: ImageProps | any;
  link: string;
}

export interface ProjectWithSubtitle extends Project {
  subtitle?: string;
}

const ProjectContainer = styled.ul`
  list-style: none;
  display: grid;
  padding: 0;
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export function CardMdList({
  list,
  isWide,
}: {
  list: ProjectWithSubtitle[];
  isWide: boolean;
}) {
  return (
    <ProjectContainer>
      {list.map((project, index) => (
        <CardMd
          key={index}
          subtitle={project.subtitle}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          link={project.link}
          isWide={isWide}
        />
      ))}
    </ProjectContainer>
  );
}
