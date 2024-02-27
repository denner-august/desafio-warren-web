import Image from "next/image";
import logo from "@/../public/icons/budget.png";

import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { RegisterContextProvider } from "./context/registerContext";

export default function Home() {
  return (
    <>
      <Header>
        <Image
          role="logo"
          priority
          src={logo}
          width={75}
          height={75}
          alt="logo"
          blurDataURL={"@/../public/icons/budget.png"}
        />
      </Header>
      <RegisterContextProvider>
        <Main />
      </RegisterContextProvider>
    </>
  );
}
