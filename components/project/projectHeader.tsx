import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";

interface ProjectHeader {
  title: string;
  description: string;
  timeline: string;
  role: string;
  profile: Array<{ name: string; role: string; image: any }>;
  thumbnail: any;
}

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5rem;
    margin-bottom: 1rem;
  }

  & p {
    font-size: 1rem;
    color: #767e85;
  }
`;

const HeaderBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: #f7fafc;
  overflow: visible;
  padding-bottom: 80px;
  border-bottom: 1px solid #e6e6e6;
`;

const TitleImg = styled.div`
  background-color: #78899b;
  overflow: hidden;
  margin-top: 56px;
  border-radius: 16px;
`;

const ListWrapper = styled.div`
  padding-top: 60px;

  & p {
    font-size: 0.875rem;
  }
`;

const ProfileList = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1.125rem;
  gap: 72px;
  min-width: 184px;
  overflow: scroll;
`;

const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 0.75rem;
  overflow: hidden;
`;

const ProfileWrapper = styled.ul`
  display: flex;
  gap: 0.5rem;

  & li {
    display: flex;
    min-width: 184px;
  }

  & > p {
    font-size: 0.75rem;
    line-height: 1.25;
  }
`;

const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & p:first-of-type {
    margin-bottom: 4px;
    font-size: 1rem;
    color: #333d4b;
  }

  & p:last-of-type {
    font-size: 0.875rem;
  }
`;

export function ProjectHeader({
  title,
  description,
  timeline,
  role,
  profile,
  thumbnail,
}: ProjectHeader) {
  return (
    <Header>
      <HeaderBg>
        <div
          style={{
            maxWidth: "780px",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "92%",
              margin: "auto",
              maxWidth: "calc(100% - 48px)",
            }}
          >
            <div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
            <TitleImg>
              <Image src={thumbnail} layout="responsive" />
            </TitleImg>
            <div style={{ display: "flex", gap: "72px", paddingTop: "40px" }}>
              <ListWrapper>
                <p>Timeline</p>
                <ProfileList>{timeline}</ProfileList>
              </ListWrapper>
              <ListWrapper>
                <p>Role</p>
                <ProfileList>{role}</ProfileList>
              </ListWrapper>
            </div>
            <ListWrapper>
              <p>Team</p>
              <ProfileList>
                {profile.map((item, index) => (
                  <ProfileWrapper key={index}>
                    <ProfileImg>
                      <Image src={item.image} layout="responsive" />
                    </ProfileImg>
                    <ProfileDetail>
                      <p>{item.name}</p>
                      <p>{item.role}</p>
                    </ProfileDetail>
                  </ProfileWrapper>
                ))}
              </ProfileList>
            </ListWrapper>
          </div>
        </div>
      </HeaderBg>
    </Header>
  );
}
