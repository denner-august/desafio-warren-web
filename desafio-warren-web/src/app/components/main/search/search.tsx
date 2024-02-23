import { ContextProps } from "@/app/types/projectTypes";
import styles from "./search.module.scss";
import { useState } from "react";

export function Search({ setStatus, setSearch, StatusOption }: ContextProps) {
  const [currentStatus, SetCurrentStatus] = useState("Status");

  function ReadStatus(status: string) {
    setStatus(status);
    let currentStatus = StatusOption.find((item) => item === status);
    if (currentStatus) {
      SetCurrentStatus(currentStatus);
      return;
    }
    SetCurrentStatus("Status");
  }

  const StatusList = () => {
    return StatusOption.map((item, id) => {
      return (
        <li onClick={() => ReadStatus(item)} key={id}>
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
        <summary>{currentStatus}</summary>
        <ul>
          <StatusList />
        </ul>
      </details>
    </div>
  );
}
