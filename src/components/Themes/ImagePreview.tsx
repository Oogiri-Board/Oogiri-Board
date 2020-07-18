import React from 'react';

type ImagePreviewProps = {
  id: string;
  path: string;
}

const ImagePreview = (props: ImagePreviewProps) => {
  return (
    <div className="image-thumb">
      <img alt={"プレビュー画像"} src={props.path}/>
    </div>
  );
}

export default ImagePreview;