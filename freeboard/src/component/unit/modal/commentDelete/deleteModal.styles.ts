import styled from "@emotion/styled";

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  filter: grayscale(80%);

  top: 0;
  left: 0;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  padding: 20px;

  width: 400px;
  height: 250px;
  background-color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputH52 = styled.input`
  padding: 18px;

  width: 100%;
  height: 52px;
`;

export const CancelBtn = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  background-color: white;
  cursor: pointer;
`;

export const ConfirmBtn = styled.button`
  width: 100%;
  height: 52px;

  border: none;
  background-color: #ffd600;
  cursor: pointer;
`;
