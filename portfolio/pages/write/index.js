import {
  Wrapper,
  Title,
  ContentWrapper,
  WriterPwdWrapper,
  WriterPwd,
  Subtitle,
  InputW486px,
  SubtitleWrapper,
  InputW100per,
  TextareaW100perH480px,
  InputW77pxH52px,
  InputW100perM16px,
  PostButton,
  InputRadio,
  RadioLabel,
  SubmitButtonWrapper,
  ImgUploadWrapper,
  ImgUpload,
} from "../../styles/write";

export default function WritePage() {
  return (
    <Wrapper>
      <Title>게시물등록</Title>
      <ContentWrapper>
        <WriterPwdWrapper>
          <WriterPwd>
            <Subtitle>작성자</Subtitle>
            <InputW486px type="text" placeholder="이름을 적어주세요." />
          </WriterPwd>
          <WriterPwd>
            <Subtitle>비밀번호</Subtitle>
            <InputW486px
              type="password"
              placeholder="비밀번호를 입력해주세요."
            />
          </WriterPwd>
        </WriterPwdWrapper>
        <SubtitleWrapper>
          <Subtitle>제목</Subtitle>
          <InputW100per type="text" placeholder="제목을 작성해주세요." />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>내용</Subtitle>
          <TextareaW100perH480px
            type="text"
            placeholder="내용을 작성해주세요."
          />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>주소</Subtitle>
          <div className="우편번호">
            <InputW77pxH52px type="text" placeholder="12212" />
            <PostButton>우편번호 검색</PostButton>
          </div>
          <InputW100perM16px type="text" />
          <InputW100per type="text" />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>유튜브</Subtitle>
          <InputW100per type="text" placeholder="링크를 복사해주세요." />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>사진 첨부</Subtitle>
          <ImgUploadWrapper>
            <ImgUpload>
              +<span>Upload</span>
            </ImgUpload>
            <ImgUpload>
              +<span>Upload</span>
            </ImgUpload>
            <ImgUpload>
              +<span>Upload</span>
            </ImgUpload>
          </ImgUploadWrapper>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>메인 설정</Subtitle>
          <div>
            <InputRadio type="radio" name="select_main" id="youtube" />
            <RadioLabel for="youtube">유튜브</RadioLabel>
            <InputRadio type="radio" name="select_main" id="picture" />
            <RadioLabel for="picture">사진</RadioLabel>
          </div>
        </SubtitleWrapper>
        <SubmitButtonWrapper>
          <button>등록하기</button>
        </SubmitButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
