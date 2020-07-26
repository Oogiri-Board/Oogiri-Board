export const FETCH_THEMES = "FETCH_THEMES";
export const fetchThemesAction = (themes: firebase.firestore.DocumentData) => {
  return {
    type: FETCH_THEMES,
    payload: themes
  }
};
