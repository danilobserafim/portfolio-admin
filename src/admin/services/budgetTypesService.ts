import axios from "axios";
import type { Budget } from "../types/Budget";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function getbudgetTypes() {
  const { data } = await api.get<Budget[]>("/budget-types");
  return data;
}

export async function getBudgetTypesDetail(id: string) {
  const { data } = await api.get<Budget>(`/budget-types/${id}`);
  return data;
}

export async function deleteBudgetType(id: string) {
  const { data } = await api.delete<Budget>(`/budget-types/${id}`);
  return data;
}
