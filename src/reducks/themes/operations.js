import { bringUpModalAction } from './actions';
import { push } from 'connected-react-router';
import { FirebaseTimestamp, db } from '../../firebase';
import ConfirmModal from '../../templates/ConfirmModal';

const themesRef = db.collection('themes');

// モーダルの開閉
// const [isModalOpen, setIsModalOpen] = useState(false);
// const clickModal = useCallback((isModalOpen) => {
//   setIsModalOpen(isModalOpen);
//   console.log(`openModal: ${isModalOpen}`);
// }, [setIsModalOpen]);

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
        // ここでモーダルを出したい(データ追加成功→「新規作成しました」→HOME画面へ戻る)
        console.log("DBにセット完了");
        dispatch(bringUpModalAction());       // モーダルを出現させる処理
        dispatch(push('/'));
      }).catch((error) => {
        throw new Error(error);
      });
  }
  
}
