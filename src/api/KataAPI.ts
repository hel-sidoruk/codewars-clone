import { authHost, host } from '.';
import { KataInterface } from '../types/kata';

export class KataAPI {
  static async getAll(
    page: number,
    query: string
  ): Promise<{ rows: KataInterface[]; count: number }> {
    const { data } = await authHost.get(`/kata?page=${page}${query ? `&${query}` : ''}`);
    return data;
  }

  static async getRandom(limit: number, tags?: string) {
    const { data } = await host.get(`/kata/random?limit=${limit}${tags ? `&tags=${tags}` : ''}`);
    return data;
  }

  static async getRandomId() {
    const { data } = await host.get('/kata/random?limit=1&id_only=true');
    return data[0].id;
  }

  static async getOne(id: string): Promise<KataInterface> {
    const { data } = await host.get(`/kata/${id}`);
    return data;
  }

  static async create(kata: KataInterface): Promise<KataInterface> {
    const { data } = await host.post('/kata', kata);
    return data;
  }
}
