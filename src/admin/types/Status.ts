import type { Budget } from "./Budget";

export interface Status {
    id?: string,
    name: string,
    description: string,
    budgets?: Budget[]
}