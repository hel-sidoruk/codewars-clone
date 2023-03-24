import { host } from '.';
import { UserInterface } from '../types/user';

const URL = '/user';

export class UsersAPI {
  static async getAll(): Promise<UserInterface[]> {
    const { data } = await host.get(URL);
    return data;
  }

  static async getOne(id: string): Promise<UserInterface> {
    const { data } = await host.get(`${URL}/${id}`);
    return data;
  }

  static async create(user: UserInterface): Promise<UserInterface> {
    const { data } = await host.post(`${URL}`, user);
    return data;
  }

  static async update(
    id: string,
    updates: Partial<Omit<UserInterface, 'id' | 'username'>>
  ): Promise<{ status?: 'ok' }> {
    const { data } = await host.patch(`${URL}/${id}`, updates);
    return { status: data.status };
  }
}
