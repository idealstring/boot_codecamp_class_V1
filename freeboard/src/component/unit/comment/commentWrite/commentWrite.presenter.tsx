import * as S from "./commentWrite.styles";
import { ICommentWritePresenterProps } from "./commentWrite.types.js";

export default function CommentWritePresenter(P: ICommentWritePresenterProps) {
  const {
    writer,
    pwd,
    contents,
    rating,
    errorWriter,
    errorPwd,
    errorContents,
    errorRating,
    onClickCreateBtn,
    onClickUpdateBtn,
    onClickCancelBtn,
    onChangeWriter,
    onChangePwd,
    onChangeContents,
    onChangeRating,
    isEdit,
    comment,
  } = P;
  return (
    <>
      {isEdit ? null : <S.HrLine />}
      <S.CommentWrapper>
        {isEdit ? null : (
          <S.CommentTitle>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM18 14H3.17L2.58 14.59L2 15.17V2H18V14ZM8.5 12H16V10H10.5L8.5 12ZM12.36 6.13C12.56 5.93 12.56 5.62 12.36 5.42L10.59 3.65C10.39 3.45 10.08 3.45 9.88 3.65L4 9.53V12H6.47L12.36 6.13Z"
                fill="#FFD600"
              />
            </svg>
            {` `}
            댓글
          </S.CommentTitle>
        )}
        <S.CommentNonmemberWrapper>
          <S.CommentNameInfo>
            <S.InputName
              type="text"
              placeholder="작성자"
              value={comment?.writer ? null : writer}
              defaultValue={comment?.writer}
              onChange={onChangeWriter}
              disabled={isEdit ? true : false}
              errorColor={errorWriter}
            />
            <S.InputPwd
              type="password"
              placeholder="비밀번호"
              value={pwd}
              onChange={onChangePwd}
              errorColor={errorPwd}
            />
            <div className="별점" onChange={onChangeRating}>
              별 별 별 별 별
            </div>
          </S.CommentNameInfo>
          <S.CommentContentWrapper>
            <S.TextareaW1200
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              onChange={onChangeContents}
              value={comment?.contents ? null : contents}
              defaultValue={comment?.contents}
              errorColor={errorContents}
              maxLength={100}
            />
            <S.CommentContentBottom>
              <S.CharactersCounter>{contents.length}/100</S.CharactersCounter>
              {isEdit ? (
                <>
                  <div>
                    <S.CommentBtn
                      onClick={onClickCancelBtn}
                      isEdit={isEdit}
                      isCancel={true}
                    >
                      취소
                    </S.CommentBtn>
                    <S.CommentBtn
                      onClick={onClickUpdateBtn}
                      isEdit={isEdit}
                      isCancel={false}
                    >
                      수정하기
                    </S.CommentBtn>
                  </div>
                </>
              ) : (
                <S.CommentBtn onClick={onClickCreateBtn} isEdit={isEdit}>
                  등록하기{" "}
                </S.CommentBtn>
              )}
            </S.CommentContentBottom>
          </S.CommentContentWrapper>
        </S.CommentNonmemberWrapper>
      </S.CommentWrapper>
    </>
  );
}
