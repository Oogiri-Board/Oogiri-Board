import React, {useState, useCallback} from 'react';
import './assets/style.css';
import ConfirmModal from './templates/ConfirmModal';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const clickModal = useCallback((isOpen: boolean): void => {
    setIsModalOpen(isOpen);
    console.log(`openModal: ${isModalOpen}`);
  }, [setIsModalOpen]);

  return (
    <div>
      {/* このコンポーネントからモーダルを開きたい */}
      <ConfirmModal isModalOpen={isModalOpen} clickModal={clickModal}/>

      <button onClick={() => clickModal(true)}>
        Open
      </button>
    </div>
  );
}

export default App;
