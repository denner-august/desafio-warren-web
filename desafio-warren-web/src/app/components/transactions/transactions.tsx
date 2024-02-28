import styles from "./transactions.module.scss";

interface TransactionsProps {
  title: string;
  from?: string;
  amount?: number;
}

export function Transactions({ title, from, amount = 0 }: TransactionsProps) {
  return (
    <section className={styles.Container}>
      <article>
        <p>{title}</p>
        <ul>
          <span>{from}</span>
          <span>
            {amount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </ul>
      </article>
    </section>
  );
}
