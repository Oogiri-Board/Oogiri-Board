import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { CommonButton, TextInput } from '../components/UIKit';
import { saveTheme } from '../reducks/themes/operations';
import ImageArea  from '../components/Themes/ImageArea';


const CreateTheme = () => {

  const dispatch = useDispatch();

  const [handleName, setHandleName] = useState<string>(""),
        [image, setImage] = useState({
          id: "",
          path: ""
        }),
        // [images, setImages] = useState<any>([]),
        [theme, setTheme] = useState<string>("");

  const inputHandleName = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setHandleName(event.target.value);
  }, [setHandleName]); 

  const inputTheme = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setTheme(event.target.value);
  }, [setTheme]);

  return (
    <div className="create">
      <h1>お題新規作成</h1>
      <div className="spacing-middium"></div>


      <div className="form-container">
        <ImageArea
          image={image}
          setImage={setImage}
        />
        <div className="spacing-middium"></div>
        <TextInput
          fullWidth={false} label={"お名前"} multiline={false}
          required={true} rows={1} value={handleName} type={"text"}
          onChange={inputHandleName}
        />
        <div className="spacing-middium"></div>

        <TextInput
          fullWidth={false} label={"お題"} multiline={true}
          required={true} rows={5} value={theme} type={"text"}
          onChange={inputTheme}
        />
      </div>
      <div className="spacing-large"></div>
      <div className="button-container">
        <CommonButton
          label={"戻る"}
          onClick={() => dispatch((push('/')))}
        />
        <CommonButton
          label={"作成する"}
          onClick={() => dispatch(saveTheme(handleName, theme, image))}
        />
      </div>

    </div>
  );
}

export default CreateTheme;