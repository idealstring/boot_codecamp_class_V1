import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import MyPagePresenter from "./myPage.presenter";
import { FETCH_USER_LOGGED_IN } from "./myPage.queries";

export default function MyPageContainer() {
  const router = useRouter();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  return (
    <>
      <MyPagePresenter fetchLoggedData={fetchLoggedData} />
    </>
  );
}
