import CommentWritePresenter from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";
import {
  IMutation,
  IMutationCreateBoardCommentArgs,
  IMutationDeleteBoardCommentArgs,
} from "../../../../commons/types/generated/types";
import {
  ICommentWriteContainerProps,
  IMyVariables,
} from "./commentWrite.types";

export default function CommentWriteContainer(P: ICommentWriteContainerProps) {
  const { isEdit, onClickIsEditToggle, comment } = P;
  const router = useRouter();

  const [createComment] = useMutation<
    Pick<IMutation, "createBoardComment">,
    IMutationCreateBoardCommentArgs
  >(CREATE_BOARD_COMMENT);
  const [updateComment] = useMutation<
    Pick<IMutation, "updateBoardComment">,
    IMutationDeleteBoardCommentArgs
  >(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [pwd, setPwd] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);
  const [errorWriter, setErrorWriter] = useState(false);
  const [errorPwd, setErrorPwd] = useState(false);
  const [errorContents, setErrorContents] = useState(false);
  const [errorRating, setErrorRating] = useState(false);

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value) {
      setErrorWriter(false);
    }
    if (isEdit && e.target.value) {
      setErrorWriter(false);
    }
  };
  const onChangePwd = (e: ChangeEvent<HTMLInputElement>) => {
    setPwd(e.target.value);
    if (e.target.value) {
      setErrorPwd(false);
    }
    if (isEdit && e.target.value) {
      setErrorPwd(false);
    }
  };
  const onChangeContents = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
    if (e.target.value) {
      setErrorContents(false);
    }
    if (isEdit && e.target.value) {
      setErrorContents(false);
    }
  };
  const onChangeRating = (e: number) => {
    setRating(e);
    if (e) {
      setErrorRating(false);
    }
    if (isEdit && e) {
      setErrorRating(false);
    }
  };

  const onClickCreateBtn = async () => {
    if (!writer) {
      setErrorWriter(true);
    }
    if (!pwd) {
      setErrorPwd(true);
    }
    if (!contents) {
      setErrorContents(true);
    }
    if (!rating) {
      setErrorRating(true);
    }

    if (writer && pwd && contents && rating) {
      try {
        await createComment({
          variables: {
            boardId: String(router.query.detail),
            createBoardCommentInput: {
              writer,
              password: pwd,
              contents,
              rating,
            },
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail, page: 1 },
            },
          ],
        });
      } catch (error: any) {
        alert(error.message);
      }
      setWriter("");
      setPwd("");
      setContents("");
      setRating(0);
    }
  };

  const onClickUpdateBtn = async () => {
    const myVariables: IMyVariables = {
      boardCommentId: comment._id,
      password: pwd,
      updateBoardCommentInput: {},
    };
    if (contents) {
      myVariables.updateBoardCommentInput.contents = contents;
    }
    if (rating) {
      myVariables.updateBoardCommentInput.rating = rating;
    }

    if (!pwd) {
      setErrorPwd(true);
    } else {
      try {
        await updateComment({
          variables: myVariables,
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail, page: 1 },
            },
          ],
        });
        onClickIsEditToggle();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const onClickCancelBtn = () => {
    onClickIsEditToggle();
  };

  return (
    <CommentWritePresenter
      writer={writer}
      pwd={pwd}
      contents={contents}
      rating={rating}
      errorWriter={errorWriter}
      errorPwd={errorPwd}
      errorContents={errorContents}
      errorRating={errorRating}
      onClickCreateBtn={onClickCreateBtn}
      onClickUpdateBtn={onClickUpdateBtn}
      onClickCancelBtn={onClickCancelBtn}
      onChangeWriter={onChangeWriter}
      onChangePwd={onChangePwd}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      isEdit={isEdit}
      comment={comment}
    />
  );
}
