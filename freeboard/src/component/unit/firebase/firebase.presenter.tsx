import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore/lite";
import { ChangeEvent } from "react";
import FirebasePresenterItem from "./firebase.presenterItem";

type IFirebasePresenterProps = {
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  onClickFetch: () => void;
  datas: DocumentData[];
};

export default function FirebasePresenter(P: IFirebasePresenterProps) {
  const {
    onChangeWriter,
    onChangeTitle,
    onChangeContents,
    onClickSubmit,
    onClickFetch,
    datas,
  } = P;

  return (
    <>
      <div>
        작성자 : <input type="text" onChange={onChangeWriter} /> 제목 :{" "}
        <input type="text" onChange={onChangeTitle} /> 내용 :{" "}
        <input type="text" onChange={onChangeContents} />
        <button onClick={onClickSubmit}>등록하기</button>
      </div>
      <button onClick={onClickFetch}>조회하기</button>

      {datas?.map((el: DocumentData, i: number) => (
        <FirebasePresenterItem el={el} />
      ))}
    </>
  );
}
