import { NextPage } from "next";
import React from "react";
import { CustomHead } from "@components/custom-head";
import { ProjectHeader } from "@components/project/project-header";
import {
  B,
  Divider,
  H2,
  H3,
  ImgContainer,
  Paragraph,
  Section,
  Ul,
} from "@components/typography";
import thumbnail from "@media/thumbnail_ald.jpg";
import samsungLogo from "@media/samsung_logo.png";
import kitechLogo from "@media/kitech_logo.png";
import tngLogo from "@media/tng_logo.png";

const ALDPage: NextPage = () => {
  return (
    <>
      <CustomHead
        title="ALD Equipments develop project"
        description="How we optimized ALD process through rotating vacuum chamber from KITECH and SDC"
      />
      <article>
        <ProjectHeader
          title="ALD Equipments develop project"
          description="How we optimized ALD process through rotating vacuum chamber from KITECH and SDC"
          timeline="Dec 2018 - Jan 2019"
          role="Design Engineering & Research"
          profile={[
            { name: "TNG", role: "Design Engineering", image: tngLogo },
            { name: "KITECH", role: "Research, Test", image: kitechLogo },
            { name: "Samsung Display", role: "Research", image: samsungLogo },
          ]}
          thumbnail={thumbnail}
          background={"#f7fafc"}
        />
        <Divider />
        <Section>
          <H2>Overview</H2>
          <Paragraph>
            In the ALD process, wafer can't move to another space. Because
            wafers can be polluted by gas or particles. But if wafer can move to
            another space without pollution, process productivity will increase.
            So, our team developed this equipment prototype to prove our theory.
          </Paragraph>
        </Section>
        <Section>
          <H2>Goal</H2>
          <Ul
            list={[
              "Wafer transporting in ALD process",
              "Rotating chamber",
              "Vaccum sealing with magnetic fluid",
            ]}
          />
          <ImgContainer />
        </Section>
        <Section>
          <H2>The Challenge</H2>
          <Paragraph>
            There were two challenges that we have to solve.
            <br />
            First, <B>'How to rotate chamber'</B>. Second,{" "}
            <B>'Sealing chamber in rotating process'</B>.
          </Paragraph>
        </Section>
        <Section>
          <H2>Design</H2>
          <H3>Gear and motors</H3>
          <Paragraph>
            To rotate the chamber, our team determined to use a servo motor and
            internal gears. So we calculated the gear ratio by those formulas.
            Based on the result data we selected internal gears and servo motor
            type.
          </Paragraph>
          <ImgContainer />
          <H3>Sealing with O-ring & Magnetic fluid</H3>
          <Paragraph>
            O-ring design was not difficult. But we spent a lot of time to think
            magnetic fluid.
            <br />
            <br />
            It's not recommended to use an o-ring with moving parts. Because
            o-ring makes particles by friction. Particles bring the critical
            issue to the wafer.
            <br />
            <br />
            So we have to find material that meet two criteria.
            <br />
            <B>1. Don't make any particles</B>
            <br />
            <B> 2. Vacuum sealing during rotating chamber.</B>
            <br />
            <br />
            Finally we found magnetic fluid.
          </Paragraph>
          <ImgContainer />
        </Section>
        <Section>
          <H3>Final Solution</H3>
          <Paragraph>
            By understanding this process, we designed the final equipment.
          </Paragraph>
          <ImgContainer />
          <ImgContainer />
        </Section>
        <Section>
          <H2>Manufacturing</H2>
          <Paragraph>
            We considered using four type of process.
            <br /> <br />
            ① MCT
            <br />
            ② CNC Lathe
            <br />
            ③ Wire Cutter
            <br />
            ④ Welding
            <br />
            <br />
            So we Optimized design for manufacturing machine.
          </Paragraph>
          <ImgContainer />
          <ImgContainer />
        </Section>
        <Section>
          <H2>Reflection</H2>
          <Paragraph>
            We found two critical issues with this solution. First, magnetic
            fluid was ineffective for sealing. Second, a wafer can be affected
            by the magnet.
            <br />
            <br />
            So we had to redesigning equipment without magnetic fluid.
          </Paragraph>
        </Section>
      </article>
    </>
  );
};

export default ALDPage;
