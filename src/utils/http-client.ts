import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const defaultConfiguration: AxiosRequestConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
};
const axiosInstance: AxiosInstance = axios.create(defaultConfiguration);


const _get = <T>(url: string, queryParams?: unknown): Promise<AxiosResponse<T>> => {
  return axiosInstance.get<T>(url, { params: queryParams });
};

const _post = <T>(url: string, body: unknown, queryParams?: unknown): Promise<AxiosResponse<T>> => {
  return axiosInstance.post<T>(url, body, { params: queryParams });
};

const _put = <T>(url: string, body: unknown, queryParams?: unknown): Promise<AxiosResponse<T>> => {
  return axiosInstance.put<T>(url, body, { params: queryParams });
};

const _patch = <T>(url: string, body: unknown, queryParams?: unknown): Promise<AxiosResponse<T>> => {
  return axiosInstance.patch<T>(url, body, { params: queryParams });
};

const _delete = <T>(url: string, id: number): Promise<AxiosResponse<T>> => {
  return axiosInstance.delete(`${url}/${id}`);
};

export const httpClient = { get: _get, post: _post, put: _put, patch: _patch, delete: _delete };
