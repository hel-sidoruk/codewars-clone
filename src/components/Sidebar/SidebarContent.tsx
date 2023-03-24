import React from 'react';

interface Props {
  label: 'Home' | 'Practice' | 'Leaderboards' | 'Chat' | 'Discussions';
}

const content: { [key: string]: string } = {
  Home: 'Report home for your next assignment',
  Practice: 'Complete challenging Kata to earn honor and ranks. Re-train to hone technique',
  Leaderboards: 'Achieve honor and move up the global leaderboards',
  Chat: 'Join our Discord server and chat with your fellow code warriors',
  Discussions: 'View our Github Discussions board to discuss general Codewars topics',
};

export const SidebarContent = ({ label }: Props) => {
  return (
    <div className="sidebar__content">
      <div className="sidebar__label">{label}</div>
      <div className="sidebar__descr">{content[label]}</div>
    </div>
  );
};
