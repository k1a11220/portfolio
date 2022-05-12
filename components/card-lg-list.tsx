import styled from "@emotion/styled";
import { ImageProps } from "next/image";
import { CardLg } from "./card-lg";

export interface Project {
  title: string;
  description: string;
  thumbnail: ImageProps;
  link: string;
}

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

export function CardLgList({ list }: { list: Project[] }) {
  return (
    <ProjectContainer>
      {list.map((project, index) => (
        <CardLg
          key={index}
          title={project.title}
          description={project.description}
          thumbnail={project.thumbnail}
          link={project.link}
        />
      ))}
    </ProjectContainer>
  );
}
