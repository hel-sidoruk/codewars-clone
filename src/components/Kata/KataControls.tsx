import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const options = ['details', 'solutions', 'discuss'];

export const KataControls = () => {
  const { pathname } = useLocation();
  const [active, setActive] = useState('details');

  const getClassname = (i: number) => {
    return `controls__btn ${active === options[i] ? 'active' : ''}`;
  };

  useEffect(() => {
    if (pathname.endsWith(options[1])) setActive(options[1]);
    else if (pathname.endsWith(options[2])) setActive(options[2]);
    else setActive(options[0]);
  }, [pathname]);

  return (
    <div className="controls">
      <Link to="/kata/1/" className={getClassname(0)}>
        Details
      </Link>
      <Link to="/kata/1/solutions" className={getClassname(1)}>
        <i className="icon-moon-bullseye icon-moon"></i>
        Solutions
      </Link>
      <Link to="/kata/1/discuss" className={getClassname(2)}>
        <i className="icon-moon-comments icon-moon"></i>
        Discourse
      </Link>
    </div>
  );
};