import React, { useState } from 'react';
import { CommonButton } from '../components/UIKit';

type ConfirmModalProps = {
  clickModal: (isModalOpen: boolean) => void;
  isModalOpen: boolean;
}

const ConfirmModal = (props: ConfirmModalProps) => {

  let modal: JSX.Element = (<></>);
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(props.isModalOpen);

  if (isModalOpen) {
    
    modal = (
      <div className="modal" onClick={() => props.clickModal(false)}>
        <div className="modal-inner">
          <div className="modal-content">
            <p>めっせーじ</p>
          </div>
          {/* <button
            className="modal-close-btn"
            onClick={() => props.clickModal(false)}
          >
            とじる
          </button> */}

          <CommonButton
            label={"閉じる"}
            onClick={() => setIsModalOpen(false)}
          />

          {/* <CommonButton
            label={"閉じる"}
            onClick={props.clickModal(false)}
          /> */}
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
