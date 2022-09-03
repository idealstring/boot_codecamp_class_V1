import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
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

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      boardAddress {
        zipcode
        address
        addressDetail
      }
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
    }
  }
`;

export default function WritePage() {
  const router = useRouter();

  const [inputData, setInputData] = useState({
    writer: "",
    pwd: "",
    contentTitle: "",
    contentText: "",
    zipcode: "",
    addressCity: "",
    addressDetail: "",
    youtubeLink: "",
  });

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPwd, setErrorPwd] = useState("");
  const [errorContentTitle, setErrorContentTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");

  const [submitInputData] = useMutation(CREATE_BOARD);

  function onChangeWriter(e) {
    setInputData((state) => {
      return { ...state, writer: e.target.value };
    });

    if (e.target.value !== "") {
      setErrorWriter("");
    }
  }
  function onChangePwd(e) {
    setInputData((state) => {
      return { ...state, pwd: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorPwd("");
    }
  }
  function onChangeContentTitle(e) {
    setInputData((state) => {
      return { ...state, contentTitle: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorContentTitle("");
    }
  }
  function onChangeContentText(e) {
    setInputData((state) => {
      return { ...state, contentText: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorContent("");
    }
  }
  function onChangeZipcode(e) {
    setInputData((state) => {
      return { ...state, zipcode: e.target.value };
    });
  }
  function onChangeAddressCity(e) {
    setInputData((state) => {
      return { ...state, addressCity: e.target.value };
    });
  }
  function onChangeAddressDetail(e) {
    setInputData((state) => {
      return { ...state, addressDetail: e.target.value };
    });
  }
  function onChangeYoutubeLink(e) {
    setInputData((state) => {
      return { ...state, youtubeLink: e.target.value };
    });
  }

  async function SubmitButton() {
    if (!inputData["writer"]) {
      setErrorWriter("이름을 입력하세요.");
    }
    if (!inputData["pwd"]) {
      setErrorPwd("비밀번호를 입력하세요.");
    }
    if (!inputData["contentTitle"]) {
      setErrorContentTitle("제목을 입력하세요.");
    }
    if (!inputData["contentText"]) {
      setErrorContent("내용을 입력하세요.");
    }
    if (
      inputData["writer"] &&
      inputData["pwd"] &&
      inputData["contentTitle"] &&
      inputData["contentText"]
    ) {
      try {
        const result = await submitInputData({
          variables: {
            createBoardInput: {
              writer: inputData.writer,
              password: inputData.pwd,
              title: inputData.contentTitle,
              contents: inputData.contentText,
              youtubeUrl: inputData.youtubeLink,
              boardAddress: {
                zipcode: inputData.zipcode,
                address: inputData.addressCity,
                addressDetail: inputData.addressDetail,
              },
              images: "",
            },
          },
        });
        console.log(result);
        alert("회원가입을 축하합니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
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
            <ErrorDiv>{errorWriter}</ErrorDiv>
          </WriterPwd>
          <WriterPwd>
            <Subtitle>비밀번호</Subtitle>
            <InputW486px
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePwd}
            />
            <ErrorDiv>{errorPwd}</ErrorDiv>
          </WriterPwd>
        </WriterPwdWrapper>
        <SubtitleWrapper>
          <Subtitle>제목</Subtitle>
          <InputW100per
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeContentTitle}
          />
          <ErrorDiv>{errorContentTitle}</ErrorDiv>
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>내용</Subtitle>
          <TextareaW100perH480px
            type="text"
            placeholder="내용을 작성해주세요."
            onChange={onChangeContentText}
          />
          <ErrorDiv>{errorContent}</ErrorDiv>
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

          <InputW100per type="text" onChange={onChangeAddressCity} />

          <InputW100per type="text" onChange={onChangeAddressDetail} />
        </SubtitleWrapper>
        <SubtitleWrapper>
          <Subtitle>유튜브</Subtitle>
          <InputW100per
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={onChangeYoutubeLink}
          />
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
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <InputRadio type="radio" name="select_main" id="picture" />
            <RadioLabel htmlFor="picture">사진</RadioLabel>
          </InputRadioWrapper>
        </SubtitleWrapper>
        <SubmitButtonWrapper>
          <button onClick={SubmitButton}>등록하기</button>
        </SubmitButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}
