import BoardWritePresenter from "./boardsWrite.presenter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD } from "./boardsWrite.queries";

export default function BoardWriteContainer() {
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
        alert("회원가입을 축하합니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  return (
    <BoardWritePresenter
      inputData={inputData}
      errorPwd={errorPwd}
      errorWriter={errorWriter}
      errorContentTitle={errorContentTitle}
      errorContent={errorContent}
      onChangeWriter={onChangeWriter}
      onChangePwd={onChangePwd}
      onChangeContentTitle={onChangeContentTitle}
      onChangeContentText={onChangeContentText}
      onChangeZipcode={onChangeZipcode}
      onChangeAddressCity={onChangeAddressCity}
      onChangeAddressDetail={onChangeAddressDetail}
      onChangeYoutubeLink={onChangeYoutubeLink}
      SubmitButton={SubmitButton}
    />
  );
}
