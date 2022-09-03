import styled from "@emotion/styled";
import Image from "next/image";

interface ImgGridProps {
  imgList: Array<any>;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  width: 140%;
  max-width: calc(100vw - 48px);
  align-self: center;
`;

const ImgContainer = styled.div`
  background: none;
  align-self: center;
  width: auto;
  max-width: 100vw;
  & img {
    border-radius: 8px;
  }
`;

const ImgGrid = ({ imgList }: ImgGridProps) => {
  return (
    <Container>
      {imgList.map((img, index) => (
        <ImgContainer key={index}>
          <Image src={img} layout="responsive" />
        </ImgContainer>
      ))}
    </Container>
  );
};

export default ImgGrid;
