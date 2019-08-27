/*
export function someGetter (state) {
}
*/
export const isAuthenticated = (state) => {
  return !!state.user
}
export const token = (state) => {
  if (state.user == null) {
    return state.user
  } else {
    return state.user.token
  }
}
