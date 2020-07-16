import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CommonButton, TextInput } from '../components/UIKit';
import { push } from 'connected-react-router';
import { saveJoke } from '../reducks/jokes/operations';
import {db} from '../firebase/index';

const CreateJoke = () => {

  const dispatch = useDispatch();

  let themeId = window.location.pathname.split('/joke/create')[1];

  if (themeId !== "") {
    themeId = themeId.split('/')[1];
    console.log(themeId);
  }

  const [handleName, setHandleName] = useState<string>(""),
        [joke, setJoket] = useState<string>(""),
        [theme, setTheme] = useState<string>("");

    const inputHandleName = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setHandleName(event.target.value);
  }, [setHandleName]); 

  const inputJoke = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setJoket(event.target.value);
  }, [setJoket]);

  useEffect(() => {
    if (themeId !== "") {
      db.collection('themes').doc(themeId).get()
        .then(snapshot => {
          const data: any = snapshot.data();
          console.log(data);
          
          // 画面表示時に出てくるデータを詰める
          setTheme(data.theme);
        })
    }
  }, [themeId])

  return (
    <div className="create-joke">
      <h1>回答作成</h1>
      <h2>お題：{theme}</h2>

      <TextInput
        fullWidth={false} label={"お名前"} multiline={false}
        required={true} rows={1} value={handleName} type={"text"}
        onChange={inputHandleName}
      />

      <TextInput
        fullWidth={false} label={"回答"} multiline={true}
        required={true} rows={4} value={joke} type={"text"}
        onChange={inputJoke}
      />

      <div className="button-container">
        <CommonButton
          label={"戻る"}
          onClick={() => dispatch((push('/')))}
        />
        <CommonButton
          label={"作成する"}
          onClick={() => dispatch(saveJoke(themeId, handleName, joke))}
        />
      </div>
    </div>
  );
}

export default CreateJoke;