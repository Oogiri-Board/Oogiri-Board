import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import ConfirmModal from './ConfirmModal';
import { CommonButton, TextInput } from '../components/UIKit';
import { saveTheme } from '../reducks/themes/operations';

const CreateTheme = () => {

  const dispatch = useDispatch();

  const [handleName, setHandleName] = useState<string>(""),
        [theme, setTheme] = useState<string>("");

  // モーダルの開閉・・・ここでの宣言で正しいのか？
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const clickModal = useCallback((isModalOpen: boolean): void => {
    setIsModalOpen(isModalOpen);
    console.log(`openModal: ${isModalOpen}`);
  }, [setIsModalOpen]);

  const inputHandleName = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setHandleName(event.target.value);
  }, [setHandleName]); 

  const inputTheme = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setTheme(event.target.value);
  }, [setTheme]);  

  return (
    <div>
      <h1>お題新規作成</h1>
      <ConfirmModal isModalOpen={isModalOpen} clickModal={clickModal}/>

      <TextInput
        fullWidth={false} label={"お名前"} multiline={false}
        required={true} rows={1} value={handleName} type={"text"}
        onChange={inputHandleName}
      />

      <TextInput
        fullWidth={false} label={"お題"} multiline={false}
        required={true} rows={5} value={theme} type={"text"}
        onChange={inputTheme}
      />

      <CommonButton
        label={"作成する"}
        onClick={() => dispatch(saveTheme(handleName, theme))}
      />
    </div>
  );
}

export default CreateTheme;