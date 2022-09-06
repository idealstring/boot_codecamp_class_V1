import * as S from "./boardsWrite.styles";

export default function BoardWritePresenter(P) {
  return (
    <S.Wrapper>
      <S.Title>게시물등록</S.Title>
      <S.ContentWrapper>
        <S.WriterPwdWrapper>
          <S.WriterPwd>
            <S.Subtitle>작성자</S.Subtitle>
            <S.InputW486px
              type="text"
              placeholder="이름을 적어주세요."
              onChange={P.onChangeWriter}
            />
            <S.ErrorDiv>{P.errorWriter}</S.ErrorDiv>
          </S.WriterPwd>
          <S.WriterPwd>
            <S.Subtitle>비밀번호</S.Subtitle>
            <S.InputW486px
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={P.onChangePwd}
            />
            <S.ErrorDiv>{P.errorPwd}</S.ErrorDiv>
          </S.WriterPwd>
        </S.WriterPwdWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>제목</S.Subtitle>
          <S.InputW100per
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={P.onChangeContentTitle}
          />
          <S.ErrorDiv>{P.errorContentTitle}</S.ErrorDiv>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>내용</S.Subtitle>
          <S.TextareaW100perH480px
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={P.onChangeContentText}
          />
          <S.ErrorDiv>{P.errorContent}</S.ErrorDiv>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>주소</S.Subtitle>
          <div className="우편번호">
            <S.InputW77pxH52px
              type="text"
              placeholder="12212"
              onChange={P.onChangeZipcode}
            />
            <S.PostButton>우편번호 검색</S.PostButton>
          </div>

          <S.InputW100per type="text" onChange={P.onChangeAddressCity} />

          <S.InputW100per type="text" onChange={P.onChangeAddressDetail} />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>유튜브</S.Subtitle>
          <S.InputW100per
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={P.onChangeYoutubeLink}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>사진 첨부</S.Subtitle>
          <S.ImgUploadWrapper>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
          </S.ImgUploadWrapper>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>메인 설정</S.Subtitle>
          <S.InputRadioWrapper>
            <S.InputRadio type="radio" name="select_main" id="youtube" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.InputRadio type="radio" name="select_main" id="picture" />
            <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
          </S.InputRadioWrapper>
        </S.SubtitleWrapper>
        <S.SubmitButtonWrapper>
          <button onClick={P.SubmitButton}>등록하기</button>
        </S.SubmitButtonWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
