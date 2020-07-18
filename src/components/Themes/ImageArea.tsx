import React, {useCallback } from 'react';
import {storage} from '../../firebase/index';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ImagePreview from './ImagePreview';

const useStyles = makeStyles({
  icon: {
    height: 48,
    width: 48
  }
});

type ImageAreaProps = {
  image: {
    id: string;
    path: string;
  },
  setImage: any;
  // setImage: ({img: string) => void;
}

const ImageArea = (props: ImageAreaProps) => {

  const classes = useStyles();

  // Cloud Storageに画像をアップ
  const uploadImage = useCallback((event) => {
    const file = event.target.files;
    let blob = new Blob(file, { type: "img/jpeg"});

    // 16桁のランダムな文字列を精製
    const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    const N = 16;
    const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N))).map((n) => S[n%S.length]).join('');

    const uploadRef = storage.ref('images').child(fileName);
    const uploadTask = uploadRef.put(blob);

    uploadTask.then(() => {
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURl) => {
        const newImage = {id: fileName, path: downloadURl};
        props.setImage(newImage);
        // props.setImages(((prevState: any) => [...prevState, newImage]));
      });
    }).catch((error) => {
      throw new Error(error);
    })
  }, [props.setImage]);

  return (
    <div>
      { props.image.id && (
        <div className="image-preview">
          <ImagePreview
            id={props.image.id}
            path={props.image.path}
          />
        </div>
      )}
      <div className="add-image-text-right">
        {/* 複数用意できてしまう */}
        <span>画像を追加する</span>
        <IconButton className={classes.icon}>
          <label>
            <AddPhotoAlternateIcon />
            <input
              className="display-none"
              type="file"
              id="image"
              onChange={(event) => uploadImage(event)}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
}
export default ImageArea;