"use client";
import { useContext } from "react";
import styles from "./main.module.scss";
import { Search } from "./search/search";
import { Valores } from "./valores/valores";
import { Context } from "@/app/context/registerContext";

export function Main() {
  const { setSearch, setStatus, RegisterSearch, StatusOption, search } =
    useContext(Context);

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
