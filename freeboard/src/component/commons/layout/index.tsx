import { useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Navigation from "./navigation";

type ILayoutP = {
  children: JSX.Element;
};

export default function Layout(props: ILayoutP) {
  const [isNav, setIsNav] = useState(false);

  const onClickIsNav = () => {
    setIsNav((isNav) => !isNav);
  };

  return (
    <>
      <Header onClickIsNav={onClickIsNav} />
      <Navigation isNav={isNav} />
      {props.children}
      <Footer />
    </>
  );
}
