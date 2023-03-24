import React from 'react';
import Loader from '../UI/Loader';

export const KataLoader = () => {
  return (
    <div className="kata-loader">
      <Loader />
      <span>Loading Kata...</span>
    </div>
  );
};
