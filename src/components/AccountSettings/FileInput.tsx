import React, { useEffect, useRef } from 'react';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import useTypedSelector from '../../hooks/useTypedSelector';
import { Avatar } from '../UI/Avatar';

interface Props {
  setImage: (f: File | null) => void;
  success: boolean;
}

export const FileInput = ({ setImage, success }: Props) => {
  const { avatar } = useTypedSelector((state) => state.account);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploadedImage, dragActive, selectFile, handleDrag, handleDrop, resetImage] =
    useDragAndDrop(setImage);

  useEffect(() => {
    if (success) resetImage();
  }, [success]);

  return (
    <div className="field">
      <label className="label" htmlFor="avatar">
        Avatar
      </label>
      <div className="file-upload">
        <Avatar src={avatar || ''} size="65px" />
        <input
          ref={inputRef}
          type="file"
          className="input"
          onChange={selectFile}
          id="avatar"
          accept="image/*"
        />
        <div
          className={`file-upload__field ${dragActive ? 'active' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          {!uploadedImage && 'Drag your file here or'}
          <div className="btn" onClick={resetImage}>
            {uploadedImage ? 'Reset' : 'Upload file'}
          </div>
          {uploadedImage && (
            <>
              <img className="file-upload__image" src={uploadedImage.src as string} />
              <span>{uploadedImage.name}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
