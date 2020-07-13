import React from 'react';

type JokeProps = {
  id: number;
  respondentName: string;
  joke: string;
  likes: number;
  key: string;
}

const Joke = (props: JokeProps) => {
  
  return (
    <li className="joke">
      <div className="joke-header">
        <p>お名前: {props.respondentName}</p>
      </div>
      <div className="joke-document">
        <p>回答: {props.joke}</p>
        <p>いいね数: {props.likes}</p>
      </div>
    </li>
  );
}

export default Joke;
