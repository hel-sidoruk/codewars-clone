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
import * as Pages from '../pages';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home title="Codewars Clone - Achieve mastery" />} />
      <Route path="/kata" element={<Pages.KataLibrary title="Kata Practice | Codewars Clone" />} />
      <Route path="/kata/:id" element={<Pages.Kata />}>
        <Route path="/kata/:id" element={<Pages.KataDetails />} />
        <Route path="/kata/:id/discuss" element={<Pages.KataDiscuss />} />
        <Route path="/kata/:id/solutions" element={<Pages.KataSolutions />} />
      </Route>
      <Route path="/kata/:id/train" element={<Pages.KataTraining />} />
      <Route path="/users/edit" element={<Pages.AccountSettings />} />
      <Route path="/users/:id/" element={<Pages.UserProfile />}>
        <Route path="/users/:id/" element={<StatsTab />} />
        <Route path="/users/:id/completed" element={<KataTab />} />
        <Route path="/users/:id/collections" element={<CollectionsTab />} />
        <Route path="/users/:id/comments" element={<DiscourseTab />} />
        <Route path="/users/:id/solutions" element={<SolutionsTab />} />
        <Route path="/users/:id/following" element={<SocialTab list="following" />} />
        <Route path="/users/:id/followers" element={<SocialTab list="followers" />} />
      </Route>
      <Route
        path="/users/leaderboard"
        element={<Pages.Leaderboard title="Leaders | Codewars Clone" />}
      />
      <Route
        path="/login"
        element={<Pages.Authorization option="login" title="Sign in | Codewars Clone" />}
      />
      <Route
        path="/registration"
        element={<Pages.Authorization option="registration" title="Sign up | Codewars Clone" />}
      />
      <Route path="*" element={<Pages.Page404 />} />
    </Routes>
  );
}
