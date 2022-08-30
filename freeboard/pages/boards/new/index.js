import { useState } from "react";
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
  PostButton,
  InputRadio,
  RadioLabel,
  SubmitButtonWrapper,
  ImgUploadWrapper,
  ImgUpload,
  ErrorDiv,
  InputRadioWrapper,
} from "../../../styles/new";

export default function WritePage() {
  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [contentTitle, setContentTitle] = useState("");
  const [contentText, setContentText] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");

  function onChangeWriter(e) {
    setWriter(e.target.value);
  }
  function onChangePwd(e) {
    setPwd(e.target.value);
  }
  function onChangeContentTitle(e) {
    setContentTitle(e.target.value);
  }
  function onChangeContent(e) {
    setContentText(e.target.value);
  }
  function onChangeZipcode(e) {
    setZipcode(e.target.value);
  }
  function onChangeAddressCity(e) {
    setAddressCity(e.target.value);
  }
  function onChangeAddressDetail(e) {
    setAddressDetail(e.target.value);
  }
  function onChangeYoutubeLink(e) {
    setYoutubeLink(e.target.value);
  }

  function SubmitButton() {
    if (writer === "") {
      document.getElementById("errorWriter").innerText = "이름을 입력하세요.";
    } else {
      document.getElementById("errorWriter").innerText = "";
    }
    if (pwd === "") {
      document.getElementById("errorPwd").innerText = "비밀번호를 입력하세요.";
    } else {
      document.getElementById("errorPwd").innerText = "";
    }
    if (contentTitle === "") {
      document.getElementById("errorContentTitle").innerText =
        "제목을 입력하세요.";
    } else {
      document.getElementById("errorContentTitle").innerText = "";
    }
    if (contentText === "") {
      document.getElementById("errorContent").innerText = "내용을 입력하세요.";
    } else {
      document.getElementById("errorContent").innerText = "";
    }
    if (zipcode === "") {
      document.getElementById("errorZipcode").innerText =
        "우편번호를 입력하세요.";
    } else {
      document.getElementById("errorZipcode").innerText = "";
    }
    if (addressCity === "") {
      document.getElementById("errorAddressCity").innerText =
        "주소를 입력하세요.";
    } else {
      document.getElementById("errorAddressCity").innerText = "";
    }
    if (addressDetail === "") {
      document.getElementById("errorAddressDetail").innerText =
        "상세 주소를 입력하세요.";
    } else {
      document.getElementById("errorAddressDetail").innerText = "";
    }
    if (youtubeLink === "") {
      document.getElementById("errorYoutubeLink").innerText =
        "유튜브 링크를 입력하세요.";
    } else {
      document.getElementById("errorYoutubeLink").innerText = "";
    }
  }

  return (
    <Wrapper>
      <Title>게시물등록</Title>
      <ContentWrapper>
        <WriterPwdWrapper>
          <WriterPwd>
            <Subtitle>작성자</Subtitle>
            <InputW486px
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
            />
            <ErrorDiv id="errorWriter"></ErrorDiv>
          </WriterPwd>
          <WriterPwd>
            <Subtitle>비밀번호</Subtitle>
            <InputW486px
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePwd}
            />
            <ErrorDiv id="errorPwd"></ErrorDiv>
          </WriterPwd>
        </WriterPwdWrapper>
        <SubtitleWrapper>
          <Subtitle>제목</Subtitle>
          <InputW100per
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeContentTitle}
          />
          <ErrorDiv id="errorContentTitle"></ErrorDiv>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>내용</Subtitle>
          <TextareaW100perH480px
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={onChangeContent}
          />
          <ErrorDiv id="errorContent"></ErrorDiv>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>주소</Subtitle>
          <div className="우편번호">
            <InputW77pxH52px
              type="text"
              placeholder="12212"
              onChange={onChangeZipcode}
            />
            <PostButton>우편번호 검색</PostButton>
          </div>
          <ErrorDiv id="errorZipcode"></ErrorDiv>
          <InputW100per type="text" onChange={onChangeAddressCity} />
          <ErrorDiv id="errorAddressCity"></ErrorDiv>
          <InputW100per type="text" onChange={onChangeAddressDetail} />
          <ErrorDiv id="errorAddressDetail"></ErrorDiv>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>유튜브</Subtitle>
          <InputW100per
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={onChangeYoutubeLink}
          />
          <ErrorDiv id="errorYoutubeLink"></ErrorDiv>
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
          <InputRadioWrapper>
            <InputRadio type="radio" name="select_main" id="youtube" />
            <RadioLabel for="youtube">유튜브</RadioLabel>
            <InputRadio type="radio" name="select_main" id="picture" />
            <RadioLabel for="picture">사진</RadioLabel>
          </InputRadioWrapper>
        </SubtitleWrapper>
        <SubmitButtonWrapper>
          <button onClick={SubmitButton}>등록하기</button>
        </SubmitButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
