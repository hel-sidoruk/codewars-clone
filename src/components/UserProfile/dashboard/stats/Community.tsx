import React from 'react';

const Community = () => {
  return (
    <div className="stats__community">
      <div className="stats__subtitle">
        <i className="icon-moon-users icon-moon colored"></i>
        Community:
      </div>
      <div>
        <b>Comments:</b>7,856 (383 replies)
      </div>
      <div>
        <b>Collections:</b>0
      </div>
      <div>
        <b>Kumite:</b>567 (639 Started)
      </div>
      <div>
        <b>Translations:</b>4,563 (4,419 approved)
      </div>
      <div>
        <b>Contributed Kata:</b>81
      </div>
      <div>
        <b>Kata Approvals:</b>61
      </div>
    </div>
  );
};
export default Community;
