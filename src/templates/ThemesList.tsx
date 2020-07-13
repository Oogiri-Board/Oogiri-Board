import React, { useState } from 'react';
import Theme from './Theme';
import exData from '../exData';

const ThemesList = () => {

  const dataList = exData;
  const themes = dataList.themes;

  return (
    <ul>
      { themes.map((theme, index: number) => {
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
