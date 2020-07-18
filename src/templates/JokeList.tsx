import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Joke } from './index';
import { getJokes } from '../reducks/jokes/selectors';
import { fetchJokes } from '../reducks/jokes/operations';

type JokeListProps = {
  themeId: string;
}

const JokeList = (props: JokeListProps) => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const jokes: any = getJokes(selector);

  useEffect(() => {
    dispatch(fetchJokes(props.themeId));
  }, []);

  return (
    <section>
      <ul>
        {/* if文でネストしなければいけない・・・ */}
        { jokes && (
          jokes.length > 0 && (
            (jokes.map((joke: any, index: number) => (
              <Joke
                key={joke.id}
                jokeId={joke.id}
                handleName={joke.handleName}
                joke={joke.joke}
                likes={joke.likes}
                index={index}
                created_at={joke.created_at}
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
