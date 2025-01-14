import { ContextProps } from "@/app/types/projectTypes";
import styles from "./search.module.scss";
import { useState } from "react";

export function Search({
  setStatus,
  setSearch,
  StatusOption,
  search,
}: ContextProps) {
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
        <li role="statusOption" onClick={() => ReadStatus(item)} key={id}>
          {item}
        </li>
      );
    });
  };

  return (
    <div className={styles.Container}>
      <input
        aria-label="pesquisa"
        type="search"
        name="Pesquisa"
        autoComplete="true"
        placeholder="pesquise pelo titulo"
        onChange={(e) => setSearch(e.target.value)}
        value={String(search)}
      />

      <details>
        <summary role="status">{currentStatus}</summary>
        <ul>
          <StatusList />
        </ul>
      </details>
    </div>
  );
}
