import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHandleName, getTheme } from '../reducks/themes/selectors';
import { Joke } from './index';
import IconButton from '@material-ui/core/IconButton';
import DetailsIcon from '@material-ui/icons/Details';
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

export type ThemeProps = {
  handleName: string;
  index: number;
  id: number;
  jokes: string | number | any;   // ﾆｹﾞﾁｬﾀﾞﾒﾀﾞ
  key: string;
  theme: string;
}

const Theme = (props: ThemeProps) => {

  const [isDisplayMore, setIsDisplayMore] = useState<boolean>(false); 
  console.log(`theme: ${props.theme}`);
  console.log(`id: ${props.id}`);
  console.log(`jokes: ${props.jokes[props.id].joke}`);
  
  return (
    <li className="contents">
      <div className="theme">

        <div className="theme-header">
          <p>お名前:{props.handleName}</p>
        </div>
        <div className="theme-document">
          <p>お題:{props.theme}</p>
      </div>

      {/* ボタン押下ごとに一覧表示ボタンを変える */}
      <div className="displaySwitch">
        { isDisplayMore ? (
          <IconButton onClick={() => setIsDisplayMore(!isDisplayMore)}>
          <label>
            {/* 下向き▽ */}
            <DetailsIcon />
          </label>
        </IconButton>
        ) : (
          <IconButton onClick={() => setIsDisplayMore(!isDisplayMore)}>
          <label>
            {/* 上向き△ */}
            <ChangeHistoryIcon />
          </label>
        </IconButton>
        )}
      </div>

        {/* 一覧表示ON時のみ回答一覧を表示 */}
        { isDisplayMore && (
        <ul className="joke-list">
          { props.jokes.map((joke: any, index: number) => {
            console.log("表示");
            
            return (
              <Joke
                likes={joke.likes}
                joke={joke.joke}
                id={joke.id}
                key={index.toString()}
                respondentName={joke.respondentName}
              />
            );
          })}
        </ul>
        )}
      </div>
    </li>
  );
}

export default Theme;
