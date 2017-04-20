export const NAME_UPDATE = 'NAME_UPDATE'

export function updateName(name) {
  return {
    type: NAME_UPDATE,
    payload: name
  }
}
