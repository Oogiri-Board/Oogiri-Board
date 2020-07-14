type InitialStateObj = {
  themes: {
    handleName: string;
    id: number;
    theme: string;
    img?: string;
    jokes: {
        respondentName: string;
        jokeId: number;
        joke: string;
        likes: number;
    }[];
  }[]
}

const initialState: InitialStateObj = {
  // 複数のお題とそれらの子(回答)
  themes: [{
    handleName: '',
    id: 0,
    theme: '',
    jokes: [{
      respondentName: '',
      jokeId: 0,
      joke: '',
      likes: 0
    }],
  }],

};

export default initialState;