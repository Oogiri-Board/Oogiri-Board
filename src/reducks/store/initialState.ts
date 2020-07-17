type InitialStateObj = {
  themes: {
    handleName: string;
    id: string;
    theme: string;
    img: string;
    // jokes: {
    //   handleName: string;
    //   jokeId: number;
    //   joke: string;
    //   likes: number;
    // }
  },
  jokes: {
    handleName: string;
    joke: string;
    id: string;
    likes: number;
    themeId: "",
  }
}

const initialState: InitialStateObj = {
  // 複数のお題とそれらの子(回答)
  themes: {
    handleName: '',
    id: "",
    img: '',
    theme: '',
    // jokes: {
    //   handleName: '',
    //   jokeId: 0,
    //   joke: '',
    //   likes: 0
    // },
  },
  // 回答 if文で親IDで検索を絞り表示しているが・・・
  jokes : {
    handleName: '',
    joke: '',
    id: "",
    likes: 0,
    themeId: "",
  }

};

export default initialState;