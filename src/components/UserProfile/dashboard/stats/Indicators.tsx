import React from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import Breakdown from '../breakdown/Breakdown';
import Contributions from './Contributions';
import Progress from './Progress';

const Indicators = () => {
  const { username } = useTypedSelector((state) => state.authorizedUser);
  const { currentUser } = useTypedSelector((state) => state.user);
  const isAuth = currentUser && currentUser.username === username;

  return (
    <div className="stats__indicators">
      {currentUser && <Progress />}
      {isAuth && <Breakdown />}
      {!isAuth && <Contributions />}
    </div>
  );
};
export default Indicators;
