type InitialStateObj = {
  themes: {
    handleName: string;
    id: string;
    theme: string;
    img: string;
    jokes: {
      handleName: string;
      jokeId: number;
      joke: string;
      likes: number;
    }
  },
  jokes: {
    handleName: string;
    joke: string;
    id: string;
    likes: number;
  }
}

const initialState: InitialStateObj = {
  // 複数のお題とそれらの子(回答)
  themes: {
    handleName: '',
    id: "",
    img: '',
    theme: '',
    jokes: {
      handleName: '',
      jokeId: 0,
      joke: '',
      likes: 0
    },
  },
  jokes : {
    handleName: '',
    joke: '',
    id: "",
    likes: 0,
  }

};

export default initialState;