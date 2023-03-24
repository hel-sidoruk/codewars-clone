import jwt_decode from 'jwt-decode';
import { AUTH_URL } from '.';

type ApiResponse = Promise<{ username?: string; error?: string }>;

export class AuthAPI {
  static async registration(user: { username: string; password: string }): ApiResponse {
    const data = await fetch(`${AUTH_URL}/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async login(user: { username: string; password: string }): ApiResponse {
    const data = await fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async githubRegistration(code: string): ApiResponse {
    const url = `${AUTH_URL}/github-registration`;
    const data = await fetch(`${url}?code=${code}&option=registration`);
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async githubLogin(code: string): ApiResponse {
    const url = `${AUTH_URL}/github-login`;
    const data = await fetch(`${url}?code=${code}&option=login`);
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }

  static async check(): ApiResponse {
    const savedToken = localStorage.getItem('token');
    if (!savedToken) return { error: 'No token found' };
    const data = await fetch(`${AUTH_URL}/check`, {
      headers: { Authorization: `Bearer ${savedToken}` },
    });
    const { token, message } = await data.json();
    if (!token) return { error: message };
    localStorage.setItem('token', token);
    return jwt_decode(token);
  }
}
