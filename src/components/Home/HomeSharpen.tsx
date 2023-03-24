import React from 'react';
import { Link } from 'react-router-dom';
import { TagIcon } from '../Icons';
import { TextBlock } from './TextBlock';

export const HomeSharpen = ({ isAuthorized }: { isAuthorized: boolean }) => {
  return (
    <div className="home__sharpen">
      <TextBlock title="Sharpen your coding skills" icon={<TagIcon />}>
        <p className="text">
          Challenge yourself on small coding exercises called &quot;kata&quot;. Each kata is crafted
          by the community to help you strengthen different coding skills. Master your current
          language of choice, or learn any of the 55+ programming languages supported.
        </p>
        <Link className="home__btn small" to={isAuthorized ? '/kata' : '/login'}>
          Join the Dojo
        </Link>
      </TextBlock>
      <div className="right noise-image">
        <img src="/8ky.png" alt="8ky-image" />
      </div>
    </div>
  );
};
