import CommentList from "../../../src/commons/libraries/comment/commentList";
import CommentWrite from "../../../src/commons/libraries/comment/commentWrite";
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
