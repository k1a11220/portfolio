import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import {
  Divider,
  H2,
  H3,
  ImgContainer,
  Paragraph,
  Section,
  Ul,
} from "@components/typography";
import { NextPage } from "next";
import thumbnail from "@media/hero_bokdda.png";
import profile_wonjun from "@media/profile_wonjun.jpeg";
import profile_byeonghun from "@media/profile_byeonghun.jpeg";

const BokddaPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="볶다, 복지 검색경험 개선 프로젝트"
        description="복지 검색과정의 문제점을 분석하고, 검색경험을 개선하는 프로젝트입니다."
      />
      <article>
        <ProjectHeader
          title="볶다, 복지 검색경험 개선 프로젝트"
          description="복지 검색과정의 문제점을 분석하고, 실제 프로덕트에 적용 가능한 솔루션을 제시합니다."
          timeline="Dec 2018 - Jan 2019"
          role="Product Design & MVP developing"
          profile={[
            { name: "Wonjun", role: "Research", image: profile_wonjun },
            {
              name: "Beyonghun",
              role: "Product Strategy",
              image: profile_byeonghun,
            },
          ]}
          thumbnail={thumbnail}
          background={"#ffffff"}
          product={[
            {
              type: "web",
              href: "https://beomsoo.me/bokjiiiiii/#/",
            },
          ]}
        />
        <Divider />
        <Section>
          <H2>왜 복지는 어려울까요?</H2>
          <Paragraph>
            누구나 쉽게 복지를 찾아보고 혜택을 받을 수 있어야 합니다. 그런데
            복지를 찾고 신청하기까지 과정이 복잡하다 보니 필요한 혜택을 찾아서
            받기 어렵습니다. 게다가 인터넷 사용이 익숙하지 않은 사용자에게는
            매번 새로 발급받아서 제출해야 하는 서류와 본인인증이 허들이 되기도
            합니다.
            <br />
            <br />
            개인뿐만 아니라 기업 역시 같은 문제가 존재합니다. 영세한 사업장에
            접근해 대신 복지를 신청해 주고 수수료를 받아 가는 브로커가 생길
            정도로 복잡한 복지 서비스의 신청 과정은 시간과 비용의 낭비로
            이어지고 있습니다.
            <br />
            <br />
            그래서 복지 검색과 신청을 편리하게 만든다면, 많은 사람의 시간과 돈을
            절약해 줄 수 있을 거라 생각했습니다.
          </Paragraph>
        </Section>
        <Section>
          <H2>프로젝트 목표</H2>
          <Ul
            list={[
              "복지검색 정확도 개선",
              "복지검색 및 신청 과정 단순화",
              "복지검색 후 신청까지 일관된 사용자 경험 제공",
            ]}
          />
        </Section>
        <Section>
          <H2>문제 인식</H2>
          <Paragraph>
            올해 초, 재난지원금을 신청하면서 내가 받을 수 있는 복지가 생각보다
            많다는 걸 알게되었습니다. 청년 기숙사, 교통비 지원부터 심리상담
            서비스까지, 조금만 신경쓴다면 누구나 양질의 복지 서비스를 받을 수
            있을거라 생각했습니다.
            <br />
            <br />
            이후 국가에서 운영하는 복지 포털인 복지로에 방문해 구체적으로 어떤
            복지를 받을 수 있는지 확인하려고 했습니다. 그런데 복지를 찾는
            과정부터 어려웠습니다. 복지로에서 제공하는 검색 서비스는 정확도가
            낮을 뿐만 아니라 검색한 후에도 신청하기 위해서 관련 부처 페이지로
            들어가야 했습니다.
          </Paragraph>
          <ImgContainer />
        </Section>
        <Section>
          <H2>사전조사 & 인터뷰</H2>
          <Paragraph>
            본격적으로 제품을 기획하기 전, 사전조사 및 인터뷰를 진행했습니다.
            인터뷰 그룹은 10대 고등학생부터 70대 노인까지 다양한 성별과
            연령층으로 구성했습니다.
            <br />
            <br />
            1. 복지 서비스에 관심이 많은지. <br />
            2. 복지 서비스를 어떤 경로로 알게 되는지
            <br />
            3. 복지로를 사용해보았다면, 원하는 목적을 달성했는지(복지 검색 or
            복지 신청)
          </Paragraph>
        </Section>
        <Section>
          <H2>통찰</H2>
          <H3>사전조사 및 인터뷰 결과</H3>
          <Paragraph>
            생각보다 많은 사람이 복지 서비스에 관심이 없었습니다. 따라서
            복지로의 존재를 알고있는 사람 역시 드물었습니다. 그럼에도 불구하고
            버스tv에서 광고했던 청소년 교통비 지원, 뉴스와 sns에서 화제가 된
            재난지원금은 거의 모든 참여자가 알고있었고, 신청까지 했습니다.
            <br /> <br />
            이를 통해 이전에 마케팅 채널 선정과 더불어 복지 검색의 정확성을
            높여야 한다는 결론에 이르렀습니다.
          </Paragraph>
          <ImgContainer />
          <H3>MVP 개발</H3>
          <Paragraph>
            가설을 명확히 세운 뒤, 이를 검증하기 위한 MVP를 제작했습니다. 검색
            정확도가 조금 떨어지더라도 공공 API를 활용해서 핵심 기능만 구현하는
            방식을 채택하였습니다.
            <br /> <br />
            따라서 생애주기, 대상특성, 가구유형, 욕구 총 4가지의 기준을 바탕으로
            복지 검색을 할 수 있는 페이지를 제작했습니다.
          </Paragraph>
          <ImgContainer />
        </Section>
      </article>
    </>
  );
};

export default BokddaPage;
