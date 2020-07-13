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
