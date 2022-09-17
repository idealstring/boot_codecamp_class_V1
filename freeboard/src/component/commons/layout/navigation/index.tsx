import styled from "@emotion/styled";

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

type INavigationProps = {
  isNav: boolean;
};

export default function Navigation(P: INavigationProps) {
  const { isNav } = P;
  return (
    <>
      {isNav ? (
        <Container>
          <Wrapper>OUTER | INNER | NOTICE</Wrapper>
        </Container>
      ) : null}
    </>
  );
}
