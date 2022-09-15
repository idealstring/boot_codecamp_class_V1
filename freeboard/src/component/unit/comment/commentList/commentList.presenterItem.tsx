import { MouseEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import * as S from "./commentList.styles";
import {
  dateFormatter,
  dateTimeFormatter,
} from "../../../../commons/utils/utils";
import DeleteModal from "../../../commons/modal/deleteModal";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./commentList.queries";
import { useRouter } from "next/router";
import { ICommentListPresenterItemProps } from "./commentList.types";
import CommentWriteContainer from "../commentWrite/commentWrite.container";
import { Rate } from "antd";

export default function CommentListPresenterItem(
  P: ICommentListPresenterItemProps
) {
  const { comment } = P;
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [deletePwd, setDeletePwd] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  const onClickIsEditToggle = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const onClickIsDeleteToggle = () => {
    setIsDelete((isDelete) => !isDelete);
  };

  const onClickUpdateBtn = () => {
    onClickIsEditToggle();
  };
  const onClickDeleteBtn = (e: MouseEvent<HTMLButtonElement>) => {
    onClickIsDeleteToggle();
    setDeleteId(e.currentTarget.id);
  };

  const deleteBoardCommentFunc = async () => {
    try {
      const result = await deleteBoardComment({
        variables: {
          boardCommentId: deleteId,
          password: deletePwd,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.detail, page: 1 },
          },
        ],
      });
      onClickIsDeleteToggle();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <>
      {isDelete && (
        <DeleteModal
          setDeletePwd={setDeletePwd}
          onClickIsDeleteToggle={onClickIsDeleteToggle}
          deleteBoardCommentFunc={deleteBoardCommentFunc}
        />
      )}
      {isEdit && (
        <CommentWriteContainer
          isEdit={isEdit}
          onClickIsEditToggle={onClickIsEditToggle}
          comment={comment}
        />
      )}
      {!isEdit && (
        <S.CommentViewWrapper key={comment._id}>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"
                  fill="#BDBDBD"
                />
              </svg>
            </S.CommentViewProfileWrapper>
            <S.CommentViewContentWrapper>
              <S.ViewContentTop>
                <S.CommentNameInfo>
                  <S.CommentContentName>{comment.writer}</S.CommentContentName>
                  <S.RateStarWrapper>
                    <Rate defaultValue={comment.rating} disabled={true} />
                  </S.RateStarWrapper>
                </S.CommentNameInfo>
                <S.CommentViewBtnWrapper>
                  <S.CommentViewBtn onClick={onClickUpdateBtn}>
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.06 6.02L11.98 6.94L2.92 16H2V15.08L11.06 6.02ZM14.66 0C14.41 0 14.15 0.1 13.96 0.29L12.13 2.12L15.88 5.87L17.71 4.04C18.1 3.65 18.1 3.02 17.71 2.63L15.37 0.29C15.17 0.09 14.92 0 14.66 0ZM11.06 3.19L0 14.25V18H3.75L14.81 6.94L11.06 3.19Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </S.CommentViewBtn>
                  <S.CommentViewBtn
                    id={comment?._id}
                    onClick={onClickDeleteBtn}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                        fill="#BDBDBD"
                      />
                    </svg>
                  </S.CommentViewBtn>
                </S.CommentViewBtnWrapper>
              </S.ViewContentTop>
              <S.CommentViewContent>{comment.contents}</S.CommentViewContent>
              <S.CommentViewContentDate>
                {comment?.createdAt !== comment?.updatedAt
                  ? `${dateTimeFormatter(comment.updatedAt)}(수정됨)`
                  : `${dateFormatter(comment.createdAt)}`}
              </S.CommentViewContentDate>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
        </S.CommentViewWrapper>
      )}
    </>
  );
}
