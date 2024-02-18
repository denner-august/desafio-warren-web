import { Header } from "./components/header/header";
import { Main } from "./components/main/main";
import { RegisterContextProvider } from "./context/registerContext";

export default function Home() {
  return (
    <>
      <Header />
      <RegisterContextProvider>
        <Main />
      </RegisterContextProvider>
    </>
  );
}
