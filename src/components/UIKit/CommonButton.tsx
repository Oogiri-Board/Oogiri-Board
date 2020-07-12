import React from 'react';

type CommonButtonProps = {
  label: string;
  onClick: any;
}

const CommonButton = (props: CommonButtonProps) => {

  return (
    <button
      className="common-button"
      onClick={() => props.onClick()}
    >
      {props.label}
    </button>
  );
}

export default CommonButton;