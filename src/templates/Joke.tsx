import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

type JokeProps = {
  key: string
  jokeId: string;
  handleName: string;
  joke: string;
  likes: number;
}

const Joke = (props: JokeProps) => {
  
  return (
    <li className="joke">
      <div className="joke-header">
        <p>{props.handleName}</p>
        <p>{"7/14 20:00"}</p>
      </div>

      <div className="spacing-small"></div>

      <div className="joke-document">
        <p>{props.joke}</p>
      </div>
      
      <div className="spacing-small"></div>

      <div className="joke-likes">
        <IconButton >
          <label>
            <StarBorderIcon />
          </label>
        </IconButton>

        <p>いいね数: {props.likes}</p>
      </div>
    </li>
  );
}

export default Joke;
