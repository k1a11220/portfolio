import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { Divider, H1, H2, P, Section } from "@components/typography";
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
import ImgGrid from "@components/img-grid";

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
          <H2>18개월의 군생활. 어떻게 하면 의미있게 보낼 수 있을까요?</H2>
          <P>
            solift는 군 입대를 앞두거나 복무중인 청년이라면 누구나 했을
            고민에서부터 시작했습니다. '&apos;시간을 의미있게 보내는 방법&apos;
            에 대해 저 역시 많은 고민을 했습니다.
          </P>
        </Section>
        <Section>
          <H2>인터뷰 시작</H2>
          <P>
            다양한 사람들이 모여있는 군대라는 조직 특성상 인터뷰 하기에는
            더할나위없이 좋은 환경이었습니다. 많은 사람들과 이야기를 나누었고
            크게 아래와 같은 질문으로 나눌 수 있었습니다.
            <br />
            <br />
          </P>
          <StyledImage src={s1} />
          <ImgGrid imgList={[s3, s4, s5, s6]} />
        </Section>
        <Section>
          <H2>가설</H2>
          <P>가설 내용과 선택하게 된 이유</P>
        </Section>
        <Section>
          <H2>제품 개발</H2>
          <P>개발 과정</P>
        </Section>
        <Section>
          <H2>지표 분석</H2>
          <P>홍보 없이 이뤄낸 다운로드 수</P>
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
