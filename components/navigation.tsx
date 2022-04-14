import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import Link from "next/link";

const NavContainer: any = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  background: rgb(255, 255, 255);
  z-index: 50;
  user-select: none;
  border-bottom: ${(props: any) =>
    props.padding ? "1px solid rgba(0,27,55,0.1)" : ""};
`;

const NavWrapper = styled.div`
  position: relative;
  padding: 0 48px;
  display: flex;
  height: 120px;
  transition: max-height 0.5s ease-in-out;
  flex-basis: 100%;
  align-items: center;
  user-select: none;
  background: #ffffff;
`;

const Logo = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 0;
  font-size: 0.75rem;
  letter-spacing: 0.15rem;
  font-weight: 500;
  cursor: pointer;
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
`;

const Item = styled.li`
  display: flex;
  height: 100%;
  padding: 0 4px;
  align-items: center;
  user-select: none;
`;

const Label: any = styled.button`
  background-color: #ffffff;
  border: none;
  padding: 12px 16px;
  color: #696969;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f6fa;
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
          maxWidth: "1140px",
        }}
      >
        <NavWrapper
          style={{
            maxHeight: padding ? "64px" : "120px",
          }}
        >
          <Link href={"/"}>
            <Logo>BEOMSOO SON</Logo>
          </Link>
          <ItemContainer>
            <ItemList style={{ display: "flex" }}>
              <Item>
                <Label
                  style={{
                    color: router.pathname === "/about" ? "#3D444B" : null,
                  }}
                  onClick={() => router.push("/about")}
                >
                  About me
                </Label>
              </Item>
              <Item>
                <Label>Contact</Label>
              </Item>
            </ItemList>
          </ItemContainer>
        </NavWrapper>
      </div>
    </NavContainer>
  );
}
