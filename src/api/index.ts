export * from './CommentsAPI';
export * from './KataAPI';
export * from './UsersAPI';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const API_URL = 'https://rss-backend.softgroupsolution.us:5010/api';
export const AUTH_URL = 'https://rss-backend.softgroupsolution.us:5010/api/auth';

export const host = axios.create({
  baseURL: API_URL,
});

export const authHost = axios.create({
  baseURL: API_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);
