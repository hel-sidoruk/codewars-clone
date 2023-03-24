import React from 'react';
import AuthoredKata from './AuthoredKata';
import Community from './Community';
import TopTags from './TopTags';

const Contributions = () => {
  return (
    <div className="stats__contributions">
      <div className="stats__title">Contributions</div>
      <div className="stats__icon stats__icon_contr">
        <i className="icon-moon-contribution icon-moon colored" style={{ fontSize: '70px' }}></i>
      </div>
      <Community />
      <AuthoredKata />
      <TopTags />
    </div>
  );
};
export default Contributions;
