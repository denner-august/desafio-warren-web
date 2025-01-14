export interface registroProps {
  id: string;
  title: string;
  description: string;
  status: string;
  amount: number;
  from: string;
  to: string;
  date: string;
}

export interface ContextProps {
  search?: String;
  status?: string;
  RegisterSearch?: registroProps[];

  StatusOption: string[];

  setSearch: (e: string) => void;
  setStatus: (e: string) => void;
}

export interface RenderRegistrosProps {
  RegisterSearch?: registroProps[];
  controller: (id: string) => void;
}
