import { Context } from "@/app/context/registerContext";
import { useContext } from "react";

export function HookContext() {
  const { setSearch, setStatus, RegisterSearch, StatusOption, search, status } =
    useContext(Context);

  return {
    setSearch,
    setStatus,
    RegisterSearch,
    StatusOption,
    search,
    status,
  };
}
