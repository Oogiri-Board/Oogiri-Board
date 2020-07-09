import React from 'react';

type MemoProps = {
  title: string;
  no:  number;
  description: string;
}

const Memo = (props: MemoProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.no}</p>
      <p>{props.description}</p>
    </div>
  );
}

export default Memo;