import styles from "./slider.module.scss";

interface SliderProps {
  openTransactions?: string;
}

interface transactionsNumberProps {
  [key: string]: number;
}
export function Slider({ openTransactions }: SliderProps) {
  const transactionsNumber: transactionsNumberProps = {
    created: 0,
    processed: 5,
    concluded: 10,
  };

  if (openTransactions) {
    return (
      <div className={styles.Container}>
        <input
          disabled
          type="range"
          min={0}
          max={10}
          defaultValue={transactionsNumber[openTransactions]}
        />

        <datalist className={styles.datalist}>
          <option value="0" label="created"></option>
          <option value="5" label="processed"></option>
          <option value="10" label="concluded"></option>
        </datalist>
      </div>
    );
  }
}
