import { ContextProps } from "@/app/context/registerContext";
import styles from "./search.module.scss";

export function Search({ setStatus, setSearch, StatusOption }: ContextProps) {
  const StatusList = () => {
    return StatusOption.map((item, id) => {
      return (
        <li onClick={() => setStatus(item)} key={id}>
          {item}
        </li>
      );
    });
  };

  return (
    <div className={styles.Container}>
      <input
        type="search"
        name="Pesquisa"
        autoComplete="true"
        placeholder="pesquise pelo titulo"
        onChange={(e) => setSearch(e.target.value)}
      />

      <details>
        <summary>Status</summary>
        <ul>
          <StatusList />
        </ul>
      </details>
    </div>
  );
}
