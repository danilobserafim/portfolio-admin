import type { Budget } from './Budget';

export interface Type {
  id?: string;
  value: string;
  description: string;
  budgets?: Budget[];
}
