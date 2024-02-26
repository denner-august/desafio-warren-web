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
  });
});

describe("checks component status", () => {
  it("verify name summary Status", () => {
    render(
      <RegisterContextProvider>
        <Setup />
      </RegisterContextProvider>
    );

    const ContainerStatus = screen.getByRole("status");

    expect(ContainerStatus.textContent).toBe("Status");
  });

  it("count status", () => {
    render(
      <RegisterContextProvider>
        <Setup />
      </RegisterContextProvider>
    );
    const StatusOptions = screen.getAllByRole("statusOption");

    expect(StatusOptions.length).toBe(4);
  });

  it("change name summary", () => {
    render(
      <RegisterContextProvider>
        <Setup />
      </RegisterContextProvider>
    );
    const StatusOptions = screen.getAllByRole("statusOption");
    const ContainerStatus = screen.getByRole("status");

    fireEvent.click(ContainerStatus);
    fireEvent.click(StatusOptions[0]);

    expect(ContainerStatus.textContent).toBe("All");
  });
});
