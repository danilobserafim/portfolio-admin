import axios from "axios";
import type { Budget } from "../types/Budget";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function getBudgets() {
  const { data } = await api.get<Budget[]>("/budgets");
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
