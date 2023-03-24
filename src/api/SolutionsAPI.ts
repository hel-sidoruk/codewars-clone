import { authHost, host } from '.';
import { SolutionInterface } from '../types';

export class SolutionsAPI {
  static async getSolutions(kataId: string, username?: string): Promise<SolutionInterface[]> {
    const { data } = await host.get(
      `/kata/${kataId}/solutions${username ? `?username=${username}` : ''}`
    );
    return data;
  }

  static async getUserSolutions(): Promise<{ solutions?: SolutionInterface[]; message?: string }> {
    const { data } = await authHost.get(`/solutions`);
    return { solutions: data };
  }

  static async addSolution(
    kataId: string,
    solution: { username: string; solution: string; name: string; rank: string }
  ): Promise<SolutionInterface> {
    const { data } = await host.post(`/kata/${kataId}/solutions`, solution);
    return data;
  }

  static async updateSolution(
    kataId: string,
    solutionId: string,
    updates: { cleverVotes?: number; bestPracticesVotes?: number }
  ): Promise<{ status: string } | { error: string }> {
    if (!Object.keys(updates).length) return { error: 'No params to update' };
    const { data } = await host.patch(`/kata/${kataId}/solutions/${solutionId}`, updates);
    return data;
  }
}
