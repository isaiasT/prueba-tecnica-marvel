import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public';
const PUBLIC_API_KEY = 'd944f98212672822a0172659f65fdf70';

export interface HttpClient {
    get<T>(url: string, params?: Record<string, unknown>): Promise<T>;
}

export const createHttpClient = (): HttpClient => {
    const axiosInstance: AxiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const get = async <T>(url: string, params?: Record<string, unknown>): Promise<T> => {
        const response: AxiosResponse<T> = await axiosInstance.get(url, {
            params: { ...params, apikey: PUBLIC_API_KEY },
        });
        return response.data;
    };

    return {
        get,
    };
};
