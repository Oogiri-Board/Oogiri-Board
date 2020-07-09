import React from 'react';
import Memo from './Memo';
import './assets/style.css';
import ConfirmModal from './templates/ConfirmModal';

const App = () => {
  return (
    <div>
      <Memo title={"ホームページ"} no={1} description={"今夜のデザートを選んでください"} />
      
      {/* このコンポーネントからモーダル開閉の操作したい */}
      <ConfirmModal isModalOpen={false} />
      <div id="modal"></div>
    </div>
  );
}

export default App;
