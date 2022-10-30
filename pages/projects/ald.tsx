import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import { B, Divider, H2, H3, P, Section, Ul } from "@components/typography";
import hero from "@media/ald/thumbnail.jpg";
import samsungLogo from "@media/common/samsung_logo.png";
import kitechLogo from "@media/common/kitech_logo.png";
import tngLogo from "@media/common/tng_logo.png";
import StyledImage from "@components/project/styled-image";
import A1 from "@media/ald/a1.png";
import A2 from "@media/ald/a2.png";
import A3 from "@media/ald/a3.jpeg";
import A4 from "@media/ald/a4.png";
import A5 from "@media/ald/a5.png";
import A6 from "@media/ald/a6.jpeg";
import A7 from "@media/ald/a7.jpeg";
import A8 from "@media/ald/a8.jpeg";
import A9 from "@media/ald/a9.jpeg";
import LinkCard from "@components/link-card";

const ALDPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="ALD 장비 연구개발 프로젝트"
        description="ALD 공정을 최적화하기 위해 회전 챔버를 어떻게 구현했는지 알아봅니다."
      />
      <article>
        <ProjectHeader
          title="ALD 장비 연구개발 프로젝트"
          description="ALD 공정을 최적화하기 위해 회전 챔버를 어떻게 구현했는지 알아봅니다."
          timeline="Feb 2020 - Mar 2021"
          role="Design Engineering & Research"
          profile={[
            { name: "TNG", role: "Design Engineering", image: tngLogo },
            {
              name: "한국생산기술연구원",
              role: "Research, Test",
              image: kitechLogo,
            },
            { name: "삼성디스플레이", role: "Research", image: samsungLogo },
          ]}
          hero={hero}
          background={"#f7fafc"}
        />
        <Divider />
        <Section>
          <H2>공정효율을 어떻게 하면 높일 수 있을까요?</H2>
          <P>
            기존 ALD 공정에서 증착과정 중 웨이퍼는 다른 공간으로 움직일 수
            없습니다. 웨이퍼가 이동하는 과정에서 가스나 파티클에 의해 오염될 수
            있기 때문이죠.
          </P>
          <P>
            그런데 만약 오염 없이 웨이퍼를 이송할 수 있다면, 공정 효율이
            획기적으로 증가할 겁니다. 그래서 우리는 프로토타입 장비 개발을 통해
            이 가설을 증명하기로 했습니다.
          </P>
          <StyledImage src={A1} />
          <StyledImage src={A2} />
        </Section>

        <Section>
          <H2>구현 목표</H2>
          <P>
            □ 공정 중 웨이퍼 이송 <br />
            □ 회전챔버 <br />□ 챔버가 회전하는 상태에서 진공 유지
          </P>
        </Section>
        <Section>
          <H2>문제</H2>
          <P>기술적으로 풀어야 할 문제가 크게 두가지 정도 있었습니다.</P>
          <P>
            <B color="var(--grey400)">첫째, 안정적으로 챔버를 회전</B>
            <br />
            <B color="var(--grey400)">
              둘째, 회전 과정에서 진공을 일정하게 유지
            </B>
          </P>
          <P>
            기존 장비에서 구현한 사례가 없다보니 적절한 솔루션을 직접 찾아야
            했습니다.
          </P>
        </Section>
        <Section>
          <H2>설계</H2>
          <H3>챔버 회전을 위한 기어와 모터 선정</H3>
          <P>
            안정적인 챔버 회전을 위해 서보모터와 내접기어를 사용하기로 했습니다.
            챔버의 무게와 계산한 기어비를 바탕으로 적절한 기어와 서보모터를
            선정했습니다.
          </P>
          <StyledImage src={A3} />
          <H3>오링과 자성유체를 통해 진공도 유지</H3>
          <P>
            진공을 잡기 위한 오링 컴포넌트 설계는 어렵지 않았지만, 오링을
            회전파트에 사용할 수 없었습니다. 이유는 아래와 같습니다.
          </P>
          <P>
            챔버의 회전부분에 오링을 사용하게 되면 오링이 접촉면과 마찰하면서
            다수의 파티클이 생성됩니다. 이렇게 만들어진 파티클은 웨이퍼에
            치명적인 영향을 끼치게 되고, 이는 장비의 신뢰와 직접적으로
            연결됩니다.
          </P>
          <P>
            그래서 2가지 기준을 가지고 오링을 대체할 수 있는 솔루션을 찾아야
            했습니다.
          </P>
          <P>
            <B color="var(--grey400)">① 어떠한 파티클도 만들어내지 않을 것</B>
            <br />
            <B color="var(--grey400)">
              ② 챔버가 회전하는 중에도 진공을 유지할 것
            </B>
          </P>
          <P>
            여러 후보군 중 자성유체를 사용하면 기준을 충족할거라 판단했습니다.
            자성유체에 자력을 가하면 자성유체가 자장에 끌려 아래와 같은 모습을
            하게 됩니다.
          </P>
          <StyledImage src={A4} />
          <P>
            이를 활용하면 구동부에서 오링을 사용하지않고 진공을 유지할 수
            있습니다. 실제로 나사에서 우주복 연결부위의 씰링을 유지할 때 비슷한
            솔루션을 사용했기에 충분히 적용 가능할거라 판단했습니다.
          </P>
        </Section>
        <Section>
          <H2>최종 솔루션</H2>
          <P>
            위의 조건을 모두 충족시킬수 있는 최종 제품을 설계했습니다. 챔버의
            홈에 자성유체를 도포한 뒤 아래 자석을 배치해 자장에 의해 일정 형상을
            유지할 수 있게 했습니다. 형상이 유지된 자성유체는 회전중에도
            파티클을 발생시키지 않은 채 진공상태를 유지하게 됩니다.
          </P>
          <StyledImage src={A5} />
          <StyledImage src={A6} />
        </Section>
        <Section>
          <H2>제품 제작</H2>
          <P>
            실제로 제작이 가능하게끔 아래 4개의 제작공정을 고려하여 세부 설계를
            완료했습니다.
          </P>
          <P>
            ① MCT <br />
            ② CNC 선반 <br />
            ③ 와이어 커팅 <br />④ 용접
          </P>
          <P>약 3개월의 제작을 마무리하고 최종 장비를 조립했습니다.</P>
          <StyledImage src={A7} />
          <StyledImage src={A9} />
          <StyledImage src={A8} />
        </Section>
        <Section>
          <H2>Reflection</H2>
          <P>
            솔루션을 검증하는 과정에서 두가지 문제점을 발견했습니다. 첫째,
            자성유체가 일정 진공도 이상에서 성질을 잃어 진공이 풀리는 현상을
            관측했고. 둘째 충분한 차폐구조를 설계하지 못해 자석에 의해 웨이퍼가
            변형되었습니다.
          </P>
          <P>
            이는 자성유체 본연의 성질과 관련된 문제이기 때문에 자성유체가 아닌
            다른 방식으로 문제를 해결해야 했습니다. 이후 약 8개월의 후속 연구
            끝에 전자석을 사용한 회전 챔버를 새롭게 설계했습니다.
          </P>
        </Section>
        <Section>
          <LinkCard
            data={{
              title: "원자층 복합 증착 챔버 (Atomic layer deposition chamber)",
              description: "특허출원, 한국생산기술연구원 · 10-2021-009228",
              url: "https://drive.google.com/file/d/1rQBLTZFnai_l8u99YKmbyzYq6n96Pvhw/view?usp=sharing",
            }}
          />
          <LinkCard
            data={{
              title:
                "원자층 복합 증착 장치 (Atomic layer deposition apparatus)",
              description: "특허출원, 한국생산기술연구원 · 10-2021-0157694",
              url: "https://drive.google.com/file/d/1nkY36Mrk5nwd21ji3nZB43bU_hGDTvPV/view?usp=sharing",
            }}
          />
          <LinkCard
            data={{
              title:
                "지속가능한 ALD 공정챔버 개발을 위한 공정갭에 따른 가스유동 평가",
              description:
                "논문발표, 제 29회 한국반도체학술대회 · D_0041 / TP1-085",
              url: "ttps://drive.google.com/file/d/1oF_pKLJUzYGfqvyuiFWvCP3-YQFqZBkA/view?usp=sharing",
            }}
          />
        </Section>
      </article>
    </>
  );
};

export default ALDPage;
