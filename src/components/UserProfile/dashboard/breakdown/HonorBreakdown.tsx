import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { getAchievementsHonor, getPercentScore } from '../../../../utils';

const HonorBreakdown = ({ honor }: { honor: number }) => {
  const { currentUser } = useTypedSelector((state) => state.user);
  const [kataPercent, setKataPercent] = useState(0);
  const [achievementsPercent, setAchievementsPercent] = useState(0);

  useEffect(() => {
    if (currentUser) {
      const achievementsHonor = getAchievementsHonor(parseInt(currentUser.rank));
      setAchievementsPercent(getPercentScore(honor, achievementsHonor, 0));
      setKataPercent(honor ? 100 - achievementsPercent : 0);
    }
  }, [currentUser, honor, achievementsPercent]);

  return (
    <div className="honor-breakdown">
      <div className="stats__subtitle">
        <i className="icon-moon-honor icon-moon colored"></i>
        Honor Breakdown
      </div>
      <div className="honor-breakdown__list">
        <div className="honor-breakdown__item">
          <div className="progress" style={{ width: `${kataPercent}%` }}></div>
          <div className="text">Completed Kata ({currentUser?.totalCompleted})</div>
        </div>
        <div className="honor-breakdown__item">Authored Kata & Translations (0)</div>
        <div className="honor-breakdown__item">Kumite (0)</div>
        <div className="honor-breakdown__item">Comments (0)</div>
        <div className="honor-breakdown__item">Solution Up Votes (0)</div>
        <div className="honor-breakdown__item">Referrals (0)</div>
        <div className="honor-breakdown__item">
          <div className="progress" style={{ width: `${achievementsPercent}%` }}></div>
          <div className="text">
            Achievements ({currentUser && 8 - parseInt(currentUser?.rank)})
          </div>
        </div>
      </div>
    </div>
  );
};

export default HonorBreakdown;
