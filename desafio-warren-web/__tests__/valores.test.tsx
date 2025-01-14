import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RenderRegistros } from "@/app/components/main/valores/registros/registros";
import { Modal } from "@/app/components/modal/modal";

const Registros = [
  {
    id: "5f89f9f257fe42957bf6dbfd",
    title: "Resgate",
    description: "et labore proident aute nulla",
    status: "created",
    amount: 2078.66,
    date: "2018-12-22",
    from: "Aposentadoria",
    to: "Conta Warren",
  },
  {
    id: "5f89f9f271e4213092bd4e41",
    title: "Depósito",
    description: "excepteur veniam proident irure pariatur",
    status: "created",
    amount: 148856.29,
    date: "2017-07-23",
    from: "Trade",
    to: "Conta Warren",
  },
  {
    id: "5f89f9f2f318e70ff298f528",
    title: "Movimentação interna",
    description: "eu officia laborum labore aute",
    status: "processed",
    amount: 25092.8,
    date: "2016-08-25",
    from: "Férias",
    to: "Trade",
  },
];

describe("counting transaction rendering number", () => {
  it("render transactions", () => {
    render(
      <table>
        <tbody>
          <RenderRegistros controller={() => {}} RegisterSearch={Registros} />
        </tbody>
      </table>
    );

    const table = screen.getAllByRole("transactions");

    expect(table.length).toBe(3);
  });

  it("testing click in register value", () => {
    render(
      <Modal id="5f89f9f257fe42957bf6dbfd" isOpen={true} setOpen={() => {}} />
    );

    const modal = screen.getByRole("modal");

    expect(modal).toBeInTheDocument();
  });
});
