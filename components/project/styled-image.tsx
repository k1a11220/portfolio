import styled from "@emotion/styled";
import Image from "next/image";

const ImgContainer = styled.div`
  background: none;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  align-self: center;
  width: 140%;
  max-width: 96vw;
`;

const ImageWrapper = styled.div`
  align-self: center;
`;

function StyledImage({ src }: { src: any }) {
  return (
    <ImgContainer>
      <ImageWrapper>
        <Image src={src} layout="responsive" />
      </ImageWrapper>
    </ImgContainer>
  );
}

export default StyledImage;
