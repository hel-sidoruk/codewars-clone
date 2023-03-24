import React from 'react';

const ReferalBlock = () => {
  return (
    <div className="user-profile__ref referal">
      <div className="referal__icon">
        <i className="icon-moon-share icon-moon"></i>
      </div>
      <div className="referal__content">
        <div className="referal__title">Earn extra honor and gain new allies!</div>
        <div className="referal__text">Honor is earned for each new codewarrior who joins.</div>
        <div className="referal__btn">
          <button className="btn">LEARN MORE</button>
        </div>
      </div>
    </div>
  );
};
export default ReferalBlock;
