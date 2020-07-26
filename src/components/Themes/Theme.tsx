import React, {useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { JokeList } from '../../pages/index';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import CreateIcon from '@material-ui/icons/Create';
import {push} from 'connected-react-router';
import {getCreatedDate} from '../../functions/index';
import ImagePreview from './ImagePreview';

export type ThemeProps = {
  themeId: string;
  handleName: string;
  key: string;
  theme: string;
  created_at: any;
  setOpenNumber: (index: number) => void;
  index: number;
  openJokesId: number;
  image: {
    id: string;
    path: string;
  };
}

// ボタンを押すとお題の子要素回答一覧を表示する
const Theme = (props: ThemeProps) => {

  const dispatch = useDispatch();
  const openJokesId: number = props.openJokesId;
  const index: number = props.index + 1;

  const [isDisplayMore, setIsDisplayMore] = useState<boolean>(false);
  
  const createURL = "/joke/create/" + props.themeId;
  console.log(props.created_at.toDate());
  const time: Date = props.created_at.toDate();

  const created = getCreatedDate(time);

  const clickClose = () => {
    props.setOpenNumber(0);
    setIsDisplayMore(false);
  }
  const clickOpen = (index: number) => {
    props.setOpenNumber(index);
    setIsDisplayMore(true);
  }

  // 他のお題の開くボタンが押さえたらここのを閉じる
  useEffect(() => {
    if(props.openJokesId !== index) {
      setIsDisplayMore(false);
    }
  }, [openJokesId])


  return (
    <li className="contents">
      <div className="theme">

        <div className="theme-header">
          <p>{props.handleName}</p>
          <p>{created}</p>
        </div>
        <div className="spacing-middium"></div>

        { props.image.id && (
          <div className="image-preview">
            <ImagePreview
              id={props.image.id}
              path={props.image.path}
            />
          </div>
        )}

        <div className="spacing-small"></div>
        <div className="theme-document">
          <p>{props.theme}</p>
        </div>
        <div className="spacing-small"></div>

      {/* 表示/非表示アイコンと回答作成アイコンを並べる */}
      <div className="theme-icons">

        {/* ボタン押下ごとに一覧表示ボタンを変える */}
        <div className="theme-detail-btnn">
          { isDisplayMore ? (
            <div>
              <IconButton onClick={() => clickClose()} >
                <label>
                  {/* 上向き・閉じる */}
                  <ExpandLessIcon />
                </label>
              </IconButton>
            </div>
          ) : (
            <IconButton onClick={() => clickOpen(index)} >
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
      {/* { isDisplayMore && ( */}
      { props.openJokesId === index && (
        <ul className="joke-list">
          <JokeList themeId={props.themeId} />
        </ul>
      ) }
      </div>
    </li>
  );
}

export default Theme;
