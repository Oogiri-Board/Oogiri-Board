import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';
import { fetchThemesAction } from './actions';

const themesRef = db.collection('themes');

export const fetchThemes = () => {
  return async (dispatch) => {
    // orderBy: created_atが新しい順
    themesRef.orderBy('created_at', 'desc').get()
      .then(snapshots => {
        const themeList = [];
        snapshots.forEach(snapshot => {
          const theme = snapshot.data();
          themeList.push(theme);
        })
        dispatch(fetchThemesAction(themeList));
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

// CreateTheme画面で作成したデータをDBに保存する
export const saveTheme = (handleName, theme, image) => {
  return async (dispatch) => {

    // データ作成・成形
    const timestamp = FirebaseTimestamp.now();
    const data = {
      handleName: handleName,
      theme: theme,
      created_at: timestamp,
      image: image,
    }
    const ref = themesRef.doc();
    const id = ref.id;

    data.id = id;
    data.created_at = timestamp;
    
    // データ追加
    return themesRef.doc(id).set(data)
      .then(() => {
        dispatch(push('/'));
      }).catch((error) => {
        throw new Error(error);
      });
  }
};