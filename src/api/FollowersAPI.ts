import { authHost, host } from '.';
import { FollowerInterface } from '../types/followers';

const URL = `/social`;

export class FollowersAPI {
  static async getFollowing(username: string): Promise<FollowerInterface[]> {
    const { data } = await host.get(`${URL}/${username}/following`);
    return data;
  }

  static async getFollowers(username: string): Promise<FollowerInterface[]> {
    const { data } = await host.get(`${URL}/${username}/followers`);
    return data;
  }

  static async create(
    user: Omit<FollowerInterface, 'id' | 'username'>
  ): Promise<FollowerInterface> {
    const { data } = await authHost.post(URL, user);
    return data;
  }

  static async delete(id: string): Promise<{ status: 'ok' }> {
    const { data } = await authHost.delete(`${URL}/${id}`);
    return data;
  }

  static async checkIsFollowed(username: string): Promise<{ isFollowed?: string | false }> {
    const { data } = await authHost.get(`${URL}/check?follow=${username}`);
    return data;
  }
}
