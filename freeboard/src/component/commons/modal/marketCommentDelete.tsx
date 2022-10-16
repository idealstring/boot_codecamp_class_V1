import { Modal } from "antd";
import React, { ChangeEvent, useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { FETCH_BOARD_COMMENTS } from "../../unit/comment/board/commentList/commentList.queries";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import * as S from "../../unit/modal/commentDelete/deleteModal.styles";
import { ICommentDeleteModalProps } from "../../unit/modal/commentDelete/deleteModal.types";
import { CommentFail } from "./commentSuccessFail";
import { DELETE_USEDITEM_QUESTION } from "../../unit/comment/market/commentList/commentList.queries";

export default function MarketCommentDeleteModal(P: ICommentDeleteModalProps) {
  const { id } = P;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteUseditemQuestion] = useMutation(DELETE_USEDITEM_QUESTION);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    deleteMarketCommentFunc();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const deleteMarketCommentFunc = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: id,
        },
        update(chche, { data }) {
          chche.modify({
            fields: {
              fetchUseditemQuestions: (prev, { readField }) => {
                const deletedId = data.deleteUseditemQuestion;
                const filterdPrev = prev.filter(
                  (el) => readField("_id", el) !== deletedId
                );
                return [...filterdPrev];
              },
            },
          });
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: { boardId: router.query.detail, page: 1 },
        //   },
        // ],
      });
    } catch (error) {
      if (error instanceof Error) CommentFail(error.message);
    }
  };

  return (
    <>
      <S.CommentDeleteBtn onClick={showModal}>삭제</S.CommentDeleteBtn>
      <Modal
        title="댓글 삭제"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        okText="예"
        cancelText="아니오"
        okType="danger"
      >
        <S.Wrapper>
          <S.InnerRow>
            <ExclamationCircleOutlined style={{ color: "#b1312d" }} />
            &nbsp;&nbsp;&nbsp;삭제하시면 다시 복구할 수 없습니다. 정말
            삭제하시겠습니까?
          </S.InnerRow>
        </S.Wrapper>
      </Modal>
    </>
  );
}
