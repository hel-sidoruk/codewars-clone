import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  StatsTab,
  KataTab,
  CollectionsTab,
  DiscourseTab,
  SocialTab,
  SolutionsTab,
} from '../components/UserProfile/dashboard';
import {
  Authorization,
  Home,
  Kata,
  KataDiscuss,
  KataLibrary,
  KataSolutions,
  KataTraining,
  Leaderboard,
  UserProfile,
} from '../pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home title="Codewars Clone - Achieve mastery" />} />
      <Route path="/kata" element={<KataLibrary title="Kata Practice | Codewars Clone" />} />
      <Route path="/kata/:id" element={<Kata />}>
        <Route path="/kata/:id/discuss" element={<KataDiscuss />} />
        <Route path="/kata/:id/solutions" element={<KataSolutions />} />
      </Route>
      <Route path="/kata/:id/train" element={<KataTraining />} />
      <Route path="/users/:id/" element={<UserProfile />}>
        <Route path="/users/:id/" element={<StatsTab />} />
        <Route path="/users/:id/completed" element={<KataTab />} />
        <Route path="/users/:id/collections" element={<CollectionsTab />} />
        <Route path="/users/:id/comments" element={<DiscourseTab />} />
        <Route path="/users/:id/solutions" element={<SolutionsTab />} />
        <Route path="/users/:id/following" element={<SocialTab list="following" />} />
        <Route path="/users/:id/followers" element={<SocialTab list="followers" />} />
      </Route>
      <Route path="/users/leaderboard" element={<Leaderboard title="Leaders | Codewars Clone" />} />
      <Route
        path="/login"
        element={<Authorization option="login" title="Sign in | Codewars Clone" />}
      />
      <Route
        path="/registration"
        element={<Authorization option="registration" title="Sign up | Codewars Clone" />}
      />
    </Routes>
  );
}
