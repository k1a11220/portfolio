import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { B, Box, Divider, H2, P, Section } from "@components/typography";
import hero from "@media/javara/thumbnail.png";
import ComingSoon from "@components/project/coming-soon";
import j1 from "@media/javara/j1.jpeg";
import j2 from "@media/javara/j2.jpeg";
import j3 from "@media/javara/j3.jpeg";
import j4 from "@media/javara/j4.jpeg";
import j5 from "@media/javara/j5.jpeg";
import j6 from "@media/javara/j6.png";
import j7 from "@media/javara/j7.png";
import j8 from "@media/javara/j8.png";
import j9 from "@media/javara/j9.png";
import j10 from "@media/javara/j10.png";
import j11 from "@media/javara/j11.png";
import j12 from "@media/javara/j12.png";
import j13 from "@media/javara/j13.png";
import j14 from "@media/javara/j14.png";
import j15 from "@media/javara/j15.jpeg";
import j16 from "@media/javara/j16.jpeg";
import j17 from "@media/javara/j17.jpeg";
import j18 from "@media/javara/j18.png";
import j19 from "@media/javara/j19.png";
import j20 from "@media/javara/j20.jpeg";
import j21 from "@media/javara/j21.png";
import j22 from "@media/javara/j22.png";
import j23 from "@media/javara/j23.png";
import j24 from "@media/javara/j24.png";

import profile_wonjun from "@media/common/profile_wonjun.jpeg";
import profile_jinsoo from "@media/common/profile_jinsoo.png";
import profile_changhyun from "@media/common/profile_changhyun.png";
import profile_jinho from "@media/common/profile_jinho.png";

import styled from "@emotion/styled";
import Image from "next/image";
import StyledImage from "@components/project/styled-image";

const ImgGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

const JavalightPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="자바라이트"
        description="5.6억명의 빛 없이 살아가는 아프리카 사람들을 위한 에너지 솔루션"
      />
      <article>
        <ProjectHeader
          title="자바라이트"
          description="5.6억명의 빛 없이 살아가는 아프리카 사람들을 위한 에너지 솔루션"
          timeline="Mar 2021 - Aug 2021"
          role="Design Engineering"
          hero={hero}
          background={"#fafdfa"}
          profile={[
            { name: "Jinsoo", role: "Project Lead", image: profile_jinsoo },
            {
              name: "Changhyun",
              role: "Full stack Developing",
              image: profile_changhyun,
            },
            {
              name: "Jinho",
              role: "Electronic Engineering",
              image: profile_jinho,
            },
            {
              name: "Wonjun",
              role: "Product Design",
              image: profile_wonjun,
            },
          ]}
        />
        <Divider />
        <Section>
          <H2>전 세계 인구 중 전기 없이 살아가는 사람 8억명</H2>
          <P>
            아프리카에는 그중 5.6억 명이 전기 없이 살아갑니다. 태양광을 통한
            아프리카 내 전기시설 구축 진행 중이나, 현재 속도라면 2030년에도 5억
            명이 전기를 사용할 수 없을 것으로 전망하고 있습니다. 그래서 우리는
            이들에게 지속 가능한 에너지와 빛을 제공하고자 합니다.
          </P>

          <StyledImage src={j18} />
          <StyledImage src={j22} />
        </Section>
        <Section>
          <H2>진짜 문제가 뭘까?</H2>
          <P>
            제가 팀에 합류했을 당시 프로토타입이 존재했습니다. 이미 사용자와
            솔루션을 가지고 있던 상황이었지만 정확한 사용자 분석 없이 만든
            제품이었기에 &apos;우리가 만들고 싶은 제품&apos;에 가까웠습니다.
            물론 충분히 가치 있는 가설을 세웠지만 이게 진짜 사용자가 느끼는
            문제일까?라는 고민을 했습니다.{" "}
          </P>
          <Box>
            <P>
              &apos;아프리카 국가의 빈곤가정 대부분은 일몰 후 주로 등유램프,
              양초, 건전지 배터리 토치를 사용합니다. 이런 제품을 사용하게 되면
              아래와 같은 문제가 발생합니다.&apos; <br /> <br />
              □ 비용발생
              <br />
              □ 환경오염
              <br />
              □ 질병발생
              <br />□ 사고발생
            </P>
          </Box>
          <P>
            <Image src={j19} />
          </P>
          <P>
            기존에 팀이 풀고자 하는 문제였습니다. 우리는 이걸 넘어서 &apos;진짜
            문제&apos;를 찾기로 했습니다.
          </P>
        </Section>
        <Section>
          <H2>사용자를 직접 만날 수 없을 때</H2>
          <P>
            아프리카 국가의 빈곤가정이 사용자였기 때문에 쉽게 생활패턴이나 사용
            환경을 알 수 없었습니다. 가설로만 제품을 만들 순 없기에 아프리카에
            선교활동을 다녀온 분을 찾아 인터뷰했습니다. 비록 우리가 직접 조사한
            내용은 아니었지만, 그들과 함께 생활하며 얻은 통찰은 제품을
            기획하는데 큰 도움이 되었습니다.
          </P>
          <P>그 중에서 정말 중요한 사실 두가지를 얻었습니다.</P>
          <P>
            <B color="var(--grey400)">
              □ 스마트폰을 사용하는 사람들이 꽤 많이 존재한다. 하지만 충전하기
              위해서 교회나 학교 같은 시설에 가야 한다. <br />
              <br />□ 어두운 밤에 휴대용 광원 없이 길을 나서면 위험하다. 그래서
              램프나 토치가 없으면 밖에 나가지 못한다.
            </B>
            <br />
          </P>
          <P>
            상당히 놀랐습니다. &apos;빛&apos;이 필요하다는 점에 집중한 나머지
            스마트폰과 같은 전자기기를 나름대로 잘 활용하고 있다는 것을 몰랐기
            때문입니다. 그럼에도 불구하고 휴대 가능한 조명이 없다는 것은 우리가
            풀어야 할 중요한 문제라 판단했습니다.
          </P>
        </Section>
        <Section>
          <H2>설계 시작</H2>
          <P>
            문제점을 파악한 결과 &apos;소형으로 휴대 가능하고, 전력 출력을
            지원하는&apos; 제품을 만들기로 했습니다. 태양광으로 충전 후 조명과
            보조배터리로 사용 가능하게끔 설계를 시작했습니다.
          </P>
          <StyledImage src={j23} />
        </Section>
        <Section>
          <H2>&apos;지속 가능&apos;한 방식을 고민하기</H2>
          <P>
            처음엔 자바라로 조명을 접었다 펼 수 있는 구조를 사용했습니다.
            자바라가 빛을 분산시켜주는 역할을 해 조명으로서의 역할을 해내고,
            필요 없을 때는 자바라를 접어 공간을 확보하자는 취지였습니다. 그런데
            프로토타입을 만들면서 자바라의 비용과 이에 대응하는 설계를 구현했을
            시 생산 비용이 문제였습니다. 굳이 비용을 지불하면서까지 자바라를
            고집할 필요가 없다는 생각이 들었습니다.
          </P>
          <P>
            <br />
            <ImgGrid>
              <Image src={j20} />
              <Image src={j24} />
            </ImgGrid>
            <br />
          </P>
          <P>
            이후 진행한 사용성 테스트와 회의 끝에 버려지는 폐 페트병으로
            자바라를 대체하기로 했습니다. 지속 가능한 방식으로 같은 기능을
            구현할 수 있다는 점에서 평가는 상당히 긍정적이었습니다.
          </P>
          <StyledImage src={j13} />
        </Section>
        <Section>
          <H2>프로토타이핑</H2>
          <P>
            본격적으로 제품을 제작했습니다. 사출 생산을 염두에 두고 설계했기에
            프로토타입의 조립성이 중요했습니다. 따라서 이를 중점적으로
            평가했습니다.
          </P>
          <P>
            <br />
            <ImgGrid>
              <Image src={j4} />
              <Image src={j10} />
              <Image src={j15} />
              <Image src={j1} />
            </ImgGrid>
          </P>
        </Section>
        <Section>
          <H2>마무리</H2>
          <P>
            프로젝트가 거의 끝나갈 무렵 제가 군 입대를 해버리는 바람에
            생산까지는 진행하지 못했습니다. 입대 후 2021년 굿디자인 어워드에
            출품했고, 1차 심사에서 합격했지만 2차 심사에서 탈락하였습니다. 이와
            별개로 아프리카 선교팀에 프로토타입 제품을 지원하는 등 실제 제품에
            적용하기 위한 노력을 했습니다.
          </P>
          <P>
            눈에 띄는 성과를 내지 못했으나 팀원 모두 문제에 공감하며 몰입했던
            프로젝트였습니다. 전역 후 기회가 된다면 팀원들과 다시 모여 풀고자
            합니다.
          </P>
          <StyledImage src={j7} />
          <StyledImage src={j17} />
        </Section>
      </article>
    </>
  );
};

export default JavalightPage;
