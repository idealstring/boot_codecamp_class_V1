import BoardWritePresenter from "./boardsWrite.presenter";
import { useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardsWrite.queries";

export default function BoardWriteContainer(P) {
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

  const [isCompleteColor, setIsCompleteColor] = useState(false);

  const [SubmitInputData] = useMutation(CREATE_BOARD);
  const [UpdateInputData] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  function onChangeWriter(e) {
    setInputData((state) => {
      return { ...state, writer: e.target.value };
    });

    if (e.target.value !== "") {
      setErrorWriter("");
    }
    if (
      e.target.value &&
      inputData.pwd &&
      inputData.contentTitle &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  }
  function onChangePwd(e) {
    setInputData((state) => {
      return { ...state, pwd: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorPwd("");
    }

    if (
      inputData.writer &&
      e.target.value &&
      inputData.contentTitle &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  }
  function onChangeContentTitle(e) {
    setInputData((state) => {
      return { ...state, contentTitle: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorContentTitle("");
    }

    if (
      inputData.writer &&
      inputData.pwd &&
      e.target.value &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  }
  function onChangeContentText(e) {
    setInputData((state) => {
      return { ...state, contentText: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorContent("");
    }

    if (
      inputData.writer &&
      inputData.pwd &&
      inputData.contentTitle &&
      e.target.value
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
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

  const SubmitButton = async () => {
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
        const result = await SubmitInputData({
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
        alert("게시물 등록이 완료되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        alert(error.message);
      }
    }
  };
  const UpdateButton = async () => {
    console.log(router);
    try {
      const result = await UpdateInputData({
        variables: {
          updateBoardInput: {
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
          password: inputData.pwd,
          boardId: router.query.detail,
        },
      });
      alert("게시물 수정이 완료되었습니다.");
      router.push(`/boards/${result.data.updateBoard._id}`);
    } catch (error) {
      alert(error.message);
    }
  };

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
      UpdateButton={UpdateButton}
      isCompleteColor={isCompleteColor}
      isEdit={P.isEdit}
    />
  );
}
