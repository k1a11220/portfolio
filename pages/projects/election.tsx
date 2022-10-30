import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { B, Divider, H2, P, Section } from "@components/typography";
import hero from "@media/election/thumbnail.png";
import FloatingButton from "@components/floating-button";
import StyledImage from "@components/project/styled-image";
import E1 from "@media/election/election_1.png";
import E2 from "@media/election/election_2.png";
import E3 from "@media/election/election_3.png";

const ElectionPage: NextPage = () => {
  return (
    <>
      <CustomHead title="우리의 선택, 우리의 미래" description="" />
      <article>
        <ProjectHeader
          title="우리의 선택, 우리의 미래"
          description="2022년 대선를 준비하며 부대 내부에서 공유한 대선 후보를 정리한 서비스입니다."
          timeline="Mar 2022 - Mar 2022"
          product={[
            {
              type: "web",
              href: "https://www.2022-election.com/",
            },
          ]}
          role="Product Design & Development"
          hero={hero}
          background={"#F2F7F6"}
        />
        <Divider />
        <Section>
          <H2>대선후보 공약, 얼마나 알고 계신가요?</H2>
          <P>
            22년 대선을 준비하며 주변에 던졌던 질문입니다. 대한민국의 미래를
            결정하는 굉장히 중요한 대선. 사전투표가 4일 남짓 남았지만 저를
            포함한 선, 후임 대원들은 후보들의 제대로 된 공약과 정보를 모르고
            있었습니다. 게다가 통계적으로도 20대 후보 공약 인지도는 낮았습니다.
          </P>
          <StyledImage src={E1} />
        </Section>
        <Section>
          <H2>사용자가 겪는 문제를 빠르게 파악하자</H2>
          <P>
            남은 시간 4일. 근무를 생각하면 이틀 정도의 시간밖에 없었습니다.
            제품을 만드는 데 필요한 시간을 생각했을 때 빠르게 사용자 인터뷰를
            진행해야 했습니다. 문제의 핵심을 파악하기 위해 옆에 있는 선,
            후임에게 두가지 질문을 던졌습니다.
          </P>
          <P>
            <B color="var(--grey400)">
              1. 대통령 후보들의 주요 공약, 정책(경제, 국방, 교육)의 기조를 알고
              계십니까?
            </B>
            <br />
            <B color="var(--grey400)">
              2. SNS에서 후보와 공약에 대한 게시글을 본 적이나 찾아본 적이
              있으십니까?
            </B>
          </P>
          <P>
            대부분 후보들의 공약과 정책의 기조는 모르는 상태였고, SNS에서도
            정확한 정보를 찾아보지 못했다고 했습니다.
          </P>
        </Section>
        <Section>
          <H2>제품 만들기</H2>
          <P>
            그래서 잠재 고객인 20,30대 사람들의 삶에 영향을 끼치는 대선 정보를
            제공하고자 했습니다. 먼저 후보의 모든 공약이 아닌 인터뷰를 통해
            중요하다고 판단한 몇가지의 공약만 정리했습니다. 후보별 상세 정보와
            주요 10대 공약으로 한 눈에 정당과 후보의 정책 기조를 파악할 수
            있게끔 했습니다. 이후 바로 서비스를 배포했습니다.
          </P>
          <StyledImage src={E2} />
          <StyledImage src={E3} />
        </Section>
        <Section>
          <H2>돌아보며</H2>
          <P>
            굉장히 짧은 기간에 진행했던 거라 제대로 문제를 해결할 수 있을지
            걱정이 많았습니다. 내부에서 공유할 프로젝트라는 생각에 조금 소홀했던
            부분도 있었고요. 지금 생각해보면 퀴즈나 공유같은 바이럴 요소를 붙여
            공개했으면 더 재밌었겠다 하는 생각도 듭니다. 그럼에도 지휘요원, 선
            후임대원들이 투표하는데 도움되었다는 피드백을 들어 뿌듯했습니다.
          </P>
          <P>
            실제로 짧은 기간이지만 서비스를 만들면서 주위 사람들이 아이디어를
            많이 주었습니다. 저로선 잠재 고객이 주는 의견이었기에 대부분
            반영했고, 이 부분에서 대원들과 지휘요원이 만족하는 제품이 나왔던 것
            같습니다. 앞으로 진행할 프로젝트에선 고객의 생각과 의견을 더 자주
            듣고 반영해야겠다는 교훈을 얻었습니다.
          </P>
        </Section>
      </article>
      <FloatingButton
        icon={"bulb"}
        label={"제품 써보기"}
        link={"https://www.2022-election.com/"}
      />
    </>
  );
};

export default ElectionPage;
