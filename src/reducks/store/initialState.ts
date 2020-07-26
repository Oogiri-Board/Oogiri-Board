import { ThemeType } from '../themes/types';
import { JokeType } from '../jokes/type';

import { FirebaseTimestamp } from '../../firebase/index';
const timestamp = FirebaseTimestamp.now();

const initialState: {
  themes: ThemeType;
  jokes: JokeType;
} = {

  // お題
  themes: {
    created_at: timestamp,
    handleName: "",
    id: "",
    image: {
      id: "",
      path: "",
    },
    theme: "",
  },
  // 回答 if文で親IDで検索を絞り表示しているが・・・
  jokes : {
    created_at: timestamp,
    handleName: "",
    id: "",
    joke: "",
    jokeId: "",
    key: "",
    likes: 0,
    index: 0,
    themeId: "",
  }

};

export default initialState;