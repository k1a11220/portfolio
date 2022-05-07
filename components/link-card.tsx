import styled from "@emotion/styled";

interface Data {
  title: string;
  description: string;
  url: string;
}

const Container = styled.a`
  display: flex;
  background-color: var(--grey50);
  align-items: center;
  width: calc(100% - 48px);
  margin: auto;
  border-radius: 12px;
  text-decoration: none;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 1.5rem;
`;

const DetailWrapper = styled.div`
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 80%;
  line-height: 1.25;
`;

const Title = styled.li`
  color: var(--grey500);
  margin-bottom: 4px;
`;

const Desc = styled.li`
  color: var(--grey200);
`;

const LinkCard = ({ data }: { data: Data }) => {
  return (
    <Container href={data?.url} target="_blank" rel="noopener norefferer">
      <DetailWrapper>
        <ul>
          <Title>
            <p>{data?.title}</p>
          </Title>
          <Desc>
            <p>{data?.description}</p>
          </Desc>
        </ul>
      </DetailWrapper>
    </Container>
  );
};

export default LinkCard;
