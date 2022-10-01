import * as S from "./signIn.styles";
import { ISignInPresenterProps } from "./signIn.types";

export default function SignInPresenter(P: ISignInPresenterProps) {
  const {
    onChangeEmail,
    onChangePassword,
    onClickSignIn,
    onClickRePassword,
    onClickRegister,
    errorEmail,
    errorPassword,
  } = P;

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.Hgroup>
            <h1>로그인</h1>
          </S.Hgroup>
          <S.BGroup className="section">
            <S.InputEmail
              type="text"
              placeholder="이메일"
              onChange={onChangeEmail}
              error={errorEmail}
              required
            />
            <S.InputPassword
              type="password"
              placeholder="비밀번호"
              error={errorPassword}
              onChange={onChangePassword}
            />
          </S.BGroup>
          <S.SignInBtn onClick={onClickSignIn}>로그인</S.SignInBtn>
          <S.LoginWrapper>
            <S.LoginBtn onClick={onClickRePassword}>비밀번호 재설정</S.LoginBtn>
            <S.LoginBtn onClick={onClickRegister}>회원가입</S.LoginBtn>
          </S.LoginWrapper>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
