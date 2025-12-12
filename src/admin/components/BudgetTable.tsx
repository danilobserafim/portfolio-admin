import { Badge } from "lucide-react";
import type { Budget } from "../types/Budget";

interface Props {
  budgets: Budget[];
  onSelect: (id: string) => void;
}

export function BudgetTable({ budgets, onSelect }: Props) {
  return (
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b bg-neutral-50">
          <th className="text-left p-2">Nome</th>
          <th className="text-left p-2">Serviço</th>
          <th className="text-left p-2">Data</th>
          <th className="text-left p-2">Status</th>
          <th className="text-left p-2">Ações</th>
        </tr>
      </thead>

      <tbody>
        {budgets.map((b) => (
          <tr key={b.id} className="border-b hover:bg-neutral-50">
            <td className="p-2">{b.nome}</td>
            <td className="p-2">{b.service}</td>
            <td className="p-2">
              {new Date(b.createdAt).toLocaleDateString("pt-BR")}
            </td>
            <td className="p-2">
              <Badge>{formatStatus(b.status)}</Badge>
            </td>
            <td className="p-2">
              <button
                onClick={() => onSelect(b.id)}
                className="text-neutral-900 underline"
              >
                Ver
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function formatStatus(status: string) {
  switch (status) {
    case "pending":
      return "Pendente";
    case "in_review":
      return "Em análise";
    case "done":
      return "Concluído";
    default:
      return status;
  }
}

function getStatusVariant(status: string) {
  switch (status) {
    case "pending":
      return "secondary";
    case "in_review":
      return "default";
    case "done":
      return "outline";
    default:
      return "outline";
  }
}
