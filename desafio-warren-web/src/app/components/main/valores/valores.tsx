import { registroProps, ContextProps } from "@/app/context/registerContext";
import Style from "./valores.module.scss";

export function Valores({ RegisterSearch }: Partial<ContextProps>) {
  const RenderRegistros = () => {
    return RegisterSearch?.map(({ id, title, description, amount, status }) => {
      return (
        <tr key={id} className={Style.Registros}>
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
    </div>
  );
}
