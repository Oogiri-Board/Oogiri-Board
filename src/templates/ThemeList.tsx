import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from './index';
import { getThemes } from '../reducks/themes/selectors';
import { fetchThemes } from '../reducks/themes/operations';

const ThemeList = () => {

  type ThemesObj = {
    handleName: string;
    theme: string;
    created_at: string;
    id: string; 
  }

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const themes: any = getThemes(selector);

  console.log("Theme List");
  
  
  useEffect(() => {
    dispatch(fetchThemes());
  }, []);
  // 第二引数にthemesを渡したら無限レンダリングが起きた・・・

  return (
    <section>
      <ul>
        {/* if文でネストしなければいけない・・・ */}
        { themes && (
          themes.length > 0 && (
            (themes.map((theme: ThemesObj) => (
              <Theme
                key={theme.id}
                handleName={theme.handleName}
                theme={theme.theme}
                created_at={theme.created_at}
                themeId={theme.id}
              />
            )))
          )
        )}
      </ul>  
    </section>
  );
}

export default ThemeList;