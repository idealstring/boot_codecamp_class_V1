import BoardWritePresenter from "./boardsWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardsWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  IBoardWriteContainerProps,
  IInputDateProps,
  IMyVrivables,
} from "./boardsWrite.types";

export default function BoardWriteContainer(P: IBoardWriteContainerProps) {
  const { isEdit, data: existingData } = P;

  const [inputData, setInputData] = useState<IInputDateProps>({
    writer: "",
    pwd: "",
    contentTitle: "",
    contentText: "",
    zipcode: "",
    addressCity: "",
    addressDetail: "",
    youtubeLink: "",
    images: "",
  });
  const [errorWriter, setErrorWriter] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [errorContentTitle, setErrorContentTitle] = useState(false);
  const [errorContent, setErrorContent] = useState(false);
  const [isCompleteColor, setIsCompleteColor] = useState(false);

  const router = useRouter();

  const [SubmitInputData] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [UpdateInputData] =
    useMutation<Pick<IMutation, "updateBoard">>(UPDATE_BOARD);

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, writer: event.target.value };
    });

    if (event.target.value !== "") {
      setErrorWriter(false);
    }
    if (
      event.target.value &&
      inputData.pwd &&
      inputData.contentTitle &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  };

  const onChangePwd = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, pwd: event.target.value };
    });
    if (event.target.value !== "") {
      setErrorPwd(false);
    }

    if (
      inputData.writer &&
      event.target.value &&
      inputData.contentTitle &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }

    if (isEdit && event.target.value) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  };

  const onChangeContentTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, contentTitle: event.target.value };
    });
    if (event.target.value !== "") {
      setErrorContentTitle(false);
    }

    if (
      inputData.writer &&
      inputData.pwd &&
      event.target.value &&
      inputData.contentText
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  };

  const onChangeContentText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputData((state) => {
      return { ...state, contentText: event.target.value };
    });
    if (event.target.value !== "") {
      setErrorContent(false);
    }

    if (
      inputData.writer &&
      inputData.pwd &&
      inputData.contentTitle &&
      event.target.value
    ) {
      setIsCompleteColor(true);
    } else {
      setIsCompleteColor(false);
    }
  };

  const onChangeZipcode = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, zipcode: event.target.value };
    });
  };

  const onChangeAddressCity = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, addressCity: event.target.value };
    });
  };
  const onChangeAddressDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, addressDetail: event.target.value };
    });
  };
  const onChangeYoutubeLink = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData((state) => {
      return { ...state, youtubeLink: event.target.value };
    });
  };

  const CreateBtn = async () => {
    if (!inputData["writer"]) {
      setErrorWriter(true);
    }
    if (!inputData["pwd"]) {
      setErrorPwd(true);
    }
    if (!inputData["contentTitle"]) {
      setErrorContentTitle(true);
    }
    if (!inputData["contentText"]) {
      setErrorContent(true);
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
              images: null,
            },
          },
        });
        alert("게시물 등록이 완료되었습니다.");
        router.push(`/boards/${result?.data?.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };
  const UpdateBtn = async () => {
    const myVariables: IMyVrivables = {
      boardId: String(router.query.detail),
      password: inputData.pwd,
      updateBoardInput: { boardAddress: {} },
    };

    if (inputData.contentTitle) {
      myVariables.updateBoardInput.title = inputData.contentTitle;
    }
    if (inputData.contentText) {
      myVariables.updateBoardInput.contents = inputData.contentText;
    }
    if (inputData.youtubeLink) {
      myVariables.updateBoardInput.youtubeUrl = inputData.youtubeLink;
    }
    if (inputData.images) {
      myVariables.updateBoardInput.images = inputData.images;
    }
    if (inputData.zipcode) {
      if (myVariables.updateBoardInput.boardAddress === undefined) {
        myVariables.updateBoardInput = { boardAddress: {} };
      }
      myVariables.updateBoardInput.boardAddress.zipcode = inputData.zipcode;
    }
    if (inputData.addressCity) {
      if (myVariables.updateBoardInput.boardAddress === undefined) {
        myVariables.updateBoardInput = { boardAddress: {} };
      }
      myVariables.updateBoardInput.boardAddress.address = inputData.addressCity;
    }
    if (inputData.addressDetail) {
      if (myVariables.updateBoardInput.boardAddress === undefined) {
        myVariables.updateBoardInput = { boardAddress: {} };
      }
      myVariables.updateBoardInput.boardAddress.addressDetail =
        inputData.addressDetail;
    }

    if (inputData["pwd"]) {
      try {
        const result = await UpdateInputData({
          variables: myVariables,
        });
        alert("게시물 수정이 완료되었습니다.");
        router.push(`/boards/${result?.data?.updateBoard._id}`);
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      setErrorPwd(true);
    }
  };

  const CreateCancelBtn = () => {
    router.push(`boards/`);
  };

  const UpdateCancelBtn = () => {
    router.push(`/boards/${router.query.detail}`);
  };

  return (
    <BoardWritePresenter
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
      CreateBtn={CreateBtn}
      UpdateBtn={UpdateBtn}
      CreateCancelBtn={CreateCancelBtn}
      UpdateCancelBtn={UpdateCancelBtn}
      isCompleteColor={isCompleteColor}
      isEdit={isEdit}
      existingData={existingData}
    />
  );
}
