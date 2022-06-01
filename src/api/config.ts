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
    "app-id": process.env.REACT_APP_API_APP_ID || ""
  }
});
