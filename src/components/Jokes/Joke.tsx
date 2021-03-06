import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { getJokes } from '../../reducks/jokes/selectors';
import {getCreatedDate} from '../../functions/index';
import { incrementLikes } from '../../reducks/jokes/operations';

// propsで受け取る？reduxの値を参照する？DBから取得する？
type JokeProps = {
  created_at: firebase.firestore.Timestamp;
  handleName: string;
  index: number;
  joke: string;
  jokeId: string;
  key: string;
  likes: number;
  themeId: string;
}

const Joke = (props: JokeProps) => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  // prposで受け取った回答だと動かない？
  const jokes: any = getJokes(selector);
  const [likes, setLikes] = useState(props.likes);

  const time: Date = props.created_at.toDate();
  const created = getCreatedDate(time);

  useEffect(() => {
    console.log(`likes: ${likes}`)
    dispatch(incrementLikes(props.themeId, props.jokeId, likes));
  }, [likes]);
  
  return (
    <section>
      { jokes && (
        <li className="joke">
          <div className="joke-header">
            <p>回答者: {props.handleName}</p>
            <p>{created}</p>
          </div>

          <div className="spacing-small"></div>

          <div className="joke-document">
            <p>{props.joke}</p>
          </div>
          
          <div className="spacing-small"></div>

          <div className="joke-likes">
            <IconButton
              onClick={() => setLikes(likes + 1)}
            >
              <label>
                <StarBorderIcon />
              </label>
            </IconButton>

            <p>いいね数: {likes}</p>
          </div>
        </li>
      )}
    </section>
  );
}

export default Joke;