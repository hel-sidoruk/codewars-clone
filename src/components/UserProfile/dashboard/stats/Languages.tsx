import React from 'react';
import useTypedSelector from '../../../../hooks/useTypedSelector';

const Languages = () => {
  const { currentUser } = useTypedSelector((state) => state.user);

  return (
    <div className="stats__langs">
      <div className="stats__subtitle">
        <i className="icon-moon-terminal icon-moon colored"></i>
        Languages:
      </div>
      <div>
        <b>Highest Trained:</b>JavaScript ({currentUser?.rank})
      </div>
    </div>
  );
};
export default Languages;
