import styled from "@emotion/styled";
import { ImageProps } from "next/image";
import { Project } from "./card-lg-list";
import { CardMd } from "./card-md";

interface ProjectWithSubtitle extends Project {
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

export function CardMdList({ list }: { list: ProjectWithSubtitle[] }) {
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
        />
      ))}
    </ProjectContainer>
  );
}
