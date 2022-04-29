import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  thumbnail: any;
  link: string;
}

const ProjectContent = styled.li`
  cursor: pointer;
  aspect-ratio: 16 / 10;
  border-radius: 16px;
  background-color: var(--grey50);
  overflow: hidden;
  position: relative; // for hover effect on image background color change

  &:hover {
    & img {
      transform: scale(1.03);
    }
  }

  & img {
    transition: transform 0.3s ease-in-out;
    opacity: 1;
  }
`;

const ProjectFilter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background: var(--greyOpacity600);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 0.75rem;
    color: #ffffff;
    /* margin: 32px; */
  }

  & h3 {
    font-size: 1.5rem;
    font-weight: 500;
  }

  & p {
    font-size: 1rem;
  }
`;

export function Project({ title, description, thumbnail, link }: Project) {
  return (
    <ProjectContent>
      <Link href={link}>
        <div>
          <ProjectFilter>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </ProjectFilter>
          <Image src={thumbnail} layout="responsive"></Image>
        </div>
      </Link>
    </ProjectContent>
  );
}
