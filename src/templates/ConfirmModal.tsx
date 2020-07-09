import React, { useState } from 'react';

type ConfirmModalProps = {
  isModalOpen: boolean;
  clickModal: any;          // ﾆｹﾞﾁｬﾀﾞﾒﾀﾞﾆｹﾞﾁｬﾀﾞﾒﾀﾞﾆｹﾞﾁｬﾀﾞﾒﾀﾞ
}

const ConfirmModal = (props: ConfirmModalProps) => {

  let modal: JSX.Element | undefined;
  if (props.isModalOpen) {
    
    modal = (
      <div className="modal">
        <div className="modal-inner">
          <div className="modal-content">
            <p>モーダル</p>
          </div>
          <button
            className="modal-close-btn"
            onClick={() => props.clickModal(false)}
          >
            とじる
          </button>
        </div>
      </div>
    );
  }

  return  (
    <div>
      {modal}
    </div>
  );
}

export default ConfirmModal;
