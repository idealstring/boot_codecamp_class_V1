import BoardDetailPresenter from "./boardsDetail.presenter";
import { useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  FETCH_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
  DELETE_BOARD,
} from "./boardsDetail.queries";
import { useState } from "react";

export default function BoardDetailContainer() {
  const router = useRouter();
  const [modal, setModal] = useState({ link: false, map: false });
  const [likeUp] = useMutation(LIKE_BOARD);
  const [dislikeUp] = useMutation(DISLIKE_BOARD);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detail,
    },
  });

  const onRolloverLinkModal = () => {
    setModal((modal) => {
      return { ...modal, link: !modal.link };
    });
  };
  const onRolloverMapModal = () => {
    setModal((modal) => {
      return { ...modal, map: !modal.map };
    });
  };
  const onClickLikeBtn = async () => {
    try {
      await likeUp({
        variables: {
          boardId: router.query.detail,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.detail,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const onClickDislikeBtn = async () => {
    try {
      await dislikeUp({
        variables: {
          boardId: router.query.detail,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: {
              boardId: router.query.detail,
            },
          },
        ],
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickDeleteBtn = async () => {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.detail,
        },
      });
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToList = () => {
    router.push("/boards");
  };
  const onClickMoveToEdit = () => {
    router.push(`/boards/${router.query.detail}/edit`);
  };

  return (
    <BoardDetailPresenter
      data={data}
      onRolloverLinkModal={onRolloverLinkModal}
      onRolloverMapModal={onRolloverMapModal}
      modal={modal}
      onClickLikeBtn={onClickLikeBtn}
      onClickDislikeBtn={onClickDislikeBtn}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickDeleteBtn={onClickDeleteBtn}
    />
  );
}
