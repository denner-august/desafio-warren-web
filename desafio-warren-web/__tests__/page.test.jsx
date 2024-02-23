import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "../src/app/components/header/header";

describe("testando jest", () => {
  it("renders a heading", () => {
    render(<Header />);

    const heading = screen.getByRole("heading");
    const logo = screen.getByRole("logo");

    expect(heading && logo).toBeInTheDocument();
  });
});
