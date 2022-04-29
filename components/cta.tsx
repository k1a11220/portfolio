import React from "react";
import styled from "@emotion/styled";

interface CTAType {
  label: string;
  href: string;
  isPrimary: boolean;
  blank: boolean;
}

const Button = styled.a<{ isPrimary: boolean }>`
  padding: 14px 24px;
  border-radius: 14px;
  border: none;
  font-size: 1rem;
  background-color: ${(props) =>
    props.isPrimary ? "var(--blue)" : "var(--white)"};
  border: 1px solid
    ${(props) => (props.isPrimary ? "var(--blue)" : "var(--grey100)")};
  color: ${(props) => (props.isPrimary ? "var(--white)" : "var(--grey300)")};
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: ${(props) => (props.isPrimary ? "var(--blue)" : "var(--grey300)")};
    border: 1px solid
      ${(props) => (props.isPrimary ? "var(--blue)" : "var(--grey500)")};
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
  }
`;

export function CTA({ label, isPrimary, blank, href }: CTAType) {
  return (
    <Button
      target={blank ? "_blank" : ""}
      rel={blank ? "noopener norefferer" : ""}
      href={href}
      isPrimary={isPrimary}
    >
      {label}
    </Button>
  );
}
