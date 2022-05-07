import styled from "@emotion/styled";
import { Send } from "@media/common/send";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  & h1 {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 600;
  }

  & #loader {
    position: relative;
    margin-top: 2rem;
    width: 5.4em;
    height: 5.4em;
  }

  & #hill {
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    top: 1.7em;
    left: 1.7em;
    background-color: transparent;
    border-left: 0.25em solid var(--grey400);
    transform: rotate(45deg);
  }

  & #hill:after {
    content: "";
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    left: 0;
  }

  & #box {
    position: absolute;
    left: 0;
    bottom: -0.1em;
    width: 1em;
    height: 1em;
    background-color: transparent;
    border: 0.25em solid var(--grey400);
    border-radius: 15%;
    transform: translate(0, -1em) rotate(-45deg);
    animation: push 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
  }

  @keyframes push {
    0% {
      transform: translate(0, -1em) rotate(-45deg);
    }
    5% {
      transform: translate(0, -1em) rotate(-50deg);
    }
    20% {
      transform: translate(1em, -2em) rotate(47deg);
    }
    25% {
      transform: translate(1em, -2em) rotate(45deg);
    }
    30% {
      transform: translate(1em, -2em) rotate(40deg);
    }
    45% {
      transform: translate(2em, -3em) rotate(137deg);
    }
    50% {
      transform: translate(2em, -3em) rotate(135deg);
    }
    55% {
      transform: translate(2em, -3em) rotate(130deg);
    }
    70% {
      transform: translate(3em, -4em) rotate(217deg);
    }
    75% {
      transform: translate(3em, -4em) rotate(220deg);
    }
    100% {
      transform: translate(0, -1em) rotate(-225deg);
    }
  }
`;

function ComingSoon() {
  return (
    <Container>
      <h1>Coming Soon</h1>
      <div id="loader">
        <div id="box"></div>
        <div id="hill"></div>
      </div>
    </Container>
  );
}

export default ComingSoon;
