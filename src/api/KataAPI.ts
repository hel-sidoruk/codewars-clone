import { API_URL } from '.';
import { KataInterface } from '../types/kata';

export class KataAPI {
  static async getAll(
    page: number,
    query: string
  ): Promise<{ rows?: KataInterface[]; count: number; message?: string }> {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { message: 'No token found', count: 0 };
    const response = await fetch(`${API_URL}/kata?page=${page}&${query}`, {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const data = await response.json();
    return data;
  }

  static async getSimilar(limit: number, tags: string) {
    const response = await fetch(`${API_URL}/kata/similar?limit=${limit}&tags=${tags}`);
    const data = await response.json();
    return data;
  }

  static async getOne(id: string): Promise<KataInterface> {
    const response = await fetch(`${API_URL}/kata/${id}`);
    const data = await response.json();
    return data;
  }

  static async create(kata: KataInterface): Promise<KataInterface> {
    const response = await fetch(`${API_URL}/kata/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kata),
    });
    const data = await response.json();
    return data;
  }
}
