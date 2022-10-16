import { useState } from "react";
import * as S from "./commentList.styles";
import {
  dateFormatter,
  dateTimeFormatter,
} from "../../../../../commons/utils/utils";
import { ICommentListPresenterItemProps } from "./commentList.types";
import CommentWriteContainer from "../commentWrite/commentWrite.container";
import MarketCommentDeleteModal from "../../../../commons/modal/marketCommentDelete";

export default function MarketCommentListPresenterItem(
  P: ICommentListPresenterItemProps
) {
  const { questions } = P;
  const [isEdit, setIsEdit] = useState(false);
  const onClickIsEditToggle = () => {
    setIsEdit((isEdit) => !isEdit);
  };

  const onClickUpdateBtn = () => {
    onClickIsEditToggle();
  };

  return (
    <>
      {isEdit && (
        <CommentWriteContainer
          isEdit={isEdit}
          onClickIsEditToggle={onClickIsEditToggle}
          questions={questions}
        />
      )}
      {!isEdit && (
        <S.CommentViewWrapper key={questions._id}>
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
                  <S.CommentContentName>
                    {questions.user.name}
                  </S.CommentContentName>
                </S.CommentNameInfo>
                <S.CommentViewBtnWrapper>
                  <S.CommentBtn onClick={onClickUpdateBtn}>수정</S.CommentBtn>
                  <MarketCommentDeleteModal id={questions?._id} />
                  <S.CommentBtn onClick={onClickUpdateBtn}>
                    댓글보기
                  </S.CommentBtn>
                </S.CommentViewBtnWrapper>
              </S.ViewContentTop>
              <S.CommentViewContent>{questions.contents}</S.CommentViewContent>
              <S.CommentViewContentDate>
                {questions?.createdAt !== questions?.updatedAt
                  ? `${dateTimeFormatter(questions.updatedAt)}(수정됨)`
                  : `${dateFormatter(questions.createdAt)}`}
              </S.CommentViewContentDate>
            </S.CommentViewContentWrapper>
          </S.CommentViewInner>
        </S.CommentViewWrapper>
      )}
    </>
  );
}
