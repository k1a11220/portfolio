import styled from "@emotion/styled";
import Image from "next/image";
import { ProjectWithSubtitle } from "./card-md-list";

interface CardMdProps extends ProjectWithSubtitle {
  isWide: boolean;
}

const Container = styled.a`
  text-decoration: none;
`;

const CardContent = styled.div<{ isWide: boolean }>`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: ${(props) => (props.isWide ? 16 / 10 : 3 / 2)};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(0, -10px);
  }
`;

const ImgContainer = styled.div`
  background-color: var(--grey50);
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Info = styled.div`
  width: 100%;
  background: none;
  margin-top: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin-left: 2px;

  & h3 {
    font-size: 1.25rem;
    font-weight: 500;
    color: var(--grey500);
  }

  & p {
    font-size: 1rem;
    color: var(--grey200);
    line-height: 1.5;
  }

  & p:first-of-type {
    color: var(--grey100);
  }
`;

export function CardMd({
  title,
  subtitle,
  description,
  thumbnail,
  link,
  isWide,
}: CardMdProps) {
  return (
    <Container target="_blank" rel="noopener norefferer" href={link}>
      <CardContent isWide={isWide}>
        <ImgContainer>
          <Image src={thumbnail} layout="fill" objectFit="cover" />
        </ImgContainer>
        <Info>
          {subtitle !== undefined ? <p>{subtitle}</p> : null}
          <h3>{title}</h3>
          <p>{description}</p>
        </Info>
      </CardContent>
    </Container>
  );
}
