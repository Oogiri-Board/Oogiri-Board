import React, { useState } from 'react';

type ConfirmModalProps = {
  isModalOpen: boolean;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(props.isModalOpen);
  const [message, setMessage] = useState<string>("");

  const openModal = (message: string) => {
    setMessage(message);
    setIsModalOpen(true);
  }

  let modal: JSX.Element | undefined;
  if (isModalOpen) {
    
    modal = (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-content">
            <p>今夜のデザート</p>
            <p>{message}</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => setIsModalOpen(false)}
          >
            とじる
          </button>
        </div>
      </div>
    );
  }

  // モーダルOpen用の要素を切り離したい
  return  (
    <div>
      {modal}

      <button onClick={() => openModal("りんご")}>
        apple
      </button>
      <button onClick={() => openModal("ばなな")}>
        banana
      </button>
      <button onClick={() => openModal("みかん")}>
        orange
      </button>
    </div>
  );
}

export default ConfirmModal;
