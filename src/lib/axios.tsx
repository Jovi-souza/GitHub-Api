import axios from "axios";

export const UsersApi = axios.create({
  baseURL: 'https://api.github.com/users',
})

export const SearchApi = axios.create({
  baseURL: 'https://api.github.com/search',
})