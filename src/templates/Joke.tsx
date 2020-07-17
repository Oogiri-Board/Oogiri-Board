import React from 'react';
import { useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getJokes } from '../reducks/jokes/selectors';

type JokeProps = {
  key: string
  jokeId: string;
  handleName: string;
  joke: string;
  likes: number;
  index: number;
}

const Joke = (props: JokeProps) => {

  const selector = useSelector((state) => state);

  const jokes: any = getJokes(selector);

  const joke = jokes.find((value: any) => {
    return value.jikeId === props.jokeId
  });
  
  if (jokes) {
    console.log(joke);
    console.log(JSON.stringify(jokes));

  }
  console.log(`indx: ${props.index}`);

  
  return (
    <section>
      { jokes && (
        <li className="joke">
          <div className="joke-header">
            <p>{jokes[props.index].handleName}</p>
            <p>{"7/14 20:00"}</p>
          </div>

          <div className="spacing-small"></div>

          <div className="joke-document">
            <p>{jokes[props.index].joke}</p>
          </div>
          
          <div className="spacing-small"></div>

          <div className="joke-likes">
            <IconButton >
              <label>
                <StarBorderIcon />
              </label>
            </IconButton>

            <p>いいね数: {jokes[props.index].likes}</p>
          </div>
        </li>
      )}
    </section>
  );
}

export default Joke;