import type { Status } from './Status';

export interface Budget {
  id?: string;
  nome: string;
  email: string;
  descricao: string;
  statusId?: string;
  status?: Status;
  typeId?: string;
  type?: {
    id: string;
    value: string;
    description: string;
  };
}
