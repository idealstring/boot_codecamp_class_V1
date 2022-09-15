import ZipcodeModal from "../../../commons/modal/zipcodeModal";
import * as S from "./boardsWrite.styles";
import { IBoardWritePresenterProps } from "./boardsWrite.types";

export default function BoardWritePresenter(P: IBoardWritePresenterProps) {
  const {
    errorPwd,
    errorWriter,
    errorContentTitle,
    errorContent,
    onChangeWriter,
    onChangePwd,
    onChangeContentTitle,
    onChangeContentText,
    onChangeZipcode,
    onChangeAddressCity,
    onChangeAddressDetail,
    onChangeYoutubeLink,
    CreateBtn,
    UpdateBtn,
    CreateCancelBtn,
    UpdateCancelBtn,
    isCompleteColor,
    isEdit,
    existingData,
    setInputData,
    inputData,
  } = P;

  // const router = useRouter();
  // if (typeof existingData !== "string") {
  //   router.push("/");
  //   return <></>;
  // }

  return (
    <S.Container>
      <S.Title>게시물 {isEdit ? "수정" : "등록"}</S.Title>
      <S.ContentContainer>
        <S.WriterPwdWrapper>
          <S.WriterPwd>
            <S.Subtitle>
              작성자 <S.CompulsoryStar>*</S.CompulsoryStar>
            </S.Subtitle>
            <S.InputName
              type="text"
              placeholder="이름을 적어주세요."
              onChange={onChangeWriter}
              defaultValue={existingData?.fetchBoard.writer || ""}
              disabled={isEdit ? true : false}
              errorColor={errorWriter}
            />
          </S.WriterPwd>
          <S.WriterPwd>
            <S.Subtitle>
              비밀번호 <S.CompulsoryStar>*</S.CompulsoryStar>
            </S.Subtitle>
            <S.InputPwd
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={onChangePwd}
              errorColor={errorPwd}
            />
          </S.WriterPwd>
        </S.WriterPwdWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>
            제목 <S.CompulsoryStar>*</S.CompulsoryStar>
          </S.Subtitle>
          <S.InputTitle
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={onChangeContentTitle}
            defaultValue={existingData?.fetchBoard.title}
            errorColor={errorContentTitle}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>
            내용 <S.CompulsoryStar>*</S.CompulsoryStar>
          </S.Subtitle>
          <S.TextareaContent
            placeholder="내용을 작성해주세요."
            onChange={onChangeContentText}
            defaultValue={existingData?.fetchBoard.contents}
            errorColor={errorContent}
          />
          <S.ErrorDiv>{errorContent}</S.ErrorDiv>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>주소</S.Subtitle>
          <div className="우편번호">
            <S.InputW77pxH52px
              type="text"
              placeholder="12212"
              onChange={onChangeZipcode}
              defaultValue={
                isEdit
                  ? existingData?.fetchBoard?.boardAddress?.zipcode || ""
                  : inputData.zipcode
              }
            />
            <ZipcodeModal setInputData={setInputData} />
          </div>
          <S.InputW100per
            type="text"
            onChange={onChangeAddressCity}
            defaultValue={
              isEdit
                ? existingData?.fetchBoard?.boardAddress?.address || ""
                : inputData.addressCity
            }
          />
          <S.InputW100per
            type="text"
            onChange={onChangeAddressDetail}
            defaultValue={
              isEdit
                ? existingData?.fetchBoard?.boardAddress?.addressDetail || ""
                : inputData.addressDetail
            }
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>유튜브</S.Subtitle>
          <S.InputW100per
            type="text"
            placeholder="링크를 복사해주세요."
            onChange={onChangeYoutubeLink}
            defaultValue={existingData?.fetchBoard.youtubeUrl || ""}
          />
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>사진 첨부</S.Subtitle>
          <S.ImgUploadWrapper>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
            <S.ImgUpload>
              +<span>Upload</span>
            </S.ImgUpload>
          </S.ImgUploadWrapper>
        </S.SubtitleWrapper>
        <S.SubtitleWrapper>
          <S.Subtitle>메인 설정</S.Subtitle>
          <S.InputRadioWrapper>
            <S.InputRadio type="radio" name="select_main" id="youtube" />
            <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
            <S.InputRadio type="radio" name="select_main" id="picture" />
            <S.RadioLabel htmlFor="picture">사진</S.RadioLabel>
          </S.InputRadioWrapper>
        </S.SubtitleWrapper>
        <S.SubmitBtnWrapper>
          <S.SubmitBtn
            onClick={isEdit ? UpdateBtn : CreateBtn}
            isCompleteColor={isCompleteColor}
          >
            {isEdit ? "수정완료" : "등록하기"}
          </S.SubmitBtn>
          <S.CancelBtn onClick={isEdit ? UpdateCancelBtn : CreateCancelBtn}>
            취소
          </S.CancelBtn>
        </S.SubmitBtnWrapper>
      </S.ContentContainer>
    </S.Container>
  );
}
