import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { Footer } from "../components/footer";
import { Navigation } from "../components/navigation";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  background-color: #ffffff;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Container>
      <Navigation />
      <div style={{ padding: "120px 0 20px" }}>
        <div
          style={{
            maxWidth: router.pathname === "/" ? "1140px" : "780px",
            width: "100%",
            height: "100%",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "92%",
              margin: "auto",
              maxWidth: "calc(100% - 48px)",
            }}
          >
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
}
