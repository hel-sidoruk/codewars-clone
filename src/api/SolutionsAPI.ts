import { API_URL } from '.';
import { SolutionInterface } from '../types';

export class SolutionsAPI {
  static async getSolutions(kataId: string): Promise<SolutionInterface[]> {
    const response = await fetch(`${API_URL}/kata/${kataId}/solutions`);
    const data = await response.json();
    return data;
  }

  static async addSolution(
    kataId: string,
    solution: { username: string; solution: string }
  ): Promise<SolutionInterface> {
    const response = await fetch(`${API_URL}/kata/${kataId}/solutions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(solution),
    });
    const data = await response.json();
    return data;
  }

  static async updateSolution(
    kataId: string,
    solutionId: string,
    updates: { cleverVotes?: number; bestPracticesVotes?: number }
  ): Promise<{ status: string } | { error: string }> {
    if (!Object.keys(updates).length) return { error: 'No params to update' };
    const response = await fetch(`${API_URL}/kata/${kataId}/solutions/${solutionId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updates),
    });
    const data = await response.json();
    return data;
  }
}