import { useQuery } from '@tanstack/react-query';
import { getBudgets } from '../services/budgetsService';

export function useBudgets() {
  return useQuery({
    queryKey: ['budgets'],
    queryFn: getBudgets,
  });
}
