import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';
import { fetchJokesAction } from './actions';

const themesRef = db.collection('themes');

export const fetchJokes = (themeId) => {
  return async (dispatch) => {

    // themeIdに関係なくsubコレクション全部拾ってくる
    const subCollection = db.collectionGroup('jokes');

    subCollection.get()
      .then(snapshots => {
        const jokeList = [];
        snapshots.forEach(snapshot => {

          // 本当はwhere句でしぼる？
          if (snapshot.data().themeId === themeId) {
            const joke = snapshot.data();
            console.log(`themeId: ${themeId}`);
            console.log(`joke.themeId: ${joke.themeId}, joke: ${joke.joke}`)
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
export const saveJoke = (themeId, handleName, joke) => {
  return async (dispatch) => {
    
    // サブコレクションに追加
    const jokesRef = themesRef.doc(themeId).collection('jokes').doc();
    
    const timestamp = FirebaseTimestamp.now();
    const id = jokesRef.id;
    const data = {
      created_at: timestamp,
      handleName: handleName,
      id: id,
      joke: joke,
      themeId: themeId
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