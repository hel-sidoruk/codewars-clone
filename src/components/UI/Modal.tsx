import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal = ({ onClose, children }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  return createPortal(
    <div
      className="modal"
      onClick={() => {
        onClose();
        document.body.style.overflow = 'auto';
      }}
    >
      {children}
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
};
