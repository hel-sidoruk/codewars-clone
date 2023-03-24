import { useState } from 'react';

type FnReturn = [
  {
    src: string | ArrayBuffer;
    name: string;
  } | null,
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  (e: React.DragEvent<HTMLDivElement>) => void,
  (e: React.DragEvent<HTMLDivElement>) => void,
  (e?: React.MouseEvent<HTMLDivElement>) => void
];

export function useDragAndDrop(setImage: (f: File | null) => void): FnReturn {
  const [uploadedImage, setUploadedImage] = useState<{
    src: string | ArrayBuffer;
    name: string;
  } | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (uploadedImage) return;
    if (e.type === 'dragleave') return setDragActive(false);
    setDragActive(true);
  };

  function readImage(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target && e.target.result) setUploadedImage({ src: e.target.result, name: file.name });
    };
    reader.readAsDataURL(file);
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (uploadedImage) return;
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setImage(file);
      readImage(file);
    }
  };

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
      readImage(e.target.files[0]);
    }
  };

  const resetImage = (e?: React.MouseEvent<HTMLDivElement>) => {
    if (!uploadedImage) return;
    if (e) e.stopPropagation();
    setUploadedImage(null);
    setImage(null);
  };

  return [uploadedImage, dragActive, selectFile, handleDrag, handleDrop, resetImage];
}
