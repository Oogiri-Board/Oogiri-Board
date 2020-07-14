import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';

const themesRef = db.collection('themes');

// CreateTheme画面で作成したデータをDBに保存する
export const saveTheme = (handleName, theme) => {
  return async (dispatch) => {

    // データ作成・成形
    const timestamp = FirebaseTimestamp.now();
    const data = {
      handleName: handleName,
      theme: theme,
      create_at: timestamp
    }
    const ref = themesRef.doc();
    const id = ref.id;

    data.id = id;
    data.create_at = timestamp;
    
    // データ追加
    return themesRef.doc(id).set(data)
      .then(() => {
        dispatch(push('/'));
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

// お題のID、ハンドルネーム、回答を受け取る
export const saveJoke = (themeId, handleName, joke) => {
  // return async (dispatch) => {
  //   // サブコレクションの参照
  //   const jokeRef = themeRef.doc(themeId).collection('joke');
    
  //   const timestamp = FirebaseTimestamp.now();
  //   const data = {
  //     handleName: handleName,
  //     joke: joke,
  //     create_at: timestamp
  //   }
  //   const ref = jokeRef.doc();
  //   const jokeId = ref.id;

  //   data.id = jokeId;
  //   data.create_at = timestamp;

  //   // データ追加
  //   return jokeRef.doc(jokeId).set(data)
  //     .then(() => {
  //       dispatch(push('/'));
  //     }).catch((error) => {
  //       throw new Error(error);
  //     });
  // }
}
