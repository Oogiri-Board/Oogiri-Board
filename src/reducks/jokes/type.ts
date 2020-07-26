export type JokeType = {
  created_at: firebase.firestore.Timestamp;
  handleName: string;
  id: string;
  joke: string;
  jokeId: string;
  key: string;
  likes: number;
  index: number;
  themeId: string;
}