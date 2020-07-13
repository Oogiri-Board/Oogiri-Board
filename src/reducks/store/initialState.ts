const initialState = {
  jokes: [{
    handleName: '',
    id: 0,
    isDisplay: true,
    joke: '',
    likes: 0
  }],

  // 複数のお題とそれらの子(回答)
  themes: [{
    handleName: '',
    id: 0,
    isDisplay: true,
    theme: '',
    // jokes: [{
    //   respondentName: '',
    //   jokeId: 0,
    //   isDisplay: true,
    //   joke: '',
    //   likes: 0
    // }],
  }],

};

export default initialState;