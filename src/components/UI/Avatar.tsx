import React from 'react';

export const Avatar = ({ src, size }: { src: string; size?: string }) => {
  return (
    <div className="avatar" style={{ width: size || '30px', height: size || '30px' }}>
      {src ? <img src={src} alt="User avatar" /> : <div className="avatar__back"></div>}
    </div>
  );
};
