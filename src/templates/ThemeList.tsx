import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Theme } from './index';
import { getThemes } from '../reducks/themes/selectors';
import { fetchThemes } from '../reducks/themes/operations';

const ThemeList = () => {

  type ThemesObj = {
    handleName: string;
    theme: string;
    created_at: any;
    id: string;
    image: {
      id: string;
      path: string;
    }
  }

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const themes: any = getThemes(selector);

  // 回答一覧を表示するお題を決める 0だと全部閉じ
  const [openJokesId, setOpenJokesId] = useState(0);

  const setOpenNumber = useCallback((index) => {
    setOpenJokesId(index);
    console.log("渡ってきたindex:" + index)

  }, []);

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
            (themes.map((theme: ThemesObj, index: number) => (
              <Theme
                key={theme.id}
                handleName={theme.handleName}
                theme={theme.theme}
                created_at={theme.created_at}
                themeId={theme.id}
                setOpenNumber={setOpenNumber}
                index={index}
                openJokesId={openJokesId}
                image={theme.image}
              />
            )))
          )
        )}
      </ul>  
    </section>
  );
}

export default ThemeList;