import React from 'react';
import { createPortal } from 'react-dom';

export const Popup = () => {
  return createPortal(
    <div className="popup">
      <div className="popup__header">
        <i className="icon-moon-info icon-moon"></i>
        <span>You have ranked up!</span>
        <button className="close">
          <i className="icon-moon-x icon-moon"></i>
        </button>
      </div>
      <div className="popup__body">Respect. You have ranked up to 7 kyu in JavaScript.</div>
    </div>,
    document.getElementById('popup-root') as HTMLElement
  );
};
