export interface FollowerInterface {
  id: string;
  username: string;
  followUser: string;
  rank: string;
  honor: number;
  clan: string | null;
  followerAvatar: string;
  followingAvatar: string;
}
