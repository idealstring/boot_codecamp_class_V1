import BoardWritePresenter from "./boardsWrite.presenter";
import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./boardsWrite.queries";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import {
  IBoardWriteContainerProps,
  IInnerUpdateBoardInput,
  IInputDateProps,
  IMyVrivables,
  IUpdateBoardAddress,
} from "./boardsWrite.types";
import {
  CreateBoardSuccess,
  UpdateBoardSuccess,
  PostFail,
} from "../../../commons/modal/boardSuccessFail";

export default function BoardWriteContainer(P: IBoardWriteContainerProps) {
  const { isEdit, data: existingData } = P;

  const [inputData, setInputData] = useState<IInputDateProps>({
    writer: "",
    password: "",
    title: "",
    contents: "",
    zipcode: "",
    address: "",
    addressDetail: "",
    youtubeUrl: "",
    images: "",
  });
  const [errorOutput, setErrorOutput] = useState({
    writer: false,
    password: false,
    title: false,
    contents: false,
  });

  const [isCompleteColor, setIsCompleteColor] = useState(false);

  const router = useRouter();

  const [SubmitInputData] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [UpdateInputData] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInputData((inputData) => {
      return { ...inputData, [e.target.id]: e.target.value };
    });
    if (e.target.value !== "") {
      setErrorOutput({ ...errorOutput, [e.target.id]: false });
    }

    const { writer, password, title, contents } = inputData;
    writer && password && title && contents
      ? setIsCompleteColor(true)
      : setIsCompleteColor(false);
    if (isEdit) password ? setIsCompleteColor(true) : setIsCompleteColor(false);
  };

  const CreateBtn = async () => {
    if (!inputData.writer) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, writer: true };
      });
    }
    if (!inputData.password) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, password: true };
      });
    }
    if (!inputData.title) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, title: true };
      });
    }
    if (!inputData.contents) {
      setErrorOutput((errorOutput) => {
        return { ...errorOutput, contents: true };
      });
    }

    const {
      writer,
      password,
      title,
      contents,
      zipcode,
      address,
      addressDetail,
      youtubeUrl,
      images,
    } = inputData;
    if (writer && password && title && contents) {
      try {
        const result = await SubmitInputData({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
              youtubeUrl,
              images,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });

        CreateBoardSuccess();
        await router.push(`/boards/${result?.data?.createBoard._id || ""}`);
      } catch (error) {
        if (error instanceof Error) PostFail(error.message);
      }
    }
  };
  const UpdateBtn = async () => {
    const boardAddress: IUpdateBoardAddress = {};
    const InnerUpdateBoardInput: IInnerUpdateBoardInput = {};

    const myVariables: IMyVrivables = {
      boardId: String(router.query.detail),
      password: inputData.password,
      updateBoardInput: InnerUpdateBoardInput,
    };

    if (inputData.title) {
      myVariables.updateBoardInput.title = inputData.title;
    }
    if (inputData.contents) {
      myVariables.updateBoardInput.contents = inputData.contents;
    }
    if (inputData.youtubeUrl) {
      myVariables.updateBoardInput.youtubeUrl = inputData.youtubeUrl;
    }
    if (inputData.images) {
      myVariables.updateBoardInput.images = inputData.images;
    }
    console.log(myVariables);
    if (inputData.zipcode || inputData.address || inputData.addressDetail) {
      myVariables.updateBoardInput = {
        ...myVariables.updateBoardInput,
        boardAddress: {},
      };

      if (inputData.zipcode) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.zipcode = inputData.zipcode;
      }
      if (inputData.address) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.address = inputData.address;
      }
      if (inputData.addressDetail) {
        if (!myVariables.updateBoardInput.boardAddress) {
          return;
        }
        myVariables.updateBoardInput.boardAddress.addressDetail =
          inputData.addressDetail;
      }
    }

    if (inputData.password) {
      try {
        const result = await UpdateInputData({
          variables: myVariables,
        });
        UpdateBoardSuccess();
        await router.push(`/boards/${result?.data?.updateBoard._id || ""}`);
      } catch (error) {
        if (error instanceof Error) PostFail(error.message);
      }
    } else {
      setErrorOutput({ ...errorOutput, password: true });
      PostFail("비밀번호를 입력하세요.");
    }
  };

  const CreateCancelBtn = async () => {
    await router.push(`/boards/`);
  };

  const UpdateCancelBtn = async () => {
    await router.push(`/boards/${String(router.query.detail)}`);
  };

  return (
    <BoardWritePresenter
      errorOutput={errorOutput}
      onChangeInput={onChangeInput}
      CreateBtn={CreateBtn}
      UpdateBtn={UpdateBtn}
      CreateCancelBtn={CreateCancelBtn}
      UpdateCancelBtn={UpdateCancelBtn}
      isCompleteColor={isCompleteColor}
      isEdit={isEdit}
      existingData={existingData}
      setInputData={setInputData}
      inputData={inputData}
    />
  );
}
