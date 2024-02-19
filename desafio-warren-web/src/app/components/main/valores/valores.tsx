import { ContextProps } from "@/app/types/projectTypes";
import Style from "./valores.module.scss";
import { Modal } from "../../modal/modal";
import { useState } from "react";

export function Valores({ RegisterSearch }: Partial<ContextProps>) {
  const [modal, setModal] = useState(false);
  const [idRegister, setIdRegister] = useState("");

  function ModalController(id: string) {
    setIdRegister(id);
    setModal(true);
  }

  const RenderRegistros = () => {
    return RegisterSearch?.map(({ id, title, description, amount, status }) => {
      return (
        <tr key={id} onClick={() => ModalController(id)}>
          <td>{title}</td>
          <td>{description}</td>
          <td>{status}</td>
          <td>
            {amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={Style.Container}>
      <table>
        <thead>
          <tr className={Style.Titulos}>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          <RenderRegistros />
        </tbody>
      </table>

      <Modal isOpen={modal} setOpen={setModal} id={idRegister} />
    </div>
  );
}
