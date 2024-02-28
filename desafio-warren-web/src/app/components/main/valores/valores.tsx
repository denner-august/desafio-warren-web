import Style from "./valores.module.scss";
import { RenderRegistrosProps } from "@/app/types/projectTypes";
import { Modal } from "../../modal/modal";
import { useState } from "react";
import { RenderRegistros } from "./registros/registros";

export function Valores({ RegisterSearch }: Partial<RenderRegistrosProps>) {
  const [modal, setModal] = useState(false);
  const [idRegister, setIdRegister] = useState("");

  function ModalController(id: string) {
    setIdRegister(id);
    setModal(true);
  }

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
          <RenderRegistros
            RegisterSearch={RegisterSearch}
            controller={ModalController}
          />
        </tbody>
      </table>

      <Modal isOpen={modal} setOpen={setModal} id={idRegister} />
    </div>
  );
}
