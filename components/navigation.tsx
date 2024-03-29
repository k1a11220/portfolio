import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

const NavContainer: any = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  background: none;
  z-index: 50;
  user-select: none;
  border-bottom: ${(props: any) =>
    props.padding ? "1px solid var(--greyOpacity500)" : ""};
  background-color: ${(props: any) =>
    props.padding ? "var(--white)" : "transparent"};
  transition: background 0.3s ease-in-out;
`;

const NavWrapper = styled.div`
  position: relative;
  padding: 0 48px;
  display: flex;
  height: 120px;
  transition: max-height 0.3s ease-in-out;
  flex-basis: 100%;
  align-items: center;
  user-select: none;
  background: transparent;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Logo = styled.button`
  border: none;
  padding: 0;
  font-size: 0.875rem;
  letter-spacing: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
`;

const ItemContainer = styled.div`
  display: flex;
  margin: 0 0 0 auto;
  max-height: 100%;
  overflow-y: hidden;
`;

const ItemList = styled.ul`
  display: flex;
  margin: 0 0 0 auto;
  z-index: 10;
  list-style: none;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const Item = styled.li`
  display: flex;
  height: 100%;
  align-items: center;
  user-select: none;
`;

const Label: any = styled.button`
  border: none;
  padding: 12px 16px;
  color: var(--grey300);
  font-weight: 300;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;

  &:hover {
    color: var(--grey100);
  }
`;

export function Navigation() {
  const router = useRouter();
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const [padding, setPadding] = useState(false);

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight;

    if (backgroundTransparacyVar > 50) {
      setPadding(true);
    } else {
      setPadding(false);
    }
  }, [clientWindowHeight]);
  return (
    <NavContainer padding={padding}>
      <div
        style={{
          width: "100%",
          height: "100%",
          margin: "auto",
          maxWidth: "1600px",
        }}
      >
        <NavWrapper
          style={{
            maxHeight: padding ? "64px" : "120px",
          }}
        >
          <Link href={"/"}>
            <Logo>손범수.</Logo>
          </Link>
          <ItemContainer>
            <ItemList style={{ display: "flex" }}>
              <Item>
                <Label
                  style={{
                    color:
                      router.pathname === "/about" ? "var(--grey500)" : null,
                    fontWeight: router.pathname === "/about" ? "500" : null,
                  }}
                  onClick={() => router.push("/about")}
                >
                  소개
                </Label>
              </Item>
              <Item>
                <Label
                  style={{
                    color:
                      router.pathname === "/side" ? "var(--grey500)" : null,
                    fontWeight: router.pathname === "/side" ? "500" : null,
                  }}
                  onClick={() => router.push("/side")}
                >
                  사이드 프로젝트
                </Label>
              </Item>
              {/* <Item>
                <Label>Contact</Label>
              </Item> */}
            </ItemList>
          </ItemContainer>
        </NavWrapper>
      </div>
    </NavContainer>
  );
}
