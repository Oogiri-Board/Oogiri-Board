type JokesProps = {
  type: string,

  jokes: [{
    handleName: string;
    id: number,
    isDisplay: boolean,
    joke: string,
    likes: number
  }],
}

export default JokesProps;