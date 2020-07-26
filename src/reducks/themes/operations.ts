import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';
import { fetchThemesAction } from './actions';
import { ThemeType } from './types';

const themesRef = db.collection('themes');

export const fetchThemes = () => {
  return async (dispatch: any) => {
    // orderBy: created_atが新しい順
    themesRef.orderBy('created_at', 'desc').get()
      .then(snapshots => {
        const themeList: firebase.firestore.DocumentData[] = [];
        snapshots.forEach(snapshot => {
          const theme = snapshot.data();
          themeList.push(theme);
        })
        console.log(JSON.stringify(themeList));
        
        dispatch(fetchThemesAction(themeList));
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

// この部分だけをimportできないか？
type image = {
  id: string;
  path: string;
}
// CreateTheme画面で作成したデータをDBに保存する
export const saveTheme = (handleName: string, theme: string, image: image) => {
  return async (dispatch: any) => {

    // データ作成・成形
    const timestamp = FirebaseTimestamp.now();
    const data: ThemeType = {
      created_at: timestamp,
      id: "",
      image: image,
      handleName: handleName,
      theme: theme,
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