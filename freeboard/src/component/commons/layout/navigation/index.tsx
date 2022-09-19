import styled from "@emotion/styled";
import { useRouter } from "next/router";

const Container = styled.header`
  width: 100%;
`;
const Wrapper = styled.header`
  margin: 0 auto;
  padding-bottom: 25px;
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const NavButton = styled.button`
  margin: 0 10px;
  background-color: #fff;
  border: none;

  font-size: 1.14286rem;

  cursor: pointer;
`;

type INavigationProps = {
  isNav: boolean;
};

export default function Navigation(P: INavigationProps) {
  const { isNav } = P;
  const router = useRouter();
  return (
    <>
      {isNav ? (
        <Container>
          <Wrapper>
            <NavButton
              onClick={() => {
                router.push("/market");
              }}
            >
              MARKET
            </NavButton>
            |
            <NavButton
              onClick={() => {
                router.push("/boards");
              }}
            >
              FREEBOARD
            </NavButton>
            |
            <NavButton
              onClick={() => {
                router.push("/notice");
              }}
            >
              NOTICE
            </NavButton>
          </Wrapper>
        </Container>
      ) : null}
    </>
  );
}
