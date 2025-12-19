export interface Budget {
  id?: string;
  nome: string;
  email: string;
  descricao: string;
  statusId?: string;
  status?: {
    id?: string,
    name: string,
    description: string
  }
  typeId?: string;
  type?: {
    id: string;
    value: string;
    description: string;
  };
}
