import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { B, Divider, H2, H3, P, Section } from "@components/typography";
import { NextPage } from "next";
import hero from "@media/bokdda/hero.png";
import profile_wonjun from "@media/common/profile_wonjun.jpeg";
import profile_byeonghun from "@media/common/profile_byeonghun.jpeg";
import diagram from "@media/bokdda/diagram.png";
import ui_0 from "@media/bokdda/ui-0.png";
import ui_1 from "@media/bokdda/ui-1.png";
import ui_2 from "@media/bokdda/ui-2.png";
import ui_3 from "@media/bokdda/ui-3.png";
import test_1 from "@media/bokdda/test-1.png";
import iphone from "@media/common/iphone.png";
import StyledImage from "@components/project/styled-image";
import LinkPreview from "@components/link-preview";
import { StyledVideo } from "@components/project/styled-video";

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
          timeline="Jan 2021 - Feb 2021"
          role="프로덕트 디자인 & MVP 개발"
          profile={[
            { name: "Wonjun", role: "Research", image: profile_wonjun },
            {
              name: "Beyonghun",
              role: "Product Strategy",
              image: profile_byeonghun,
            },
          ]}
          hero={hero}
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
          <P>
            누구나 쉽게 복지를 찾아보고 혜택을 받을 수 있어야 합니다. 그런데
            현실은 그렇지 않습니다. 사용자를 헷갈리게 만드는 기준과 제출해야
            하는 각종 서류, 본인인증은 복지를 어렵게 만들었습니다.
            <br />
            <br />
            개인뿐만 아니라 기업에도 같은 문제가 존재합니다. 영세한 사업장에
            접근해 대신 복지를 신청해 주고 수수료를 받아 가는 브로커가 생길
            정도로 복잡한 복지는 시간과 비용의 낭비로 이어지고 있습니다.
            <br />
            <br />
            그래서 복지 검색과 신청을 편리하게 만든다면, 많은 사람의 시간과 돈을
            절약해 줄 수 있을 거라 생각했습니다.
          </P>
        </Section>
        <Section>
          <H2>프로젝트 목표</H2>
          <P>
            - 복지검색 정확도 개선
            <br />
            - 복지검색 및 신청 과정 단순화
            <br />- 복지검색 후 신청까지 일관된 사용자 경험 제공
          </P>
        </Section>
        <Section>
          <H2>Research</H2>
          <H3>문제</H3>
          <P>
            재난지원금을 신청하면서 복지에 대해 알아보다 지원받을 수 있는
            복지사업이 많다는 걸 알게 되었습니다. 그래서 다른 복지를 신청하려고
            보니, 신청 자격을 알아보고 서류를 준비해서 접수하는 과정이
            불편했습니다.
            <br />
            <br />
            그동안 국가에서 운영하던 '복지로'라는 포털에서는 복지 검색만
            지원하는 한계가 있었고, 복지를 신청하기 위해서 2개 이상의 서비스를
            이용해야 하는 불편함이 존재했습니다.
          </P>
          <H3>MVP 검증</H3>
          <P>
            그래서 다른 사람들도 같은 문제를 느끼고 있는가를 확인하고자 간단한
            MVP를 만들어 5일간 평가했습니다.
            <br />
            <br />
            ‘내가 받을 수 있는지 몰라서'를 초점에 두었습니다. 만약 내가 진짜로
            받을 수 있는 복지를 알려준다면 복지 신청까지 연속적으로 진행될거라
            생각했습니다.
            <br />
            <br />
            빠른 제품 개발을 위해 복지로 API를 활용해서 제작했습니다. 생애주기,
            대상특성, 욕구 총 3가지 기준을 바탕으로 복지를 검색 할 수 있습니다.{" "}
            <br />
          </P>
          <LinkPreview link="https://beomsoo.me/bokjiiiiii/#/" />
          <StyledImage src={ui_3} />
          <P>
            결과적으로 예상보다 확연하게 낮은 200원 정도의 CAC가 나왔고, 그동안
            복지 서비스를 신청해본 입장에서 복지 검색과 신청 과정의 불편함을
            해결하기로 했습니다.
          </P>
          <P>
            복지 경험에 있어 사용자가 느끼고 있는 문제를 3가지로 모았습니다.
            <br />
            <br />
            □ 복지 검색이 어렵다.
            <br />
            □ 내가 진짜 받을 수 있는 복지인지 모르겠다.
            <br />□ 복지를 신청하기 위해 매번 관련 부처 서비스로 이동해야 한다.
          </P>
          <H3>사전조사 & 인터뷰</H3>
          <P>
            사용자의 정확한 pain point를 파악하기 위해 사전조사 및 인터뷰를
            진행했습니다. 인터뷰 그룹은 10대 남녀, 20대 남녀, 50대 남녀 총
            6명으로 구성했습니다. 아래의 4가지 질문을 중심으로 문제를
            파고들었습니다.
            <br />
            <br />
            ① 복지 서비스에 관심을 가지고 있는지. <br />
            ② 복지를 직접 신청해본적이 있는지. <br />
            ③ 만약 신청해 봤다면, 복지 서비스를 어떤 경로로 알게 되는지. <br />④
            복지로를 사용해보았다면, 원하는 목적을 달성했는지(복지 검색 or 복지
            신청)
          </P>
        </Section>
        <Section>
          <H2>통찰</H2>
          <H3>사전조사 및 인터뷰 결과</H3>
          <P>
            대부분 복지에 관심을 가지고 있었으나, 복지를 실제로 신청해 본 경험은
            50대 그룹을 제외하고 없었습니다. 10대 그룹에선{" "}
            <B>‘어디서 신청하는지 몰라서'</B> ,{" "}
            <B>‘부모님이 대리 신청이 가능한 나이라서'</B> 라는 이유가 많았고,
            20대 그룹에서도 <B>‘어디서 신청하는지 몰라서’</B>와{" "}
            <B>‘내가 받을 수 있는 복지가 뭔지 몰라서'</B>가 대다수를
            차지했습니다.
          </P>
        </Section>
        <Section>
          <H2>프로덕트 디자인</H2>
          <H3>'중학생'이 직접 입학준비금을 신청할 수 있도록</H3>
          <P>
            크게 2가지 개선을 통해 검색의 정확성, 편리성과 신청 과정의 단순함을
            해결하고자 했습니다.
            <br />
            <br />
            <B>□ 3개의 검색 기준을 6개로 증가.</B> <br />
            복지 검색의 정확도를 높이기 위해 기존 3개의 복지로 간편검색 분류
            기준을 6개로 늘렸습니다.
            <br />
            <br />
            특히 사용자 인터뷰를 반영해 추가한 소득분위 계산기를 통해 월 소득과
            가구 수, 재산 규모, 부채, 저축금액 등을 입력하면 예상 소득분위를
            확인할 수 있게끔 했습니다.
            <br />
            <br />
          </P>
          <StyledImage src={diagram} />

          <P>
            <B>□ 신청과정의 간소화.</B> <br />
            검색, 발급, 신청을 다 다른 곳에서 진행해야 했지만 볶다에서 모든
            업무를 한 번에 처리할 수 있습니다. <br />
            <br />
            정부24, 노동부, 법원 등 정부 서비스와 연동하여 생체 인증만으로 복지
            신청에 필요한 서류를 자동으로 발급받고 신청까지 가능하게 했습니다.
            <br />
            <br />
            사업계획서나 자기소개서, 구직계획서 등 개인이 작성해야 하는 서류는
            별도의 프로그램 설치 없이 볶다에서 작성과 수정이 가능하도록 온라인
            에디터를 제공했습니다.
          </P>
          <StyledImage src={ui_0} />
          <H3>Wireframe & UI design</H3>
          <P>
            이어서 hi-fi wireframe 작업을 진행했습니다. 유저 플로우에서 수행하는
            작업을 최소한의 컴포넌트로 화면을 구성할 수 있게 컴포넌트 재사용을
            염두에 두고 디자인했습니다.
            <br />
            <br />
          </P>
          <StyledImage src={ui_1} />
          <StyledImage src={ui_2} />
        </Section>
        <Section>
          <H2>유저 테스트</H2>
          <P>
            Hi-fi 프로토타입을 만든 뒤 사전 인터뷰어와 함께 유저테스트를
            진행했습니다. 테스트의 정확도를 높이기 위해 실제로 복지 신청이
            가능하다고 알렸습니다. 복지로 서비스와 비교했고, 복지 검색부터
            신청까지 걸린 시간과 중간 이탈률을 주요 지표로 가정했습니다.
            <br />
            <br />
            <B>□ 3개의 검색 기준을 6개로 증가.</B> <br />
            복지로 간편검색에 비해 정확도가 약 90% 증가했고, 검색 후 다시 조건을
            찾아보는 과정을 줄일 수 있었습니다.
            <br />
            <br />
          </P>
          <StyledVideo video="/prototype.mp4" img={iphone} />
          <P>
            <br />
            <br />
            <B>□ 신청과정의 간소화.</B> <br />
            프로토타입 사용성 테스트 결과 복지 검색 후 실제 신청 전환율이 30 →
            45%가량 증가했습니다.
          </P>
          <StyledImage src={test_1} />
        </Section>
      </article>
    </>
  );
};

export default BokddaPage;
