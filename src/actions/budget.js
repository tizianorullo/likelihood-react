export const BUDGET_UPDATE = 'BUDGET_UPDATE'

export function updateBudget(budget) {
  return {
    type: BUDGET_UPDATE,
    payload: budget
  }
}
