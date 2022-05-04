import axios from "axios";

export interface Response<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}

export const baseAxios = axios.create({
  baseURL: "https://dummyapi.io/data/v1",
  headers: {
    "app-id": "62066a2f508e80d232ca6a72"
  }
});
