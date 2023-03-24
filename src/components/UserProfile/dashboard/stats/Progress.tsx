import React from 'react';
import Languages from './Languages';
import ProgressValue from './ProgressValue';

const Progress = () => {
  return (
    <div className="stats__progress">
      <div className="stats__title">Progress</div>
      <div className="stats__icon stats__icon_progress">
        <i className="icon-moon-progress icon-moon colored" style={{ fontSize: '70px' }}></i>
      </div>
      <ProgressValue />
      <Languages />
    </div>
  );
};
export default Progress;
