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

    & div {
      opacity: 1;
    }
  }

  & img {
    transition: transform 0.3s ease-in-out;
    opacity: 1;
  }
`;

const ProjectFilter = styled.div`
  position: absolute;
  border-radius: 16px;
  width: 100%;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  color: var(--grey500);

  & > div {
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
      0 8px 10px -6px rgb(0 0 0 / 0.1);
    background: var(--white);
    margin: auto;
    padding: 28px;
    border-radius: 12px;
    border: 1px solid var(--grey50);
    margin: 24px 24px;
  }

  & h3 {
    font-size: 1.125rem;

    font-weight: 500;
  }

  & p {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: var(--grey200);
  }
`;

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export function Project({ title, description, thumbnail, link }: Project) {
  return (
    <ProjectContent>
      <Link href={link}>
        <ProjectWrapper>
          <ProjectFilter>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </ProjectFilter>
          <Image src={thumbnail} layout="responsive"></Image>
        </ProjectWrapper>
      </Link>
    </ProjectContent>
  );
}
