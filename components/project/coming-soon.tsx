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

function ComingSoon({ type }: { type: "coming" | "nda" }) {
  return (
    <Container>
      <h1>
        {type === "coming"
          ? "준비중이에요 ..."
          : type === "nda"
          ? "기밀유지 기간이에요"
          : null}
      </h1>

      {type === "coming" ? (
        <div id="loader">
          <div id="box"></div>
          <div id="hill"></div>
        </div>
      ) : type === "nda" ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="75.6"
          viewBox="0 0 36 45.6"
        >
          <g id="Layer_1" transform="translate(-14 -6.4)">
            <g
              id="그룹_14"
              data-name="그룹 14"
              transform="translate(0 -4)"
              opacity="0.2"
            >
              <g id="그룹_13" data-name="그룹 13">
                <path
                  id="패스_21"
                  data-name="패스 21"
                  d="M45.5,33.2h-5V25.9a8.5,8.5,0,1,0-17,0v7.3h-5V25.9a13.5,13.5,0,1,1,27,0Z"
                  fill="#231f20"
                />
              </g>
            </g>
            <g id="그룹_15" data-name="그룹 15" transform="translate(0 -2)">
              <path
                id="패스_22"
                data-name="패스 22"
                d="M45.5,31.2h-5V23.9a8.5,8.5,0,1,0-17,0v7.3h-5V23.9a13.5,13.5,0,1,1,27,0Z"
                transform="translate(0 -2)"
                fill="#4f5d73"
              />
            </g>
            <g id="그룹_17" data-name="그룹 17">
              <g id="그룹_16" data-name="그룹 16">
                <path
                  id="패스_23"
                  data-name="패스 23"
                  d="M32,32a4.012,4.012,0,0,0-4,4,3.756,3.756,0,0,0,2,3.4V42a2,2,0,0,0,4,0V39.4A3.959,3.959,0,0,0,32,32Z"
                  fill="#4f5d73"
                />
              </g>
            </g>
            <g id="그룹_18" data-name="그룹 18" opacity="0.2">
              <path
                id="패스_24"
                data-name="패스 24"
                d="M47,27H17a2.946,2.946,0,0,0-3,3V49a2.946,2.946,0,0,0,3,3H47a2.946,2.946,0,0,0,3-3V30A2.946,2.946,0,0,0,47,27ZM34,41.4V44a2,2,0,0,1-4,0V41.4A3.977,3.977,0,1,1,36,38,3.756,3.756,0,0,1,34,41.4Z"
                fill="#231f20"
              />
            </g>
            <g id="그룹_19" data-name="그룹 19">
              <path
                id="패스_25"
                data-name="패스 25"
                d="M47,25H17a2.946,2.946,0,0,0-3,3V47a2.946,2.946,0,0,0,3,3H47a2.946,2.946,0,0,0,3-3V28A2.946,2.946,0,0,0,47,25ZM34,39.4V42a2,2,0,0,1-4,0V39.4A3.977,3.977,0,1,1,36,36,3.756,3.756,0,0,1,34,39.4Z"
                fill="#eceffc"
              />
            </g>
          </g>
        </svg>
      ) : null}
    </Container>
  );
}

export default ComingSoon;
