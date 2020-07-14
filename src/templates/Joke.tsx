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
        <p>{props.respondentName}</p>
        <p>{"7/14 20:00"}</p>
      </div>

      <div className="spacing-small"></div>

      <div className="joke-document">
        <p>{props.joke}</p>
      </div>
      
      <div className="spacing-small"></div>

      <div className="joke-likes">
        <p>♡</p>
        <p>いいね数: {props.likes}</p>
      </div>
    </li>
  );
}

export default Joke;
