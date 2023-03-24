import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { KataAPI } from '../../api';

export const SkipKataButton = () => {
  const [nextKataID, setNextKataID] = useState('');
  const { id } = useParams();

  useEffect(() => {
    KataAPI.getRandomId().then((id) => setNextKataID(id));
  }, [id]);

  return (
    <Link to={`/kata/${nextKataID}/train`} className="btn btn-dark">
      <i className="icon-moon icon-moon-next"></i>
      <span className="btn-text">skip</span>
    </Link>
  );
};
