import CommentWritePresenter from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./commentWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";
// import { FETCH_BOARD } from "../../boards/detail/boardsDetail.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";

export default function CommentWriteContainer(P) {
  const { isEdit, setIsEdit, comment } = P;
  const router = useRouter();

  const [createComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [contents, setContents] = useState("");
  const [rating, setRating] = useState(0);

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
  };
  const onChangeRating = (e) => {};

  const onClickCreateCommentBtn = async () => {
    try {
      const result = await createComment({
        variables: {
          boardId: router.query.detail,
          createBoardCommentInput: {
            writer,
            password,
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
    } catch (error) {
      alert(error.message);
    }
    setWriter("");
    setPassword("");
    setContents("");
  };

  const onclickUpdateBtn = async () => {
    console.log(comment);
    try {
      const result = await updateComment({
        variables: {
          boardCommentId: comment._id,
          password,
          updateBoardCommentInput: {
            contents,
            rating: 0,
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: { boardId: router.query.detail, page: 1 },
            },
          ],
        },
      });
      setIsEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CommentWritePresenter
      onClickCreateCommentBtn={onClickCreateCommentBtn}
      onclickUpdateBtn={onclickUpdateBtn}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      isEdit={isEdit}
      comment={comment}
    />
  );
}
