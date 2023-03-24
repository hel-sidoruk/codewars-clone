import React from 'react';

interface Props {
  onConfirm: () => void;
  title: string;
  text: string;
  children: React.ReactNode;
  cancelBtnText?: string;
}

export const Dialog = ({ onConfirm, title, text, children, cancelBtnText }: Props) => {
  return (
    <div className="modal__content">
      <div className="modal__header">
        <h4>{title}</h4>
        <button>
          <i className="icon-moon icon-moon-x"></i>
        </button>
      </div>
      <div className="modal__body">{children}</div>
      <div className="modal__footer">
        <button className="btn btn-fill">{cancelBtnText || 'Cancel'}</button>
        <button className="btn success" onClick={onConfirm}>
          {text}
        </button>
      </div>
    </div>
  );
};
