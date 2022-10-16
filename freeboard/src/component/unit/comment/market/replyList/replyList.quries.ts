import { gql } from "@apollo/client";

export const FETCH_USEDITEM_QUESTION_ANSWERS = gql`
  query fetchUseditemQuestionAnswers($useditemQuestionId: ID!, $page: Int) {
    fetchUseditemQuestionAnswers(
      useditemQuestionId: $useditemQuestionId
      page: $page
    ) {
      _id
      contents
      #   useditemQuestion
      user {
        name
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
    }
  }
`;
