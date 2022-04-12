import styled from "@emotion/styled";
import { NextPage } from "next";
import React from "react";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  & h1 {
    font-size: 1.75rem;
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
  background-color: #f2f4f6;
  overflow: visible;
  padding-bottom: 80px;
  border-bottom: 1px solid #e6e6e6;
`;

const TitleImg = styled.div`
  background-color: #78899b;
  height: 440px;
  margin-top: 56px;
`;

const ListWrapper = styled.div`
  padding-top: 80px;

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
`;

const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
  background-color: #1d1d1d;
  border-radius: 50%;
  margin-right: 0.75rem;
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
    color: #333d4b;
  }

  & p:last-of-type {
    font-size: 0.875rem;
  }
`;

const ALDPage: NextPage = () => {
  return (
    <>
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
                <h1>ALD Equipments design project</h1>
                <p>
                  How we reduced friction in one of the identity confirmation
                  flow of Facebook
                </p>
              </div>
              <TitleImg></TitleImg>
              <div style={{ display: "flex", gap: "72px" }}>
                <ListWrapper>
                  <p>Time</p>
                  <ProfileList>Dec 2018 - Jan 2019</ProfileList>
                </ListWrapper>
                <ListWrapper>
                  <p>Role</p>
                  <ProfileList>Design Engineering & Research</ProfileList>
                </ListWrapper>
              </div>
              <ListWrapper>
                <p>Worked With</p>
                <ProfileList>
                  <ProfileWrapper>
                    <li>
                      <ProfileImg></ProfileImg>
                      <ProfileDetail>
                        <p>TNG</p>
                        <p>Design Engineering</p>
                      </ProfileDetail>
                    </li>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <li>
                      <ProfileImg></ProfileImg>
                      <ProfileDetail>
                        <p>KITECH</p>
                        <p>Research, Test</p>
                      </ProfileDetail>
                    </li>
                  </ProfileWrapper>
                  <ProfileWrapper>
                    <li>
                      <ProfileImg></ProfileImg>
                      <ProfileDetail>
                        <p>Samsung Display</p>
                        <p>Research</p>
                      </ProfileDetail>
                    </li>
                  </ProfileWrapper>
                </ProfileList>
              </ListWrapper>
            </div>
          </div>
        </HeaderBg>
      </Header>
    </>
  );
};

export default ALDPage;
