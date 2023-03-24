import React from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';

const ProgressValue = () => {
  const { currentUser } = useTypedSelector((state) => state.user);

  return (
    <div className="stats__progress-value">
      <div>
        <b>Rank:</b> {currentUser?.rank}
      </div>
      <div>
        <b>Honor:</b> {currentUser?.honor}
      </div>
      <div>
        <b>Leaderboard Position:</b>#{currentUser?.leaderboardPosition}
      </div>
      <div>
        <b>Honor Percentile:</b>Top 0.000%
      </div>
      <div>
        <b>Total Completed Kata:</b> {currentUser?.totalCompleted}
      </div>
    </div>
  );
};
export default ProgressValue;
