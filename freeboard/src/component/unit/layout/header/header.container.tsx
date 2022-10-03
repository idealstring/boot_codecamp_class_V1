import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../../commons/types/generated/types";
import HeaderPresenter from "./header.presenter";
import { FETCH_USER_LOGGED_IN } from "./header.queries";
import { IHeaderContainerProps } from "./header.types";

export default function HeaderContainer(P: IHeaderContainerProps) {
  const { onClickIsNav } = P;
  const router = useRouter();
  const { data: fetchLoggedData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickRegister = () => {
    router.push("/users/new");
  };

  const onClickSignIn = () => {
    router.push("/users/signIn");
  };

  const onClickMyPage = async () => {
    await router.push(`/users/${fetchLoggedData?.fetchUserLoggedIn._id}`);
  };

  return (
    <>
      <HeaderPresenter
        onClickIsNav={onClickIsNav}
        onClickLogo={onClickLogo}
        onClickRegister={onClickRegister}
        onClickSignIn={onClickSignIn}
        onClickMyPage={onClickMyPage}
      />
    </>
  );
}
