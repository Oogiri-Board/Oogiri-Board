import React from 'react';
import { useDispatch } from 'react-redux'; 
import { push } from 'connected-react-router';
import { CommonButton } from '../components/UIKit';
import { ThemeList } from './index';

const Home = () => {

  const dispatch = useDispatch();

  return (
    <div>
      <div className="create-theme-btn">
        <CommonButton
          label={"お題を作成する"}
          onClick={() => dispatch(push('/createtheme'))}
        />
      </div>
      <ThemeList />
      <div className="spacing-large"></div>
    </div>
  );
}

export default Home;
