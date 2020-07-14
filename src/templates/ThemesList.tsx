import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Theme from './Theme';
import { getThemes } from '../reducks/themes/selectors';
import exData from '../exData';

const ThemesList = () => {

  const dataList = exData;
  const dispatch = useDispatch();

  // Store全体のstateを渡す
  const selector = useSelector(state => state);

  if (dataList) {
    console.log(dataList.themes);
  } else {
    console.log(dataList);
  }

  // 非破壊的に逆順にする
  const themes: any = dataList.themes.slice().reverse();
  // const themes = dataList.themes;

  return (
    <ul>
      { themes.map((theme: any, index: number) => {
        return (
          <Theme
            handleName={theme.handleName}
            index={index}
            id={theme.id}
            jokes={theme.jokes}
            key={index.toString()}
            theme={theme.theme}
          />
        );
      })}
    </ul>
  );
}

export default ThemesList;
