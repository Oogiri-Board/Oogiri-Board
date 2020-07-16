export const FETCH_JOKES = "FETCH_JOKES";
export const fetchJokesAction = (jokes) => {
  return {
    type: FETCH_JOKES,
    payload: jokes
  }
}