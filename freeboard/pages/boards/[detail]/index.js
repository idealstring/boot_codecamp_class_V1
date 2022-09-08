import CommentList from "../../../src/commons/libraries/commentList";
import CommentWrite from "../../../src/commons/libraries/commentWrite";
import BoardDetailContainer from "../../../src/component/unit/boards/detail/boardsDetail.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetailContainer />
      <CommentWrite />
      <CommentList />
    </>
  );
}
