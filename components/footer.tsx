import React from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #191f28;
  height: 180px;
  margin-top: 80px;
  color: #b0b8c1;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 48px;
`;

const IconContainer = styled.ul`
  display: flex;
  gap: 40px;

  & a {
    color: #8b95a1;
  }

  & a:hover {
    color: #3d444b;
  }
`;

export function Footer() {
  return (
    <Container>
      <div style={{ width: "100%", maxWidth: "1140px" }}>
        <Wrapper>
          <span style={{ fontSize: "14px" }}>
            Copyright &copy; {new Date().getFullYear()}, Beomsoo Son
          </span>
          <IconContainer>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.instagram.com/beomsoo_son/"}
              >
                <FontAwesomeIcon size="xl" icon={faInstagram} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://github.com/k1a11220"}
              >
                <FontAwesomeIcon size="xl" icon={faGithub} />
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.linkedin.com/in/beomsoo-son-65a201178/"}
              >
                <FontAwesomeIcon size="xl" icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={"https://www.facebook.com/profile.php?id=100011177730168"}
              >
                <FontAwesomeIcon size="xl" icon={faFacebookF} />
              </a>
            </li>
          </IconContainer>
        </Wrapper>
      </div>
    </Container>
  );
}
