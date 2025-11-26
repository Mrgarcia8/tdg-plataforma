import axios from "axios";

const API = "http://localhost:4000/api/users";

export const getUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createUser = async (user) => {
  const res = await axios.post(API, user);
  return res.data;
};

export const updateUser = async (id, user) => {
  const res = await axios.put(`${API}/${id}`, user);
  return res.data;
};

export const deleteUserById = async (id) => {
  const res = await axios.delete(`${API}/${id}`);
  return res.data;
};
