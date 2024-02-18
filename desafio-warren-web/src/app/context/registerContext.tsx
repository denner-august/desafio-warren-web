"use client";
import { ReactNode, createContext, useEffect, useState } from "react";
import registros from "@/../registros.json";

export interface registroProps {
  id: string;
  title: string;
  description: string;
  status: string;
  amount: number;
  from: string;
  to: string;
}

export interface ContextProps {
  search?: String;
  status?: string;
  RegisterSearch?: registroProps[];

  StatusOption: string[];

  setSearch: (e: string) => void;
  setStatus: (e: string) => void;
}

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
