import CommentWritePresenter from "./commentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./commentWrite.queries";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD } from "../../boards/detail/boardsDetail.queries";
import { FETCH_BOARD_COMMENTS } from "../commentList/commentList.queries";

export default function CommentWriteContainer() {
  const [createComment] = useMutation(CREATE_BOARD_COMMENT);
  const router = useRouter();

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

  const onClickCreateCommentButton = async () => {
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
    setWriter("");
    setPassword("");
    setContents("");
  };

  return (
    <CommentWritePresenter
      onClickCreateCommentButton={onClickCreateCommentButton}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeContents={onChangeContents}
      onChangeRating={onChangeRating}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
