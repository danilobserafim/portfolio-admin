import axios from 'axios';
import type { Budget } from '../types/Budget';
import type { Type } from '../types/type';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function postbudgetType(type: Type) {
  const { data } = await api.post('/budget-types', type);
  return data;
}
export async function getbudgetTypes() {
  const { data } = await api.get<Budget[]>('/budget-types');
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
