import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore/lite";
import { ChangeEvent, useEffect, useState } from "react";
import { firebaseApp } from "../../../commons/libraries/firebase";
import FirebasePresenter from "./firebase.presenter";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export default function FirebaseContainer() {
  const [datas, setDatas] = useState<Array>();
  const [input, setInput] = useState({
    writer: "",
    title: "",
    contents: "",
    createdAt: new Date(),
    // number: "",
  });

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, writer: e.target.value });
  };
  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, title: e.target.value });
  };
  const onChangeContents = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, contents: e.target.value });
  };

  const onClickSubmit = () => {
    const board = collection(getFirestore(firebaseApp), "board");
    try {
      addDoc(board, {
        ...input,
      });
      onClickFetch();
    } catch (error) {
      alert(error);
    }
  };

  const onClickFetch = async () => {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const datas = result.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      el.data()
    ); // 데이터가 배열로 묶여있어 map으로 뽑아줘야함.

    console.log(result);
    console.log(datas);
    setDatas(datas);
  };

  return (
    <>
      <Wrapper>
        <FirebasePresenter
          onChangeWriter={onChangeWriter}
          onChangeTitle={onChangeTitle}
          onChangeContents={onChangeContents}
          onClickSubmit={onClickSubmit}
          onClickFetch={onClickFetch}
          datas={datas}
        />
      </Wrapper>
    </>
  );
}
