import React, { useEffect, useState } from 'react';
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

  console.log("オペレーションに渡すテーマIDは");
  console.log(props.themeId);
  
  useEffect(() => {
    dispatch(fetchJokes(props.themeId));
  }, []);

  if (jokes) {
    console.log(JSON.stringify(jokes));
  }

  return (
    <section>
      <ul>
        {/* if文でネストしなければいけない・・・ */}
        { jokes && (
          jokes.length > 0 && (
            (jokes.map((joke: any) => (
              <Joke
                key={joke.id}
                jokeId={joke.id}
                handleName={joke.handleName}
                joke={joke.joke}
                likes={0}
              />
            )))
          )
        )}
      </ul>  
    </section>
  );
}

export default JokeList;
