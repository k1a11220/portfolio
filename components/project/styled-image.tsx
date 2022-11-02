import styled from "@emotion/styled";
import Image from "next/image";

const ImgContainer = styled.div`
  background: none;
  margin-top: 1.875rem;
  margin-bottom: 0.875rem;
  align-self: center;
  width: 140%;
  max-width: calc(100vw - 48px);
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
