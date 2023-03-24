import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';

export const Popup = () => {
  const [isHidden, setIsHidden] = useState(true);
  const { pathname } = useLocation();
  const { newItems } = useTypedSelector((state) => state.notifications);
  const { removeFromNew } = useActions();
  const [item, setItem] = useState<{ id: string; text: string; title: string } | null>(null);

  const handleClick = () => {
    if (item) removeFromNew(item.id);
    setIsHidden(true);
  };

  useEffect(() => {
    if (newItems.length) {
      setItem(newItems[0]);
      pathname.endsWith('/train') ? setIsHidden(true) : setIsHidden(false);
    } else {
      setIsHidden(false);
    }
  }, [newItems, pathname]);

  return createPortal(
    <div className={`${isHidden ? 'popup' : 'popup popup--active'}`}>
      {item && (
        <>
          <div className="popup__header">
            <i className="icon-moon-info icon-moon"></i>
            <span>{item.title}</span>
            <button className="close" onClick={handleClick}>
              <i className="icon-moon-x icon-moon"></i>
            </button>
          </div>
          <div className="popup__body">{item.text}</div>
        </>
      )}
    </div>,
    document.getElementById('popup-root') as HTMLElement
  );
};
