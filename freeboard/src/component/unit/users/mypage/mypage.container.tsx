import { useMutation, useQuery } from "@apollo/client";
import MyPagePresenter from "./myPage.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./myPage.queries";
import { IQuery } from "../../../../commons/types/generated/types";
import useAuth from "../../../commons/hooks/useAuth";
import { useRouter } from "next/router";

function MyPageContainer() {
  useAuth();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const router = useRouter();

  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    // logoutUser({ variables: {} });
    router.reload();
    // router.push("/")
  };
  return (
    <>
      <MyPagePresenter
        fetchLoggedData={fetchLoggedData}
        onClickLogOut={onClickLogOut}
      />
    </>
  );
}

export default MyPageContainer;
