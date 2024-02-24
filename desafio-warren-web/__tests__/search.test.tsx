import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../src/app/components/main/search/search";
import { useContext } from "react";
import {
  Context,
  RegisterContextProvider,
} from "@/app/context/registerContext";

const Setup = () => {
  const { search, setSearch, setStatus, StatusOption } = useContext(Context);

  return (
    <Search
      StatusOption={StatusOption}
      search={search}
      setSearch={setSearch}
      setStatus={setStatus}
    />
  );
};

describe("change value input search", () => {
  it("change value input search", () => {
    render(
      <RegisterContextProvider>
        <Setup />
      </RegisterContextProvider>
    );

    const input: HTMLInputElement = screen.getByRole("searchbox", {
      name: /pesquisa/i,
    });

    fireEvent.change(input, { target: { value: "Registro" } });

    expect(input.value).toBe("Registro");

    // screen.logTestingPlaygroundURL();
  });
});
