import styles from "./slider.module.scss";

interface SliderProps {
  openTransactions: any;
}

export function Slider({ openTransactions }: SliderProps) {
  return (
    <div className={styles.Container}>
      <input type="range" min={0} max={10} defaultValue={openTransactions} />

      <datalist className={styles.datalist}>
        <option value="0" label="created"></option>
        <option value="5" label="meio"></option>
        <option value="10" label="processed"></option>
      </datalist>
    </div>
  );
}
