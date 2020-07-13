import React from 'react';
import { useDispatch } from 'react-redux'; 
import { push } from 'connected-react-router';
import { CommonButton } from '../components/UIKit';
import { ThemesList } from './index';

const Home = () => {

  const dispatch = useDispatch();

  return (
    <div>

      <h1>大喜利掲示板</h1>
      <CommonButton
        label={"お題を作成する"}
        onClick={() => dispatch(push('/createtheme'))}
      />
      {/* DBにある分だけお題を表示する（新しいものから） */}
      <ThemesList />
    </div>
  );
}

export default Home;
