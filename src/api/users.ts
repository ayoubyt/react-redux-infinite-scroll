import { baseAxios, Response } from "./config";

const BASE_PATH = "/user";

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

type UsersResp = Response<User>;

export const getUsers = async (
  page: number,
  limit: number
): Promise<UsersResp> => {
  const { data } = await baseAxios.get(
    `${BASE_PATH}?page=${page}&limit=${limit}`
  );
  return data;
};

export const deleteUser = async (id: string) => {
  const { data } = await baseAxios.delete(`${BASE_PATH}/${id}`);
  return data;
};

export const getUser = async (id: string) => {
  const { data } = await baseAxios.get(`${BASE_PATH}/${id}`);
  return data;
};
