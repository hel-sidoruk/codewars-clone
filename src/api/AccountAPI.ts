import { authHost } from '.';
import { AccountInfo, AccountInterface } from '../types/account';

const URL = '/account';
export class AccountAPI {
  static async getInfo(): Promise<AccountInterface> {
    const { data } = await authHost.get(URL);
    return data;
  }

  static async delete(): Promise<{ status: string }> {
    const { data } = await authHost.delete(URL);
    return data;
  }

  static async editInfo(info: FormData): Promise<AccountInfo> {
    const { data } = await authHost.patch(`${URL}/edit`, info, {
      headers: {
        'Content-type': 'multipart/form-data',
      },
    });
    return data;
  }

  static async addTrainedKata(kataId: string): Promise<{ status: string }> {
    const { data } = await authHost.patch(`${URL}/trained`, { kataId });
    return data;
  }

  static async addSolvedKata(kataId: string): Promise<{ status: string }> {
    const { data } = await authHost.patch(`${URL}/solved`, { kataId });
    return data;
  }

  static async addForfeitedKata(kataId: string): Promise<{ status: string }> {
    const { data } = await authHost.patch(`${URL}/forfeited`, { kataId });
    return data;
  }

  static async addStarredKata(kataId: string, stars: number): Promise<{ status: string }> {
    const { data } = await authHost.patch(`${URL}/starred`, { kataId, stars });
    return data;
  }
}
