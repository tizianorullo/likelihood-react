export const RATE_UPDATE = 'RATE_UPDATE'

export function updateRate(rate) {
  return {
    type: RATE_UPDATE,
    payload: rate
  }
}
