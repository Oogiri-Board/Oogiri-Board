import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Theme from '../components/Themes/Theme';
import { getThemes } from '../reducks/themes/selectors';
import { fetchThemes } from '../reducks/themes/operations';
import { ThemeType } from '../reducks/themes/types';

const ThemeList = () => {

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const themes: ThemeType[] = getThemes(selector);

  // 回答一覧を表示するお題を決める 0だと全部閉じ
  const [openJokesId, setOpenJokesId] = useState(0);

  // お題リストから選択されたお題のみ回答一覧を表示する
  const setOpenNumber: (index: number) => void = useCallback((index) => {
    setOpenJokesId(index);
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
            (themes.map((theme: ThemeType, index: number) => (
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