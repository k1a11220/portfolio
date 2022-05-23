import styled from "@emotion/styled";
import { useLink } from "pages/api/use-link";

const Container = styled.a`
  display: flex;
  background-color: var(--grey50);
  align-items: center;
  width: calc(100% - 48px);
  margin: auto;
  border-radius: 12px;
  text-decoration: none;
  margin-top: 1.875rem;
  margin-bottom: 1.875rem;
  padding: 12px;
`;

const ImgWrapper = styled.div`
  height: 90px;
`;

const DetailWrapper = styled.div`
  padding-left: 1.25rem;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  line-height: 1.25;
`;

const Thumbnail = styled.img`
  height: 100%;
`;

const Title = styled.li`
  color: var(--grey500);
  margin-bottom: 4px;
`;

const Desc = styled.li`
  color: var(--grey200);
`;

const URL = styled(Desc)`
  font-size: 0.75rem;
  margin-top: 0.875rem;
`;

const LinkPreview = ({ link }: { link: string }) => {
  // const { data } = useLink(link);
  const data = {
    title: "볶다, 복지를 볶다.",
    description: "맞춤 복지 서비스를 검색해보세요",
    image: "https://beomsoo.me/bokjiiiiii/logo192.png",
    url: "https://beomsoo.me/bokjiiiiii/",
  };
  return (
    <Container href={data?.url} target="_blank" rel="noopener norefferer">
      <ImgWrapper>
        <Thumbnail src={data?.image} alt="link preview" />
      </ImgWrapper>
      <DetailWrapper>
        <ul>
          <Title>
            <p>{data?.title}</p>
          </Title>
          <Desc>
            <p>{data?.description}</p>
          </Desc>
          <URL>
            <p>{data?.url}</p>
          </URL>
        </ul>
      </DetailWrapper>
    </Container>
  );
};

export default LinkPreview;
