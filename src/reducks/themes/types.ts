export type ThemeType = {
  created_at: firebase.firestore.Timestamp;
  handleName: string;
  id: string;
  image: {
    id: string;
    path: string;
  }
  theme: string;
};

