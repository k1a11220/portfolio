import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { B, Divider, H1, H2, H3, H4, P, Section } from "@components/typography";
import hero from "@media/solift/thumbnail-4.png";
import img_1 from "@media/solift/thumbnail-3.png";
import s1 from "@media/solift/s1.png";
import s2 from "@media/solift/s2.png";
import s3 from "@media/solift/s3.png";
import s4 from "@media/solift/s4.png";
import s5 from "@media/solift/s5.png";
import s6 from "@media/solift/s6.png";
import StyledImage from "@components/project/styled-image";
import FloatingButton from "@components/floating-button";
import ComingSoon from "@components/project/coming-soon";

const SoliftPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="solift"
        description="직접 군 복무하면서 느낀 불편함을 바탕으로 사람들의 목표관리를 도와주는 솔루션을 만듭니다."
      />
      <article>
        <ProjectHeader
          title="solift, OKR 기반의 개인목표 관리 서비스"
          description="직접 군 복무하면서 느낀 불편함을 바탕으로 사람들의 목표관리를 도와주는 솔루션을 만듭니다."
          timeline="May 2022 - July 2022"
          role="프로덕트 디자인 & 풀스택 개발"
          product={[
            {
              type: "ios",
              href: "https://apps.apple.com/kr/app/solift/id1637383448",
            },
          ]}
          hero={hero}
          background={"#F4FAFF"}
        />
        <Divider />
        <Section>
          <H2>왜 군 생활을 의미 있게 보내지 못할까요?</H2>
          <P>
            &apos;18개월이 사라진 것 같다.&apos; 전역을 앞둔 선임들이 항상 하는
            말이었습니다. 휴대폰 사용이 가능해져 자기계발 시간과 환경이 충분히
            보장되었지만, 생각보다 목표한 바를 이루고 전역하는 사람은
            드물었습니다. 그 이유를 파악하고자 22명의 선후임들과 인터뷰를
            진행했습니다.
          </P>
          <P>
            계급에 따라 조금 다른 인터뷰 결과가 나왔습니다. 전입 온 지 얼마 안
            된 후임들은 &apos;어떻게 환경과 조건을 활용해서 공부해야 할지
            모르겠다.&apos;라는 의견이 주류였고
          </P>
          <P>
            어느 정도 복무를 오래 한 선임들은 &apos;환경은 충분하지만 목표를
            관리하기 어렵다&apos;라는 의견이었습니다.
          </P>
          <P>
            인터뷰 내용을 바탕으로 처음에는 커다란 목표(전공 공부, 시험 준비,
            운동 등)가 있었지만 시간이 지날수록 목표를 관리하지 못해 시간이
            있음에도 불구하고 의지가 약해진다는 결론을 내렸습니다.
          </P>
        </Section>
        <Section>
          <H2>1800시간</H2>
          <P>
            시간은 굉장히 소중한 자원입니다. 1800시간은 군대에서 평균적으로
            자기개발에 투자할 수 있는 시간입니다. 그런데 많은 장병들이 이 시간을
            의미 있게 사용하지 못하는 건 상당히 큰 문제라 생각했습니다.
          </P>
        </Section>

        <Section>
          <H2>목표를 체계적으로 관리할 수 있다면, 목표 달성이 쉬워질 것이다</H2>
          <P>처음으로 돌아가 아래 질문을 던졌습니다.</P>
          <H4>
            <B color="var(--grey400)">
              [왜 군 생활을 의미 있게 보내지 못할까요?]{" "}
            </B>
          </H4>
          <P>
            가설 1. 애초에 군대에서 어떻게 자기계발을 해야 할지 모른다.
            <br /> - 군인들이 서로 정보를 공유할 수 있는 커뮤니티를 만들자.(익명
            기반) <br />
            가설 2. 시간이 지나면서 환경과 방법은 충분히 마련되지만, 마땅히
            목표를 관리하지 못해 그냥 시간이 흘러가버린다. <br />- 쉽게 목표를
            관리할 수 있는 서비스를 만들자.
          </P>
          <P>
            질문을 바탕으로 총 2가지의 가설을 세웠고, 인터뷰 결과, 개발시간등을
            고려해 2번 가설을 먼저 검증하고자 했습니다.
          </P>
          <H4>
            <B color="var(--grey400)">
              [목표를 체계적으로 관리할 수 있다면, 목표달성이 쉬워질 것이다]
            </B>
          </H4>
          <P>
            목표관리에 초점을 두어 OKR이라는 조직 목표관리 방법론을 개인에게
            쉽게 적용할 수 있는 서비스를 만들기로 했습니다. 그래서 Objective,
            Key Result, Initative에 영감을 받아 하나의 커다란 목표를 3개의
            Depth로 구성했습니다. (목표 {"->"} 핵심지표 {"->"} 세부과제). 이후
            빠르게 개발, 배포하여 부대 내 선후임들과 사용자 테스트 및 인터뷰를
            했습니다.
          </P>
        </Section>
        <Section>
          <H2>문제가 해결되었다고 생각하시나요? 왜 그렇게 생각하시나요?</H2>
          <H4>
            [solift로 아낀 1800시간. 그런데 장병들의 문제를 해결한 것일까요?]
          </H4>
          <P>
            첫번째 제품으로 부대 내 28명의 사용자와 2명의 충성고객을 확보했으나,
            문제를 해결했다고 하기에는 아쉬운 결과였습니다.
          </P>
          <P>
            사용자 인터뷰 중 받았던 피드백입니다. &apos;중장기 목표를 관리하려고
            설치했는데 써보니까 복잡해진 애플의 미리알림이랑 무슨 차이인지
            모르겠다.&apos;
          </P>
          <P>
            OKR 기반의 목표관리가 핵심 기능이었기 때문에 하나의 Objective가
            생성되면, 아래에 Key Result와 Initiative가 균형있게 만들어져야
            합니다.
          </P>
          <P>
            그런데 지표를 확인해 보니 Create Initiative와 Click Initiative
            이벤트만 발생했고, 이는 저희의 예상과 다르게 할일 관리앱으로
            사용하고 있다는 의미였습니다.
          </P>
          <H4>[왜 사용자들은 우리의 의도와 다르게 제품을 사용할까요?]</H4>
          <P>
            여러 고민과 인터뷰 끝에 실패의 원인을 하나로 정의했습니다.
            &apos;배가 산으로 갔다&apos;
          </P>
          <P>
            &apos;장병&apos;들의 목표관리를 위한 제품를 기획했지만, 제품을
            개발하면서 목표관리가 필요한 사람들로 타겟을 넓혔습니다.
          </P>
          <P>
            그러다보니 장병들의 목표관리에 집중해서 문제를 해결하지도 못했고,
            목표관리가 필요한 일반 사람들을 위한 서비스도 아닌 그저 그런 할일
            앱이 나와버렸습니다.
          </P>
          <P>
            그래서 장병들의 목표관리라는 목표에 집중하여 가설과 기준을 다시
            세우고 제품을 개선하고 있습니다.
          </P>
          <P>
            <B color="var(--grey400)">
              1. 장병들이 타겟임으로 입대, 전역일을 기준으로 목표를 설정
              가능하게 한다. <br />
              2. Key Result가 필요없다는 의견. 퍼널을 삭제함으로서 Depth를
              줄인다. <br />
              3. Push 알림으로 계속해서 사용자에게 넛지를 준다. <br />
            </B>
          </P>
          <P>
            첫 시도는 실패했지만 반복적 개선작업을 통해 문제를 해결하고자
            합니다.
          </P>
        </Section>
        <FloatingButton
          icon={"bulb"}
          label={"제품 써보기"}
          link="https://apps.apple.com/kr/app/solift/id1637383448"
        />
      </article>
    </>
  );
};

export default SoliftPage;
