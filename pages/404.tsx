import { CTA } from "@components/cta";
import styled from "@emotion/styled";

const PageContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ffffff;
  z-index: 9999;
`;

const PageWrapper = styled.div`
  display: flex;
  height: 100%;
  max-width: 92%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  & h1 {
    font-size: 5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  & p {
    font-size: 1.75rem;
    font-weight: 400;
    text-align: center;
    margin-bottom: 3rem;
    line-height: 1.25;
    color: #767e85;
  }

  & div {
    display: flex;
    gap: 1rem;
  }
`;

export default function Custom404() {
  return (
    <PageContainer>
      <PageWrapper>
        <h1>404</h1>
        <p>The page you’re looking for can’t be found.</p>
        <div>
          <CTA isPrimary={true} label={"Back to home"} href="/" />
          <CTA isPrimary={false} label={"Contact me"} href="/" />
        </div>
      </PageWrapper>
    </PageContainer>
  );
}
