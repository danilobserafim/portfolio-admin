export interface Budget {
  id: string;
  nome: string;
  email: string;
  phone?: string;
  service: string;
  message?: string;
  createdAt: string;
  status: "pending" | "in_review" | "done";
  tipoProjeto: string;
  type?: {
    id: string;
    value: string;
    description: string;
  };
  typeId?: string;
}
