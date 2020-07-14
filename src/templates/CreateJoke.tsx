import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { CommonButton, TextInput } from '../components/UIKit';
import { saveJoke } from '../reducks/themes/operations';

type CreateJokeProps = {
  themeId: string;
}

const CreateJoke = (props: CreateJokeProps) => {

  const dispatch = useDispatch();

  const [handleName, setHandleName] = useState<string>(""),
        [joke, sesetJoket] = useState<string>("");

  const inputHandleName = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setHandleName(event.target.value);
  }, [setHandleName]); 

  const inputJoke = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    sesetJoket(event.target.value);
  }, [sesetJoket]);  

  return (
    <div>
      <h1>回答作成</h1>

      <TextInput
        fullWidth={false} label={"お名前"} multiline={false}
        required={true} rows={1} value={handleName} type={"text"}
        onChange={inputHandleName}
      />

      <TextInput
        fullWidth={false} label={"お題"} multiline={false}
        required={true} rows={5} value={joke} type={"text"}
        onChange={inputJoke}
      />

      <CommonButton
        label={"作成する"}
        onClick={() => dispatch(saveJoke(props.themeId, handleName, joke))}
      />
    </div>
  );
}

export default CreateJoke;