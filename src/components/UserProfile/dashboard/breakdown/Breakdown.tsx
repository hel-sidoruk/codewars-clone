import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { getPercentScore, scoreNeededForRankingUp } from '../../../../utils';
import HonorBreakdown from './HonorBreakdown';
import RankBreakdown from './RankBreakdown';

const Breakdown = () => {
  const [nextRank, setNextRank] = useState(0);
  const [percent, setPercent] = useState(0);
  const { rank, score, honor } = useTypedSelector((state) => state.account);

  useEffect(() => {
    setNextRank(parseInt(rank || '0') - 1);
    setPercent(getPercentScore(scoreNeededForRankingUp[nextRank], score || 0, 1));
  }, [nextRank, rank, score]);

  return (
    <div className="stats__breakdowns">
      <div className="stats__honor-breakdown">
        <HonorBreakdown honor={honor || 0} />
      </div>
      <div className="stats__rank-breakdown">
        <RankBreakdown percent={percent} nextRank={nextRank} />
      </div>
    </div>
  );
};

export default Breakdown;
