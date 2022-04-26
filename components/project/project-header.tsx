import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import { DownloadAppstore } from "@media/download-appstore";
import { VisitWeb } from "@media/visit-web";
import { DownloadPlaystore } from "@media/download-playstore";

interface ProjectHeader {
  title: string;
  description: string;
  timeline: string;
  role: string;
  profile: Array<{ name: string; role: string; image: any }>;
  thumbnail: any;
  background: string;
  product: Array<{ type: "ios" | "aos" | "web"; href: string }>;
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
    line-height: 1.25;
  }

  & p {
    font-size: 1rem;
    color: #767e85;
    line-height: 1.25;
  }
`;

const HeaderBg = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  background-color: ${({ background }) => background};
  overflow: visible;
  padding-bottom: 80px;
  border-bottom: 1px solid #e6e6e6;
`;

const TitleImg = styled.div`
  background-color: none;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin-top: 1.125rem;
  grid-gap: 24px;
`;

const ProfileImg = styled.div`
  width: 48px;
  height: 48px;
  background-color: #ffffff;
  border: 1px solid #e6e6e6;
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
  background,
  product,
}: ProjectHeader) {
  return (
    <Header>
      <HeaderBg background={background}>
        <div
          style={{
            paddingTop: "120px",
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
            <ListWrapper>
              <p>Product</p>
              <ProfileList>
                <ProfileDetail>
                  <ProfileWrapper>
                    {product?.map((item, index) => {
                      if (item.type === "ios") {
                        return (
                          <a
                            target="_blank"
                            rel="noopener norefferer"
                            key={index}
                            href={item.href}
                          >
                            <DownloadAppstore />
                          </a>
                        );
                      } else if (item.type === "aos") {
                        return (
                          <a
                            target="_blank"
                            rel="noopener norefferer"
                            key={index}
                            href={item.href}
                          >
                            <DownloadPlaystore />
                          </a>
                        );
                      } else if (item.type === "web") {
                        return (
                          <a
                            target="_blank"
                            rel="noopener norefferer"
                            key={index}
                            href={item.href}
                          >
                            <VisitWeb />
                          </a>
                        );
                      }
                    })}
                  </ProfileWrapper>
                </ProfileDetail>
              </ProfileList>
            </ListWrapper>
            <ListWrapper>
              <p>Timeline</p>
              <ProfileList>
                <ProfileWrapper>
                  <ProfileDetail>{timeline}</ProfileDetail>
                </ProfileWrapper>
              </ProfileList>
            </ListWrapper>
            <ListWrapper>
              <p>Role</p>
              <ProfileList>
                <ProfileWrapper>
                  <ProfileDetail>{role}</ProfileDetail>
                </ProfileWrapper>
              </ProfileList>
            </ListWrapper>
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
