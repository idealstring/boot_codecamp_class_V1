import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchPointTransactionsArgs,
} from "../../../../commons/types/generated/types";
import MyPagePresenter from "./myPage.presenter";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      userPoint {
        amount
      }
    }
  }
`;

const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      impUid
      amount
      balance
      status
      statusDetail
      # useditem
      user {
        userPoint {
          amount
        }
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

function MyPageContainer() {
  const { data: fetchPointTransactions } = useQuery<
    Pick<IQuery, "fetchPointTransactions">,
    IQueryFetchPointTransactionsArgs
  >(FETCH_POINT_TRANSACTIONS, { variables: { search: "", page: 1 } });
  const { data: fetchUserLoggedIn } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  return (
    <>
      <MyPagePresenter
        fetchUserLoggedIn={fetchUserLoggedIn}
        fetchPointTransactions={fetchPointTransactions}
      />
    </>
  );
}

export default MyPageContainer;
