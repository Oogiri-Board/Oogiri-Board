import React, {useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHandleName, getThemes } from '../reducks/themes/selectors';
import { Joke } from './index';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateIcon from '@material-ui/icons/Create';

export type ThemeProps = {
  handleName: string;
  index: number;
  id: number;
  jokes: any;   // ﾆｹﾞﾁｬﾀﾞﾒﾀﾞ
  key: string;
  theme: string;
}

const Theme = (props: ThemeProps) => {

  const [isDisplayMore, setIsDisplayMore] = useState<boolean>(false); 
  console.log(`theme: ${props.theme}`);
  console.log(`id: ${props.id}`);
  console.log(`jokes: ${props.jokes[props.id].joke}`);

  // 非破壊的に配列を逆順にする
  const jokes = props.jokes.slice().reverse();

  const date = new Date();
  const MM = date.getMonth() + 1,
        DD = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes();

  const created = `${MM}/${DD} ${hh}:${mm}`;
  console.log(created);  
  
  return (
    <li className="contents">
      <div className="theme">

        <div className="theme-header">
          <p>{props.handleName}</p>
          <p>{created}</p>
        </div>
        <div className="spacing-middium"></div>
        <div className="theme-img-area">
          <img src="../assets/mel-emo.png" />
        </div>
        <div className="spacing-middium"></div>
        <div className="theme-document">
          <p>{props.theme}</p>
      </div>

      {/* 表示/非表示アイコンと回答作成アイコンを並べる */}
      <div className="theme-icons">

        {/* ボタン押下ごとに一覧表示ボタンを変える */}
        <div className="displaySwitch">
          { isDisplayMore ? (
            <IconButton onClick={() => setIsDisplayMore(false)}>
              <label>
                {/* 上向き・閉じる */}
                <ExpandLessIcon />
              </label>
            </IconButton>
          ) : (
            <IconButton onClick={() => setIsDisplayMore(true)}>
              <label>
                {/* 下向き・開く */}
                <ExpandMoreIcon />
              </label>
          </IconButton>
          )}
        </div>
        <div className="create-joke-btn">
          <IconButton onClick={() => {console.log("create")}}>
            <label>
              <CreateIcon />
            </label>
          </IconButton>
        </div>
      </div>

        {/* 一覧表示ON時のみ回答一覧を表示 */}
        { isDisplayMore && (
        <ul className="joke-list">
          { jokes.map((joke: any, index: number) => {
            
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
