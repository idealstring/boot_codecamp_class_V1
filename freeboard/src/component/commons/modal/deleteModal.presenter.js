import * as S from "./deleteModal.styles";

export default function ModalPresenter(P) {
  const { onChangeInputPwd, onClickCancelBtn, onClickConfirmBtn } = P;
  return (
    <S.Container>
      <S.Wrapper>
        <p>비밀번호를 입력하세요.</p>
        <S.InputH52 type="password" onChange={onChangeInputPwd} />
        <S.ButtonWrapper>
          <S.CancelBtn onClick={onClickCancelBtn}>취소</S.CancelBtn>
          <S.ConfirmBtn onClick={onClickConfirmBtn}>삭제</S.ConfirmBtn>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
