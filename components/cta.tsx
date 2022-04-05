import React from "react";
import styled from "@emotion/styled";

const Button = styled.button`
  padding: 12px 24px;
  border-radius: 14px;
  border: none;
  font-size: 1rem;
  background-color: ${(props) => (props.color ? "#2c82ff" : "#ffffff")};
  border: 1px solid ${(props) => (props.color ? "#2c82ff" : "#EAEAEA")};
  color: ${(props) => (props.color ? "#ffffff" : "#666666")};
  transition: all 0.2s ease-in-out;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: ${(props) => (props.color ? "#2c82ff" : "#666666")};
    border: 1px solid ${(props) => (props.color ? "#2c82ff" : "#000000")};
    background-color: #ffffff;
    transition: all 0.2s ease-in-out;
  }
`;

export function CTA({ label, color }: any) {
  return <Button color={color}>{label}</Button>;
}
