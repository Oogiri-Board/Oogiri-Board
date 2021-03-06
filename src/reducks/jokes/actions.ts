export const FETCH_JOKES = "FETCH_JOKES";
export const fetchJokesAction = (jokes: firebase.firestore.DocumentData) => {
  return {
    type: FETCH_JOKES,
    payload: jokes
  }
}
export const INCREMENT_LIKES = "INCREMENT_LIKES";
export const incrementLikesAction = (jokes: any) => {
  return {
    type: INCREMENT_LIKES,
    payload: jokes
  }
}