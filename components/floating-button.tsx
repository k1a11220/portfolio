import styled from "@emotion/styled";
import Link from "next/link";

interface FloatingButtonProps {
  link: string;
  icon?: "bulb" | "contact" | null;
  label: React.ReactNode;
}

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 16px 24px;
  font-size: 16px;
  background-color: var(--blue);
  color: var(--white);
  border-radius: 100px;
  margin: 24px;
  z-index: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--blue);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--blue);
    background-color: var(--white);
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 22px;
  color: inherit;
`;

const FloatingButton = ({ link, icon = null, label }: FloatingButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Container>
        <>
          {icon === "bulb" ? (
            <IconContainer>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </IconContainer>
          ) : icon === "contact" ? (
            ""
          ) : null}
          {label}
        </>
      </Container>
    </a>
  );
};

export default FloatingButton;
