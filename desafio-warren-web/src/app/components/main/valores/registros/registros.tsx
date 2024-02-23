import { RenderRegistrosProps, registroProps } from "@/app/types/projectTypes";

export function RenderRegistros({
  RegisterSearch,
  controller,
}: RenderRegistrosProps) {
  return RegisterSearch?.map(({ id, title, description, amount, status }) => {
    return (
      <tr key={id} onClick={() => controller(id)}>
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
}
