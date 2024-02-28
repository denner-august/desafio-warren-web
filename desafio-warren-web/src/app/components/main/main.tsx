"use client";
import styles from "./main.module.scss";
import { Search } from "./search/search";
import { Valores } from "./valores/valores";
import { HookContext } from "../../../../hook/context";

export function Main() {
  const { setSearch, setStatus, RegisterSearch, StatusOption, search } =
    HookContext();

  return (
    <main className={styles.Container}>
      <Search
        setSearch={setSearch}
        setStatus={setStatus}
        StatusOption={StatusOption}
        search={search}
      />
      <Valores RegisterSearch={RegisterSearch} />
    </main>
  );
}
