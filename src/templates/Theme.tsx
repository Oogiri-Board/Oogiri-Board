import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { JokeList } from './index';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateIcon from '@material-ui/icons/Create';
import {push} from 'connected-react-router';

export type ThemeProps = {
  themeId: string;
  handleName: string;
  key: string;
  theme: string;
  created_at: string;
}

const Theme = (props: ThemeProps) => {

  const dispatch = useDispatch();

  const [isDisplayMore, setIsDisplayMore] = useState<boolean>(false); 
  
  const createURL = "/joke/create/" + props.themeId;

  console.log(`URL: ${createURL}`);
  console.log(`themeId: ${props.themeId}`);
  
  const created = `7/15 19:00`;

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
          <IconButton onClick={() => dispatch(push(createURL))}>
            <label>
              <CreateIcon />
            </label>
          </IconButton>
        </div>
      </div>

        {/* 一覧表示ON時のみ回答一覧を表示 */}
      { isDisplayMore && (
        <ul className="joke-list">
          <JokeList themeId={props.themeId} />
        </ul>
      )}
      </div>
    </li>
  );
}

export default Theme;
