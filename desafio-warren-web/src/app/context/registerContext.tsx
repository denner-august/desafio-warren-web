"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import registros from "@/../registros.json";
import { ContextProps } from "../types/projectTypes";

interface childrenPros {
  children: ReactNode;
}

export const Context = createContext({} as ContextProps);

export function RegisterContextProvider({ children }: childrenPros) {
  const StatusOption = ["created", "processed", "concluded"];

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("concluded");

  let registerFilter = registros;

  let RegisterSearch = registerFilter.filter((item) => {
    if (status === "concluded") {
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
