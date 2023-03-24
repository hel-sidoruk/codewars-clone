import React from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import Loader from '../../../UI/Loader';
import Indicators from './Indicators';

export const StatsTab = () => {
  const { loading } = useTypedSelector((state) => state.user);
  return (
    <div className="stats">
      <div className="stats__refresh">
        <i className="icon-moon-info icon-moon"></i>
        Next stats refresh now
      </div>
      {loading ? <Loader /> : <Indicators />}
    </div>
  );
};
