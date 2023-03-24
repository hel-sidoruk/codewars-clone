import { authHost } from '.';
import { NotificationInterface } from '../types/notifications';

const URL = `/notifications`;

export class NotificationsAPI {
  static async getAll(): Promise<NotificationInterface[]> {
    const { data } = await authHost.get(URL);
    return data;
  }

  static async create(text: string): Promise<NotificationInterface> {
    const { data } = await authHost.post(URL, { text });
    return data;
  }

  static async delete(id: string): Promise<{ status: 'ok' }> {
    const { data } = await authHost.delete(`${URL}/${id}`);
    return data;
  }
}
