import React from 'react';
import { NavLink } from 'react-router-dom';
import { PracticeIcon, LeadersIcon, DiscordIcon, DiscussionIcon } from '../Icons';
import { SidebarContent } from './SidebarContent';

interface Props {
  label: 'Home' | 'Practice' | 'Leaderboards' | 'Chat' | 'Discussions';
  path: string;
  nav?: boolean;
}

const icons: { [key: string]: JSX.Element } = {
  Home: (
    <div className="logo">
      <img className="w-full h-full" src="/logo.svg" />
    </div>
  ),
  Practice: <PracticeIcon />,
  Leaderboards: <LeadersIcon />,
  Chat: <DiscordIcon />,
  Discussions: <DiscussionIcon />,
};

export const SidebarItem = ({ label, path, nav }: Props) => {
  return (
    <li className="sidebar__item">
      {nav ? (
        <NavLink to={path} className={({ isActive }) => (isActive ? 'link-active' : '')} end>
          {icons[label]}
          <SidebarContent label={label} />
        </NavLink>
      ) : (
        <a href={path} rel="noopener noreferrer" target="_blank" title="GitHub Discussions">
          {icons[label]}
          <SidebarContent label={label} />
        </a>
      )}
    </li>
  );
};
