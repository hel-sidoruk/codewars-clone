import React, { useEffect } from 'react';
import LeaderTable from '../components/leaderBoard/LeaderTable';

export const Leaderboard = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main className="play-view">
      <h1 className="page-title">Leaderboards</h1>
      <div className="leader__container">
        <div className="leader__tab">Overall</div>
        <LeaderTable />
      </div>
    </main>
  );
};
