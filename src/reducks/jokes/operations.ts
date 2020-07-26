import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';
import { fetchJokesAction, incrementLikesAction } from './actions';

const themesRef = db.collection('themes');

export const fetchJokes = (themeId: string) => {
  return async (dispatch: any) => {

    // themeIdに関係なくsubコレクション全部拾ってくる
    const subCollection = db.collectionGroup('jokes');

    subCollection.get()
      .then(snapshots => {
        const jokeList: firebase.firestore.DocumentData[] = [];
        snapshots.forEach(snapshot => {

          // 本当はwhere句でしぼる？
          if (snapshot.data().themeId === themeId) {
            const joke = snapshot.data();
            jokeList.push(joke);
          }
        });
        dispatch(fetchJokesAction(jokeList));
      }).catch((error) => {
        throw new Error(error);
      });
  }
}

// 回答作成
export const saveJoke = (themeId: string, handleName: string, joke: string) => {
  return async (dispatch: any) => {
    
    // サブコレクションに追加
    const jokesRef = themesRef.doc(themeId).collection('jokes').doc();
    
    const timestamp = FirebaseTimestamp.now();
    const id = jokesRef.id;
    const data = {
      created_at: timestamp,
      handleName: handleName,
      jokeId: id,
      joke: joke,
      themeId: themeId,
      likes: 0
    }

    // データ追加
    return jokesRef.set(data, {merge: true})
      .then(() => {
        dispatch(push('/'));
      }).catch((error) => {
        throw new Error(error);
      });
  }
};

export const incrementLikes = (themeId: string, jokeId: string, likes: number) => {
  return async (dispatch: any) => {
    const jokesRef = themesRef.doc(themeId).collection('jokes').doc(jokeId);

    const data = {
      likes: likes++
    };
    return jokesRef.set(data, {merge: true})
      .then((snapshot) => {
        dispatch(incrementLikesAction(snapshot));
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
};