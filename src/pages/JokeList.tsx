import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Joke from '../components/Jokes/Joke';
import { getJokes } from '../reducks/jokes/selectors';
import { fetchJokes } from '../reducks/jokes/operations';
import { JokeType } from '../reducks/jokes/type';

type JokeListProps = {
  themeId: string;
}

const JokeList = (props: JokeListProps) => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const jokes: JokeType[] = getJokes(selector);

  useEffect(() => {
    dispatch(fetchJokes(props.themeId));
  }, []);

  return (
    <section>
      <ul>
        {/* if文でネストしなければいけない・・・ */}
        { jokes && (
          jokes.length > 0 && (
            (jokes.map((joke: JokeType, index: number) => (
              <Joke
                created_at={joke.created_at}
                handleName={joke.handleName}
                index={index}
                joke={joke.joke}
                jokeId={joke.jokeId}
                key={index.toString()}
                likes={joke.likes}
                themeId={props.themeId}
              />
            )))
          )
        )}
      </ul>  
    </section>
  );
}

export default JokeList;
