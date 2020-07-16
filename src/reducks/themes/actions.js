export const FETCH_THEMES = "FETCH_THEMES";
export const fetchThemesAction = (themes) => {
  return {
    type: FETCH_THEMES,
    payload: themes
  }
};
