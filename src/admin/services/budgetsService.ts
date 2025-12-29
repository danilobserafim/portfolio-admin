import axios from 'axios';
import type { Budget } from '../types/Budget';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function getBudgets() {
  const { data } = await api.get<Budget[]>('/budgets');
  return data;
}
export async function getBudgetsLike(search: string) {
  const { data } = await api.get<Budget[]>(`/budgets/like/${search}`);
  return data;
}
export async function updateBudgetStatus(id: string, statusId: string) {
  const { data } = await api.patch<any>(`/budgets/status/${id}`, {
    statusId: statusId,
  });
  return data;
}

export async function getBudgetDetails(id: string) {
  const { data } = await api.get<Budget>(`/budgets/${id}`);
  return data;
}

export async function deleteBudget(id: string) {
  const { data } = await api.delete<Budget>(`/budgets/${id}`);
  return data;
}
