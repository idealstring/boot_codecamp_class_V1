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
  const [rating, setRating] = useState(1);
  const [errorWord, setErrorWord] = useState("");

  const onChangeWriter = (e) => {
    setWriter(e.target.value);
    if (e.target.value && password && contents && rating) {
      setErrorWord("");
    }
    if (isEdit && e.target.value) {
      setErrorWord("");
    }
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (writer && e.target.value && contents && rating) {
      setErrorWord("");
    }
    if (isEdit && e.target.value) {
      setErrorWord("");
    }
  };
  const onChangeContents = (e) => {
    setContents(e.target.value);
    if (writer && password && e.target.value && rating) {
      setErrorWord("");
    }
    if (isEdit && e.target.value) {
      setErrorWord("");
    }
  };
  const onChangeRating = (e) => {
    if (writer && password && contents && e.target.value) {
      setErrorWord("");
    }
    if (isEdit && e.target.value) {
      setErrorWord("");
    }
  };

  const onClickCreateCommentBtn = async () => {
    if (!writer || !password || !contents || !rating) {
      setErrorWord("댓글을 확인해 주세요.");
    } else {
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
    }
  };

  const onclickUpdateBtn = async () => {
    if (!password || !contents || !rating) {
      setErrorWord("댓글을 확인해 주세요.");
    } else {
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
    }
  };

  return (
    <CommentWritePresenter
      errorWord={errorWord}
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
