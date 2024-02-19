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
