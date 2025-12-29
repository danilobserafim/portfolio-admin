import axios from 'axios';
import type { Status } from '../types/Status';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
});

export async function postbudgetStatus(status: Status) {
  const { data } = await api.post('/budget-status', status);
  return data;
}

export async function getBudgetStatus() {
  const { data } = await api.get<Status[]>('/budget-status');
  return data;
}

export async function getBudgetStatusDetail(id: string) {
  const { data } = await api.get<Status>(`/budget-status/${id}`);
  return data;
}

export async function deleteBudgetStatus(id: string) {
  const { data } = await api.delete<Status>(`/budget-status/${id}`);
  return data;
}
