import * as S from "./userRegister.styles";
import { IUserRegisterPresenterProps } from "./userRegister.types";

export default function UserRegisterPresenter(P: IUserRegisterPresenterProps) {
  const { onchangeInputData, onClickRegister, onClickSignIn } = P;

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Hgroup>
            <h1>회원가입</h1>
          </S.Hgroup>
          <S.BGroup className="section">
            <S.Label>이메일</S.Label>
            <S.Input
              id="email"
              type="text"
              placeholder="이메일"
              onChange={onchangeInputData}
              required
            />
            <S.Label>비밀번호</S.Label>
            <S.Input
              id="password"
              type="password"
              placeholder="비밀번호"
              onChange={onchangeInputData}
            />
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              id="passwordConfirm"
              type="password"
              placeholder="비밀번호 확인"
              onChange={onchangeInputData}
            />
            <S.Label>닉네임</S.Label>
            <S.Input
              id="name"
              type="text"
              placeholder="별명 (2~15자)"
              onChange={onchangeInputData}
            />
            <S.Label>약관동의</S.Label>
            <S.ConditionsWrapper>
              <S.Inner>
                <input type="checkbox" />
                <S.AllCheck>전체 동의</S.AllCheck>
              </S.Inner>
              <S.Line />
              <S.Inner>
                <input type="checkbox" />
                <S.EssentialCheck>만 14세 이상입니다</S.EssentialCheck>
              </S.Inner>
              <S.Inner>
                <input type="checkbox" />
                <S.SelectedCheck>개인정보 마케팅 활용 동의</S.SelectedCheck>
              </S.Inner>
            </S.ConditionsWrapper>
          </S.BGroup>
          <S.UserRegisterBtn onClick={onClickRegister}>
            회원가입하기
          </S.UserRegisterBtn>
          <S.LoginWrapper>
            이미 아이디가 있으신가요?{" "}
            <S.LoginBtn onClick={onClickSignIn}>로그인</S.LoginBtn>
          </S.LoginWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
