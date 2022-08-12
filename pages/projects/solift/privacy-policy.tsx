import { CustomHead } from "@components/custom-head";
import FloatingButton from "@components/floating-button";
import { B, Divider, H1, H2, P, Section } from "@components/typography";

const PrivacyPolicy = () => {
  return (
    <>
      <CustomHead title="우리의 선택, 우리의 미래" description="" />
      <article>
        <Divider />
        <H1>solift 개인정보 처리방침</H1>
        <Divider />
        <Section>
          <H2>1. 개인정보의 처리 목적</H2>
          <P>
            <B color="var(--blue)">solift</B> 는 다음의 목적을 위하여 개인정보를
            처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지 않습니다.
          </P>
        </Section>
        <Section>
          <H2>2. 개인정보의 처리 및 보유 기간</H2>
          <P>
            ① <B color="var(--blue)">solift</B>는 정보주체로부터 개인정보를
            수집할 때 동의 받은 개인정보 보유․ 이용기간 또는 법령에 따른
            개인정보 보유․이용기간 내에서 개인정보를 처리․ 보유합니다.
            <br />
            <br />
            {/* <B color="var(--grey400)"> */}- 개인정보를 수집하지 않으므로
            해당되지 않습니다.
            {/* </B> */}
          </P>
        </Section>
        <Section>
          <H2>
            3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
            개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다.
          </H2>
          <P>
            ① 정보주체는 오늘의목표 에 대해 언제든지 다음 각 호의 개인정보 보호
            관련 권리를 행사할 수 있습니다.
            <br />
            <br />
            1. 개인정보 열람요구
            <br />
            2. 오류 등이 있을 경우 정정 요구
            <br />
            3. 삭제요구
            <br />
            4. 처리정지 요구
            <br />
            <br />
            {/* <B color="var(--grey400)"> */}- 정보를 전혀 수집하지 않으므로,
            모두 사용자가 직접 앱을 삭제하여 처리할 수 있습니다.
            {/* </B> */}
          </P>
        </Section>
        <Section>
          <H2>4. 처리하는 개인정보의 항목 작성</H2>
          <P>- 개인 정보를 수집하지 않습니다.</P>
        </Section>
        <Section>
          <H2>
            5. 개인정보의 파기 <B color="var(--blue)">solift</B>는 원칙적으로
            개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를
            파기합니다. 파기의 절차, 기한 및 방법은 다음과 같습니다.
          </H2>
          <P>- 개인 정보를 수집하지 않습니다.</P>
        </Section>
        <Section>
          <H2>6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항</H2>
          <P>- 개인 정보를 수집하지 않습니다.</P>
        </Section>
        <Section>
          <H2>7. 개인정보 보호책임자 작성</H2>
          <P>- 개인 정보를 수집하지 않습니다.</P>
        </Section>
        <Section>
          <H2>8. 개인정보 처리방침 변경</H2>
          <P>
            ①이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른
            변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일
            전부터 공지사항을 통하여 고지할 것입니다
            <br />
            <br />- 이 개인정보처리방침은 2022년 8월 12일부터 적용됩니다.
          </P>
        </Section>
        <Section>
          <H2>
            9. 개인정보의 안전성 확보 조치 <B color="var(--blue)">solift</B>는
            개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한
            기술적/관리적 및 물리적 조치를 하고 있습니다.
          </H2>
          <P>
            1. 내부관리계획의 수립 및 시행
            <br /> <br />- 개인정보의 안전한 처리를 위하여 내부관리계획을
            수립하고 시행하고 있습니다.
          </P>
        </Section>
      </article>
      <FloatingButton
        icon={"contact"}
        label={"문의하기"}
        link={"mailto:beskar.son@gmail.com"}
      />
    </>
  );
};

export default PrivacyPolicy;
