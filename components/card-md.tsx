import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card-lg";

interface CardWithSubtitle extends Card {
  subtitle?: string;
}

const CardContent = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  aspect-ratio: 3 / 2;
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

  & h3 {
    font-size: 1.5rem;
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
}: CardWithSubtitle) {
  return (
    <Link href={link}>
      <CardContent>
        <>
          <ImgContainer>
            <Image src={thumbnail} layout="fill" objectFit="contain" />
          </ImgContainer>
          <Info>
            <p>{subtitle}</p>
            <h3>{title}</h3>
            <p>{description}</p>
          </Info>
        </>
      </CardContent>
    </Link>
  );
}
