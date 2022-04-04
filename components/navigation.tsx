import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const NavContainer: any = styled.nav`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  z-index: 50;
  user-select: none;
  border-bottom: ${(props) =>
    props.padding ? "1px solid rgba(0,27,55,0.1)" : ""};
`;

const NavWrapper = styled.div`
  position: relative;
  max-width: 1140px;
  height: 60px;
  padding: 0 48px;
  display: flex;
  flex-basis: 100%;
  align-items: center;
  user-select: none;
  background: #ffffff;
`;

const Logo = styled.span`
  font-size: 22px;
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
  padding: 0 8px;
  align-items: center;
  user-select: none;

  & button {
    background-color: #ffffff;
    border: none;
    padding: 8px 12px;
    color: #3d444b;
    font-size: 1rem;
  }
`;

export function Navigation() {
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

    if (backgroundTransparacyVar > 100) {
      setPadding(true);
    } else {
      setPadding(false);
    }
  }, [clientWindowHeight]);
  return (
    <NavContainer padding={padding}>
      <NavWrapper>
        <div>
          <Logo>Beomsoo</Logo>
        </div>
        <ItemContainer>
          <ItemList style={{ display: "flex" }}>
            <Item>
              <button>About me</button>
            </Item>
            <Item>
              <button>Contact</button>
            </Item>
          </ItemList>
        </ItemContainer>
      </NavWrapper>
    </NavContainer>
  );
}
