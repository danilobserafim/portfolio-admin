import type { Budget } from '../types/Budget';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ModalFormAddNewBudgetStatus from './ModalFormAddNewBudgetStatus';
import ModalFormAddNewBudgetType from './ModalFormAddNewBudgetType';

interface Props {
  budgets: Budget[];
}

export function BudgetTable({ budgets }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0.3,
        y: 5,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
    >
      <table className="w-full border-collapse text-sm ">
        <thead>
          <tr className="border-b bg-neutral-50 dark:bg-gray-700 ">
            <th className="text-left p-2">
              <div>
                <p>Nome</p>
              </div>
            </th>
            <th className="text-left p-2 ">
              <ModalFormAddNewBudgetType />
            </th>
            <th className="text-left p-2">
              <p className="flex justify-start items-center-safe">
                <ModalFormAddNewBudgetStatus />
              </p>
            </th>
            <th className="text-left p-2">Ações</th>
          </tr>
        </thead>

        <tbody>
          {budgets.map((b, index: any) => (
            <tr
              key={index}
              className="border-b hover:bg-neutral-50 dark:hover:bg-gray-600"
            >
              <td className="p-2">{b.nome}</td>
              <td className="p-2">{b.type?.value}</td>
              <td className="p-2 dark:text-white">
                <div className={handleBudgetStatusColor(b)}>
                  {b.status?.name}
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
function handleBudgetStatusColor(b: Budget) {
  switch (b.status?.name) {
    case 'Pendente':
      return 'text-[#d11]';
    case 'Em análise':
      return 'text-[#ca0]';
    case 'Concluido':
      return 'text-[#1b1]';
    default:
      return 'text-white';
  }
}
