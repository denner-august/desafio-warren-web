"use client";
import { ReactNode, createContext, useState } from "react";
import registros from "@/../registro/registros.json";
import { ContextProps } from "../types/projectTypes";

interface childrenPros {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function RegisterContextProvider({ children }: childrenPros) {
  const StatusOption = ["All", "created", "processed", "concluded"];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");

  let registerFilter = registros;

  let RegisterSearch = registerFilter.filter((item) => {
    if (status === "All") {
      return (
        item.title.toLowerCase().indexOf(String(search?.toLowerCase())) > -1
      );
    }

    return (
      item.status === status &&
      item.title.toLowerCase().indexOf(String(search?.toLowerCase())) > -1
    );
  });

  return (
    <Context.Provider
      value={{
        search,
        status,
        RegisterSearch,
        setSearch,
        setStatus,
        StatusOption,
      }}
    >
      {children}
    </Context.Provider>
  );
}
