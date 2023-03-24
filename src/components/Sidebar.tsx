import React, { memo } from 'react';
import { SidebarItem } from './Sidebar/SidebarItem';

export const Sidebar = memo(function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="top md:mb-10">
        <SidebarItem label="Home" path="/" nav />
        <li className="sidebar__section mt-16">
          <span>Training</span>
        </li>
        <SidebarItem label="Practice" path="/kata" nav />
        <li className="sidebar__section mt-16">
          <span>Community</span>
        </li>
        <SidebarItem label="Leaderboards" path="/users/leaderboard" nav />
        <SidebarItem label="Chat" path="https://discord.gg/mSwJWRvkHA" />
        <SidebarItem
          label="Discussions"
          path="https://github.com/codewars/codewars.com/discussions"
        />
      </ul>
    </div>
  );
});
