import { useEffect, useState } from 'react';
import {
  getBudgetStatus,
  getBudgetStatusDetail,
} from '../services/budgetStatusService';
import type { Budget } from '../types/Budget';
import { AnimatePresence, motion } from 'framer-motion';
import { getBudgets, getBudgetsLike } from '../services/budgetsService';
import type { Status } from '../types/Status';
import { Plus, RefreshCcwIcon, SidebarClose } from 'lucide-react';

interface Props {
  budgets: Budget[];
  setBudgets: (budgets: Budget[]) => void;
}
export function BudgetFilters({ setBudgets }: Props) {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [statusList, setstatusList] = useState<Status[] | null>();

  useEffect(() => {
    handleGetStatus();
  }, []);

  useEffect(() => {
    handleFilterByStatus(status);
  }, [status]);

  useEffect(() => {
    handleFilterBySearch(search);
  }, [search]);

  return (
    <AnimatePresence>
      <motion.div
        className="flex items-center gap-4 mb-4 w-full"
        initial={{
          opacity: 0.5,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <button onClick={reloadBudgets} className="cursor-pointer">
          <RefreshCcwIcon />
        </button>
        <div className="flex-1 flex-nowrap flex relative">
          <input
            type="text"
            placeholder="Buscar por nome ou email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded flex-1 "
          />
          {search && (
            <motion.button
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.5 }}
              className="absolute right-px top-px p-2 bg-gray-700 rounded cursor-pointer"
              onClick={() => setSearch('')}
            >
              <Plus className="rotate-45" />
            </motion.button>
          )}
        </div>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="p-2 rounded dark:bg-gray-800 border"
        >
          <optgroup className="dark:bg-gray-700" label="Status">
            <option defaultValue={''} value="default">
              Tudo
            </option>
            {statusList &&
              statusList.map((stat) => (
                <option key={stat.id} value={stat.id}>
                  {stat.name}
                </option>
              ))}
          </optgroup>
        </select>
      </motion.div>
    </AnimatePresence>
  );

  async function handleGetStatus() {
    setstatusList(await getBudgetStatus());
  }

  async function handleFilterByStatus(id: string) {
    if (status === 'default') {
      setBudgets(await getBudgets());
    } else {
      const response = await getBudgetStatusDetail(id);
      setBudgets(response.budgets ?? []);
    }
  }

  async function handleFilterBySearch(search: string) {
    if (search === '') {
      setBudgets(await getBudgets());
    } else {
      const response = await getBudgetsLike(search);
      setBudgets(response);
    }
  }

  async function reloadBudgets() {
    setBudgets(await getBudgets());
    setStatus('default');
  }
}
