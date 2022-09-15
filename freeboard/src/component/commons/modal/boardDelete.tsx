import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { ContentBtn } from "../../unit/modal/boardDelete/boardDelete.styles";
import { IBoardDeleteModalProps } from "../../unit/modal/boardDelete/boardDelete.types";
const { confirm } = Modal;

const BoardDeleteModal = (P: IBoardDeleteModalProps) => {
  const { onClickDeleteBtn } = P;
  const showDeleteConfirm = () => {
    confirm({
      title: "게시물 삭제",
      icon: <ExclamationCircleOutlined />,
      content: `삭제하시면 다시 복구할 수 없습니다. 정말 삭제하시겠습니까?`,
      okText: "예",
      okType: "danger",
      cancelText: "아니오",

      onOk() {
        onClickDeleteBtn();
      },

      onCancel() {},
    });
  };
  return <ContentBtn onClick={showDeleteConfirm}>삭제하기</ContentBtn>;
};
export default BoardDeleteModal;
