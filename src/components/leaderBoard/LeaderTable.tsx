import React, { useEffect } from 'react';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader';
import LeaderItem from './LeaderItem';

const LeaderTable = () => {
  const { users, loading, error } = useTypedSelector((state) => state.leaders);
  const { fetchLeaders } = useActions();
  useEffect(() => {
    fetchLeaders();
  }, []);

  return (
    <div className="leader__list leader-table">
      <div className="leader-table__text">
        {`A user's honor is determined by earning higher ranks (dan/kyu) as well as through other
      activities such as getting up votes on kata, solutions and comments that they create.
      Certain activities are worth more honor than others. For example publishing a kata is
      worth more than solving one.`}
      </div>
      <div className="leader-table__header">
        <div>Position</div>
        <div>User</div>
        <div className="leader-table__header_clan">Clan</div>
        <div>Honor</div>
      </div>
      {loading ? (
        <Loader />
      ) : (
        users
          .slice(0, 30)
          .map((user, index) => <LeaderItem key={user.id} user={user} index={index} />)
      )}
      {error}
    </div>
  );
};
export default LeaderTable;
