import { useQuery } from "@apollo/client";
import MyPagePresenter from "./myPage.presenter";
import { FETCH_USER_LOGGED_IN } from "./myPage.queries";
import { IQuery } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks/useAuth";

function MyPageContainer() {
  useAuth();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <MyPagePresenter fetchLoggedData={fetchLoggedData} />
    </>
  );
}

export default MyPageContainer;
