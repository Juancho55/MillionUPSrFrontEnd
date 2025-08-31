import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7121/api",
});

export const getProperties = async () => {
    const {data} = await api.get("Property");
    return data;
}

export const getPropertyById = async (id: string) => {
    const {data} = await api.get(`Property/${id}`);
    return data;
}
