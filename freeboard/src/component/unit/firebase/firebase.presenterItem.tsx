type IFirebasePresenterItemProps = {
  el: DocumentData;
};

export default function FirebasePresenterItem(P: IFirebasePresenterItemProps) {
  const { el } = P;
  return (
    <>
      <div key={el.createdAt.seconds}>
        <span>
          <strong>제목 : </strong>
          {el.title},{" "}
        </span>
        <span>
          <strong>내용 : </strong>
          {el.contents},{" "}
        </span>
        <span>
          <strong>작성자 : </strong>
          {el.writer}
        </span>
      </div>
    </>
  );
}
