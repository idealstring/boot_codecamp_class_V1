import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards(page: 1) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_OF_THE_BEST = gql`
  query {
    fetchBoardsOfTheBest {
      _id
      title
      createdAt
    }
  }
`;
