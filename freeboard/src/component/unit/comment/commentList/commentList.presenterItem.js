import { useState } from "react";
import CommentWrite from "../../../../commons/libraries/comment/commentWrite";
import * as S from "./commentList.styles";
import {
  dateFormatter,
  dateTimeFormatter,
} from "../../../../commons/utils/utils";

export default function CommentListPresenterItem(P) {
  const { comment } = P;
  const [isEdit, setIsEdit] = useState(false);

  const onClickUpdateBtn = () => {
    setIsEdit(true);
  };

  return (
    <>
      {isEdit && (
        <CommentWrite isEdit={isEdit} setIsEdit={setIsEdit} comment={comment} />
      )}
      {!isEdit && (
        <S.CommentViewWrapper key={comment._id}>
          <S.CommentViewInner>
            <S.CommentViewProfileWrapper>
              <img src="/profile_icon.png" />
            </S.CommentViewProfileWrapper>
            <S.CommentViewContentWrapper>
              <S.ViewContentTop>
                <S.CommentNameInfo>
                  <S.CommentContentName>{comment.writer}</S.CommentContentName>
                  <div>별 별 별 별 별</div>
                </S.CommentNameInfo>
                <S.CommentViewBtnWrapper>
                  <S.CommentViewBtn onClick={onClickUpdateBtn}>
                    <img src="/update_icon.png" />
                  </S.CommentViewBtn>
                  <S.CommentViewBtn>
                    <img src="/delete_icon.png" />
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
