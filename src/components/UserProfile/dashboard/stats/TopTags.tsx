import React from 'react';

const TopTags = () => {
  return (
    <div className="stats__top-tags">
      <div className="stats__subtitle">
        <i className="icon-moon-tag icon-moon colored"></i>
        Top Tags:
      </div>
      <div>
        <b>Fundamentals: </b>112
      </div>
      <div>
        <b>Mathematics: </b>47
      </div>
      <div>
        <b>Algorithms: </b>37
      </div>
      <div>
        <b>Strings: </b>30
      </div>
      <div>
        <b>Puzzles: </b>9
      </div>
      <div>
        <b>Arrays: </b>6
      </div>
    </div>
  );
};
export default TopTags;
