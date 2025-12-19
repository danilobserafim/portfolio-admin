import { Badge } from "lucide-react";
import type { Budget } from "../types/Budget";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ModalFormAddNewStatus from "./ModalFormAddNewStatus";

interface Props {
  budgets: Budget[];
}


export function BudgetTable({ budgets }: Props) {

  return (
    <motion.div
      initial={{
        opacity:0.3,
        y:5
      }}
      animate={{
        opacity:1,
        y:0
      }}
    >
    <table className="w-full border-collapse text-sm">
      <thead>
        <tr className="border-b bg-neutral-50 dark:bg-zinc-700">
          <th className="text-left p-2">Nome </th>
          <th className="text-left p-2 items-center">
            Serviço 
          </th>
          <th className="text-left p-2 flex gap-4 items-center">
            Status 
            <ModalFormAddNewStatus />
          </th>
          <th className="text-left p-2">Ações</th>
        </tr>
      </thead>

      <tbody>
        {budgets.map((b,index:any) => (
          <tr key={index} className="border-b hover:bg-neutral-50 dark:hover:bg-zinc-600">
            <td className="p-2">{b.nome}</td>
            <td className="p-2">{b.type?.value}</td>
            <td className="p-2 dark:text-white">
              <div className="flex items-center gap-2">
                <Badge color={handleBudgetIconColor(b)}></Badge>
                <p>
                  {b.status?.name}
                </p>
              </div>
            </td>
            <td className="p-2">
              <Link
                to={'/admin/budgets/' + b.id}
                className="text-neutral-900 dark:text-white"
              >
                Ver
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </motion.div>
  );
}
function handleBudgetIconColor(b:Budget) {
  switch (b.status?.name) {
    case "Pendente":
      return "red"
    case "Em análise":
        return "yelow"
    case "Concluído":
      return "green"
    default:
      return "white"
  }
}

