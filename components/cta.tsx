import React from "react";
import styled from "@emotion/styled";

interface CTAType {
  label: string;
  href: string;
  isPrimary: boolean;
}

const Button = styled.a<{ isPrimary: boolean }>`
  padding: 14px 24px;
  border-radius: 14px;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => (props.isPrimary ? "#2c82ff" : "#ffffff")};
  border: 1px solid ${(props) => (props.isPrimary ? "#2c82ff" : "#EAEAEA")};
  color: ${(props) => (props.isPrimary ? "#ffffff" : "#666666")};
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => (props.isPrimary ? "#2c82ff" : "#666666")};
    border: 1px solid ${(props) => (props.isPrimary ? "#2c82ff" : "#000000")};
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
  }
`;

export function CTA({ label, isPrimary, href }: CTAType) {
  return (
    <Button
      target="_blank"
      rel="noopener norefferer"
      href={href}
      isPrimary={isPrimary}
    >
      {label}
    </Button>
  );
}
