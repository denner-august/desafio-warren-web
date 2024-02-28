import { RenderRegistrosProps } from "@/app/types/projectTypes";

export function RenderRegistros({
  RegisterSearch,
  controller,
}: RenderRegistrosProps) {
  return RegisterSearch?.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  ).map(({ id, title, description, amount, status }) => {
    return (
      <tr key={id} onClick={() => controller(id)} role="transactions">
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
